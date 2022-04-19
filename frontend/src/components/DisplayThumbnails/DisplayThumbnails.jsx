import { useState } from "react";
import { Link } from "react-router-dom";

const DisplayThumbnails = (props) => {
  console.log(props.defaultData);

  return (
    <div>
      {props.videoData.items.map((video, index) => (
        <Link
          key={index}
          to={`/VideoPage/${props.videoData.items[index].id.videoId}`}
        >
          {props.videoData.items[index].snippet && (
            <img
              src={props.videoData.items[index].snippet.thumbnails.default.url}
            ></img>
          )}
          {/* 
            {!props.videoData.items[index].snippet && 
           
            <img src={props.defaultData.items
            [index].snippet.thumbnails.default.url}></img>} */}
        </Link>
      ))}
    </div>
  );
};

export default DisplayThumbnails;
