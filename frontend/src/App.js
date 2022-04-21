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
import CommentPage from './pages/CommentPage/CommentPage';
import { useParams } from "react-router-dom";
 

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
const { video } = useParams();

const [comments, setComments] = useState();


const [sim, setSim] = useState({
  items: [
    {
      id: {
        videoId: "oKU1HXMZYm4",
      },
      snippet: {
        title: "Dave Grohl - Smells Like Teen Spirit (@ the Ford)",
        description:
          "If you're interested, check out the version with only Dave's isolated drums—https://youtu.be/xgklKWtc5gk Plus, more Foo stuff on my IG feed... @bernstorm5000\n\n==================\n(Pardon the rolling shutter in the first half. Wanted to change the setting, but I would have missed the beginning of the song.)\n\nAt Dave's book release event for \"The Storyteller\" (at the Ford-Los Angeles, October 12, 2021). I've seen him play this song on the drums once or twice over the years (like at Cal Jam), but usually with a guest singer. This is the first time I've seen him play along to the original track—with Kurt's voice. What an emotional, funny, revealing, memorable night. Now gotta go read the book. \n\nFor those of you who have commented about how hard this must be for Dave...\n\nI agree... it probably wasn't easy for DG to get to this point where he was willing to share. At the show (and in his book and many interviews) he actually talked about the long path it took to get to not only TALK about Kurt, but to even want to listen to ANY music after his death. Still, a lot of time has passed, which always helps. And in the meantime, Dave has become quite a talented, thoughtful storyteller. I am sure, as difficult as it will always be to him, it probably also now a cathartic experience for him. At least I hope it is. \n\nMore from the show... https://youtu.be/spGIAyPM_ck\n\n(I posted photos and a little more video on my instagram—@bernstorm5000. There are many other shots of the Foos throughout my IG feed... and I also created the IG hashtag #album5000 for many of my rock shots.)\n\n\n#davegrohl #nirvana #smellsliketeenspirit #thefordla #foofighters #thestoryteller #drums",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/oKU1HXMZYm4/default.jpg",
            width: 120,
            height: 90,
          },
        },
      },
    },
    {
      id: {
        kind: "youtube#video",
        videoId: "tAGnKpE4NCI",
      },
      snippet: {
        title: "Metallica: Nothing Else Matters (Official Music Video)",
        description:
          "Metallica's official music video for “Nothing Else Matters,” from the album “Metallica.” Subscribe for more videos: https://tallica.lnk.to/subscribe\n\nDirected by Adam Dubin\nFilmed during the recording of The Black Album in Spring 1991 in North Hollywood, CA\n\nVideo Premiere Date: February 25, 1992\n\nListen to Metallica: https://tallica.lnk.to/listen\n\nFollow Metallica:\nWebsite & Store: http://www.metallica.com\nOfficial Live Recordings: http://www.livemetallica.com\nInstagram: http://www.instagram.com/metallica\nFacebook: http://www.facebook.com/metallica\nTwitter: http://www.twitter.com/metallica\n\n© 1992 Blackened Recordings\n\n#Metallica #TheBlackAlbum",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/tAGnKpE4NCI/default.jpg",
            width: 120,
            height: 90,
          },
        },
      },
    },
    {
      id: {
        videoId: "YlUKcNNmywk",
      },
      snippet: {
        title:
          "Red Hot Chili Peppers - Californication [Official Music Video]",
        description:
          "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. \n🔔 Subscribe to the channel: https://youtube.com/c/RedHotChiliPeppers/?sub_confirmation=1\n\nCalifornication available here: http://smarturl.it/getrhcpcalifornica\n\n\"Californication\" is the Red Hot Chili Peppers' fourth single and sixth track from their 1999 seventh studio album, Californication. Released as a single in 2000, the song reached #69 on the Billboard Hot 100 in the US, and #16 on the UK charts, and hit #1 on both US Mainstream Rock Tracks for 2 weeks and US Modern Rock Tracks for 1 week.\n\nFollow Red Hot Chili Peppers:\nWeb: https://redhotchilipeppers.com \nInstagram: https://instagram.com/chilipeppers  \nFacebook: https://facebook.com/chilipeppers \nTwitter: https://twitter.com/chilipeppers \nTumblr: https://chilipeppers.tumblr.com\n\nRed Hot Chili Peppers is a rock band renowned for their hits “Californication,” “Otherside,” “Scar Tissue,” “Dani California,” “Can’t Stop,” “Snow (Hey Oh),” and “Dark Necessities.” They worked with artists like George Clinton, Eddie Vedder, and Elton John — amassing billions of global streams and inducted into the “Rock and Roll Hall of Fame.”\n\nLyrics: \nPsychic spies from China try to steal your mind's elation\nAn' little girls from Sweden dream of silver screen quotation\nAnd if you want these kind of dreams, it's Californication\nIt's the edge of the world and all of Western civilization\nThe sun may rise in the east at least it settled in a final location\nIt's understood that Hollywood sells Californication\n\nPay your surgeon very well to break the spell of aging\nCelebrity skin, is this your chin or is that war you're waging?\nFirstborn unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nMarry me, girl, be my fairy to the world, be my very own constellation\nA teenage bride with a baby inside getting high on information\nAnd buy me a star on the boulevard, it's Californication\nSpace may be the final frontier but it's made in a Hollywood basement\nAnd Cobain, can you hear the spheres singing songs off Station to Station?\nAnd Alderaan's not far away, it's Californication\n\nBorn and raised by those who praise control of population\nWell, everybody's been there and I don't mean no vacation\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nDestruction leads to a very rough road but it also breeds creation\nAnd earthquakes are to a girl's guitar they're just another good vibration\nAnd tidal waves couldn't save the world from Californication\n\nPay your surgeon very well to break the spell of aging\nSicker than the rest, there is no test but this is what you're craving\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\n#OfficialMusicVideo #RedHotChiliPeppers #Californication #WeAreWarnerRecords",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YlUKcNNmywk/default.jpg",
            width: 120,
            height: 90,
          },
        },
      },
    },
  ],
});

async function fetchComments(video) {
 
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/?video_id=${video}`);
      setComments(response.data);
    
    } catch (error) {
      console.log(error.message);
    }
  }
  
  console.log(defaultData)
  console.log(video)
  console.log(comments)



  async function fetchSim(video) {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&maxResults=10&key=AIzaSyC7zKiEyRffpHACw6-bAylIosWEBIjc7QY&part=snippet`);

      console.log(response.data);
      setSim(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  

console.log(video)
console.log(sim);


async function handleSearch(event) {
event.preventDefault()
  try {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchItem}&type=video&key=AIzaSyC2tIEfVwjXZHyRuFkT3z-iKLXt_OM95qs&part=snippet`);
    setVideoData(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

console.log(comments)

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
        <Route path="/VideoPage/:video/" element={<PrivateRoute><VideoPage videoData={videoData} defaultData={defaultData} comments={comments} setComments={setComments} sim={sim} fetchComments={fetchComments} fetchSim={fetchSim}  /></PrivateRoute>} />
        <Route path="/CommentPage/:commentId/" element={<PrivateRoute><CommentPage comments={comments}/></PrivateRoute>} />

      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
