// General Imports
import React, { useState, useEffect } from 'react';

import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth
 from "./hooks/useAuth";
 import axios from "axios";
 

function App() {

const [defaultData, setDefaultData] = useState({
    "items": [   {
        "id": {
            "videoId": "k7JVUR2MOhM"
        },
        "snippet": {
            "title": "Funniest Cats And Dogs Videos - Best Funny Animal Videos 2021  🤣",
            "description": "Today's funny compilation of dogs and cats will make you laugh and will give you a positive charge for the whole day.\n\nWatch and enjoy our last videos and make your day better 😇: \n1️⃣ https://youtu.be/Klp5X-RWsWA  😃🐹 - Very funny videos\n2️⃣  https://youtu.be/ivMt-k6hy9I 🤣🦆 - Funny cats, dogs and other animals\n3️⃣  https://youtu.be/H0-NRHBohK8 😇😺 - Cute and funny animals\n4️⃣  https://youtu.be/0_wTxfkEEg8  😍🙈 - Best funny animals of the september\n5️⃣ https://youtu.be/yCYiEZ--Vyo 😅🐴 - Big compilation with farm and wild animals\n\nI hope you enjoyed our funny videos and don't forget to SUBSCRIBE 🙏 us and share with your friends!  😇\n\nThanks for wonderful music by Vexento - \"Digital Hug\"\nhttps://www.youtube.com/user/Vexento",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/k7JVUR2MOhM/default.jpg",
                    "width": 120,
                    "height": 90
                },
               
            },
         
        }
    },
  
        {
            "id": {
                "videoId": "0xqkksHov58"
            },
            "snippet": {
                "title": "The Funniest Cat Videos on the Internet 🤣🐱",
                "description": "Hope you enjoy these funny cat videos. I'm very passionate about cats, especially funny cats and this channel is dedicated to bring you the funniest animal compilation you have ever seen. Subscribe if you liked it!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0xqkksHov58/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    
                },
               
            }
        },
        {
            
            "id": {
                "kind": "youtube#video",
                "videoId": "RKU6x1n9Hak"
            },
            "snippet": {
                "title": "FORGET CATS! Funny KIDS vs ZOO ANIMALS are WAY FUNNIER! - TRY NOT TO LAUGH",
                "description": "These videos are the best! What happened to these kids at zoo is soooo hilarious! Watch this and try not to laugh, impossible! Only the best and the funniest kid at zoo fail videos! What is your favorite clip? :) Hope you like our compilation, please share it and SUBSCRIBE! Watch also our other videos!\n\nThe content in this compilation is licensed and used with authorization of the rights holder. If you have any questions about compilation or clip licensing, please contact us: tigerlicensing@gmail.com\n\nWANT TO SEE YOUR PET IN OUR COMPILATIONS?\nSend your clips or links to: tigerlicensing@gmail.com\n\nFor more funny videos & pictures visit and like our Facebook page:\nhttps://www.facebook.com/tigerstudiosfun\n\nMUSIC:\n\n\"Feelin Good, Monkeys Spinnin Monkeys\" Kevin MacLeod (incompetech.com) \nLicensed under Creative Commons: By Attribution 3.0\nhttps://creativecommons.org/licenses/by/3.0/\n\n---\n\n#pet #animal #kid #zoo #fail #funny #compilation #laugh #fun #fail #hilarious #cute\n---\nThe content in this compilation is licensed through our agreement with Collab network. Music in this compilation is free or just needs to be attributed in video description.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/RKU6x1n9Hak/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                },
            }
        },
        {
            "id": {
                "videoId": "PP7toELbdqA"
            },
            "snippet": {
                "title": "Cutest Babies Play With Dogs And Cats Compilation || Cool Peachy",
                "description": "Cutest Babies Play With Dogs And Cats Compilation || Cool Peachy.\n► Link video: https://youtu.be/PP7toELbdqA\n► Our playlist:\n♥️ Best funny video: https://bit.ly/3wudKq8\n♥️ Funniest Baby Videos Compilation: https://bit.ly/3hCocGw\nCool Peachy is a channel which upload funny video of cute babies and animals. We believe that the innocence and silliness of baby and animal will make your day brighter.\nThanks for watching! Wait to see more new videos every day on Cool Peachy!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PP7toELbdqA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                   
                },
            }
        },
        {
            "id": {
                "videoId": "PSjF0HhtdU8"
            },
            "snippet": {
                "title": "Funniest Cat Videos on the Planet #37 - Best Funny Animal Videos 2022 | Life Funny Pets",
                "description": "Funniest Cat Videos on the Planet #37 - Best Funny Animals Videos 2022 | Funny Cats And Dogs Videos - Try Not To Laugh - Cute Pets Videos\n🔔 Subscribe: https://bit.ly/2Tft6xq\n\n► 𝗪𝗮𝘁𝗰𝗵 𝗺𝗼𝗿𝗲 𝗰𝘂𝘁𝗲 videos:\n○ Funny Baby : https://www.youtube.com/playlist?list=PLx-mJGMbSLQCxwzrZ1te7YOe2vpoS3-HZ\n\nLIFE FUNNY PETS brings you funny cat and dog videos but also the funniest videos from the wild! Everyone is an animal lover, so why not stay, relax and enjoy our videos showing that animals are just as funny as people! \nBe sure to subscribe for more!\n\n#FunnyCatVideos #LifeFunnyPets #FunniestCats #Funnyanimals  #wildlife #pets",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PSjF0HhtdU8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                   
                },
            }
        },
        {
            "id": {
                "videoId": "E4kIVYofuyQ"
            },
            "snippet": {
                "title": "Best Funny Animal Videos 2022 😂 - Funniest Dogs And Cats Videos 😺😍",
                "description": "This cute funny animals compilation with cats and dogs will make you laugh all day long 😇😇😇 \n\nWatch last funny videos to make your day better 😍: \n1️⃣ https://youtu.be/VY-KBxbMjBI 😺😃 - Cute Animal Videos - Try not to laugh\n2️⃣ https://youtu.be/lEoEBfRrUFI 🤣 - New Funny Tik Tok Pets Videos \n3️⃣ https://youtu.be/xMjxOTO_PBs 🦆 - Best funny cats, dogs fails and other animal videos\n4️⃣ https://youtu.be/aWPlV82Wxr0 😃🐹 - Funniest Dogs And Cats Compilation 2022\n5️⃣ https://youtu.be/hrchTnC2XNk  🐴🦍 - Funniest Wild And Farm Animals \n\n\n I hope you enjoyed our funny videos and don't forget to SUBSCRIBE 🙏 us and share this video with your friends!  😇 - https://youtu.be/E4kIVYofuyQ\nTry not to laugh!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/E4kIVYofuyQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                   
                },
            }
        }
    ],
})
const [user, token] = useAuth();
const [searchItem, setSearchItem] = useState()
const [videoData, setVideoData] = useState(defaultData)


async function handleSearch(event) {
event.preventDefault()
  try {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchItem}&type=video&key=AIzaSyCWD4yq3V_9fOG5aC1W003_FWvbjPrKkW0&part=snippet`);
    setVideoData(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

console.log(defaultData)
console.log(videoData)

  return (
    
      
    
    <div className="background-image">
      
      <Navbar />
      
  

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage handleSearch={handleSearch} setSearchItem={setSearchItem} videoData={videoData} defaultData={defaultData}/>
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/VideoPage/:video/" element={<PrivateRoute><VideoPage videoData={videoData} defaultData={defaultData}  /></PrivateRoute>} />

      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
