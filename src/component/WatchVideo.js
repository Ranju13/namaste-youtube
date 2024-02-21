import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeToggle } from '../utils/appSlice';
import { API_KEY } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [video, setVideo] = useState([])

useEffect(()=> {
    dispatch(closeToggle())
},[dispatch])

useEffect(() => {
getVideo();
}, [])

const getVideo = async() => {
    console.log(searchParams.get('v'))
const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get('v')}&key=${API_KEY}`);
const json = await data.json();
console.log({json})
setVideo(json.items);
}

  return (
    <div className='m-6'>
        <iframe 
        className='rounded-xl'
            width="1200" 
            height="600" 
            src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=dPUWFqbVWeds_-f4&autoplay=1`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
        {video.length !== 0 && <div>
            <div className='font-bold text-lg my-2'>{video[0].snippet.title}</div>
            <div className='font-semibold text-lg my-2'>{video[0].snippet.channelTitle}</div>
            
            </div>}
    </div>
  )
}

export default WatchVideo