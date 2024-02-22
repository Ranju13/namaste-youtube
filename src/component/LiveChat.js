import React, { useEffect, useState } from 'react'
import CommentList from './CommentList'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../utils/liveChatSlice';

const LiveChat = () => {

const dispatch = useDispatch();
const liveChat = useSelector(store => store.liveChat)

const [chatMessage, setChatMessage] = useState('')

useEffect(() => {
    const timer = setInterval(() => {
        dispatch(
        addChat({
                name:'Kannan', 
                message:'Wow!! Iam a big fan of you',
    })
    )} , 2000);

    return  () => clearInterval(timer)

},[])

const sendHandler = () => {
    dispatch(
        addChat({
                name:'Ranjeet Kannan', 
                message:chatMessage,
    })
    )
    setChatMessage('')
}

  return (
    <div>
    <div className='mx-4 border border-gray-300 w-[400px] h-[36rem] rounded-lg overflow-y-scroll'>
        <span className=' pl-2 mt-5 text-md'>LiveChat</span>
        <div className=''>
            { liveChat.map((m, i) => <CommentList key={i} name={m.name} message={m.message}/>)}
        </div>
        </div>
        <div className='border border-black w-[400px] ml-4 rounded-md'>
            <input type='text' className='w-[325px] px-2' value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}  />
            <button className='mx-2 px-2 border border-gray-400 rounded-md' onClick={sendHandler}>Send</button>
        </div>
        </div>
  )
}

export default LiveChat