import { useState, useEffect } from "react"
import { Trash, Pencil } from "lucide-react"
import { Link } from "react-router"
import Delete from "../components/Delete.jsx"
import noteService from "../services/noteService.js"




const Home = () => {
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    try {
      const data = await noteService.getAllNotes();
      setNotes(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getNotes();
  }, [])

  
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-2 w-[90%] my-[50px]">
	{notes.length !== 0 && notes.map((note) => (
          <Link to={`/view/${note._id}`} key={note._id} 
	    className="rounded-[20px] border border-[#ced4da] hover:border-[#08CB00]
	     hover:shadow-lg p-[20px] space-y-[10px] cursor-pointer">
	    <div className="flex flex-row justify-between items-center">
	      <p className="text-[#495057] text-sm">{new Date(note.createdAt).toLocaleDateString()}</p>
	    </div>
	    <p className="text-[#000000] line-clamp-5 tracking-wider">{note.content}</p>
	  </Link>
	))}
      </div>
    </div>
  )
}



export default Home
