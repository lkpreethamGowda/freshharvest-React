//shadow-md for the tabel shadow

function OrderHistory() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl mr-190 font-bold">Order History</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto bg-white  rounded-lg w-240 border mt-10 border-[#DEE5DB]">
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
                <th className="px-6 py-4 text-left text-sm font-semibold ">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#DEE5DB]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  July 20, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Order #12345
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Organic Apples, Carrots
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  $35.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                    Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default OrderHistory;
