import { Plus, Search } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { useState } from "react"


const Navbar = () => {
  const [searchVal, setSearchVal] = useState("")
  const navigate = useNavigate()


  const handleSearch = (e) => {
    if(e.key === "Enter"){
      const params = encodeURIComponent(searchVal.trim())
      navigate(`/search?query=${params}`)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-[700px] h-[40px] mt-[10px] flex flex-row justify-between items-center px-2 gap-2">
	<div className="flex flex-row justify-between items-center gap-1 w-[600px]
	  rounded-[50px] px-4 py-1 bg-[#000000] h-full focus-within:bg-gradient-to-r 
	  focus-within:from-[#090040] focus-within:to-[#9B177E]">
	  <input type="text" placeholder="Search" 
	    className="text-[#FFFFF0] outline-none w-[95%] pl-2 pr-1"
	    onChange={(e) => setSearchVal(e.target.value)}
	    onKeyDown={(e) => handleSearch(e)}/>
	  <Search className="text-[#FFFFF0]"/>
	</div>
	<Link to={"/create"} className="flex flex-row justify-center items-center gap-1 bg-[#000000]
	  rounded-[50px] px-4 py-1 h-full cursor-pointer hover:shadow-xl text-[#FFFFF0]
	  hover:bg-gradient-to-r hover:from-[#090040] hover:to-[#9B177E]">
	  <p className="font-medium tracking-wider">Create</p>
          <Plus className=""/>
	</Link>
      </div>
    </div>
  )
}


export default Navbar
