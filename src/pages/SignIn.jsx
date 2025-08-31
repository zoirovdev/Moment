import { useState } from "react";
import authService from "../services/authService.js";
import { useNavigate, Link, useLocation } from "react-router"
import { useAuth } from "../AuthContext.jsx";



const SignIn = () => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();


  const loginUsr = async () => {
    try {
      const data = await authService.signIn(formData);
      setUser(data);
      login(data);
      navigate('/')
    } catch (error) {
      throw error;
    }
  }


  const handleLogin = async () => {
    await loginUsr();
  }


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[680px] mt-[50px] border border-[#ced4da] px-[20px] pt-[20px] pb-[40px]
	rounded-[20px] space-y-[25px]">
	<p className="flex justify-center tracking-widest font-bold text-xl">Nota</p>
	<div className="flex justify-evenly items-center gap-[45px]">
	  <label htmlFor="email" className="text-[#495057] font-medium tracking-wider">Email</label>
	  <input type="email" id="email" name="email"
	    onChange={(e) => { setFormData({...formData, email: e.target.value }) }}
	    className="w-[70%] border border-[#ced4da] rounded-[20px]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<div className="flex justify-evenly items-center gap-2">
	  <label htmlFor="password" className="text-[#495057] font-medium tracking-wider">Password</label>
	  <input type="password" id="password" name="password"
            onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
            className="w-[70%] border border-[#ced4da] rounded-[20px]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<button className="w-[90%] ml-[30px] bg-[#08CB00] hover:bg-[#38b000] text-[#FFFFFF] 
	  cursor-pointer px-2 py-1 rounded-[20px] font-medium tracking-wider"
	  onClick={() => handleLogin()}>Sign in</button>
	<Link to="/sign-up" className="flex justify-center">
	  <p className="text-[#219ebc] hover:text-[#0a9396]">doesn't have account? sign up</p>
	</Link>
      </div>
    </div>
  );
};



export default SignIn;
