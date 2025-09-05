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
import { AuthProvider } from "./AuthContext.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { ThemeProvider } from './ThemeContext.jsx';



function App() {
  return (
    <ThemeProvider>
    <AuthProvider>
      <div className="min-h-screen bg-[#ffffff] dark:bg-[#343a40]">
        <Navbar />
        <Routes>
	  <Route path="/" element={
	    <ProtectedRoute>
	      <Home/>
	    </ProtectedRoute>
	  }/>
	  <Route path="/view/:id" element={
	    <ProtectedRoute>
	      <View/>
	    </ProtectedRoute>
	  }/>
	  <Route path="/edit/:id" element={
	    <ProtectedRoute>
	      <Edit/>
	    </ProtectedRoute>
	  }/>
	  <Route path="/create" element={
	    <ProtectedRoute>
	      <Create/>
	    </ProtectedRoute>
	  }/>
	  <Route path="/search" element={
            <ProtectedRoute>
	      <Search/>
            </ProtectedRoute>
	  }/>
	  <Route path="/account" element={
            <ProtectedRoute>
	      <Account/>
            </ProtectedRoute>
	  }/>
	  <Route path="/sign-up" element={<SignUp/>}/>
	  <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>
      </div>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App
