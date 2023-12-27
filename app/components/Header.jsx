
import Link from 'next/link'
import MenuItem from './MenuItem'
import {FaHome,FaInfoCircle} from "react-icons/fa"
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className='flex items-center'>
        <div className='flex container'>
            <MenuItem 
                title="HOME" 
                address="/home"
                Icon={FaHome}
                
                />
                 <MenuItem 
                title="ABOUT" 
                address="/about"
                Icon={FaInfoCircle}
                
                />
        </div>
        <div className='flex items-center space-x-5'>
          <DarkModeSwitch  />
          <Link href="/">
           
            <h2 className='text-2xl'>
              <span className='font-bold bg-amber-500 rounded-md
                    px-2 py-1 mr-2
              '>
                IMDb</span>
              <span className='text-xl hidden sm:inline'>Clone</span>
            </h2>
          </Link>
        </div>
    </div>
  )
}

export default Header