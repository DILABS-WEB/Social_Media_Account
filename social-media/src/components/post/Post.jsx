import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">  
                    <img className='postProfileImg' src="/assest/person/1.jpeg" alt="" srcset="" /> 
                    <span className="postUsername">Aditya Krishnan Nambiar</span>
                    <span className="postDate">5 mins ago</span>
                 </div>
               
                <div className="postTopRight"> <MoreVert/>  </div>
                <img src="../assets/post/1.jpeg" alt="" srcset="" />
            </div>
            <div className="postCenter">
                <div className="postCenterLeft">    </div>
                <div className="postCenterCenter">    </div>
                <div className="postCenterRight">    </div>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">    </div>
                <div className="postBottomCenter">    </div>
                <div className="postBottomRight">    </div>
            </div>
        </div>
    </div>
  )
}
