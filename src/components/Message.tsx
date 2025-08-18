import { useNavigate } from "react-router-dom";

function Message() {
  const naviagte = useNavigate();
  const ShopPage = () => {
    naviagte("/Shops");
  };
  const Username = "Sarah";
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className=" m-5 h-120 w-1/2 ">
        <div className=" p-10 h-20 w-full">
          <h1 className="text-4xl font-bold text-center">
            Welcome {Username}!
          </h1>
        </div>
        <p className="p-5">
          Your account has been successfully created. Your're now ready to
          explore our farm-fresh produce.
        </p>

        <button
          onClick={ShopPage}
          className="bg-[#4AB814] rounded-lg w-30 h-[40px] text-black-100 ml-80"
        >
          Go to Shop
        </button>
      </div>
    </div>
  );
}
export default Message;
