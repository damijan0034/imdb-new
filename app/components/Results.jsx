import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3
                 lg:grid-cols-4 p-10 md:px-20'>
        {
            results.map((result)=>{
                return(
                    <Card result={result} />
                )
            })
        }
    </div>
  )
}

export default Results