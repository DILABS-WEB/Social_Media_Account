import React from 'react'
import "./closefriend.css"

const PF=process.env.REACT_APP_PUBLIC_FOLDER;

export default function Closefriend({user}) {
  return (
    <li className="sidebarFriend">
          <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
  )
}
