import Apple from "../assets/Apple.png";
import Carrot from "../assets/carrot.png";
import Cheese from "../assets/Cheese.png";
import Eggs from "../assets/Eggs.png";
import Honey from "../assets/Honey.png";
import { useState } from "react";
import React from "react";

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    console.log("User selected:", event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
    console.log("User selected:", event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
    console.log("User selected:", event.target.value);
  };

  return (
    <body>
      <div className="flex justify-center items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="relative mt-5 block w-full">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="search"
                placeholder="Search for products or farms"
                className="block h-10 w-full rounded-lg bg-gray-200 py-1 pl-10 pr-3"
              />
            </div>

            <div className="flex justify-start w-200 gap-4 mr-50">
              <div className="mt-4">
                <label htmlFor="category-select" className="sr-only">
                  Choose a category
                </label>
                <select
                  id="category-select"
                  className="block h-10 w-full rounded-lg bg-gray-200 py-1 pl-3 pr-3"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  <option value="fruits">Oragnic</option>
                  <option value="vegetables">GMO</option>
                  <option value="dairy">Pesticide</option>
                </select>
              </div>

              <div className=" mt-4 ">
                <label htmlFor="category-select" className="sr-only">
                  Choose a price range
                </label>
                <select
                  id="category-select"
                  className="block h-10 w-full rounded-lg bg-gray-200 py-1 pl-3 pr-3"
                  value={selectedPrice}
                  onChange={handlePriceChange}
                >
                  <option value="">Price Range</option>
                  <option value="fruits">0-100</option>
                  <option value="vegetables">100-500</option>
                  <option value="dairy">500-1000</option>
                </select>
              </div>

              <div>
                <div className="mt-4">
                  <label htmlFor="category-select" className="sr-only">
                    Choose a product type
                  </label>
                  <select
                    id="category-select"
                    className="block h-10 w-full rounded-lg bg-gray-200 py-1 pl-3 pr-3"
                    value={selectedType}
                    onChange={handleTypeChange}
                  >
                    <option value="">Product Type</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="dairy">Dairy</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex flex-wrap -m-1.5 max-w-[940px]">
              <div className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5">
                <img
                  src={Apple}
                  alt="Product Name"
                  className="h-44 w-full object-cover"
                />
                <div className="h-[69px] p-4 flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 tracking-tight">
                    Organic Apples
                  </h4>
                  <h5 className="text-gray-400 size tracking-tight">
                    Green Valley Farms
                  </h5>
                </div>
              </div>

              <div className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5">
                <img
                  src={Carrot}
                  alt="Product Name"
                  className="h-44 w-full object-cover"
                />
                <div className="h-[69px] p-4 flex  flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 tracking-tight">
                    Fresh Carrots
                  </h4>
                  <h5 className="text-gray-400 tracking-tight">
                    Harvest Ridge
                  </h5>
                </div>
              </div>

              <div className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5">
                <img
                  src={Eggs}
                  alt="Product Name"
                  className="h-44 w-full object-cover"
                />
                <div className="h-[69px] p-4 flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 tracking-tight whitespace-nowrap">
                    Free-Range Eggs
                  </h4>
                  <h5 className="text-gray-400 tracking-tight">
                    Sunny Meadows
                  </h5>
                </div>
              </div>

              <div className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5">
                <img
                  src={Honey}
                  alt="Product Name"
                  className="h-44 w-full object-cover"
                />
                <div className="h-[69px] p-4 flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 tracking-tight">
                    Local Honey
                  </h4>
                  <h5 className="text-gray-400 tracking-tight">
                    Golden Apiaries
                  </h5>
                </div>
              </div>

              <div className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5">
                <img
                  src={Honey}
                  alt="Product Name"
                  className="h-44 w-full object-cover"
                />
                <div className="h-[69px] p-4 flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 tracking-tight">
                    New Honey
                  </h4>
                  <h5 className="text-gray-400 tracking-tight whitespace-nowrap">
                    Meadowbrook Ranch
                  </h5>
                </div>
              </div>

              <div className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5">
                <img
                  src={Cheese}
                  alt="Product Name"
                  className="h-44 w-full object-cover"
                />
                <div className="h-[69px] p-4 flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 tracking-tight">
                    Artisan Cheese
                  </h4>
                  <h5 className="text-gray-400 tracking-tight">Alpine Dairy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default ShopPage;
