import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-img"
        />
      </div>
        <form className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col border-2 border-red-600 rounded p-16  bg-black bg-opacity-75 w-3/12">
            <p className="text-white font-medium text-3xl mb-10">{isSignInForm?"Sign In": "Sign Up"}</p>
            {!isSignInForm && 
            <input type="text" placeholder="Full Name" className="p-2 m-2 w-full rounded-md bg-zinc-900 "/>
            }
            <input type="text" placeholder="Email Adderess" className="p-2 m-2 w-full rounded-md bg-zinc-900 "/>
            <input type="text" placeholder="Password" className="p-2 m-2 w-full rounded-md bg-zinc-900"/>
            <button className="rounded-md p-2 bg-red-600 text-white hover:bg-red-700  mx-2 my-8 w-full">Get Started</button>
        <div className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</div>
        </form>
    </div>
  );
};

export default Login;
