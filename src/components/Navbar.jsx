import { Plus, Search, User } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router"
import { useState } from "react"


const Navbar = () => {
  const [searchVal, setSearchVal] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const page = location.pathname === '/sign-up' || location.pathname === '/sign-in'


  const handleSearch = (e) => {
    if(e.key === "Enter"){
      const params = encodeURIComponent(searchVal.trim())
      navigate(`/search?query=${params}`)
    }
  }

  return (
    <div className="inline-flex space-x-[171px]">
      <Link to="/" className={`${page ? "hidden" : "" } flex justify-center items-center mt-[10px] ml-[70px]`}>
        <p className="font-bold tracking-widest text-2xl ">Nota</p>
      </Link>
      <div className={`${page ? "hidden" : ""} w-[700px] h-[40px] mt-[10px] 
        flex flex-row justify-center items-center px-2 gap-2`}>
	<div className="flex flex-row justify-between items-center gap-1 w-[600px] 
	  rounded-[50px] px-4 py-1 h-full border border-[#ced4da] 
	  hover:text-[#ffffff] focus-within:border-[#08CB00]">
	  <input type="text" placeholder="Search" 
	    className="text-black outline-none w-[95%] pl-2 pr-1"
	    onChange={(e) => setSearchVal(e.target.value)}
	    onKeyDown={(e) => handleSearch(e)}/>
	  <Search className="text-[#212529]"/>
	</div>
	<Link to={"/create"} className="flex flex-row justify-center items-center gap-1
	  rounded-[50px] px-4 py-1 h-full cursor-pointer hover:shadow-xl border 
	  border-[#ced4da] hover:border-[#08CB00] text-[#212529] hover:text-[#ffffff] hover:bg-[#08CB00] ">
	  <p className="font-medium tracking-wider">Create</p>
          <Plus className=""/>
	</Link>
	<Link to={"/account"} className="flex flex-row justify-center items-center gap-1
	  rounded-[50%] px-2 py-1 h-full cursor-pointer hover:shadow-xl border 
	  border-[#ced4da] hover:border-[#08CB00] text-[#212529] hover:text-[#ffffff] hover:bg-[#08CB00] ">
	  <User />
	</Link>
      </div>
    </div>
  )
}


export default Navbar
