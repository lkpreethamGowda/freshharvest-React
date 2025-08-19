import { useEffect, useState } from "react";

interface Product {
  id: number;
  product_name: string;
}

interface OrderItem {
  id: number;
  quantity: number;
  order_id: number;
  product_id: number;
}

interface Order {
  id: number;
  user_id: number;
  address: string;
  amount: number;
  estimated_time: string;
  status: string;
  discount_id: number;
  items: OrderItem[];
}

interface User {
  id: number;
  username: string;
  email: string;
}

function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [productMap, setProductMap] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authentication token not found. Please log in.");
        }

        const authHeaders = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };

        const userResponse = await fetch(
          "http://localhost:8000/api/currentUser/",
          { headers: authHeaders }
        );
        if (!userResponse.ok) throw new Error("Failed to fetch user data.");
        const currentUser: User = await userResponse.json();

        const [ordersResponse, productsResponse] = await Promise.all([
          fetch(
            `http://localhost:8000/api/orders/?user_id=${currentUser.id - 1}`,
            {
              headers: authHeaders,
            }
          ),
          fetch("http://localhost:8000/api/products/", {
            headers: authHeaders,
          }),
        ]);

        if (!ordersResponse.ok) throw new Error("Failed to fetch orders.");
        if (!productsResponse.ok) throw new Error("Failed to fetch products.");

        const ordersData: Order[] = await ordersResponse.json();
        const productsData: Product[] = await productsResponse.json();

        const newProductMap: { [key: number]: string } = {};
        productsData.forEach((product) => {
          newProductMap[product.id] = product.product_name;
        });

        setOrders(ordersData);
        setProductMap(newProductMap);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading order history...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-8 text-red-600 font-bold">Error: {error}</p>
    );
  }

  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl font-bold">Order History</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto bg-white rounded-lg w-240 border mt-10 border-[#DEE5DB] shadow-md">
          <table className="min-w-full">
            <thead className="border-b border-[#DEE5DB]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Order Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Order Number
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id} className="border-b border-[#DEE5DB]">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(order.estimated_time).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Order #{order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {order.items
                        .map(
                          (item) =>
                            productMap[item.product_id] ||
                            `Product #${item.product_id}`
                        )
                        .join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      ${order.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                          order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">
                    You have no past orders.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
