import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Utilities/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utilities/userSlice";
import { LOGO , LANG } from "../Utilities/constants";
import { changeGptState } from "../Utilities/gptSlice";
import { changeLanguage } from "../Utilities/configSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGptButton = () => {
    dispatch(changeGptState());
  };
  const gptState = useSelector((store) => store.gpt.gptSearchState);
  const selectLanguage = (e)=>{
     dispatch(changeLanguage(e.target.value))
  }
  const handleButton = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when the component unmount
    return () => unSubscribe();
  }, []);
  return (
    <div className=" absolute w-screen  bg-gradient-to-b from-black flex flex-row justify-between z-20">
      <img className="w-60 px-8 py-2" alt="" src={LOGO} />
      {user && (
        <div className=" mr-8  mt-2 gap-7 text-white flex flex-row ">
          {gptState && (
            <div className="flex flex-col justify-center">
              <select className="text-black" onChange={selectLanguage}>
                 {LANG.map((lang) => 
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                 )}
              </select>
            </div>
          )}
          <div className="flex flex-col justify-center">
            <button
              className="bg-red-700 p-3 rounded-lg "
              onClick={handleGptButton}
            >
              {gptState ? "Home Page" : "GPT Search"}
            </button>
          </div>
          <div>
            <img
              className="size-12"
              alt="user logo"
              src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
            />
            <div className="translate-x-1/4">{user.displayName}</div>
          </div>
          <button onClick={handleButton}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
