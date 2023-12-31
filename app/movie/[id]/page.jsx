import Image from "next/image";


const API_KEY = process.env.API_KEY;

const MoviePage =async ({params}) => {
    const movieId=params.id
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId
        }?api_key=${API_KEY}` 
      );
      if (!res.ok) {
      console.log("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
      }
    
      const data = await res.json();
    
      
    console.log(data)
    
  return (
    <div className="sm:flex mt-2  sm:mt-10">
        <div className=" sm:flex-1 -">
        <Image src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                    alt='Image'
                    width={500} height={300}
                    className='sm:rounded-lg mx-auto p-1
                      
                    '
 
            />
        </div>
        <div className="flex-1 flex flex-col p-2 sm:p-1">
          <h1 className="font-bold mb-3 text-xl">{data.original_title}</h1>
          <p className="py-3 text-lg">
            <span className="font-bold text-xl">Overview:</span>
            {data.overview}</p>
            <p>
            <span className="font-bold text-xl mr-2">Data Released:</span>
            {data.release_date}
            </p>
            <p>
            <span className="font-bold text-xl mr-2"> Rating:</span>
            {data.vote_count}
            </p>
        </div>
      </div>
  )
}

export default MoviePage