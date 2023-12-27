import Link from 'next/link'



const MenuItem = ({title,address,Icon}) => {
  return (
    <div>
         <Link href={address}
            className=' mx-4 hover:text-amber-400 '
         >
            <p className='hidden sm:block mx-4 sm:mx-6 py-4 text-sm' >
            {title}
            </p>
      
        <Icon className='sm:hidden sm:mx-4 mx-2 text-2xl'/>
    </Link>
    </div>
   
  )
}

export default MenuItem