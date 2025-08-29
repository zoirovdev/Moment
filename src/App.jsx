// additional packages
import { Routes, Route } from "react-router"

// pages
import Home from "./pages/Home.jsx"
import View from "./pages/View.jsx"
import Edit from "./pages/Edit.jsx"
import Create from "./pages/Create.jsx"
import Search from "./pages/Search.jsx"
import Account from "./pages/Account.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"



// components
import Navbar from "./components/Navbar.jsx"




function App() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />
      <Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/view" element={<View/>}/>
	<Route path="/edit" element={<Edit/>}/>
	<Route path="/create" element={<Create/>}/>
	<Route path="/search" element={<Search/>}/>
	<Route path="/account" element={<Account/>}/>
	<Route path="/sign-up" element={<SignUp/>}/>
	<Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App
