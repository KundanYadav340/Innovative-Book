import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io'

const SidebarTopicShow = ({topics, selectedTopic, getTopic}) => {
  return (
    <>
        {topics.map((item)=>(
            <>
            <div id={item.topic_file_name} className='topic-name' onClick={()=>{getTopic(item.topic_file_name)}}
                style={{backgroundColor:(item.topic_file_name===selectedTopic)?"white":null,
                        borderLeft:(item.topic_file_name===selectedTopic)?"3px solid #2ac5b3":null
                
                }}
            >
            <div className='name'>
            {/* {(item.topic_file_name===selectedTopic)?<span><BsCheckCircleFill/></span>:null} */}
            <span
                style={{rotate:(item.topic_file_name===selectedTopic)?"90deg":"0deg"}}
            ><IoIosArrowForward/></span>
            {item.topic_name}
            </div>
             {/* <div className='subtopic'
            style={{height:(item.topic_file_name===selectedTopic)?"fit-content":"0px"}}
            >
                            <ul>
                            {item.sub_topics.map((sub)=>(
                                <li>{sub}</li>
                            ))}
                            </ul>
                        </div> */}
                    </div> 
            </>

        ))}
    </>
  )
}

export default SidebarTopicShow;