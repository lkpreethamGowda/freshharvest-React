import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const HandleMessagePage = () => {
    navigate("/Messages");
  };
  return (
    <div className="flex w-full h-full items-center justify-center mb-10">
      <div className=" m-5 h-120 w-1/2 ">
        <div className=" p-10 h-20 w-full">
          <h1 className="text-4xl font-bold text-center">
            Sign up for FreshHarvest
          </h1>
        </div>
        <div className="pt-10 pb-2 px-10   w-full ">
          <div className="p-2   ">
            <input
              type="text"
              placeholder="Full name"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-15 p-4 "
            />
          </div>
        </div>
        <div className="w-full ">
          <div className=" pb-2 pl-2 ">
            <input
              type="text"
              placeholder="Email or phone number"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-25 p-4"
            />
          </div>
        </div>
        <div className="w-full pt-1">
          <div className="p-2   ">
            <input
              type="text"
              placeholder="Password"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-25 p-4"
            />
          </div>
        </div>
        <div className="w-full pt-1">
          <div className="p-2   ">
            <input
              type="text"
              placeholder="Location (optional)"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0] 
               h-15 w-130 rounded-lg ml-25 p-4"
            />
          </div>
        </div>

        <div className="w-full pt-6">
          <button
            onClick={HandleMessagePage}
            className="bg-[#4AB814] rounded-lg w-150 h-14 text-black-200 ml-18"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
//border-[#DEE5DB]
