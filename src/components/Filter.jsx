import React from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const Filter = () => {
  const selectedSubject = 0;
  return (
    <div className='filter-box'>
        <div className='chapter-search row-flex'>
            <input type='text' value="" placeholder={"search in all"} />
            <button><RiSearchEyeLine/></button>
        </div>
        <div className='tag'>
          <span><b>Subjects</b></span>
        </div>
        <div className='subject-select'>
            <div className='btn active row-flex'><span>Show All Subjects</span>
              { (selectedSubject===0) &&
                <span className='check'><AiOutlineCheckCircle/></span>
              }
            </div>
            <div  className='btn'>Mathematics</div>
            <div className='btn'>Physics</div>
            <div className='btn'>Chemistry</div>
        </div>
        <div className='tag'>
          <span><b>Chapters</b></span>
        </div>
        <div className='chapter-select'>
            <button className='btn active'> Show All Chapters</button><br/>
            <button className='btn'>1- Error and Measurment</button><br/>
            <button className='btn'>2- Newtons Laws Of Motion</button><br/>
            <button className='btn'>3- Electrostatics</button><br/>
            <button className='btn'>4- Kinetic Theory of Gases</button><br/>
            <button className='btn'>5- Magnetism and Current</button><br/>
            <button className='btn'>6- Chemistry</button><br/>
        </div>
    </div>
  )
}

export default Filter;