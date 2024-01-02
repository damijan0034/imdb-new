"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBox = () => {
    const router=useRouter()

const[search,setSearch]=useState("")
const handleSubmit=(e)=>{
   e.preventDefault()

   router.push(`/search/${search}`)

}
    
  return (
    <form className='flex px-3 pt-6 '
        onSubmit={handleSubmit}
    >
        <input type="text" className='w-full bg-transparent focus:outline-none' 
        placeholder='Search Keyword...'
        onChange={((e)=>setSearch(e.target.value))}
        />
        <button className='text-gray-400 focus:outline-none'>Search</button>
    </form>
  )
}

export default SearchBox