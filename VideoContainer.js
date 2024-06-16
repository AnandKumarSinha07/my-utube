import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import Videocard from "./Videocard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log("data", json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getvideos();
  }, []);


  return (
    <div className="flex flex-wrap mx-10">

      {videos.map(video=><Videocard index={video.id} info={video} />)}
      
    </div>
  );
};

export default VideoContainer;
