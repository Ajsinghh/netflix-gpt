import React from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../Utilities/validate";
import { useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utilities/firebase"
import { updateProfile } from "firebase/auth";
import { addUser } from "../Utilities/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    console.log("hey");
    if(!isSignInForm){
        createUserWithEmailAndPassword(auth,
           email.current.value,
            password.current.value
          )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: "src/Img/netflix-profile-pictures.webp",
            })
              .then(() => {
                const {email,uid,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
              console.log(user);
              // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
          });
        }else{
          //signed in
          signInWithEmailAndPassword(auth,email.current.value, password.current.value)
          .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
          })
    }
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-  img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col border-2 border-red-600 rounded p-16  bg-black bg-opacity-75 w-72"
      >
        <p className="text-white font-medium text-3xl mb-10 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full rounded-md bg-zinc-900 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Adderess"
          className="p-2 m-2 w-full rounded-md bg-zinc-900 text-white"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full rounded-md bg-zinc-900 text-white"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="rounded-md p-2 bg-red-600 text-white hover:bg-red-700  mx-2 my-8 w-full"
          onClick={handleButton}
        >
          Get Started
        </button>
        <div className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </div>
      </form>
    </div>
  );
};

export default Login;
