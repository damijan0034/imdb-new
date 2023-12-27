"use client"

import {MdLightMode} from "react-icons/md"
import {FaMoon} from "react-icons/fa6"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const DarkModeSwitch = () => {
    const{theme,setTheme}=useTheme()

    const[mounted,setMounted]=useState(false)

    useEffect(()=>{
      setMounted(true)
    },[])
    
    if(!mounted){
      return null
    }
  return (
    <div className="flex">
        {
            theme === "dark" && <MdLightMode 
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={()=>setTheme("light")} />
        }
        {
            theme === "light" && <FaMoon 
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={()=>setTheme("dark")} />
        }
        
        
    </div>
  )
}

export default DarkModeSwitch