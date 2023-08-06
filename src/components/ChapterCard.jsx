import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import {RiBook2Line, RiVideoLine, RiQuestionnaireLine, RiArrowRightSLine} from 'react-icons/ri'

const ChapterCard = () => {
    function generateRandomNumber() {
        return Math.floor(Math.random() * 101);
      }
    const percentage = generateRandomNumber();
    function getColorRed(percentage){
        return 255-(2.55*percentage);
    }
    function getColorGreen(percentage){
        return (2.55*percentage);
    }
    const red = getColorRed(percentage);
    const green = getColorGreen(percentage);
  return (
    <div className='chapter-card row-flex'>
        <div className='row-flex'>
            <div className='chapter-number row-flex'>
            <CircularProgressbar
  value={percentage}
  text={<tspan>01</tspan>}
  styles={buildStyles({
    // ${percentage}%
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '40px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(${red}, ${green}, 160)`,
    textColor: '#2d3136',
    trailColor: '#d6d6d6',
    backgroundColor: '#fff',
  })}
/>
            </div>
        <div>
        <div className='chapter-name'>
            Newtons Laws of motion
        </div>
        {/* <div className='performance'>
            You Performed <span>Excelently</span>
        </div> */}
        <div className='stats row-flex'>
            <div className='stat row-flex'>
                <span><RiBook2Line/></span>21 topics
            </div>
            <div className='stat row-flex'>
                <span><RiVideoLine/></span>6 hours Videos
            </div>
            <div className='stat row-flex'>
                <span><RiQuestionnaireLine/></span>236 questions
            </div>
            </div>
        </div>
        </div>
        <div className='btns'>
            {/* <button className='previous'>Previous Stats</button> */}
            <div className='prepare row-flex'><RiArrowRightSLine/></div>
        </div>
    </div>
  )
}

export default ChapterCard;

