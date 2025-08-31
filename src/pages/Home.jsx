import { useState } from "react"
import { Trash, Pencil } from "lucide-react"
import { Link } from "react-router"
import Delete from "../components/Delete.jsx"




const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    {
      id: 1,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    {      
      id: 2,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    {
      id: 4,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    {
      id: 5,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    {
      id: 6,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    { 
      id: 7,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    },
    {
      id: 8,
      context: "Existentialism is a philosophical movement that emerged in the 19th and 20th centuries, emphasizing individual existence, freedom, and choice. At its core, existentialism argues that existence precedes essence - meaning we exist first, then create our own meaning and purpose through our choices and actions.",
      createdAt: "27 july 2024"
    }
  ])

  
  


  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-2 w-[90%] my-[50px]">
	{notes.length !== 0 && notes.map((note) => (
          <Link to={"/view"} key={note.id} 
	    className="rounded-[20px] border border-[#ced4da] hover:border-[#08CB00]
	     hover:shadow-lg p-[20px] space-y-[10px] cursor-pointer">
	    <div className="flex flex-row justify-between items-center">
	      <p className="text-[#495057] text-sm">{note.createdAt}</p>
	    </div>
	    <p className="text-[#000000] line-clamp-5 tracking-wider">{note.context}</p>
	  </Link>
	))}
      </div>
    </div>
  )
}



export default Home
