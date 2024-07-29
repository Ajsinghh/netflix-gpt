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
  console.log(user)
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
          console.log(user);
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
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-row justify-between z-20">
      <img
        className="w-44"
        alt=""
        src={LOGO}
      />
      {user && <div className='relative translate-y-1/2 -bottom-1/2' >
        <button onClick={handleButton}>sign out</button>
      </div>
     }
    </div>
  );
}

export default Header