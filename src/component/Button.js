import React from 'react';

const Button = ({ name }) => {
    return (
        <div className='scroll'>
            <button className='m-2 px-3 py-2 bg-gray-200 rounded-lg cursor-pointer whitespace-nowrap text-sm hover:bg-slate-300'>{name}</button>
        </div>
    )
}

export default Button