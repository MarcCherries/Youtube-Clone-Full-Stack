import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [searchItem, setSearchItem] = useState()
  const [videoData, setVideoData] = useState({
    "items": [
        {
           
            "id": {
                "kind": "youtube#video",
                "videoId": "wTGfg8Dy8ak"
            },
            "snippet": {
                
          
                "title": "Verso la fine dei lavori di camperizzazione 🚐 Zona giorno con unboxing",
                "description": "Episodio 17: Siamo in Spagna per effettuare dei test di fine lavori e per capire cosa si può migliorare su Nirvan 2.0.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/wTGfg8Dy8ak/default.jpg",
                        "width": 120,
                        "height": 90
                    }
                },
             
            }
        },
        {
        
            "id": {
                "kind": "youtube#video",
                "videoId": "d9iLPs1Tjkc"
            },
            "snippet": {
                "title": "Nirvana Best Best Songs - Nirvana Greatest Hits Full Album",
                "description": "Nirvana Best Best Songs - Nirvana Greatest Hits Full Album.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/d9iLPs1Tjkc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
               
                },
             
            }
        },
        {
  
            "id": {
                "kind": "youtube#video",
                "videoId": "hTWKbfoikeg"
            },
            "snippet": {
                "title": "Nirvana - Smells Like Teen Spirit (Official Music Video)",
                "description": "Official Music Video for Smells Like Teen Spirit performed by Nirvana. Nevermind (30th Anniversary Edition) is available now: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hTWKbfoikeg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
           
                },
                
            }
        },
        {
           
            "id": {
                "kind": "youtube#video",
                "videoId": "fregObNcHC8"
            },
            "snippet": {
                "title": "Nirvana - The Man Who Sold The World (MTV Unplugged)",
                "description": "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fregObNcHC8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
            
                },
            
            }
        },
        {
     
            "id": {
                "kind": "youtube#video",
                "videoId": "vabnZ9-ex7o"
            },
            "snippet": {
      
              
                "title": "Nirvana - Come As You Are (Official Music Video)",
                "description": "REMASTERED IN HD!! Official Music Video for Come As You Are performed by Nirvana. 'Nevermind (30th Anniversary Edition)' is ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vabnZ9-ex7o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
          
                },
         
              
            }
        }
    ]
}
  );

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
      <Link to={`/VideoPage/${videoData.items[0].id.videoId}`}><img src={videoData.items[0].snippet.thumbnails.default.url}></img> </Link>
      <Link to={`/VideoPage/${videoData.items[1].id.videoId}`}><img src={videoData.items[1].snippet.thumbnails.default.url}></img> </Link>
      <Link to={`/VideoPage/${videoData.items[2].id.videoId}`}><img src={videoData.items[2].snippet.thumbnails.default.url}></img> </Link>
      <Link to={`/VideoPage/${videoData.items[3].id.videoId}`}><img src={videoData.items[3].snippet.thumbnails.default.url}></img> </Link>
      
    </div>
  );
};

export default HomePage;
