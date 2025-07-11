import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold">CartCraze</h1>
        </Link>
        
        <div className="flex gap-4">
          {user ? (
            <>
              <Link to="/cart" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Cart
              </Link>
              <Link 
                to="/orders" 
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                Orders
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}