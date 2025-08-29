


const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[680px] mt-[50px] border border-[#ced4da] px-[20px] pt-[20px] pb-[40px]
	rounded-[20px] space-y-[25px]">
	<p className="flex justify-center tracking-widest font-bold text-xl">Sign up</p>
	<div className="flex justify-evenly items-center gap-8">
	  <label htmlFor="name" className="text-[#495057] font-medium tracking-wider">Name</label>
	  <input type="text" id="name" name="name" 
	    className="w-[70%] border border-[#ced4da] rounded-[20px] 
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<div className="flex justify-evenly items-center gap-8">
	  <label htmlFor="email" className="text-[#495057] font-medium tracking-wider">Email</label>
	  <input type="email" id="email" name="email"
	    className="w-[70%] border border-[#ced4da] rounded-[20px]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<div className="flex justify-evenly items-center gap-2">
	  <label htmlFor="password" className="text-[#495057] font-medium tracking-wider">Password</label>
	  <input type="password" id="password" name="password"
            className="w-[70%] border border-[#ced4da] rounded-[20px]
	      focus-within:border-[#08CB00] outline-none px-4 py-1"/>
	</div>
	<button className="w-[90%] ml-[30px] bg-[#08CB00] text-[#FFFFFF] 
	  cursor-pointer px-2 py-1 rounded-[20px] font-medium tracking-wider">Register</button>
      </div>
    </div>
  );
};



export default SignUp;
