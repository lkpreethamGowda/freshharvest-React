import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  harversted_date: string;
  location: string;
  label: string;
  pricing: number;
  delevery: string;
  type: string;
  farmer_id: number;
}

interface User {
  id: number;
  username: string;
  email: string;
}

function PricingPage({ product }: { product: Product | null }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!product)
    return <p className="items-center">No details on the product pricing</p>;
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8000/api/currentUser/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      console.log("2. Fetching current user...");
      console.log(
        "   - User API response status:",
        response.status,
        response.statusText
      );

      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }

      const data = await response.json();
      setUser(data);
    } catch (err: any) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const addToCart = async () => {
    if (!user || !product) return;

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const cartResponse = await fetch(
        `http://localhost:8000/api/carts/?user_id=${user.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      if (!cartResponse.ok) throw new Error("Failed to fetch cart");
      const cartData = await cartResponse.json();

      const cartId = cartData[0].id;

      const body = {
        cart_id: cartId,
        product_id: product.id,
        count: 1,
      };

      const addItemResponse = await fetch(
        `http://localhost:8000/api/cartItems/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(body),
        }
      );
      if (!addItemResponse.ok) throw new Error("Failed  to add item  to cart");
      navigate("/Carts", { state: { cartId } });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <div className="inline-block mt-8">
        <h1 className="text-2xl ml-73 font-bold">Pricing & Delivery</h1>
      </div>
      <div className=" flex mt-14 ml-73 gap-30">
        <div>
          <p className="text-gray-700">Price per Kilogram</p>
          <p>Rs.{product?.pricing}</p>
        </div>
        <div>
          <p className="text-gray-700">Estimated Delivery Time</p>
          <p>{product?.delevery}</p>
        </div>
      </div>
      <div className="ml-73 mt-12">
        <button
          onClick={addToCart}
          className="bg-[#4AB814] rounded-lg w-30 h-[40px] text-black-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PricingPage;
