// import { useState } from "react";
// import SearchBar from "../components/SearchBar";
// import Filters from "../components/Filters";
// import ProductList from "../components/ProductList";
// import { searchProducts } from "../services/api";

// const Home = () => {
//   const [q, setQ] = useState("");
//   const [category, setCategory] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");

//   const handleSearch = async () => {
//     setError("");

//     if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
//       setError("Invalid price range");
//       return;
//     }

//     try {
//       const result = await searchProducts({
//         q,
//         category,
//         minPrice,
//         maxPrice,
//       });
//       setData(result);
//     } catch {
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6">

//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Inventory Search 🔍
//         </h1>

//         {/* Search */}
//         <SearchBar q={q} setQ={setQ} />

//         {/* Filters */}
//         <Filters
//           category={category}
//           setCategory={setCategory}
//           minPrice={minPrice}
//           setMinPrice={setMinPrice}
//           maxPrice={maxPrice}
//           setMaxPrice={setMaxPrice}
//         />

//         {/* Button */}
//         <button
//           onClick={handleSearch}
//           className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-200"
//         >
//           Search
//         </button>

//         {/* Error */}
//         {error && (
//           <p className="text-red-500 text-center mt-3">{error}</p>
//         )}

//         {/* Results */}
//         <ProductList data={data} />
//       </div>
//     </div>
//   );
// };

// export default Home;




import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { searchProducts } from "../services/api";

const Home = () => {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(timer);
  }, [q, category, minPrice, maxPrice]);

  const fetchData = async () => {
    setError("");

    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
      setError("Invalid price range");
      return;
    }

    try {
      const result = await searchProducts({
        q,
        category,
        minPrice,
        maxPrice,
      });
      setData(result);
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-4">
          Inventory Search 🔍
        </h1>

        <SearchBar q={q} setQ={setQ} />

        <Filters
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        
        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}

        <ProductList data={data} />
      </div>
    </div>
  );
};

export default Home;