import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function OrderPage() {
  const location = useLocation();
  const { itemsPurchased, totalAmount } = location.state || {};
  const navigate = useNavigate();

  const MoveToHistory = () => {
    navigate("/Historys");
  };

  return (
    <div>
      <div className="inline-block mt-8">
        <h1 className="text-2xl ml-150 font-bold mt-6 ">Order Confirmed!</h1>
        <p className="ml-90 mt-4">
          Your order has been successfully placed. You'll receive an email
          confirmation shortly with all the details.
        </p>

        <h1 className="text-2xl ml-73 font-bold mt-8 ">Order Summary</h1>
      </div>
      <div className=" flex mt-10 ml-73 gap-30">
        <div>
          <p className="text-gray-700">Order Number</p>
          <p>#123456789</p>
        </div>
        <div>
          <p className="text-gray-700">Items Purchased</p>
          <p>{itemsPurchased}</p>
        </div>
      </div>
      <div className=" flex mt-10 ml-73 gap-30">
        <div>
          <p className="text-gray-700">Total Amount</p>
          <p>${totalAmount}</p>
        </div>
        <div>
          <p className="text-gray-700">Delivery Address</p>
          <p>123 Orchard Lane, Springfield, IL 62704</p>
        </div>
      </div>
      <div className="ml-73 mt-10">
        <p className="text-gray-700">Estimated Delivery</p>
        <p>June 15, 2024</p>
      </div>
      <div className="mt-8 ml-100">
        <p>
          Thank you for supporting local farmers! We're excited for you to enjoy
          the freshest produce.
        </p>
      </div>
      <div className="mt-8 ml-160">
        <button
          onClick={MoveToHistory}
          className="bg-[#4AB814] rounded-lg w-40 h-[40px] font-bold"
        >
          View Order Details
        </button>
      </div>
      <p className="text-[#708763] ml-120 mt-6">
        For any questions, please contact us at support@freshharvest.com
      </p>
    </div>
  );
}

export default OrderPage;
