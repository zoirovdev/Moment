import { useNavigate } from "react-router";
import noteService from "../services/noteService.js";
import userService from "../services/userService.js";
import { useState } from "react"




const Create = () => {
  const navigate = useNavigate()
  const [note, setNote] = useState({
    content: "",
    user: {}
  });
  


  
  const create = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const user = await userService.getUserById(userId);
      const updatedNote = { ...note, user: user.data }

      const data = await noteService.createNote(updatedNote);
      setNote(data);
      navigate('/');
    } catch (error) {
      throw error;
    }
  }


  const handleCreate = async () => {
    await create();
  }

  
  return (
    <div className="flex justify-center">
      <div className="w-[700px] mt-[40px] space-y-2">
	<p className="text-2xl font-bold tracking-wider mb-6 dark:text-[#ffffff]">Creating a new note</p>
	<textarea className="border border-[#ced4da] dark:border-[#515052] focus-within:border-[#08CB00] 
	  text-[#000000] dark:text-[#ffffff] outline-none p-8 w-full h-[400px] rounded-[20px] text-base 
	  leading-8 tracking-widest"
	  value={note.content}
	  onChange={(e) => { setNote({ ...note, content: e.target.value }) }}></textarea>
	<div className="w-full flex flex-row gap-2">
          <button className="w-[50%] dark:bg-[#7A7D7D] bg-[#9B9FB5] text-[#000000] dark:text-[#ffffff] py-2 
	    rounded-[20px] font-medium tracking-wider cursor-pointer"
	    onClick={() => navigate(-1)}>Cancel</button>
	  <button className="w-[50%] bg-[#08CB00] text-[#FFFFF0] dark:text-[#000000] py-2
	    rounded-[20px] font-medium tracking-wider cursor-pointer"
	    onClick={() => handleCreate()}>Add</button>
	</div>
      </div>
    </div>
  )
}



export default Create
