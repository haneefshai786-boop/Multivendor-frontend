// src/App.jsx
import React, { useEffect, useState } from "react";
import API from "./api/api";

const App = () => {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/api/vendors")
      .then((res) => setVendors(res.data))
      .catch((err) => {
        console.error("❌ Error fetching vendors:", err);
        setError("Error fetching vendors data");
      });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-4">
        Multivendor Frontend Connected ✅
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {vendors.length > 0 ? (
        <ul className="space-y-2">
          {vendors.map((vendor, i) => (
            <li
              key={i}
              className="p-3 bg-gray-100 rounded-lg shadow text-center"
            >
              {vendor.name || `Vendor ${i + 1}`}
            </li>
          ))}
        </ul>
      ) : (
        !error && <p className="text-center text-gray-500">Loading vendors...</p>
      )}
    </div>
  );
};

export default App;
