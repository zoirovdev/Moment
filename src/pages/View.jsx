import { ArrowLeft, SquarePen, Trash2 } from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"




const View = () => {
 
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <div className="flex justify-center items-center">
      <div className="w-[700px] text-[#FFFFF0] mt-[50px] space-y-[20px]">
        <p className="text-[#000000] text-2xl">Reading a note</p>
	<div className="flex flex-row justify-between ">
	  <Link to="/" className="flex flex-row bg-[#000000] px-2 py-1 gap-2 rounded-[20px]">
	    <ArrowLeft className=""/>
	    <p className="mr-2 font-medium tracking-wider">Back</p>
	  </Link>
	  <div className="flex flex-row gap-1">
	    <Link to="/edit" className="flex flex-row justify-center items-center 
	      bg-[#000000] px-4 py-1 gap-2 rounded-[20px]">
              <SquarePen className="w-[20px] h-[20px]"/>
	      <p className="font-medium tracking-wider">Edit</p>
	    </Link>
	    <button className="flex flex-row justify-center items-center
	      bg-[#000000] px-4 py-1 gap-2 rounded-[20px]"
	      onClick={(e) => {setDeleteModal(true)}}>
	      <Trash2 className="w-[20px] h-[20px]"/>
	      <p className="font-medium tracking-wider">Delete</p>
	    </button>
	  </div>
	</div>
	<div className="bg-[#000000] p-8 rounded-[10px]">
	  <p className="tracking-widest font-medium text-md leading-7">The morning sun cast long shadows across the empty park as Maya jogged along the winding path. She paused at the old oak tree where she and her grandmother used to sit and feed the squirrels every Sunday. The memories flooded back - warm laughter, shared stories, and the gentle wisdom her grandmother always offered. Now, years later, Maya found herself returning to this same spot whenever she needed guidance or comfort. She smiled softly, feeling her grandmother's presence in the rustling leaves above, and continued on her run with renewed purpose.</p>
	</div>
      </div>

      {deleteModal && 
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-black">
            <p className="mb-4">Are you sure you want to delete this note?</p>
            <div className="flex gap-2">
              <button onClick={() => setDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={() => {
                  // Add delete logic here
                  setDeleteModal(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}



export default View
