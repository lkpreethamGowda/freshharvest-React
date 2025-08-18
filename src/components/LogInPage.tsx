import { useNavigate } from "react-router-dom";

function LogInPage() {
  const navigate = useNavigate();
  const handleMessagePage = () => {
    navigate("/Messages");
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className=" m-5 h-120 w-1/2 ">
        <div className=" p-10 h-20 w-full">
          <h1 className="text-4xl font-bold text-center">Welcome back</h1>
        </div>
        <div className="pt-10 pb-5 px-10   w-full ">
          <label className="ml-17">Email or phone number</label>
          <div className="p-2   ">
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212]
               h-15 w-130 rounded-lg ml-15 p-4"
            />
          </div>
        </div>
        <div className="w-full pt-1">
          <label className="ml-27">Email or phone number</label>
          <div className="p-2   ">
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212]
               h-15 w-130 rounded-lg ml-25 p-4"
            />
          </div>
        </div>
        <div className="w-full pt-1">
          <p className="ml-20 text-[#adabab]">Forgot password?</p>
        </div>
        <div className="w-full pt-6">
          <button
            onClick={handleMessagePage}
            className="bg-[#4AB814] rounded-lg w-150 h-14 text-black-200 ml-18"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
//border-[#DEE5DB]
