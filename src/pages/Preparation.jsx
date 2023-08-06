import React,{useState, useEffect} from 'react';
import SubjectBox from '../components/SubjectBox';

const Preparation = () => {
  
  return (
    <div className='preparation'>
        <div className='top'></div>
        <SubjectBox name="Mathematics"/>
        <SubjectBox name ="Physics"/>
        <SubjectBox name="Chemistry"/>
    </div>
  )
}

export default Preparation;