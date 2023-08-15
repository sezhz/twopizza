import { Route, Routes, Navigate } from "react-router-dom";
import Drinks from "./components/Drinks";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import Sidebar from "./components/Sidebar";
import CartProvider from "./components/CartProvider";
import Delivery from "./components/Delivery";
import Contacts from "./components/Contacts";

function App() {
  return (
    <CartProvider>
      <div>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Navigate to="/pizza" />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
