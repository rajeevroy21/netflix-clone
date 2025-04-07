import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({overview,title}) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
       <h1 className='text-3xl font-bold'>{title}</h1>
       <p className='w-1/3 mt-2'>{overview}</p>
       <div className='mt-8 flex'>
        <button className='px-6 py-2 text-black bg-red-600 rounded-md hover:bg-red-500 flex'>
        <CiPlay1 size="24px" />
            Play   </button>
        <button className='ml-2 px-6 py-2 text-black bg-red-600 rounded-md hover:bg-red-500 flex'>
        <CiCircleInfo size="24px" />
            Watch More</button>
       </div>
    </div>
  )
}

export default VideoTitle
