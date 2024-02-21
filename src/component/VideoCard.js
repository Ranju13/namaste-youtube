import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='m-2 p-2 w-80 shadow-md rounded-lg'>
        <img className=' rounded-lg mb-1' src={thumbnails.medium.url} alt='thumbnail'/>
        <div className='mb-2'>{title}</div>
        <div>{channelTitle}</div>
        <div>{statistics.viewCount} views . {'1 hour ago'}</div>
    </div>
  )
}

export default VideoCard