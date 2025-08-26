import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"




const Edit = () => {
  const [phtext, setPhtext] = useState("The ancient art of origami transforms a simple piece of paper into intricate sculptures through precise folds and creases. Originating in Japan during the 6th century, this practice was initially reserved for ceremonial purposes and the wealthy elite. Modern origami has evolved far beyond traditional cranes and flowers, with artists creating complex mathematical models and even functional objects like boxes and lampshades. The therapeutic benefits of paper folding have made it popular in schools, hospitals, and meditation centers worldwide. Scientists have even applied origami principles to design everything from space telescopes that unfold in orbit to medical devices that can be folded for insertion and then expand inside the body.")
  

  const navigate = useNavigate()

  const update = () => {
    navigate(-1)
  }

  return (
    <div className="flex justify-center">
      <div className="w-[700px] mt-[40px] space-y-[10px]">
	<p className="text-2xl font-medium mb-[20px]">Editing a note</p>
	<div>
	  <textarea value={phtext} onChange={(e) => setPhtext(e.target.value)}
	    className="border border-[#ced4da] focus-within:border-[#08CB00] 
	      text-[#000000] w-[100%] h-[400px] outline-none
	      py-6 px-8 rounded-[20px] tracking-widest text-medium leading-7"
	  ></textarea>
	</div>
	<div className="flex flex-row w-[100%] text-[#FFFFF0] gap-1">
          <button className="w-[50%] bg-[#6c757d] p-2 rounded-[20px] cursor-pointer"
	    onClick={(e) => navigate(-1)}>Cancel</button>
          <button className="w-[50%] bg-[#08CB00] p-2 rounded-[20px] cursor-pointer" 
	    onClick={(e) => update()}>Update</button>
	</div>
      </div>
    </div>
  )
}



export default Edit
