import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Utilities/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../Utilities/userSlice';
import { LOGO } from '../Utilities/constants';
const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButton = ()=>{
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    }
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            )
              navigate("/browse")
            ;
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
        // unsubscribe when the component unmount
        return ()=> unSubscribe();
      }, []);
  return (
    <div className=" absolute w-screen  bg-gradient-to-b from-black flex flex-row justify-between z-20">
      <img className="w-60 px-8 py-2" alt="" src={LOGO} />
      {user && (
        <div className=" mr-8  mt-2 gap-7 text-white flex flex-row ">
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
}

export default Header