import { BrowserRouter, Routes, Route } from 'react-router-dom'

import  Header  from './components/Header';
import  Cart   from './pages/Cart'
import  Home  from './pages/Home'
import  Login  from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-[auto_1fr] min-h-screen">
        <Header />
        <main className="row-start-2"> {/* Starts immediately after header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
