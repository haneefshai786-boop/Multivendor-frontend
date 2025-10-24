import React, { useEffect, useState } from "react";
import API from "./api/api"; // 👈 adjust path if needed (e.g. "../api/api")

const App = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // Fetch vendors from your Render backend
    API.get("/api/vendors")
      .then((res) => {
        console.log("✅ Vendors fetched:", res.data);
        setVendors(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching vendors:", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛍 Vendor List</h1>

      {vendors.length > 0 ? (
        <ul className="space-y-2">
          {vendors.map((vendor, index) => (
            <li
              key={index}
              className="p-2 border rounded bg-gray-100 shadow-sm"
            >
              <strong>{vendor.name}</strong> — {vendor.category}
            </li>
          ))}
        </ul>
      ) : (
        <p>No vendors found.</p>
      )}
    </div>
  );
};

export default App;
