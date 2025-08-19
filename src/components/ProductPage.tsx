import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductPage from "./Products";
import FarmerDetails from "./FarmerProfile";
import PricingPage from "./Pricing";
import CustomerReviews from "./Review";
import BadgesPage from "./Badges";

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

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://127.0.0.1:8000/api/products/${id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <ProductPage product={product} />
      <FarmerDetails farmerId={product?.farmer_id ?? null} />
      <PricingPage product={product} />
      <CustomerReviews id={product?.id} />
      <BadgesPage />
    </div>
  );
}

export default ProductDetailsPage;

// {/* <div>
//       {/* Pass product down */}
//       <ProductPage product={product} />
//       <FarmerDetails farmerId={product?.farmer_id ?? null} />
//       <PricingPage product={product} />
//       <CustomerReviews productId={product?.id ?? null} />
//       <BadgesPage product={product} />
//     </div> */}
