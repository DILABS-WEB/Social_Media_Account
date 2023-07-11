import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
import Profile from '../../pages/profile/Profile'


const PF=process.env.REACT_APP_PUBLIC_FOLDER;

export default function Rightbar({profile}) {

  const HomeRightbar=()=>{
    

    return (
      <>
      <div className="birthdayContainer">
            <img className='birthdayImg' src="assets/gift.png" alt="" />
            <span className='birthdayText'> <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today</span>
          </div>
          <img className='rightbarAd' src="assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u} />
            ))}
           
          </ul>
      </>
    );
  };


  const ProfileRightbar=()=>{
    
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
     <>
     <h4 className='rightbarTitle'>User information</h4>
     <div className="rightbarInfo"></div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfokey">City:</span>
    <span className="rightbarInfoValue">Bengaluru, India</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfokey">From:</span>
    <span className="rightbarInfoValue">Siwan,Bihar</span>
  </div>
  <div className="rightbarInfoItem">
    <span className="rightbarInfokey">Relationship:</span>
    <span className="rightbarInfoValue">Single</span>
  </div>
  <h4 className='rightbarTitle'>User Friends</h4>
  <div className='rightbarFollowings'>
    <div className="rightbarFollowing">
      <img src={`${PF}person/1.jpeg`}  alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
     <div className="rightbarFollowing">
      <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/7.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/8.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img src={`${PF}person/9.jpeg`} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>John Carter</span>
    </div> 
  </div>
     </>
  
    );
  
  };
  return (
    <div className='rightbar'> 
      <div className="rightbarWrapper">
        
         {profile ? <ProfileRightbar/> : <HomeRightbar/> } 
         

     
      </div>
    </div>
  )
}
