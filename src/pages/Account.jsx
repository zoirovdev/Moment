import { Upload } from "lucide-react"
import { useRef } from "react"




const Account = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
      console.log('Selected file: ', file.name);
    }
  };

  return (
    <div className="flex justify-center mt-[30px]">
      <div className="w-[680px] h-[300px] border rounded-[20px] border-[#ced4da]
	flex flex-row gap-2 justify-start items-center">
	<div className="flex flex-col justify-center items-center">
	  <img src="profile2.png" alt="profile" className="object-cover w-[200px] h-[200px]"/>
	  <div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 px-4 py-1 text-[#000000] rounded-[10px]
		border border-[#ced5da] cursor-pointer hover:bg-[#08CB00] hover:border-[#08CB00] hover:text-[#ffffff]"
            >
              <Upload className="w-5 h-5" />
              Upload
            </button>
          </div>	
	</div>
	<div className="flex flex-col w-[60%] border border-[#ced4da]
	  p-4 rounded-[20px] tracking-widest">
	  <div className="flex flex-row justify-between border-b border-[#ced4da] p-2">
	    <p className="text-[#495057]">Name</p>
	    <p>Abbos</p>
	  </div>
	  <div className="flex flex-row justify-between p-2">
	    <p className="text-[#495057]">Email</p>
	    <p>abboszoirov17@gmail.com</p>
	  </div>
	</div>
      </div>
    </div>
  )
}


export default Account;
