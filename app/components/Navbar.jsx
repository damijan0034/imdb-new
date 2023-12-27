import Link from 'next/link'
import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div  className='flex bg-[#fef3c7] dark:bg-[#4b5563]'>
        <div className='mx-auto flex  py-4 space-x-8 
        '>
           <NavbarItem title="Trending"  param="fetchTrending" />
           <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
    </div>
  )
}

export default Navbar