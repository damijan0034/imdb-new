import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3
                 lg:grid-cols-4 sm:p-10 p-3 md:px-20 '>
        {
            results.map((result)=>{
                return(
                    <Card key={result.id} result={result} />
                )
            })
        }
    </div>
  )
}

export default Results