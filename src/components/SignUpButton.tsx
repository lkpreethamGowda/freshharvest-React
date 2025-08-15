import { useNavigate } from "react-router-dom";

function SignUpButton() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <button
        onClick={handleSignUp}
        className="bg-[#F2F5F0] rounded-lg w-[85px] h-[40px] text-black-200"
      >
        Sing Up
      </button>
    </div>
  );
}

export default SignUpButton;
