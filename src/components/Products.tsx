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

function ProductPage({ product }: { product: Product | null }) {
  if (!product) return <p>No product data</p>;

  return (
    <div className="mt-8 px-10">
      <h1 className="text-2xl font-bold mb-6 ml-73">Product Details</h1>

      <div className="flex justify-center gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-center gap-6 mb-2">
            {product.image ? (
              <img
                src={product.image}
                alt="Product"
                className="w-60 h-60 object-cover rounded-lg shadow"
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>
        ))}
      </div>

      <div className="ml-73 mt-20">
        <h2 className="text-xl font-semibold">{product.product_name}</h2>
        <p className="text-lg mt-2">Rs. {product.pricing} per Kilogram</p>

        <div className="flex gap-20 mt-6">
          <div>
            <p className="text-gray-600">Harvest Date</p>
            <p>{product.harversted_date}</p>
          </div>
          <div>
            <p className="text-gray-600">Farm Location</p>
            <p>{product.location}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-600">Organic/Natural Labels</p>
          <p>{product.type}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
