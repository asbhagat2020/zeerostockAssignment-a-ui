const Filters = ({
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      
      <select
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
      </select>

      <input
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
};

export default Filters;