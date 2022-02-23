import React from 'react'
import { useEffect } from 'react'

const CloseIcon = () => {
  return (
    <div className='w-10 h-10 relative'>
      <div className='h-[3px] w-full bg-white rotate-45 absolute top-0 left-0 rounded'></div>
      <div className='h-[3px] w-full bg-white rotate-[315deg] absolute top-0 left-0 rounded'></div>
    </div>
  )
}

const VideoPlayer = ({ url, handleClose }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    body.classList.add("overflow-hidden")
    return () => {
      body.classList.remove("overflow-hidden")
    }
  }, [])
  return (
    <div className='flex justify-center items-center w-screen h-screen absolute top-0 left-0 z-20 bg-black bg-opacity-50 backdrop-blur-md'>
      <div className='w-auto md:w-[80%] md:h-[80%]'>
        <iframe width="100%" height="100%"
          src={url}>
        </iframe>
      </div>
      <button onClick={() => handleClose()} className='absolute top-10 right-10'>
        <CloseIcon />
      </button>
    </div>
  )
}

export default VideoPlayer