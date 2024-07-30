import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/customer/Home.jsx'
import Navbar from './components/customer/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
