import React from 'react'
import Header from '../components/Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Link } from 'react-router-dom'
import UploadProfilePic from '../components/UploadProfilePic'

const Profile = () => {

    const HandleSignOut = () =>{
signOut(auth).then(console.log('signOut')).catch(console.log('err'))
    }

  return (
    <div>
        <Header />
        <UploadProfilePic />
        <button className='font-semibold text-lg mx-40 bg-black p-2 rounded-md text-white hover:opacity-80' onClick={HandleSignOut}>SignOut</button>
    </div>
  )
}

export default Profile