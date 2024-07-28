import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Utilities/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../Utilities/userSlice';
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
        onAuthStateChanged(auth, (user) => {
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
      }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-row justify-between">
      <img
        className="w-44"
        alt=""
        src="https://imgs.search.brave.com/n3sLYiMh3B3K2yWETMHO_QUUmaDnDfidiPyu03vr5q8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
      />
      {user && <div className='relative translate-y-1/2 -bottom-1/2' >
        <button onClick={handleButton}>sign out</button>
      </div>
     }
    </div>
  );
}

export default Header