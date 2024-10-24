import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.init';
import HeroRegister from '../Authentication/HeroRegiester';


const Statistics = () => {

    const [user,setUser]=useState(null)
const auth=getAuth(app)



const googleProvider= new GoogleAuthProvider()

const SignInHandle=()=>{
signInWithPopup(auth,googleProvider)
.then(res=>{
   const googleUser=res.user;
   setUser(googleUser)
})
.catch(error=>{
    console.log(error)
})
}


    return (
        <div className=''>
           <div className='flex justify-center items-center w-full'>
          <div>
          {user&&<div className='flex justify-center items-center w-full' >
                <div>
                <h2 className='text-center'>This is Statistics{user.displayName}</h2>
                <img src={user.photoURL} alt="photo" />
                <h3>hi</h3></div></div>}
            <div>
           
            <button onClick={SignInHandle} className='btn  btn-info m-3'>Google Sign in</button>
            </div>
          </div>
           </div>
        </div>
    );
};

export default Statistics;