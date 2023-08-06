import React, {useState, useEffect} from 'react';
// import TestBox from './TestBox';
// import VideoPlayer from './VideoPlayer';
// import Community from './Community';
// import Read from './Read';
import { Outlet } from 'react-router-dom';

const HeroHandler = ({stream, subject, chapter, topic, screen}) => {

  return (
    <>
    <div>
    <Outlet />
    {/* {(screen===0) &&
        <Read stream={stream} subject={subject} chapter={chapter} topic={topic} />
    }
    {(screen===1) &&
        <div className='video-box hero-box'>
            <VideoPlayer playlist="" video="" />
        </div>
    }
    {(screen===2) &&
        <div className='test-box hero-box'>
            <TestBox/>
        </div>
    }
    {(screen===3) &&
        <div className='community-box hero-box'>
            <Community />
        </div>
    } */}
    </div>
    </>
  )
}

export default HeroHandler;