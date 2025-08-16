import img1 from "../assets/ProductImg1.png";
import img2 from "../assets/ProductImg2.png";
import img3 from "../assets/ProductImg3.png";

function ProductPage() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl mr-190 font-bold">Product Details</h1>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <img src={img1} alt="Product Image" className="object-contain" />
        <img src={img2} alt="Product Image" className="object-contain" />
        <img src={img3} alt="Product Image" className="object-contain" />
      </div>
      <div className="inline-block mt-8">
        <h1 className="text-2xl ml-73 font-bold">Organic Carrots</h1>

        <p className="ml-73 mt-5">Rs. 40 per Kilogram</p>
      </div>
      <div className=" flex mt-8 ml-73 gap-30">
        <div>
          <p className="text-gray-700">Harvest Date</p>
          <p>July 20,2024</p>
        </div>
        <div>
          <p className="text-gray-700">Farm Location</p>
          <p>Mandya, Karnataka</p>
        </div>
      </div>
      <div className="ml-73 mt-10">
        <p className="text-gray-700">Organic/Natural Labels</p>
        <p>Certified Organic</p>
      </div>
    </div>
  );
}

export default ProductPage;
