import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/customer/Home.jsx";
import Navbar from "./components/customer/Navbar/Navbar";
import Footer from "./components/customer/Footer/Footer.jsx";
import Product from "./components/customer/Product/Product.jsx";
import ProductDetail from "./components/customer/Product/ProductDetail.jsx";
import Cart from "./components/customer/Cart/Cart.jsx";
import { Checkout } from "./components/customer/Cart/Checkout.jsx";
import Order from "./components/customer/Order/Order.jsx";
import OrderDetail from "./components/customer/Order/OrderDetail.jsx";
import NewNavbar from './components/customer/Navbar/NewNavbar.jsx'

function App() {
  return (
    <>
      <NewNavbar/>
      {/* <Navbar /> */}
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/order" element={<Order />} />
            <Route path="/account/order/:orderId" element={<OrderDetail />} />
            <Route path="/*" element={<div>404 - Page Not Found</div>} />           
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
