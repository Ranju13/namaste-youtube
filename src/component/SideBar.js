import React from 'react'
import { BiSolidHome, BiTrendingUp, BiShoppingBag } from "react-icons/bi";
import { SiShortcut } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { AiOutlineHistory } from "react-icons/ai";
import { LiaFileVideoSolid } from "react-icons/lia";
import { CiStopwatch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import SideBarTitle from './SideBarTitle';

const SideBar = () => {
  const isMenuOpen = useSelector((state)=> state.app.isMenuOpen);
  return (
    isMenuOpen &&<div className='p-42 shadow-lg'>
      <div>
        <ul className='m-2 p-3'>
          <SideBarTitle icon={<BiSolidHome size={20}/>} name={'Home'} />
          <SideBarTitle icon={<SiShortcut size={20}/>} name={'Shorts'} />
          <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'Subscriptions'} />
        </ul>
      </div>
      <hr />
      <div>
        <h2 className='font-bold ml-1'>You</h2>
        <ul className='m-2 p-3'>
        <SideBarTitle icon={<GrChannel size={20}/>} name={'Your channel'} />
        <SideBarTitle icon={<AiOutlineHistory size={20}/>} name={'History'} />
        <SideBarTitle icon={<LiaFileVideoSolid size={20}/>} name={'Your videos'} />
        <SideBarTitle icon={<CiStopwatch size={20}/>} name={'Watch later'} />
        </ul>
      </div>
      <hr />
      <div>
        <h2 className='font-bold ml-1'>Explore</h2>
        <ul className='m-2 p-3'>
        <SideBarTitle icon={<BiTrendingUp size={20}/>} name={'Trending'} />
        <SideBarTitle icon={<BiShoppingBag size={20}/>} name={'Shopping'} />
        <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'Music'} />
        <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'Movies'} />
        <SideBarTitle icon={<BiSolidHome size={20}/>} name={'Live'} />
        <SideBarTitle icon={<SiShortcut size={20}/>} name={'Gaming'} />
        <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'News'} />
        <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'Sports'} />
        <SideBarTitle icon={<SiShortcut size={20}/>} name={'Learning'} />
        <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'Fashion & Beauty'} />
        <SideBarTitle icon={<MdOutlineSubscriptions size={20}/>} name={'Podcasts'} />
        </ul>
      </div>
    </div>
  )
}

export default SideBar