import React from 'react';
import thumb from './../videos/thumb.jpg'

const ShowPlaylist = () => {
  return (
    <div className='video-card'>
        <div className='video-thumbnail'>
          <img src={thumb}  width="100%" alt="screen" />
        </div>
        <div className='video-details'>
            <span className='name'>Thermodynamics part 2</span><br/>
            <span className='time'>Length : 15min 08sec</span><br/>
            <span className='views'>110K views</span>
        </div>
    </div>
  )
}

export default ShowPlaylist;