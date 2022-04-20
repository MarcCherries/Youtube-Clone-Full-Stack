import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const VideoCard = (props) => {
  console.log(props.videoData);

  return (
    <div className="flex-card">
      {props.videoData.items.map((entry, index) => {
        return (
          <div
            className="card-color"
            style={{ width: "30%", border: "2px solid black" }}
          >
            {entry.snippet && (
              <Link to={`/VideoPage/${entry.id.videoId}`}>
                <img src={entry.snippet.thumbnails.default.url} />
              </Link>
            )}
            {entry.snippet && <div>{entry.snippet.title}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;

//       <div class="card">
//         <img
//           class="card-img-top"
//           src={entry.snippet.thumbnails.default.url}
//           alt="Card image cap"
//         />
//         <div class="card-body">
//           <h5 class="card-title">{entry.title}</h5>
//           <p class="card-text">{entry.description}</p>
//           <a href="#" class="btn btn-primary">
//             Comment
//           </a>
//         </div>
//       </div>
//     );
//   })}
// </div>
