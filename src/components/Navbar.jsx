import { Plus, Search } from "lucide-react"


const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[700px] h-[45px] bg-[#000000] mt-[10px] rounded-[80px]
	flex flex-row justify-between items-center px-2 gap-2">
	<div className="flex flex-row justify-between items-center gap-1 w-[600px]
	  border border-[#393E46] hover:border-purple-500 rounded-[50px] px-2 py-1">
	  <input type="text" placeholder="Search" 
	    className="text-[#FFFFF0] outline-none w-[95%] pl-2 pr-1"/>
	  <Search className="text-[#FFFFF0]"/>
	</div>
	<div className="flex flex-row justify-center items-center gap-1 
	  border border-[#393E46] hover:border-purple-500 rounded-[50px] px-2 py-1">
	  <p className="text-[#FFFFF0]">Create</p>
          <Plus className="text-[#FFFFF0]"/>
	</div>
      </div>
    </div>
  )
}


export default Navbar
