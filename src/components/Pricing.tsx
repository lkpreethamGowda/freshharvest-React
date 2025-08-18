import { useNavigate } from "react-router-dom";

function PricingPage() {
  const navigate = useNavigate();

  const MoveToCart = () => {
    navigate("/Carts");
  };

  return (
    <div>
      <div className="inline-block mt-8">
        <h1 className="text-2xl ml-73 font-bold">Pricing & Delivery</h1>
      </div>
      <div className=" flex mt-14 ml-73 gap-30">
        <div>
          <p className="text-gray-700">Price per Kilogram</p>
          <p>Rs. 40</p>
        </div>
        <div>
          <p className="text-gray-700">Estimated Delivery Time</p>
          <p>2-3 business days</p>
        </div>
      </div>
      <div className="ml-73 mt-12">
        <button
          onClick={MoveToCart}
          className="bg-[#4AB814] rounded-lg w-30 h-[40px] text-black-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PricingPage;
