import { useNavigate } from "react-router"



const Create = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <div className="w-[700px] mt-[40px] space-y-2">
	<p className="text-2xl font-bold tracking-wider mb-6">Creating a new note</p>
	<textarea className="bg-[#000000] text-[#FFFFF0] outline-none
          p-8 w-full h-[400px] rounded-[20px] text-base leading-8 tracking-widest
	"></textarea>
	<div className="w-full flex flex-row gap-2">
          <button className="w-[50%] bg-[#000000] text-[#FFFFF0] py-2 
	    rounded-[20px] font-medium tracking-wider cursor-pointer"
	    onClick={() => navigate(-1)}>Cancel</button>
	  <button className="w-[50%] bg-[#000000] text-[#FFFFF0] py-2 
	    rounded-[20px] font-medium tracking-wider cursor-pointer">Add</button>
	</div>
      </div>
    </div>
  )
}



export default Create
