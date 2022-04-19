import React, { useState, useEffect } from 'react';
import AddCommentModal from '../AddComentModal/AddCommentModal';
import axios from 'axios';
import useAuth from "../../hooks/useAuth"
import './DisplayComments.css'


const DisplayComments = (props) => {
    
    const [comments, setComments] = useState()
    const video = props.video
    const [user, token] = useAuth()
   
// useEffect(()=> {
//  const fetchComments = async () =>{
//     try {
//         let response = axios.get('http://127.0.0.1:8000/api/comments/all/', {
//             headers: {
//                 Authorization: "Bearer " + token
//             }
//         }
//         )   
//         setComments(response.data)
//         console.log(response.data)
//         console.log(comments)

//     } catch (error) {
        
//     }

// }

// fetchComments()
// },[comments]
// )


    return ( 

        <div>
                
                <AddCommentModal modal={props.modal} onClose={props.onClose} video={video} />
            <h6>Comments:</h6>
          
        </div>
     );
}
 
export default DisplayComments;