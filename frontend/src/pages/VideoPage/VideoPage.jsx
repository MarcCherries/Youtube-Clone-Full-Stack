import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";


const VideoPage = (props) => {
const [user, token] = useAuth();

const {video} = useParams()
const [sim, setSim] = useState({
    "items": [
        {
            "id": {
               
                "videoId": "eVTXPUF4Oz4"
            },
            "snippet": {
                "title": "In The End [Official HD Music Video] - Linkin Park",
                "description": "Watch the official music video for In The End by Linkin Park from the album Hybrid Theory.\nStream: https://apple.co/3lcCvTK\n\n🔔 Subscribe to the channel: https://bit.ly/1EBzxN2\n\nHybrid Theory 20th Anniversary Edition available here: http://lprk.co/ht20\nWatch the lyric video: https://youtu.be/g9j5UzxEhEM\n\nDirected by Joe Hahn and Nathan \"Karma\" Cox.\n\nApple Music: http://lprk.co/apple\nSpotify: http://lprk.co/spotify\nAmazon: http://lprk.co/amazon\n\nFollow Linkin Park:\nWeb: https://www.linkinpark.com/\nOfficial Community: https://LPUnderground.com\nFacebook: http://lprk.co/facebook\nInstagram: http://lprk.co/instagram\nTwitter: http://lprk.co/twitter\nMFR: https://musicforrelief.org\n\nLinkin Park is an alternative rock band renowned for their hits “Numb,” “In the End,” “What I’ve Done,” “Castle of Glass,” “New Divide,” “Crawling,” and “Faint.”  They worked with artists like Jay-Z, Metallica, Steve Aoki, and Paul McCartney — amassing billions of global streams and received the UN Global Leadership Award for their humanitarian work.\n\nLyrics:\nIt starts with one thing\nI don't know why\nIt doesn't even matter how hard you try\nKeep that in mind\nI designed this rhyme\nTo explain in due time\nAll I know\nTime is a valuable thing\nWatch it fly by as the pendulum swings\nWatch it count down to the end of the day\nThe clock ticks life away\n\nIt's so unreal\nDidn't look out below\nWatch the time go right out the window\nTrying to hold on, didn't even know\nI wasted it all just to watch you go\nI kept everything inside\nAnd even though I tried, it all fell apart\nWhat it meant to me\n\nWill eventually be a memory of a time when\nI tried so hard\nAnd got so far\nBut in the end\nIt doesn't even matter\nI had to fall\nTo lose it all\nBut in the end\nIt doesn't even matter\n\nOne thing, I don't know why\nIt doesn't even matter how hard you try\nKeep that in mind\nI designed this rhyme\nTo remind myself how\nI tried so hard\nIn spite of the way you were mocking me\nActing like I was part of your property\nRemembering all the times you fought with me\nI'm surprised it got so\nThings aren't the way they were before\nYou wouldn't even recognize me anymore\nNot that you knew me back then\nBut it all comes back to me in the end\nYou kept everything inside\nAnd even though I tried, it all fell apart\nWhat it meant to me will eventually be a memory of a time when\n\nI tried so hard\nAnd got so far\nBut in the end\nIt doesn't even matter\nI had to fall\nTo lose it all\nBut in the end\nIt doesn't even matter\n\nI've put my trust in you\nPushed as far as I can go\nFor all this\nThere's only one thing you should know\nI've put my trust in you\nPushed as far as I can go\nFor all this\nThere's only one thing you should know\n\nI tried so hard\nAnd got so far\nBut in the end\nIt doesn't even matter\nI had to fall\nTo lose it all\nBut in the end\nIt doesn't even matter\n\n#OfficialMusicVideo #LinkinPark #InTheEnd #WeAreWarnerRecords",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eVTXPUF4Oz4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                },
            }
        },
        {
            "id": {
                "videoId": "oKU1HXMZYm4"
            },
            "snippet": {
                "title": "Dave Grohl - Smells Like Teen Spirit (@ the Ford)",
                "description": "If you're interested, check out the version with only Dave's isolated drums—https://youtu.be/xgklKWtc5gk Plus, more Foo stuff on my IG feed... @bernstorm5000\n\n==================\n(Pardon the rolling shutter in the first half. Wanted to change the setting, but I would have missed the beginning of the song.)\n\nAt Dave's book release event for \"The Storyteller\" (at the Ford-Los Angeles, October 12, 2021). I've seen him play this song on the drums once or twice over the years (like at Cal Jam), but usually with a guest singer. This is the first time I've seen him play along to the original track—with Kurt's voice. What an emotional, funny, revealing, memorable night. Now gotta go read the book. \n\nFor those of you who have commented about how hard this must be for Dave...\n\nI agree... it probably wasn't easy for DG to get to this point where he was willing to share. At the show (and in his book and many interviews) he actually talked about the long path it took to get to not only TALK about Kurt, but to even want to listen to ANY music after his death. Still, a lot of time has passed, which always helps. And in the meantime, Dave has become quite a talented, thoughtful storyteller. I am sure, as difficult as it will always be to him, it probably also now a cathartic experience for him. At least I hope it is. \n\nMore from the show... https://youtu.be/spGIAyPM_ck\n\n(I posted photos and a little more video on my instagram—@bernstorm5000. There are many other shots of the Foos throughout my IG feed... and I also created the IG hashtag #album5000 for many of my rock shots.)\n\n\n#davegrohl #nirvana #smellsliketeenspirit #thefordla #foofighters #thestoryteller #drums",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/oKU1HXMZYm4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                },
            }
        },
        {
            "id": {
                "kind": "youtube#video",
                "videoId": "tAGnKpE4NCI"
            },
            "snippet": {
                "title": "Metallica: Nothing Else Matters (Official Music Video)",
                "description": "Metallica's official music video for “Nothing Else Matters,” from the album “Metallica.” Subscribe for more videos: https://tallica.lnk.to/subscribe\n\nDirected by Adam Dubin\nFilmed during the recording of The Black Album in Spring 1991 in North Hollywood, CA\n\nVideo Premiere Date: February 25, 1992\n\nListen to Metallica: https://tallica.lnk.to/listen\n\nFollow Metallica:\nWebsite & Store: http://www.metallica.com\nOfficial Live Recordings: http://www.livemetallica.com\nInstagram: http://www.instagram.com/metallica\nFacebook: http://www.facebook.com/metallica\nTwitter: http://www.twitter.com/metallica\n\n© 1992 Blackened Recordings\n\n#Metallica #TheBlackAlbum",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/tAGnKpE4NCI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                },
            }
        },
        {
            "id": {
                "videoId": "YlUKcNNmywk"
            },
            "snippet": {
                "title": "Red Hot Chili Peppers - Californication [Official Music Video]",
                "description": "Watch the official music video for Californication by Red Hot Chili Peppers from the album Californication. \n🔔 Subscribe to the channel: https://youtube.com/c/RedHotChiliPeppers/?sub_confirmation=1\n\nCalifornication available here: http://smarturl.it/getrhcpcalifornica\n\n\"Californication\" is the Red Hot Chili Peppers' fourth single and sixth track from their 1999 seventh studio album, Californication. Released as a single in 2000, the song reached #69 on the Billboard Hot 100 in the US, and #16 on the UK charts, and hit #1 on both US Mainstream Rock Tracks for 2 weeks and US Modern Rock Tracks for 1 week.\n\nFollow Red Hot Chili Peppers:\nWeb: https://redhotchilipeppers.com \nInstagram: https://instagram.com/chilipeppers  \nFacebook: https://facebook.com/chilipeppers \nTwitter: https://twitter.com/chilipeppers \nTumblr: https://chilipeppers.tumblr.com\n\nRed Hot Chili Peppers is a rock band renowned for their hits “Californication,” “Otherside,” “Scar Tissue,” “Dani California,” “Can’t Stop,” “Snow (Hey Oh),” and “Dark Necessities.” They worked with artists like George Clinton, Eddie Vedder, and Elton John — amassing billions of global streams and inducted into the “Rock and Roll Hall of Fame.”\n\nLyrics: \nPsychic spies from China try to steal your mind's elation\nAn' little girls from Sweden dream of silver screen quotation\nAnd if you want these kind of dreams, it's Californication\nIt's the edge of the world and all of Western civilization\nThe sun may rise in the east at least it settled in a final location\nIt's understood that Hollywood sells Californication\n\nPay your surgeon very well to break the spell of aging\nCelebrity skin, is this your chin or is that war you're waging?\nFirstborn unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nMarry me, girl, be my fairy to the world, be my very own constellation\nA teenage bride with a baby inside getting high on information\nAnd buy me a star on the boulevard, it's Californication\nSpace may be the final frontier but it's made in a Hollywood basement\nAnd Cobain, can you hear the spheres singing songs off Station to Station?\nAnd Alderaan's not far away, it's Californication\n\nBorn and raised by those who praise control of population\nWell, everybody's been there and I don't mean no vacation\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\nDestruction leads to a very rough road but it also breeds creation\nAnd earthquakes are to a girl's guitar they're just another good vibration\nAnd tidal waves couldn't save the world from Californication\n\nPay your surgeon very well to break the spell of aging\nSicker than the rest, there is no test but this is what you're craving\nFirst born unicorn\nHardcore soft porn\n\nDream of Californication\nDream of Californication\nDream of Californication\nDream of Californication\n\n#OfficialMusicVideo #RedHotChiliPeppers #Californication #WeAreWarnerRecords",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/YlUKcNNmywk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                },
            }
        }
    ]
})


  


useEffect(() => {


    const fetchSim = async () => {
    
    try{
  
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&key=AIzaSyAzGb_xlRzCVq7xVJZ0gmRSfzrhFxLq4HA&part=snippet`
    )  

    console.log(response.data)
    setSim(response.data)
    
    
    }catch(error){
      console.log(error.message)
    }
  }
  fetchSim();
},[video]
  )
console.log(sim)


    return ( 

<div className='video-page-container'>
    <div className='video-comment-container'>
   
    <iframe width='525' height='450'src={`https://www.youtube.com/embed/${video}`}></iframe>
   
    
    </div>

    <div className='thumbnail-container'>

    <Link to={`/VideoPage/${sim.items[0].id.videoId}`}>
    <div className="thumbnail-card">
    <p>{sim.items[0].snippet.title}</p>
    <img className="thumbnail" width='75' height='50' alt="thumbnail failed to load"src={`${sim.items[0].snippet.thumbnails.default.url}`}></img>
    </div>
    </Link>
   
    <Link to={`/VideoPage/${sim.items[1].id.videoId}`}>
    <div className="thumbnail-card">
    <p>{sim.items[1].snippet.title}</p>
    <img className="thumbnail" width='75' height='50' alt="thumbnail failed to load"src={`${sim.items[3].snippet.thumbnails.default.url}`}></img>
    </div>
    </Link>


    <Link to={`/VideoPage/${sim.items[2].id.videoId}`}>
    <div className="thumbnail-card">
    <p>{sim.items[1].snippet.title}</p>
    <img className="thumbnail" width='75' height='50' alt="thumbnail failed to load"src={`${sim.items[1].snippet.thumbnails.default.url}`}></img>
    </div>
    </Link>

 
    <Link to={`/VideoPage/${sim.items[3].id.videoId}`}>
    <div className="thumbnail-card">
    <p>{sim.items[1].snippet.title}</p>
    <img className="thumbnail" width='75' height='50' alt="thumbnail failed to load"src={`${sim.items[3].snippet.thumbnails.default.url}`}></img>
    </div>
    </Link>
    
    </div>
 

 
  

    
  

  
   
</div>

     );
}
 
export default VideoPage;






// useEffect(() => {
//     const fetchComments = async () => {
//         try {
//           let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/?video_id=${video}`, {
//             headers: {
//               Authorization: "Bearer " + token,
//             },
          
//           });
//           console.log(response.data)
          
//           setComments(response.data);
        
    
       
//         } catch (error) {
//           console.log(error.message);
//         }
      
//       };
//       fetchComments();
//     }, [token, video]
    
//     )