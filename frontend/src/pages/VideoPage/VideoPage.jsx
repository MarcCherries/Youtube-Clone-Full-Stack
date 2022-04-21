import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddCommentModal from "../../components/AddComentModal/AddCommentModal";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import "./VideoPage.css";
import DisplayThumbnails from "../../components/DisplayThumbnails/DisplayThumbnails";
import VideoCard from "../../components/VideoCard/VideoCard";
import DisplayReplies from "../../components/DisplayReplies/DisplayReplies";

const VideoPage = (props) => {
  const [user, token] = useAuth();
 

  const { video } = useParams();

  useEffect(()=> {
    props.fetchComments(video)
  },[video]
  )
  useEffect(()=> {
    props.fetchSim(video)
  },[video]
  )
  

  
  return (
    <div className="video-comment-container">
      <div>
        <iframe
          width="525"
          height="450"
          src={`https://www.youtube.com/embed/${video}`}
        ></iframe>

        <DisplayComments
          video={video}
          comments={props.comments}
          setComments={props.setComments}
        />

    
      </div>
      <div>
        <VideoCard fetchsim={props.fetchSim} videoData={props.sim} />
      </div>
    </div>
  );
};

export default VideoPage;
