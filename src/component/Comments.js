import React from 'react'
import CommentList from './CommentList'

const Comments = () => {
  return (
    <div>
        <div className='text-lg font-bold mb-4'>Comments</div>
            <CommentList name={'@ranjeet'} message={'Hi This is my first comment'}/>
            <CommentList name={'@karthiksivakumar660'} message={'Hahaha ! Ultimate! I love Venkat body language'}/>

            <CommentList name={'@srinivasj2761'} message={'This episode both my favourites are there one Is Ravi’s laughter and naughty Venkat ❤'}/>
            <CommentList name={'@aswinkumar9392'} message={'My all time favourite combo Venkat ❤ Ravi....criminaty😂😂😂😂 Vera level'}/>
            <CommentList name={'Ranjeet'} message={'Hi This is my first comment'}/>
            <CommentList name={'Ranjeet'} message={'Hi This is my first comment'}/>
    </div>
  )
}

export default Comments