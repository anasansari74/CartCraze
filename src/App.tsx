import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useAuthStore } from './store/authStore';
import { Navigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import  Header  from './components/Header';
import  Cart   from './pages/Cart'
import  Home  from './pages/Home'
import  Login  from './pages/Login'
import DevFooter from './components/DevFooter';

function App() {

  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <div className="grid grid-rows-[auto_1fr] min-h-screen">
        <Header />
        <main className="row-start-2"> {/* Starts immediately after header */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route 
              path="/cart" 
              element={user ? <Cart /> : <Navigate to="/login" replace />} 
            />
          </Routes>
        </main>
        <DevFooter />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App
