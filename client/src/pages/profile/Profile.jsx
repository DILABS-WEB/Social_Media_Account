import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <><Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
      <div className="profileRightTop">
       <div className="profileCover">
       <img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt="" srcset="" />
        <img className='profileUserImg' src={`${PF}person/2.jpg`} alt="" srcset="" />
       </div>
        <div className="profileInfo">
            <h4 className='profileInfoName'>Abhishek Kumar</h4>
            <span className='profileInfoDesc'>Hey All !</span>
        </div>


      </div>
      <div className="profileRightBottom">
      <Feed/>
     <Rightbar profile/>
      </div>    
      </div>     
    </div>
    </>
    
  )
}
