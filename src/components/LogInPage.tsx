import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogInPage() {
  const navigate = useNavigate();

  interface AuthResponse {
    token: string;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth-token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Invalid credentilas");
      }
      const data: AuthResponse = await response.json();
      localStorage.setItem("token", data.token);

      navigate("/Messages");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("somthings went wrong");
      }
    }
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className=" m-5 h-120 w-1/2 ">
        <div className=" p-10 h-20 w-full">
          <h1 className="text-4xl font-bold text-center">Welcome back</h1>
        </div>
        <div className="pt-10 pb-5 px-10   w-full ">
          <label className="ml-17">Username</label>
          <div className="p-2   ">
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              placeholder="Enter your Username"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212]
               h-15 w-130 rounded-lg ml-15 p-4"
            />
          </div>
        </div>
        <div className="w-full pt-1">
          <label className="ml-27">Password</label>
          <div className="p-2   ">
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              className=" border-2 border-[#DEE5DB] focus:border-[#131212]
               h-15 w-130 rounded-lg ml-25 p-4"
            />
          </div>
        </div>
        <div className="w-full pt-2">
          <p className="ml-20 text-red-500">{error}</p>
        </div>

        <div className="w-full pt-1">
          <p className="ml-20 text-[#adabab]">Forgot password?</p>
        </div>
        <div className="w-full pt-6">
          <button
            onClick={handleLogin}
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
