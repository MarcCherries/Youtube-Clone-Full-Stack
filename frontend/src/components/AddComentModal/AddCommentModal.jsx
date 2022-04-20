import React, { useState, useEffect } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import "./AddCommentModal.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

let initialValues = {
  video_id: "",
  text: "",
  likes: 0,
  dislikes: 0,
};

const AddCommentModal = (props) => {
  //   const [comments, setComments] = useState([]);
  const [user, token] = useAuth();
  


  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    initialValues,
    postNewComment
  );

  console.log(props.modal);
  formData.video_id = props.video;
  
  async function postNewComment(formData) {
 

    
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
        
      );
      props.setComments(response.data)
     
     
    
    
     

    } catch (error) {
      console.log(error.message);
    }
  
  }
 
 




  return (
    <div className="modal">
      <div className="modal-window">
        <form className="form" onSubmit={handleSubmit}>
          <label className="comment-label">COMMENT </label>

          <input
            className="comment-input"
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          ></input>
          <button 
          type="submit"
          className="comment-button"
         
          >
            Comment
          </button>

         
        
         
        </form>
      </div>
    </div>
  );
};

export default AddCommentModal;
