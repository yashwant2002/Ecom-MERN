import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/customer/Home.jsx'
import Navbar from './components/customer/Navbar/Navbar'
import Footer from './components/customer/Footer/Footer.jsx'
import Product from './components/customer/Product/Product.jsx'
import ProductDetail from './components/customer/Product/ProductDetail.jsx'
// import NewNavbar from './components/customer/Navbar/NewNavbar.jsx'

function App() {

  return (
    <>
      <Navbar/>
      {/* <NewNavbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element = {<Product/>} />
        <Route path='/product-detail' element={<ProductDetail/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
