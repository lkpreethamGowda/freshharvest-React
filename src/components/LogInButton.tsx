import { useNavigate } from "react-router-dom";

function LogInButton() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/logins");
  };

  return (
    <button
      onClick={handleLogIn}
      className="bg-[#4AB814] rounded-lg w-[85px] h-[40px] text-black-200"
    >
      Log In
    </button>
  );
}

export default LogInButton;
