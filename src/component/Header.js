import React, { useEffect, useState } from 'react';
// import { AiFillAudio } from "react-icons/ai";
import { BiSearchAlt2, BiVideoPlus } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheSuggestion } from '../utils/searchSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchSuggestion, setsearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const cachedData = useSelector((store)=> store.search)

  const menuClickHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(()=> {
      if(cachedData[searchText]) {
        setsearchSuggestion(cachedData[searchText]);
      } else {
      getSuggestionData();
  }}, 300);
    return () => {
      clearTimeout(timer);
    }
  },[searchText])

  const getSuggestionData = async() => {
    const data = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+ searchText);
    const json = await data.json();
    setsearchSuggestion(json[1]);
    json[1].length !==0 &&dispatch(cacheSuggestion({[searchText] : json[1]}))
  }

  return (
    <div className='grid grid-flow-col p-2 mx-2 shadow-lg'>
      <div className='flex items-center col-span-1'>
        <img
          onClick={() => menuClickHandler()}
          className='h-6 cursor-pointer'
          alt='menu'
          src='https://t3.ftcdn.net/jpg/01/09/45/80/360_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg'
        />
        <img
          className='h-14 cursor-pointer'
          alt='logo'
          src='https://imgs.search.brave.com/ZKOjwcVxTFoL7nzF0Q2xxEBm6bcZbAHcbmnAQ0irCYE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc'
        />
      </div>
      <div className='ml-40 mt-3 col-span-10'>
        <div className=''>
          <input 
            className='w-1/2 border border-gray-700 rounded-l-full px-5 py-1 pt-1.5' 
            type='text' 
            placeholder='Search'
            value={searchText}
            onChange={(e)=> setSearchText(e.target.value)}
            onBlur={ () => setShowSuggestion(false)}
            onFocus={ () =>setShowSuggestion(true)}
         />
          <button className='border border-gray-700 px-4 py-2.5 rounded-r-full bg-gray-200'><BiSearchAlt2 /></button>
        </div>
        { showSuggestion && <div className='fixed bg-white shadow-lg px-3 py-2 w-[32rem] rounded-lg'>
          <ul>
            {searchSuggestion.map((s)=> <li key={s} className='px-2 py-1 hover:bg-gray-100 rounded-sm'>{s}</li>)}
            
            
          </ul>
        </div>}
        {/* <div className='border rounded-full p-3 m-4'><AiFillAudio/></div> */}
      </div>
      <div className='flex m-2 p-2 col-span-1'>
        <div className='m-1 p-1'><BiVideoPlus size={25} /></div>
        <div className='m-1 p-1'><MdNotificationsNone size={25} /></div>
        <div className='m-1 p-1'><FaUserCircle size={25} /></div>
      </div>
    </div>
  )
}

export default Header