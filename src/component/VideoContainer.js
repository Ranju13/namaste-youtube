import React, { useEffect, useState } from 'react'
import {YOUTUBE_POPULAR_API} from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])

const getVideos = async() =>{
  const data = await fetch(YOUTUBE_POPULAR_API);
  const json = await data.json();
  setVideos(json.items);
}

  return (
    <div className='mt-2 flex flex-wrap'>
      {videos.length !==0 && 
      videos.map((video) => <Link key={video.id} to={"watch?v="+ video.id}><VideoCard info={video}/></Link> )
      }
      </div>
  )
}

export default VideoContainer