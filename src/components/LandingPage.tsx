import HomePageImage from "../assets/HomePageImage.png";
import LogInButton from "./LogInButton";
import SignUpButton from "./SignUpButton";

function LandingPage() {
  return (
    <div className="relative w-10/12 max-w-screen-xl mx-auto pt-10">
      <img
        src={HomePageImage}
        alt="Local farmers market background"
        className="w-full h-[600px] object-cover rounded"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          Connect with Local Farmers
        </h1>
        <p className="mt-4 text-white max-w-2xl">
          Discover fresh, locally-sourced products directly from the farm.
          Support your community and enjoy the taste of freshness.
        </p>

        <div className="mt-8 flex gap-4 pl-90 pt-70">
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
