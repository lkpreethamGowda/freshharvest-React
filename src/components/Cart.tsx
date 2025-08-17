import img1 from "../assets/CartImage.png";
import img2 from "../assets/AddImage.png";
import img3 from "../assets/SubImage.png";

function CartPage() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <p> Cart / Order Summary</p>
        <h1 className="text-2xl mr-200 font-bold mt-14">Your Cart</h1>
      </div>
      <div className="flex items-center justify-center  mt-10 gap-2">
        <div className="flex items-center mr-110">
          <img src={img1} alt="" />
          <div className="ml-4">
            <p>Organic Gala Apples</p>
            <p className="text-[#708763]">$5.99 / lb</p>
          </div>
        </div>
        <img src={img2} alt="" />
        <p>2</p>
        <img src={img3} alt="" />
      </div>
      <div className="ml-98 mt-2">
        <h1 className="text-1xl  font-bold mt-14">Apply Discount Code</h1>
        <input
          className="border-[#DEE5DB] shadow rounded-lg px-3 py-2 mt-4 w-100 h-12"
          type="text"
          placeholder="Enter discount code"
        />
        <div>
          <button className=" rounded-lg bg-[#F2F5F0] w-20 h-8 text-[#121712] font-semibold mt-6">
            Apply
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-1">
        <h1 className="text-1xl mr-155 font-bold mt-14">Order Summary</h1>
      </div>
      <div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Subtotal</p>
          <p>$25.44</p>
        </div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Delivery</p>
          <p>$5.00</p>
        </div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Discount</p>
          <p className="">-$2.50</p>
        </div>
        <div className="flex mt-6 gap-160 ml-98">
          <p className="text-[#708763]">Total</p>
          <p className="ml-7">$27.94</p>
        </div>
      </div>
      <div>
        <button className="bg-[#4AB814] rounded-lg w-100 h-[40px] text-black-200 mt-8 ml-98">
          Proceed to Checkout
        </button>
      </div>
      <div className="ml-180 mt-8">
        <button className="bg-[#F2F5F0] rounded-lg w-40 h-[40px] text-black-200">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartPage;
