import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  product_name: string;
  image: string;
  harversted_date: string;
  location: string;
  label: string;
  pricing: number;
  delevery: string;
  type: string;
  farmer_id: number;
}

function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8000/api/products/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Token ${token}` : "",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products (maybe unauthorized)");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log("Products fetched:", data);
      })
      .catch((err) => {
        console.error("error fetching products:", err);
      });
  }, []);

  const handleSearchChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log("Search ", event.target.value);
  };

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

  const fetchFilteredProducts = () => {
    const token = localStorage.getItem("token");

    const params = new URLSearchParams();
    if (searchTerm) params.append("product_name", searchTerm);
    if (selectedCategory) params.append("label", selectedCategory);
    if (selectedType) params.append("type", selectedType);

    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-").map(Number);
      params.append("min_price", min.toString());
      params.append("max_price", max.toString());
    }

    fetch(`http://127.0.0.1:8000/api/searchProducts/?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Token ${token}` : "",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log("Filtered products:", data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchFilteredProducts();
  }, [selectedCategory, selectedType, selectedPrice, searchTerm]);

  return (
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
              value={searchTerm}
              onChange={handleSearchChanges}
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
                <option value="Organic">Oragnic</option>
                <option value="GMO">GMO</option>
                <option value="Pesticides">Pesticide</option>
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
                <option value="0-100">0-100</option>
                <option value="100-500">100-500</option>
                <option value="500-1000">500-1000</option>
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
                  <option value="Fruit">Fruits</option>
                  <option value="Vegetable">Vegetables</option>
                  <option value="Dairy">Dairy</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-warp -m-1.5 max-w-[940px]">
            {products.length > 0 ? (
              products.map((products) => (
                <Link to={`/products/${products.id}`} key={products.id}>
                  <div
                    key={products.id}
                    className="w-44 overflow-hidden rounded-lg bg-white shadow-md m-1.5"
                  >
                    <img
                      src={products.image}
                      alt={products.product_name}
                      className="h-44 w-full object-cover"
                    />
                    <div className="h-[69px] p-4 flex flex-col">
                      <h4 className="text-lg font-semibold text-gray-800 tracking-tight whitespace-nowrap">
                        {products.product_name}
                      </h4>
                      <h5 className="text-gray-400 tracking-tight">
                        {products.location}
                      </h5>
                      <p className="text-green-400 font-medium">
                        ${products.pricing}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
