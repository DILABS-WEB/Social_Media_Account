import React from 'react'
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chats from '@mui/icons-material/ChatBubble';
import Notifications from '@mui/icons-material/Notifications';
import "./topbar.css"


export default function Topbar() {
  return (
    <div className='topbarContainer'>

        <div className="topbarLeft">
    <span className="topbarLogo">Social~Chit~Chat</span>

        </div>
       
        <div className="topbarCenter">

            <div className="searchbar">
< Search className='searchIcon' />
<input placeholder='Search for friend , post or video' className="searchInput" />
            </div>
        </div>
<div className="topbarRight">
   <div className="topbarLinks">
    <span className="topbarLink">Homepage</span>
    <span className="topbarLink">Timeline</span>

   </div>
<div className="topbarIcons"> 
    <div className="topbarIconItems">
        <Person/>
      <span className="topbarIconBadge">5</span>

</div>
<div className="topbarIconItems">
        <Chats/>
      <span className="topbarIconBadge">10</span>

</div>
    <div className="topbarIconItems">
        <Notifications/>
      <span className="topbarIconBadge">25</span>

</div>
</div>
<img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>
        </div>
    </div>
    
  )
}
