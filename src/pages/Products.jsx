import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

