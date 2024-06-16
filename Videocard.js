import React from 'react'

const Videocard = ({info}) => {
    
    console.log("Anand",info);
    return (

    <div className='p-2 m-2 w-72 border-2 shadow-lg'>
    <img 
    className='rounded-lg'
    src={info?.snippet?.thumbnails?.medium?.url} 
    alt='thumbnails'/>
    <ul>    
       <li className=''>{info?.snippet?.channelTitle}</li>
       <li className='font-bold'>{info?.snippet?.title}</li>  
       <li>{info?.statistics?.viewCount} views</li>  
    </ul>     
    </div>
  )
}

export default Videocard