import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const SearchBar = () => {
  const [user, token] = useAuth();
  const [searchItem, setSearchItem] = useState();
  const [videoData, setVideoData] = useState();

  async function handleSubmit(event) {
    // event.preventDefault();
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchItem}&type=video&key=AIzaSyCWD4yq3V_9fOG5aC1W003_FWvbjPrKkW0&part=snippet`
      );
      setVideoData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(videoData);

  return (
    <div>
      <div className="container">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchItem}
            onChange={(event) => setSearchItem(event.target.value)}
          ></input>
          <button>SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
