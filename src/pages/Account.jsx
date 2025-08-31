import { Upload, LogOut } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import authService from "../services/authService.js";
import { useAuth } from "../AuthContext.jsx";




const Account = () => {
  const [user, setUser] = useState({});
  const inputRef = useRef(null);
  const { logout } = useAuth();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
      console.log('Selected file: ', file.name);
    }
  };

  const getCurrentUsr = async () => {
    try {
      const data = await authService.getMe();
      setUser(data);
    } catch (error) {
      throw error;
    }
  }

  const handleLogout = () => {
    logout();
  }

  useEffect(() => {
    getCurrentUsr();
  }, [])

  console.log(user.data)
  return (
    <div className="flex justify-center mt-[30px]">
      {user?.data ? <div className="w-[680px] h-[300px] border rounded-[20px] border-[#ced4da]
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
	<div className="w-[60%] space-y-2">
	  <div className="flex justify-end">
	    <button className="flex flex-row gap-2 justify-center items-center
	      border border-[#ced4da] hover:border-[#d62828] rounded-[20px] 
	      hover:bg-[#d62828] px-3 py-1 hover:text-[#FFFFFF] cursor-pointer"
	      onClick={() => handleLogout()}>
	      <p>Logout</p>
	      <LogOut className="w-5 h-5"/>
	    </button>
	  </div>
	  <div className="flex flex-col w-[100%] border border-[#ced4da]
	    p-4 rounded-[20px] tracking-widest">
	    <div className="flex flex-row justify-between border-b border-[#ced4da] p-2">
	      <p className="text-[#495057]">Name</p>
	      <p>{user.data.name}</p>
	    </div>
	    <div className="flex flex-row justify-between p-2">
	      <p className="text-[#495057]">Email</p>
	      <p>{user.data.email}</p>
	    </div>
	  </div>
	</div>
	</div> : <div>Loading</div>}
    </div>
  )
}


export default Account;
