import img from "../assets/FarmerProfile.png";

function FarmerDetails() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl mr-190 font-bold">Farmer Profile</h1>
      </div>
      <div className=" flex ml-73 mt-10">
        <img src={img} alt="" />
        <div>
          <h1 className="text-2xl  font-bold">Sophia Bennett</h1>
          <p>Willow Creek Farms</p>
          <p>
            Sophia is a third-generation farmer dedicated to sustainable
            agriculture and providing the freshest <br /> produce{" "}
          </p>
        </div>
      </div>
      <p className="w-210 ml-78">
        At Willow Creet Farms, we believe in natural farming practices that
        respect the environment and produce the highest quality crops.Our
        carrots are grown without synthetic pesticides or fertilizers, ensuring
        they are both delicious and healthy
      </p>
    </div>
  );
}
export default FarmerDetails;
