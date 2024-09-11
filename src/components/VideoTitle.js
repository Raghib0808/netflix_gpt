import React, { useState } from 'react'

const VideoTitle = ({title,overview}) => {
    const [over,setover]=useState([false]);
    const view=()=>{
        setover(!over)
        console.log('df');
        
    }
    // console.log('d');
    
    return (
    <div className='video '>
        <h1 >{title}</h1>
        {over && <p>{overview}</p>}
        <div className='vb'>
            <button className='vbutton'>Play</button>
            <button className='vbutton' onClick={view}>More Info button</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
