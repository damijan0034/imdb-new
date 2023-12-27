"use client"

import React, { useEffect } from 'react'

const Error = ({error,reset}) => {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='text-center mt-40'>
        <h1 className='mb-10 text-red-500 text-lg'>Something went wrong</h1>
        <button className='hover:text-amber-500' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error