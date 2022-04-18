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
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    postNewComment
  );

  formData.video_id = props.video;

  async function postNewComment() {
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
    } catch (error) {
      console.log(error.message);
    }
  }
  if (!props.modal) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-window">
        <form className="form" onSubmit={handleSubmit}>
          <label>COMMENT </label>

          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>

          <span className="close" onClick={props.onClose}>
            &times;
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddCommentModal;
