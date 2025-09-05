import noteService from "../services/noteService.js"
import { useNavigate } from "react-router"


const Delete = ({setDeleteModal, id}) => {
  const navigate = useNavigate()

  const deleteNote = async () => {
    try {
      const data = await noteService.deleteNoteById(id)
      setDeleteModal(false);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-[#403d39] p-6 space-y-6 rounded-lg shadow-xl 
	    text-black dark:text-[#ffffff]">
            <p className="mb-4">Are you sure you want to delete this note?</p>
            <div className="flex gap-1">
              <button onClick={() => setDeleteModal(false)}
                className="px-4 py-1 w-[50%] bg-gray-300 text-black rounded-[20px] hover:bg-gray-400 cursor-pointer">
                Cancel
              </button>
              <button onClick={() => { deleteNote(); }}
                className="px-4 py-1 w-[50%] bg-red-500 text-white dark:text-[#000000] 
		  rounded-[20px] hover:bg-red-600 cursor-pointer">
                Delete
              </button>
            </div>
          </div>
    </div>
  )
}



export default Delete
