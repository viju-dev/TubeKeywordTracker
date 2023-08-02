import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchTool = () => {
  const [keyword, setKeyword] = useState("");
  const [searchVolume, setSearchVolume] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [regionCode, setRegionCode] = useState("IN");

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // get API-key from .env file
  const DEBOUNCE_DELAY = 1000; // 1 sec

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchSearchVolume();
    }, DEBOUNCE_DELAY); // automatic search if we stop for 1 sec while typing

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [keyword, regionCode]); 

  const fetchSearchVolume = async () => {
    setLoading(true); // will be true until data get loaded
    try {

      //requesting youtube videos data by specific keyword
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            q: keyword,
            // part: 'snippet',
            type: "video",
            regionCode: regionCode, // region code to get keyword volume by region
          },
        }
      );

      const searchCount = response.data.pageInfo.totalResults; // getting total results of data by that specific keyword
      setSearchVolume(searchCount); // setting searchVolume value
      setError(null); // if succesfull setting error as null
    } catch (err) {

      setError(err.message); // if error came setting error
      setSearchVolume("not found");// setting searchVolume as "not found" or ""
      // console.log(error);
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="search-container">
      <div className="header">
        <h1>YouTube Keyword Search Volume</h1>
        <p>Find out how popular your keywords are on YouTube!</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword"
          className="search-input"
        />
        <select
          value={regionCode}
          onChange={(e) => setRegionCode(e.target.value)}
          className="region-select"
        >
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
        <button onClick={fetchSearchVolume} className="search-button">
          Search
        </button>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        // if any error occur printing it on front
        <p className="error">{error}</p>
      ) : (
        <p className="search-result">
          Search volume for "{keyword}": {searchVolume}
        </p>
      )}
    </div>
  );
};

export default SearchTool;
