import React, {useEffect} from 'react';
import { insertTopicName , insertPracticeQuestion} from '../firebase/adminInsertFunctions';
import question from './Questions';

const InsertTopic = () => {
    // useEffect(()=>{
        function insert(){
        const data = {
            topic_name :"Second law of thermodynamics",
            topic_id :"Topic3",
            topic_order : 3,
            topic_file_name:"Topic3",
            sub_topics:["Introduction", "Content", "Summary"]
        };
        const path = "stream/47WQWCWWr3QRK8pXZa2k/subjects/AvGul55Ux363JRM8SxzN/chapters/QpiuPx6Fs43a48JNuvTu/topics";
        insertTopicName(path, data);
    }
    function insertQuestion(){
        const data = question[2];
        const path = "/stream/47WQWCWWr3QRK8pXZa2k/subjects/AvGul55Ux363JRM8SxzN/chapters/QpiuPx6Fs43a48JNuvTu/topics/Topic1/practiceQuestions";
        insertPracticeQuestion(path, data);
    }
    // },[]);
  return (
    <>
    <div>insertTopic</div>
    <button onClick={()=>{insert();}}>Insert topic name</button>
    <button onClick={()=>{insertQuestion();}}>Insert Practice Question</button>
    </>
  );
}

export default InsertTopic;