import React from 'react'
import Button from './Button'

import './FilterTag.css';

const FilterTag = () => {
  const tags = ['All', 'Music', 'Mixes', 'Tamil Cinema', 'Computer Programming', 'Trailers', 'Wickets', 'cricket', 'Street Food', 'News', 'Live', 'All', 'Music', 'Mixes', 'Tamil Cinema', 'Computer Programming', 'Trailers', 'Wickets', 'cricket', 'Street Food', 'News', 'Live']
  return (
    <div className='flex'>
      <div className='mt-4 rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-6 cursor-pointer  hover:bg-slate-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className='flex whitespace-nowrap overflow-x-scroll max-w-7xl scroll-hide'>
      {tags.map((tag, index) => <Button key={index} name={tag} />
      )}
      </div>
      <div className='mt-4 rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  )
}

export default FilterTag