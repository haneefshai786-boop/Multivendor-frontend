// src/App.jsx
import React, { useEffect } from "react";
import API from "./api/api";

const App = () => {
  useEffect(() => {
    API.get("/api/vendors")
      .then(res => console.log("✅ Vendors Data:", res.data))
      .catch(err => console.error("❌ Error fetching vendors:", err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">
        Multivendor Frontend Connected ✅
      </h1>
    </div>
  );
};

export default App;
