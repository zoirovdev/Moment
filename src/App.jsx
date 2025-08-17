import { Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"


function App() {
  

  return (
    <div className="">
      <Routes>
	<Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
