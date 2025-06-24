
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Home/Footer'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
