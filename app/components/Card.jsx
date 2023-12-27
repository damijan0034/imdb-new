import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineLike} from 'react-icons/ai'

const Card = ({result}) => {
  return (
    <div className='border border-gray-100 sm:p-3 cursor-pointer sm:shadow-md
        sm:hover:shadow-slate-400 sm:m-2 rounded-lg 
        transition-shadow duration-200 group m-1 overflow-hidden
    ' >
        <Link  href={"/"}  >
            <Image src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
                    alt='Image'
                    width={500} height={300}
                    className='sm:rounded-t-lg group-hover:opacity-80
                      transition-opacity duration-200 
                    '
 
            />
            <div className='p-2 space-y-2'>
              <p className=' line-clamp-2 text-lg'>
              {result.overview}
              </p>
              <h1 className='font-bold truncate text-xl'>
              {result.title}
              </h1>
              <div className='flex items-center justify-between'>
              <p>{result.release_date}</p>
              <div className='flex items-center space-x-2'>
                <AiOutlineLike />
                <span>{result.vote_count}</span>
              </div>
             
              </div>
           
            </div>
        </Link>
        
    </div>
  )
}

export default Card