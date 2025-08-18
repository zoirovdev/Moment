import { Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import View from "./pages/View.jsx"
import Navbar from "./components/Navbar.jsx"




function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <Navbar />
      <Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/view" element={<View/>}/>
      </Routes>
    </div>
  )
}

export default App
