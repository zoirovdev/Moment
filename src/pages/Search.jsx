import { useSearchParams, Link, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import noteService from "../services/noteService.js"




const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  if(query === ""){
    navigate("/");
  }

  const searchNotes = async () => {
    try {
      const data = await noteService.searchNotes(query);
      console.log(data);
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchNotes();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-2 w-[90%] my-[50px]">
	{notes.length !== 0 && notes.map((note) => (
          <Link to={`/view/${note._id}`} key={note._id} 
	    className="border border-[#ced4da] dark:border-[#212529] hover:border-[#08CB00]
	     hover:shadow-lg rounded-[20px] p-[20px] space-y-[10px] cursor-pointer">
	    <div className="flex flex-row justify-between items-center">
	      <p className="text-[#495057] dark:text-[#ffffff] text-sm">
		{new Date(note.createdAt).toLocaleDateString()}</p>
	    </div>
	    <p className="line-clamp-5 tracking-wider dark:text-[#ffffff]">{note.content}</p>
	  </Link>
	))}
      </div>
    </div>
  )
}



export default Search
