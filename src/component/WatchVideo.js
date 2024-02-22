import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeToggle } from '../utils/appSlice';
import { API_KEY } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Comments from './Comments';
import LiveChat from './LiveChat';

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
const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get('v')}&key=${API_KEY}`);
const json = await data.json();
setVideo(json.items);
}

  return (
    <div className='pl-2 pt-2'>
        <div className='flex '>
            <iframe 
            className='rounded-xl w-[1200px]'
                width="4200" 
                height="600" 
                src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=dPUWFqbVWeds_-f4&autoplay=1`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <LiveChat />
        </div>
        {video.length !== 0 && <div className='mb-8'>
        <div className='font-bold text-lg my-2'>{video[0].snippet.title}</div>
        <div className='flex items-center '>
            <div>
                <div className='m-1 p-1 cursor-pointer'><FaUserCircle size={40} /></div>
            </div>
            <div>
                <div className='font-semibold text-md mt-2 cursor-pointer'>{video[0].snippet.channelTitle}</div>
                <div className=' text-sm '>{'6.9K subscribers'} </div>
            </div>
            <div className='ml-6'>
                <button className='bg-black text-white px-4 py-2 m-2 rounded-3xl cursor-pointer'>Subscribe</button>
            </div>
            </div>
            
            </div>}
            <Comments />
    </div>
  )
}

export default WatchVideo