import authService from "../services/authService.js";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { useAuth } from "../AuthContext.jsx";



const SignUp = () => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();



  const register = async () => {
    try {
      const data = await authService.signUp(formData);
      setUser(data);
      login(data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleRegister = async () => {
    await register();
  }
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[680px] mt-[50px] border border-[#ced4da] dark:border-[#515052] px-[20px] pt-[20px] pb-[40px]
	rounded-[20px] space-y-[25px]">
	<p className="flex justify-center tracking-widest font-bold text-xl dark:text-[#ffffff]">Nota</p>
	<div className="flex justify-evenly items-center gap-8">
	  <label htmlFor="name" className="text-[#495057] font-medium tracking-wider dark:text-[#AAAAAA]">
	    Name</label>
	  <input type="text" id="name" name="name" 
	    onChange={(e) => { setFormData({...formData, name: e.target.value}) }}
	    className="w-[70%] border-b border-[#ced4da] dark:border-[#515052] dark:text-[#ffffff]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<div className="flex justify-evenly items-center gap-8">
	  <label htmlFor="email" className="text-[#495057] font-medium tracking-wider dark:text-[#AAAAAA]">
	    Email</label>
	  <input type="email" id="email" name="email"
            onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
	    className="w-[70%] border-b border-[#ced4da] dark:border-[#515052] dark:text-[#ffffff]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<div className="flex justify-evenly items-center gap-2">
	  <label htmlFor="password" className="text-[#495057] font-medium tracking-wider dark:text-[#AAAAAA]">
	    Password</label>
	  <input type="password" id="password" name="password"
	    onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
            className="w-[70%] border-b border-[#ced4da] dark:border-[#515052] dark:text-[#ffffff]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<button className="w-[90%] ml-[30px] bg-[#08CB00] text-[#FFFFFF] dark:text-[#000000]
	  cursor-pointer px-2 py-1 rounded-[20px] font-medium tracking-wider"
	  onClick={() => handleRegister()}>Sign up</button>
	<Link to="/sign-in" className="flex justify-center">
	  <p className="text-[#219ebc] hover:text-[#0a9396]">already has an account? sign in</p>
	</Link>
      </div>
    </div>
  );
};



export default SignUp;
