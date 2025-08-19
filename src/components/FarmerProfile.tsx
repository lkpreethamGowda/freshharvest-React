import img from "../assets/FarmerProfile.png";

import { useEffect, useState } from "react";

interface Farmer {
  id: number;
  name: string;
  location: string;
  description: string;
  comment: string;
}

function FarmerDetails({ farmerId }: { farmerId: number | null }) {
  if (!farmerId)
    return <p className="my-6 ">No farmer Linked to this product</p>;

  const [farmer, setFarmer] = useState<Farmer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://127.0.0.1:8000/api/farmers/${farmerId}/`,
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
        setFarmer(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [farmerId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl mr-190 font-bold">Farmer Profile</h1>
      </div>
      <div className=" flex ml-73 mt-10">
        <img src={img} alt="" />
        <div>
          <h1 className="text-2xl  font-bold">{farmer?.name}</h1>
          <p>{farmer?.location}</p>
          <p>{farmer?.description}</p>
        </div>
      </div>
      <p className="w-210 ml-78">{farmer?.comment}</p>
    </div>
  );
}
export default FarmerDetails;
