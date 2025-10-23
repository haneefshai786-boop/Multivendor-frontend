import React from "react";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Multivendor</h1>
          <nav>
            <a className="mr-4">Home</a>
            <a className="mr-4">Products</a>
            <a>Cart</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="mb-6">This is a starter multivendor frontend scaffold — expand components as needed.</p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Vendor A</h3>
            <p className="text-sm">Example store</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Vendor B</h3>
            <p className="text-sm">Example store</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Vendor C</h3>
            <p className="text-sm">Example store</p>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t mt-8 p-4 text-center text-sm">© Multivendor</footer>
    </div>
  );
}

