import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/logins");
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex w-full h-full items-center justify-center mb-10">
      <div className=" m-5 h-120 w-1/2 ">
        <div className=" p-10 h-20 w-full">
          <h1 className="text-4xl font-bold text-center">
            Sign up for FreshHarvest
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="pt-10 pb-2 px-10   w-full ">
            <div className="p-2   ">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-15 p-4 "
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="w-full ">
            <div className=" pb-2 pl-2 ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-25 p-4"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="w-full ">
            <div className=" pb-2 pl-2 ">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-25 p-4"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
          </div>
          <div className="w-full pt-1">
            <div className="p-2   ">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" border-2 border-[#DEE5DB] focus:border-[#131212] bg-[#F2F5f0]
               h-15 w-130 rounded-lg ml-25 p-4"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>

          <div className="w-full pt-6">
            <button
              type="submit"
              className="bg-[#4AB814] rounded-lg w-150 h-14 text-black-200 ml-18"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
