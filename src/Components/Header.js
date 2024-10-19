import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Utilities/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, removeUser } from "../Utilities/userSlice";
import { LOGO, LANG } from "../Utilities/constants";
import { changeGptState } from "../Utilities/gptSlice";
import { changeLanguage } from "../Utilities/configSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const {movieId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const toggleSignOut = () => {
    setCollapsed(!collapsed);
  };
  const handleGptButton = () => {
    dispatch(changeGptState());
  };
  const gptState = useSelector((store) => store.gpt.gptSearchState);
  const selectLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
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
        if(movieId){
          navigate(`/movie/${movieId}`)
        }else{
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when the component unmount
    return () => unSubscribe();
  }, []);
  return (
    <div className="  h-28 absolute w-screen px-4  bg-gradient-to-b from-black flex flex-row justify-between z-20 md:flex-row md:justify-between ">
      <div className=" h-full w-24 md:w-40 py-2 flex flex-col justify-center" >
        <img
          className="object-fill"
          alt=""
          src={LOGO}
          role="button"
          onClick={()=> navigate("/browse")}
        />
      </div>
      {user && (
        <div className=" md:mr-8  mt-2  md:gap-7 text-white flex flex-row ">
          <div className="flex flex-col justify-center">
            <button
              className="bg-red-700 p-2 md:p-3 rounded-lg "
              onClick={handleGptButton}
            >
              {gptState ? "Home Page" : "GPT Search"}
            </button>
          </div>
          <div className="flex flex-col justify-center overflow-visible relative">
            <div
              className="flex flex-col cursor-pointer relative"
              onClick={toggleSignOut}
              role="button"
            >
              <div className="flex justify-center">
                <img
                  className="size-12"
                  alt="user logo"
                  src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
                />
              </div>
              <div className=" flex justify-center  ">{user.displayName}</div>
              {!collapsed && (
                <div
                  className={`absolute right-0  w-20 flex justify-center flex-col transition-all duration-300 border ${
                    !collapsed ? "max-h-screen" : "max-h-0"
                  } border-black bg-red-600`}
                  style={{ top: "100%" }}
                >
                  {gptState && (
                    <div
                      className="flex flex-col justify-center "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <select className="text-black " onChange={selectLanguage}>
                        {LANG.map((lang) => (
                          <option
                            className="p-0 text-sm"
                            key={lang.identifier}
                            value={lang.identifier}
                          >
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <button
                    className="whitespace-nowrap overflow-x-auto"
                    onClick={handleButton}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
