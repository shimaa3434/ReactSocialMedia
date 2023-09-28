import React, { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './post.css'
import { faComment, faEllipsisVertical, faShareNodes, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'

const Post = ({post}) => {
    // const liked = false
    const [liked, setLiked] = useState(true)
    const [commentOpen, setCommentOpen] = useState(false)
   
    return (
    <div className='post'>
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt={post.name}/>
                <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                    <div className="detail">
                        <span className='name'>{post.name}</span>
                        <span className='date'>1 min age</span>
                    </div>
                </Link>
            </div>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt=''/>
        </div>
        <div className="info">
            <div className="item" onClick={()=> setLiked(!liked)}>
                <FontAwesomeIcon  icon={liked ? faThumbsUp : faThumbsDown}/>
                 3 linkes
            </div>
            <div className="item" onClick={()=> setCommentOpen(!commentOpen)}>
            <FontAwesomeIcon icon={faComment} />
                 12 comment
            </div>
            <div className="item">
            <FontAwesomeIcon icon={faShareNodes} />
               2  share
            </div>
        </div>
        {commentOpen && <Comments />}
        </div>
        
    </div>
  )
}

export default Post