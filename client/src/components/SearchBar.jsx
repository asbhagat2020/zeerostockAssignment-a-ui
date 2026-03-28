const SearchBar = ({ q, setQ }) => {
  return (
    <input
      className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Search product..."
      value={q}
      onChange={(e) => setQ(e.target.value)}
    />
  );
};

export default SearchBar;