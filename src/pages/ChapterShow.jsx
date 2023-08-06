import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChapterShow = () => {
    const navigate = useNavigate();
    const stream = "jee";
    const subject = "physics";
    const chapter = "thermodynamics";
  return (
    <>
    <div>Chapters</div>
    <div>
        <button onClick={()=>{navigate(`user/${stream}/${subject}/${chapter}`)}}>Thermodynamics</button>
        <button onClick={()=>{navigate('/landingPage')}}>Landing Page</button>
    </div>
    </>
  )
}

export default ChapterShow;