import { ArrowLeft, SquarePen, Trash2 } from "lucide-react"
import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"
import Delete from "../components/Delete.jsx"
import noteService from "../services/noteService.js"



const View = () => {
  const { id } = useParams()
  const [deleteModal, setDeleteModal] = useState(false)
  const [note, setNote] = useState({})

  const getNote = async () => {
    try { 
      const data = await noteService.getNoteById(id)
      setNote(data.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getNote()
  }, [])

  return (
    <div className="flex justify-center items-center">
      <div className="w-[700px] text-[#FFFFF0] mt-[50px] space-y-[20px]">
        <p className="text-[#000000] text-2xl">Reading a note</p>
	<div className="flex flex-row justify-between ">
	  <Link to="/" className="flex flex-row bg-[#ffffff] text-[#000000] 
	    hover:bg-[#adb5bd] px-2 py-1 gap-2 rounded-[20px]">
	    <ArrowLeft className=""/>
	    <p className="mr-2 font-medium tracking-wider">Back</p>
	  </Link>
	  <div className="flex flex-row gap-1">
	    <Link to={`/edit/${note._id}`} className="flex flex-row justify-center items-center 
	      border border-[#ced4da] hover:border-0 hover:bg-[#f77f00] cursor-pointer 
	      text-[#000000] hover:text-[#ffffff] px-4 py-1 gap-2 rounded-[20px]">
              <SquarePen className="w-[20px] h-[20px]"/>
	      <p className="font-medium tracking-wider">Edit</p>
	    </Link>
	    <button className="flex flex-row justify-center items-center
	      border border-[#ced4da] hover:border-0 hover:bg-[#d62828] cursor-pointer
	      text-[#000000] hover:text-[#ffffff] px-4 py-1 gap-2 rounded-[20px]"
	      onClick={(e) => {setDeleteModal(true)}}>
	      <Trash2 className="w-[20px] h-[20px]"/>
	      <p className="font-medium tracking-wider">Delete</p>
	    </button>
	  </div>
	</div>
	<div className="border border-[#ced4da] text-[#000000] p-8 rounded-[10px]">
	  <p className="tracking-wider text-md leading-7">{note.content}</p>
	</div>
      </div>

      {deleteModal && 
        <Delete setDeleteModal={setDeleteModal} id={id}/>
      }
    </div>
  )
}



export default View
