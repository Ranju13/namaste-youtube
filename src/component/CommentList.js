import React from 'react'

const CommentList = ({name, message}) => {
  return (
    <div className='flex mb-5'>
    <img 
        className='rounded-full w-12 mr-4'
        alt='logo' 
        src="https://yt3.googleusercontent.com/ytc/AIf8zZSAdRlSQoE0-KnG7uIGvB9pDM37kQobQM78HVP5dg=s176-c-k-c0x00ffffff-no-rj"
    />
    <div>
        <div className='font-semibold'>{name}</div>
        <div className='text-sm'>{message}</div>
    </div>
</div>
  )
}

export default CommentList