import React, { useState, useEffect } from "react";
import AddCommentModal from "../AddComentModal/AddCommentModal";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./DisplayComments.css";
import PostReply from "../PostReply/PostReply";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import LikeAndDislike from "../LikeAndDislike/LikeAndDislike";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


const DisplayComments = (props) => {
 
  const [user, token] = useAuth();
  const [modal, setModal] = useState(false);
  const [commentId, setCommentId] = useState();

 
   

  

  function handleReply(event) {
  event.preventDefault();
    let newComment = event.target.value;
    setModal(true);
    setCommentId(newComment);
  }

 
  console.log(props.comments)
  console.log(modal);

  return (
    <div className="main_container">
      <PostReply modal={modal} comment={commentId} onClose={()=>setModal(false)}/>
      <AddCommentModal
        comment={commentId}
        video={props.video}
        comments={props.comments}
        setComments={props.setComments}
      />

      {props.comments &&
        props.comments.map((comment, index) => {
         
          return (
            <div className="single-comment">
              <h5 className="user-comment">{user.username}:</h5>
              <p className="comment-text" key={index}>
                {" "}
                {comment.text}
              </p>
              <button type="submit" onClick={handleReply} value={comment.id}>
                Reply
              </button>
             <Link to={(`/CommentPage/${comment.id}`)}>
              <button type="submit" value={comment.id} >
                See Replies
              </button>
              </Link>
             
              <LikeAndDislike />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayComments;
