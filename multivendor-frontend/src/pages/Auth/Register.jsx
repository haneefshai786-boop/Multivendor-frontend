import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
