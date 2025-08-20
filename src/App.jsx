// additional packages
import { Routes, Route } from "react-router"

// pages
import Home from "./pages/Home.jsx"
import View from "./pages/View.jsx"
import Edit from "./pages/Edit.jsx"
import Create from "./pages/Create.jsx"

// components
import Navbar from "./components/Navbar.jsx"




function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <Navbar />
      <Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/view" element={<View/>}/>
	<Route path="/edit" element={<Edit/>}/>
	<Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App
