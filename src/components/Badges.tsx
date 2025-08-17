import img1 from "../assets/Badge1.png";
import img2 from "../assets/Badge2.png";
import img3 from "../assets/Badge3.png";

function BadgesPage() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl mr-190 font-bold">Trust Badges</h1>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <img src={img1} alt="Product Image" className="object-contain" />
        <img src={img2} alt="Product Image" className="object-contain" />
        <img src={img3} alt="Product Image" className="object-contain" />
      </div>
    </div>
  );
}

export default BadgesPage;
