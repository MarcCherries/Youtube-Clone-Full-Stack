import React, { useState, useEffect } from 'react';
import AddCommentModal from '../AddComentModal/AddCommentModal';
import axios from 'axios';
import useAuth from "../../hooks/useAuth"
import './DisplayComments.css'
import PostReply from '../PostReply/PostReply';
import DisplayReplies from '../DisplayReplies/DisplayReplies';


const DisplayComments = (props) => {
    
   
    const video = props.video
    const [user, token] = useAuth()
    const [modal, setModal] = useState(false)
    const [commentId, setCommentId] = useState()

    

function handleReply(event){
    let commentId = event.target.value;
    setModal(true);
    setCommentId(commentId)
}

   
useEffect(()=> {
 const fetchComments = async () =>{
    try {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/?video_id=${video}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        )   
       
        console.log(response.data)
        props.setComments(response.data)

        
       
       

    } catch (error) {
        console.log(error.message)
        
    }
    
   

}

fetchComments()

},[token]
)



console.log(props.comments)



    return ( 

        <div className='main_container'>
            <PostReply modal={modal} comment={commentId} onClose={()=>setModal(false)}/>
              <AddCommentModal comment={commentId} video={video}  comments={props.comments} setComments={props.setComments}/>
              
            
      
           
            {props.comments && props.comments.map((comment, index) =>{
                return(
                    <div className='single-comment'>
                        <h5 className='user-comment'>{user.username}:</h5>
             <p className='comment-text'key={index} > {comment.text}</p>
             <button type='submit' value={comment.id} onClick={handleReply}>Reply</button>
            
         

            </div>
            )})}
           
          
        </div>
     );
}
 
export default DisplayComments;