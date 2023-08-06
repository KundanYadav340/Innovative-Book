import React from 'react';
import {TiArrowSortedUp, TiArrowSortedDown} from 'react-icons/ti';
import {RiDiscussFill, RiEyeFill, RiPencilFill} from 'react-icons/ri';
import thumb from './../videos/thumb.jpg';

const ForumCard = (props) => {
  return (
    <div className='card'>
        <div className='left'>
            <div className='user-img'>
                <img src={props.data.userImg} width="100%" alt="asked by" />
            </div>
            <div className='feedback'>
                <TiArrowSortedUp /><br/>
                <span>{props.data.upvotes}</span><br/>
                <TiArrowSortedDown /><br/>
            </div>
        </div>
        <div className='right'>
            <div className='question'>
                {props.data.time}<br/>
                <h4>{props.data.question}</h4>
            </div>
            <div className='first-answer'>
                {props.data.firstAnswer}
            </div>
            <div className='action'>
                <div className='left-side bars'>
                    <div className='btn'><RiDiscussFill/><span> {props.data.answers} answers</span></div>
                    <div className='btn'><RiEyeFill/><span> {props.data.views} views</span></div>
                </div>
                <div className='right-side bars'>
                    <div className='btn btn-answer'><RiPencilFill/><span>Answer</span></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ForumCard;