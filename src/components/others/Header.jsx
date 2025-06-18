import React from 'react'
import { useState } from 'react'


const Header = ({data, changeUser}) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin');
  // }else{
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    changeUser('');
    console.log();
    
    // window.location.reload();
  }


  const username = data ? data.firstName : 'Admin';
  return (
    <div className="flex flex-row justify-between items-center md:items-center space-y-4 md:space-y-0">
  <h1 className="text-sm md:text-2xl lg:text-3xl font-medium">
    Hello <br />
    <span className="text-xl md:text-3xl lg:text-4xl font-semibold">
      {username} 👋
    </span>
  </h1>
  <button onClick={logOutUser} className="bg-red-500 text-white px-6 py-2 rounded-sm text-sm md:text-base lg:text-lg font-medium">
    Logout
  </button>
</div>

  )
}

export default Header
