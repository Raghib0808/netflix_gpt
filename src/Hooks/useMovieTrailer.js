import React from 'react'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import {addTrailerVideo} from "../utils/movieSlice"


const useMovieTrailer = (movideId) => {
    const dispatch=useDispatch()
    
    // fetch trailer
    const getMovieVideos=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/' + movideId+'/videos?language=en-US', API_OPTIONS)
        const json=await data.json();
        console.log(json);

        const filterData=json.results.filter(video=>video.type=='Trailer')
        const trailer=filterData.length?filterData[0]:json.results[0];
         console.log(trailer);
         dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useMovieTrailer
