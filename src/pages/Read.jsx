import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const Read = () => {
    const [Component, setComponent] = useState(null);
    const {stream, subject, chapter, topic} = useParams();
    useEffect(() => {
        import(`./stream/${stream}/${subject}/${chapter}/${topic}`).then(({default:C1}) => {
          setComponent(C1);
          console.log(C1);
        });
      }, [topic]);
  return (
        <div className='read-box hero-box'>
            {Component ? Component : null}
        </div> 
  )
}

export default Read;