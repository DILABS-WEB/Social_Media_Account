import React from 'react'
import "./sidebar.css"
import RssFeed from '@mui/icons-material/RssFeed';
import Chats from '@mui/icons-material/Chat';
import Video from '@mui/icons-material/VideoChat';
import Groups from '@mui/icons-material/Groups';
import Book from '@mui/icons-material/Bookmark';
import Question from '@mui/icons-material/QuestionMark';
import Jobs from '@mui/icons-material/Work';
import Event from '@mui/icons-material/Event';
import School from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import Closefriend from '../closefriend/Closefriend';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>
          <li className="sidebarListitem">
            <Chats className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>
          <li className="sidebarListitem">
            <Video className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>
          <li className="sidebarListitem">
            <Groups className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>
          <li className="sidebarListitem">
            <Book className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListitem">
            <Question className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Quesions
            </span>
          </li>
          <li className="sidebarListitem">
            <Jobs className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>
          <li className="sidebarListitem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Events
            </span>
          </li>
          <li className="sidebarListitem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>
        </ul>
      <button className='sidebarButton'>
        Show More
      </button>
      <hr className='sidebarHr'/>
      <ul className="sidebarFriendList">
        {Users.map(u=>(
        <Closefriend key={u.id} user={u}  />
                 ) )}
      </ul>
      </div>
    </div>
  )
}
