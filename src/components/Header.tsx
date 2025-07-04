import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container max-w-6xl mx-auto flex justify-between items-center p-4 border-b border-gray-200"> {/* Moved border here */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold">CartCraze</h1>
        </Link>
        <div className="flex gap-4">
          <Link to="/Cart" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cart
          </Link>
          <Link to="Login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Sign In
          </Link> 
        </div>
      </div>
    </header>
  );
}