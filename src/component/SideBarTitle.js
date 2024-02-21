import React from 'react'

const SideBarTitle = ({icon , name}) => {
  return (
    <li className='flex text-md font-semibold my-2 p-2 rounded-lg cursor-pointer hover:bg-slate-200'>
        <div className='size-16'>{icon}</div>
        <div className='ml-3'>{name}</div>
        </li>
  )
}

export default SideBarTitle