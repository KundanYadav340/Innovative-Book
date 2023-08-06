import React from 'react';
import ShowPlaylist from '../components/ShowPlaylist';
import {BiLike, BiShare, BiBulb} from 'react-icons/bi';
import video1 from './../videos/vid1.mp4';

const VideoPlayer = () => {
  return (
    <>
    <div className='video-box hero-box'>
    <div className='video-player-box'>
        <div className='video-screen'>
            <div className='screen'>
                <video width="100%"  controls autoplay={true} loop={true}>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='video-name'>thermodynamics part 1 </div>
            <div className='btns'>
                <div className='left'>
                    <div className='like btn'><BiLike/><span>1.1K</span></div>
                    <div className='share btn'><BiShare/><span>Share</span></div>
                </div>
                <div className='right'>
                    <div className='doubt-btn btn'><BiBulb/><span>Ask a Doubt</span></div>
                </div>
            </div>
        </div>
        {/* <div className='video-extra'>
        </div> */}
    </div>
    <div className='video-playlist-box'>
        <ShowPlaylist image="" name="" time="" isPlaying="" views="" />
        <ShowPlaylist image="" name="" time="" isPlaying="" views="" />
        <ShowPlaylist image="" name="" time="" isPlaying="" views="" />
        <ShowPlaylist image="" name="" time="" isPlaying="" views="" />
        <ShowPlaylist image="" name="" time="" isPlaying="" views="" />
    </div>
    </div>
    </>
  )
}

export default VideoPlayer;