import React from 'react';
import ForumCard from '../components/ForumCard';
import asked from '../components/Asked';

const Community = () => {
  return (
    <>
      <div className='community-box hero-box'>
        {asked.map((value, index)=>((<ForumCard key={index} data={value}/>)))}
      </div>

    </>
  )
}

export default Community;