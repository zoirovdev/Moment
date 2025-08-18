import { useState } from "react"
import { Trash, Pencil } from "lucide-react"
import { Link } from "react-router"


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
          <Link to={`/view`} key={note.id} className="bg-[#000000] rounded-[20px] p-[20px] space-y-[10px]">
	    <div className="flex flex-row justify-between items-center">
	      <div className="flex flex-row">
		<Link to={"/edit"}>
                  <Pencil className="text-blue-700 w-[25px] h-[25px] p-1 hover:bg-gray-900 rounded-[5px]"/>
		</Link>
		<Link to={"/"}>
	          <Trash className="text-purple-700 w-[25px] h-[25px] p-1 hover:bg-gray-900 rounded-[5px]"/>
	        </Link>
	      </div>
	      <p className="text-gray-300 text-sm">{note.createdAt}</p>
	    </div>
	    <p className="text-white line-clamp-5 tracking-wider">{note.context}</p>
	  </Link>
	))}
      </div>
    </div>
  )
}



export default Home
