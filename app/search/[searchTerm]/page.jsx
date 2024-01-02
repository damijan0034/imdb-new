import Results from '@/app/components/Results'



const SearchPage =async ({params}) => {
    
   const res=await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.searchTerm}&api_key=${process.env.API_KEY}`) 
   if(!res.ok){
    console.log("Error")
   }
   const data=await res.json()
   const results=data.results
   console.log(results)
  return (
   <Results results={results} />
  )
}

export default SearchPage