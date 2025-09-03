import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import noteService from "../services/noteService.js"



const Edit = () => {
  const [note, setNote] = useState({})
  
  const { id } = useParams()

  const navigate = useNavigate()

  const update = async () => {
    try {
      const data = await noteService.updateNoteById(note, note._id)
      setNote(data.data)
      navigate(-1)
    } catch (error) {
      console.log(error)
    }
  }

  const getNote = async () => {
    try {
      const data = await noteService.getNoteById(id)
      setNote(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNote()
  }, [])


  return (
    <div className="flex justify-center">
      <div className="w-[700px] mt-[40px] space-y-[10px]">
	<p className="text-2xl font-medium mb-[20px]">Editing a note</p>
	<div key={note._id}>
	  <textarea value={note.content} onChange={(e) => setNote({...note, content: e.target.value})}
	    className="border border-[#ced4da] focus-within:border-[#08CB00] 
	      text-[#000000] w-[100%] h-[400px] outline-none
	      py-6 px-8 rounded-[20px] tracking-wider text-medium leading-7"
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
