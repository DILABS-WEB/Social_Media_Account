import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'

export default function Post(post) {
 console.log(post);
    return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">  
                    <img className='postProfileImg' src="/assets/person/22.jpg" alt="" srcset="" /> 
                    <span className="postUsername">Aditya Krishnan Nambiar</span>
                    <span className="postDate">{post.date}</span>
                 </div>
               
                <div className="postTopRight"> <MoreVert/>  </div>
                
            </div>
            <div className="postCenter">
                
                <span className="postText">{post?.desc} </span>
                <img className='postImg' src="../assets/post/1.jpeg" alt="" srcset="" />
            </div>
            <div className="postBottom">
               <div className="postBottomLeft">
                <img className='likeIcon' src="assets/Like.png" alt="" />
                <img className='likeIcon'  src="assets/heart.png" alt="" />
                <span className='postLikeCounter'>{post.like} people like it</span>
               </div>
               <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
               </div>
            </div>
        </div>
    </div>
  )
}
