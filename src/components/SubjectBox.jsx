import React from 'react';
import SubjectGraph from './SubjectGraph';
import ChapterCard from './ChapterCard';

const SubjectBox = ({name}) => {
  return (
    <div className='card-box'>
            <div className='title'>
                <b>{name}</b>
            </div>
            <div className='graph'>
                <SubjectGraph widths={700} />
            </div>
            <div className='cards'>
                <ChapterCard />
                <ChapterCard />
                <ChapterCard />
                <ChapterCard />
            </div>
        </div>
  )
}

export default SubjectBox;