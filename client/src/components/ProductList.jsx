const ProductList = ({ data }) => {
  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-5">
        No results found
      </p>
    );
  }

  return (
    <div className="mt-5 space-y-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-4 border rounded-xl shadow-sm hover:shadow-md transition"
        >
          <div>
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
          <p className="text-blue-600 font-bold">₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;