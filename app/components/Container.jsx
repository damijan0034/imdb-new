import React from 'react'

const Container = ({children}) => {
  return (
    <div className='sm:max-w-[85%] mx-auto  '>
        {children}
    </div>
  )
}

export default Container