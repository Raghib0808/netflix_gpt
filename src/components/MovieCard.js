import React from 'react'
import { IMG_CDN } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4' >
        <img alt='Movie card' src={IMG_CDN+posterPath}/>
      
    </div>
  )
}

export default MovieCard
