import img1 from "../assets/CartImage.png";
import img2 from "../assets/AddImage.png";
import img3 from "../assets/SubImage.png";
import img4 from "../assets/DeleteImage.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  product_name: string;
  pricing: number;
  image?: string;
}

interface CartItem {
  id: number;
  cart_id: number;
  product_id: number;
  count: number;
  product?: Product;
}

function CartPage() {
  const [coupon, setCoupon] = useState("Zero");
  const [discount, setDiscount] = useState(0);
  const location = useLocation();
  const [discountId, setDiscountId] = useState(0);
  const { cartId } = (location.state as { cartId?: number }) || {};
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const MoveToShop = () => navigate("/Shops");

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found. Please log in again.");
      if (!cartId) throw new Error("Cart ID missing!");

      const response = await fetch(
        `http://localhost:8000/api/cartItems/?cart_id=${cartId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch cart items");
      const cartData: CartItem[] = await response.json();

      const enrichedItems = await Promise.all(
        cartData.map(async (item) => {
          try {
            const productResponse = await fetch(
              `http://localhost:8000/api/products/${item.product_id}/`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${token}`,
                },
              }
            );
            if (!productResponse.ok)
              throw new Error(`Failed to fetch product ${item.product_id}`);
            const productData: Product = await productResponse.json();
            return { ...item, product: productData };
          } catch (err) {
            console.error(err);
            return item;
          }
        })
      );

      setCartItems(enrichedItems);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (cartId) fetchCartItems();
  }, [cartId]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product?.pricing ?? 0) * item.count,
    0
  );

  const applyCoupon = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:8000/api/discounts/${coupon}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await response.json();
    const discountValue = Number(data.percentage);
    const discountId = data.id;
    setDiscountId(discountId);
    setDiscount(!isNaN(discountValue) ? discountValue : 0);
  };
  applyCoupon();
  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in");
      return;
    }
    if (cartItems.length === 0) {
      setError("Cart is empty");
      return;
    }

    const estimatedTime = new Date();
    estimatedTime.setDate(estimatedTime.getDate() + 3);
    const formattedEstimatedTime = estimatedTime.toISOString().split("T")[0];

    const orderPayload = {
      user_id: 1,
      address: "123 Orchard Lane, Springfield, IL",
      amount: subtotal + 50 - (subtotal * discount) / 100,
      status: "Processing",
      discount_id: discountId,
      estimated_time: formattedEstimatedTime,
      items: cartItems.map((item) => ({
        product_id: item.product_id,
        quantity: item.count,
      })),
    };

    try {
      const response = await fetch("http://localhost:8000/api/addorders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(JSON.stringify(errData));
      }

      if (cartId) {
        await fetch(`http://localhost:8000/api/clearCart/${cartId}/`, {
          method: "DELETE",
          headers: { Authorization: `Token ${token}` },
        });
      }

      navigate("/Orders", {
        state: {
          itemsPurchased: cartItems.map(
            (item) =>
              item.product?.product_name || `Product #${item.product_id}`
          ),
          totalAmount: subtotal + 50 - (subtotal * discount) / 100,
        },
      });
    } catch (err: any) {
      console.error("Failed ", err);
      setError("Failed to place order. Try again.");
    }
  };

  const updateItemQuantity = async (itemId: number, newCount: number) => {
    const token = localStorage.getItem("token");
    const endpoint =
      newCount > cartItems.find((item) => item.id === itemId)!.count
        ? `increment`
        : `decrement`;

    try {
      const response = await fetch(
        `http://localhost:8000/api/cartItems/${itemId}/${endpoint}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.ok) {
        if (response.status === 204) {
          setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
          );
        } else {
          const updatedItem = await response.json();
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === itemId ? { ...item, count: updatedItem.count } : item
            )
          );
        }
      } else {
        throw new Error("Failed to update item quantity");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  const DeleteItem = async (itemId: number) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/deleteCartItems/${itemId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response.ok) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id != itemId)
        );
      } else {
        console.error("Failed to delete item", await response.text());
      }
    } catch (err) {
      console.log("Error has accured while deleting the cartItem ", err);
    }
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center mt-10 gap-2"
          >
            <div className="flex items-center mr-110">
              <img
                src={item.product?.image || img1}
                alt={item.product?.product_name || "Product"}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4">
                <p>
                  {item.product?.product_name || `Product #${item.product_id}`}
                </p>
                <p className="text-[#708763]">
                  ₹{item.product?.pricing ?? "N/A"}
                </p>
              </div>
            </div>
            <img
              src={img2}
              alt="Add"
              className="cursor-pointer"
              onClick={() => updateItemQuantity(item.id, item.count + 1)}
            />
            <p>{item.count}</p>
            <img
              src={img3}
              alt="Subtract"
              className="cursor-pointer"
              onClick={() => updateItemQuantity(item.id, item.count - 1)}
            />
            <img
              src={img4}
              alt="Delete"
              className="cursor-pointer w-6 h-6"
              onClick={() => {
                DeleteItem(item.id);
              }}
            />
          </div>
        ))
      ) : (
        <p className="text-center mt-10 text-gray-500">
          {error || "Your cart is empty."}
        </p>
      )}

      <div className="ml-98 mt-2">
        <h1 className="text-1xl font-bold mt-14">Apply Discount Code</h1>
        <input
          className="border-[#DEE5DB] shadow rounded-lg px-3 py-2 mt-4 w-100 h-12"
          type="text"
          placeholder="Enter discount code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <div>
          <button
            className="rounded-lg bg-[#F2F5F0] w-20 h-8 text-[#121712] font-semibold mt-6 "
            onClick={applyCoupon}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-1">
        <h1 className="text-1xl mr-155 font-bold mt-14">Order Summary</h1>
      </div>
      <div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Subtotal</p>
          <p>₹{subtotal}</p>
        </div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Delivery</p>
          <p>₹50.00</p>
        </div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Discount</p>
          <p>{discount}%</p>
        </div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Total</p>
          <p className="ml-7">
            ₹{subtotal + 50 - (subtotal * (Number(discount) || 0)) / 100}
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={handleCheckout}
          className="bg-[#4AB814] rounded-lg w-100 h-[40px] text-black-200 mt-8 ml-98"
        >
          Proceed to Checkout
        </button>
      </div>
      <div className="ml-180 mt-8">
        <button
          onClick={MoveToShop}
          className="bg-[#F2F5F0] rounded-lg w-40 h-[40px] text-black-200"
        >
          Continue Shopping
        </button>
      </div>

      {error && <p className="text-red-500 mt-6 text-center">{error}</p>}
    </div>
  );
}

export default CartPage;
