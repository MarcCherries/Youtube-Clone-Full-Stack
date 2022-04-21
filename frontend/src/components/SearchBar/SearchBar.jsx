import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const SearchBar = (props) => {
  const [user, token] = useAuth();
  const [searchItem, setSearchItem] = useState();
  const [videoData, setVideoData] = useState();

  // async function handleSubmit(event) {
  //   try {
  //     let response = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/search?q=${searchItem}&type=video&key=AIzaSyC2tIEfVwjXZHyRuFkT3z-iKLXt_OM95qs&part=snippet`
  //     );
  //     setVideoData(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return (
    <div>
      <div className="container">
        <form className="searchForm" onSubmit={props.handleSubmit}>
          <input
            type="text"
            name="search"
            onClick={(event) => setSearchItem(event.target.value)}
          ></input>
          <button type="submit">SEARCH</button>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
