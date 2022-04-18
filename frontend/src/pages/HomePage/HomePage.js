import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [searchItem, setSearchItem] = useState()
  const [videoData, setVideoData] = useState({
    "kind": "youtube#searchListResponse",
    "etag": "eaCOzyVN0arwnWgwpKqs6OY4O9Q",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "krZhLtdi_x6JALjr9y0F6Fsbp-E",
            "id": {
                "kind": "youtube#video",
                "videoId": "YQHsXMglC9A"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "RDbKrp81fOmD8r9it_jdwX-HuVo",
            "id": {
                "kind": "youtube#video",
                "videoId": "mHONNcZbwDY"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "24_6pWZQYFbEO5vc42J98MpFbNw",
            "id": {
                "kind": "youtube#video",
                "videoId": "be12BC5pQLE"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-vkKMXvyCi-E_bCCHp7XDDRCiqY",
            "id": {
                "kind": "youtube#video",
                "videoId": "fazMSCZg-mw"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xopNDBszt3HNeW5-6fIpleYJaXk",
            "id": {
                "kind": "youtube#video",
                "videoId": "8wWxejCosj4"
            }
        }
    ]
});

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  
  // useEffect(() => {
  //   const fetchVideoData = async () => {
  //     try {
  //       let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=babyshark&type=video&key=AIzaSyC9RLs3URCNZr2H68witQ7MUJCN2c89pmw&part=snippet
  //       `);
  //       setVideoData(response.data);
  //       console.log(response.data)
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchVideoData();
  // }, [token,searchItem]);
  
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchItem}&type=video&key=AIzaSyC9RLs3URCNZr2H68witQ7MUJCN2c89pmw&part=snippet
      `);
      setVideoData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input type="text" name="search" value={searchItem} onChange={(event)=>setSearchItem(event.target.value) }>
        
        </input>
        <button>
SEARCH
        </button>
      </form>
      <iframe width='500' height='350' src={`https://www.youtube.com/embed/${videoData.items[0].id.videoId}`}></iframe>
      <iframe width='500' height='350' src={`https://www.youtube.com/embed/${videoData.items[1].id.videoId}`}></iframe>
      <iframe width='500' height='350' src={`https://www.youtube.com/embed/${videoData.items[2].id.videoId}`}></iframe>
      <iframe width='500' height='350' src={`https://www.youtube.com/embed/${videoData.items[3].id.videoId}`}></iframe>
    </div>
  );
};

export default HomePage;
