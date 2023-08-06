import React,{useState,useEffect} from 'react';
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';
// import MathJax from 'react-mathjax';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import ReactComponent from './ReactComponent';
// import { MathJax, MathJaxContext } from 'better-react-mathjax';
import questions from './Questions';
import q from './Nq';



const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };



const TestBox = () => {
    var answerArray = new Array(questions.length).fill(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [questionNumber,setQuestionNumber] = useState(1);
    const [answers, setAnswers] = useState(answerArray);
    const [showSolution, setShowSolution] = useState(false);
    const [rightAnswer, setRightAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [noAnswer, setNoAnswer] = useState(0);
    const [eqn, setEqn] = useState("An example is the equation $5x^4 = 100$");


    const actualAnswers = [2, 1, 4, 4, 3, 2];
    useEffect(()=>{
        answerArray = answers;
        answerArray[questionNumber-1] = selectedOption;
        setAnswers(answerArray);
        // setAnswers(...answerArray);
        console.log(answerArray);
        evaluate();
    },[selectedOption]);
    useEffect(()=>{
        setSelectedOption(answers[questionNumber-1]);
        setShowSolution(false);
        selectedShow();
        const element = document.getElementsByClassName("paper-question");
        // MathJax.typeset([element[0]]);
    },[questionNumber])
    function handleSelection(selected, e){
        if(selected===selectedOption){
            e.currentTarget.style.backgroundColor="#f9f9f9";
            e.currentTarget.firstChild.style.backgroundColor="#f9f9f9";
            e.currentTarget.firstChild.style.color="black";
            setSelectedOption(0);
        }else{
            setSelectedOption(selected);
            var sp = document.getElementsByClassName("options");
            for(var i=0; i<4; i++){
                sp[i].style.backgroundColor="#f9f9f9";
                sp[i].firstChild.style.backgroundColor="#f9f9f9";
                sp[i].firstChild.style.color="black";
            }
            e.currentTarget.style.backgroundColor="#d3f3f3";
            e.currentTarget.firstChild.style.backgroundColor="#070728";
            e.currentTarget.firstChild.style.color="#fff";
        }
    }
    function nextBtnHandler(){
        if(questionNumber<questions.length){
            setQuestionNumber(questionNumber+1);
        }else{
            setQuestionNumber(1);
        }
        // selectedShow();
    }
    function prevBtnHandler(){
        if(questionNumber>1){
            setQuestionNumber(questionNumber-1);
        }else{
            setQuestionNumber(questions.length);
        }
        // selectedShow();
    }
    function saveBtnHandler(){
        setShowSolution(!showSolution);
    }
    function selectedShow(){
        var sp = document.getElementsByClassName("options");
        for(var i=0; i<4; i++){
            sp[i].style.backgroundColor="#f9f9f9";
            sp[i].firstChild.style.backgroundColor="#f9f9f9";
            sp[i].firstChild.style.color="black";
        }
        if(answers[questionNumber-1] !== 0){
            sp[answers[questionNumber-1]-1].style.backgroundColor ="#d3f3f3";
            sp[answers[questionNumber-1]-1].firstChild.style.backgroundColor="#070728";
            sp[answers[questionNumber-1]-1].firstChild.style.color="#fff";
        }
    }
    function evaluate(){
        var notAttempted = 0;
        var right = 0;
        var wrong = 0;
        for(var i=0; i<answers.length; i++){
            if(answers[i]===0){
                notAttempted++;
            }else{
                if(answers[i]===actualAnswers[i]){
                    right++;
                }else{
                    wrong++;
                }
            }
        }
        setNoAnswer(notAttempted);
        setRightAnswer(right);
        setWrongAnswer(wrong);

    }



    




  return (
    <>
    {/* <button onClick={()=>{}}>set again</button> */}
    <div className='test-box hero-box'>
    <MathJaxContext version={3} config={config}>
        <div className='paper-box'>
            <div className='paper-details'>
                <span>{questions[questionNumber-1].question_tags}</span><br/>
                <b>question {questionNumber} of {questions.length}</b>
            </div>
            <div id="paper-q" className='paper-question'>
                {/* What is the value of 1 by one in the present scenarion where 1x2 is eqal to 4?
                By the way you know better so i will leave it upon you. S elect the best one<br/> */}
                 {/* <span><MathJax.Provider>
                <MathJax.Node inline formula={questions[questionNumber-1].qtest}  />
                <ReactComponent data={questions[questionNumber-1].question_code} />
                </MathJax.Provider></span>  */}
                {/* {questions[questionNumber-1].qimg} */}
                <ReactComponent data={questions[questionNumber-1].question_code} />

                <MathJax inline dynamic>
                    <ReactComponent data={questions[questionNumber-1].question_code} />
                    <p>{q[questionNumber-1].code}</p>
                    </MathJax>

            </div>
            <div className='paper-options'>
                <div className='option1 options' onClick={(e)=>{handleSelection(1,e);}} 
                    // style={{"backgroundColor":(selectedOption===1)?"#b1fdfd":"#f9f9f9"}}
                >
                    <div className='selected-option-indicator'>A</div>
                    {/* <span>That will be great to see 1 by 1.</span> */}
                <span><ReactComponent data={questions[questionNumber-1].options_code[0]} /></span>
                </div>
                <div className='option2 options' onClick={(e)=>{handleSelection(2,e);}} 
                    // style={{"backgroundColor":(selectedOption===2)?"#b1fdfd":"#f9f9f9"}}
                >
                    <div className='selected-option-indicator'>B</div>
                    {/* <span>That will be great to see 1 by 1.</span> */}
                <span><ReactComponent data={questions[questionNumber-1].options_code[1]} /></span>
                </div>
                <div className='option3 options' onClick={(e)=>{handleSelection(3,e);}} 
                    // style={{"backgroundColor":(selectedOption===3)?"#b1fdfd":"#f9f9f9"}}
                >
                    <div className='selected-option-indicator'>C</div>
                    {/* <span>That will be great to see 1 by 1.
                     By the way you know better so i will leave it upon you. S elect the best one
                     By the way you know better so i will leave it upon you. S elect the best one
                     By the way you know better so i will leave it upon you. S elect the best one</span> */}
                <span><ReactComponent data={questions[questionNumber-1].options_code[2]} /></span>
                </div>
                <div className='option4 options' onClick={(e)=>{handleSelection(4,e);}} 
                    // style={{"backgroundColor":(selectedOption===4)?"#b1fdfd":"#f9f9f9"}}
                >
                    <div className='selected-option-indicator'>D</div>
                    {/* <span>That will be great to see 1 by 1.</span> */}
                <span><ReactComponent data={questions[questionNumber-1].options_code[3]} /></span>
                </div>
                {showSolution &&
                <div className='solution-box'>
                    <b>Solution:</b><br/>
                    <span>
                        Adiabatic systems are always conservative in nature. In most of the system 
                        the pressure does not increases if temperature is kept constant.
                    </span>
                </div>
                }
                <div className='paper-btns'>
                    <div className='prev-btn p-btn' onClick={()=>{prevBtnHandler()}}><IoIosArrowDropleft/></div>
                    <div className='save-btn p-btn' onClick={()=>{saveBtnHandler()}}>{showSolution?"Hide":"Show"} Solution</div>
                    <div className='next-btn p-btn' onClick={()=>{nextBtnHandler()}}><IoIosArrowDropright/></div>
                </div>
            </div>
        </div>
        <div className='status-box'>
            <div className='total-box'>
                <div className='outer-box'>
                    <div className='inner-box'>
                        <span><b>{parseInt(((rightAnswer+wrongAnswer)*100)/questions.length)}%</b></span>

                    </div>
                </div>
                <span>total {rightAnswer + wrongAnswer} out of {questions.length} attempted</span>
            </div>
            <div className='accuracy-box'>
                <div className='field right-q'>
                    <b>{rightAnswer}</b><br/>
                    Right<br/>Answers
                </div>
                <div className='field wrong-q'>
                    <b>{wrongAnswer}</b><br/>
                    Wrong<br/>Answers
                </div>
                <div className='field noseen-q'>
                    <b>{noAnswer}</b><br/>
                    Not<br/>attempted
                </div>
            </div>
        </div>
        </MathJaxContext>
        </div>
    </>
  )
}

export default TestBox;