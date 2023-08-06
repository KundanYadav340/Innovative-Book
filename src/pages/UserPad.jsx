import React,{useState, useEffect, Component} from 'react';
import MathJax from 'react-mathjax';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Link, Outlet,useParams } from "react-router-dom";
import './userPad.css';
import SidebarTopicShow from '../components/SidebarTopicShow';
import theme from './../colors/themeColor';
import brandLogo from './../images/mainImg/brand-logo.png';
import { fetchTopicNames } from '../firebase/fetchFunctions';
import {IoIosArrowUp, IoIosArrowDown, IoIosBook, IoIosPeople, IoIosDocument, IoIosTabletLandscape, IoIosSettings, IoIosColorPalette, IoIosArrowDropleft, IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

const UserPad = () => {
    const navigate = useNavigate();
    const [sc, setSc] = useState(0);
    const [equation, setEquation] = useState('\\frac{1}{2}{({x}+{y})}');
    const [activeHeroBtn, setActiveHeroBtn] = useState(0);
    const [p, sp] = useState(theme[sc].p);
    const [s, ss] = useState(theme[sc].s);
    const [m, sm] = useState(theme[sc].m);
    const [l, sl] = useState(theme[sc].l);
    const [topicName, setTopicName] = useState([]);
    // const [stream, setStream] = useState("jee");
    // const [subject, setSubject] = useState("physics");
    // const [chapter, setChapter] = useState("thermodynamics");
    const [topic, setTopic] = useState("Topic1");
    const [preTopic, setpreTopic] = useState(topic);
    const [topicNameUploaded,setTopicNameUploaded] = useState(false);
    const {stream, subject, chapter} = useParams();
    const data = `F(s) = \\int_{0}^{\\infty} f(t)\\,e^{-st}\\,dt`;
    const [eq, seteq] =  useState(`f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`);
    const mather = '\\sum_{i=1}^n i = \\frac{n(n+1)}{2}';
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchTopicNames("stream/47WQWCWWr3QRK8pXZa2k/subjects/AvGul55Ux363JRM8SxzN/chapters/QpiuPx6Fs43a48JNuvTu/topics");
          setTopicName(data);
        };
        fetchData();
      }, []);

    useEffect(() => {
        sp(theme[sc].p);
        ss(theme[sc].s);
        sm(theme[sc].m);
        sl(theme[sc].l);
      },[sc]);
    //   useEffect(() => {
    //     document.getElementById(topic).style.backgroundColor="#fff";
    //     document.getElementById(topic).childNodes[1].style.height="fit-content";
    //     // document.getElementById(topic).childNodes[1].style.animation="hgh 10s linear";
    //     document.getElementById(topic).childNodes[0].childNodes[1].style.rotate="180deg";
    //     if(topic!==preTopic){
    //     document.getElementById(preTopic).style.backgroundColor=m;
    //     document.getElementById(preTopic).childNodes[1].style.height="0px";
    //     document.getElementById(preTopic).childNodes[1].style.animation="none";
    //     document.getElementById(preTopic).childNodes[0].childNodes[1].style.rotate="0deg";
    //     setpreTopic(topic);}
    //   },[topic]);





      useEffect(()=>{
        // console.log("topics",topicName);
        HeroBtn(activeHeroBtn);
        setTopicNameUploaded(true);
      },[topic]);
      const getTopic = (data) =>{
            setTopic(data);
      }
      const HeroBtn = (data) =>{
        setActiveHeroBtn(data);
        if(data===0){
            navigate(`read/${topic}`);
            // `read/${stream}/${subject}/${chapter}/${topic}`
        }
        if(data===1){
            navigate('video');
        }
        if(data===2){
            navigate('test');
        }
        if(data===3){
            navigate('community');
        }
      }
  return (
    <>
        <div className='u-navbar' style={{backgroundColor:p}}>
            <div className='left'>
                <div className='logo'>
                    <img src={brandLogo} alt="brand"></img>
                </div>
                <div className='subject' style={{color:"#2ac5b3"}}>
                    <h4>JEE Mains - Physics</h4>
                </div>
            </div>
            <div className='right'>
                <div className='performance'>
                    Completed (80%)
                    <div className='performance-level'>
                        <div className='indicator'></div>
                    </div>
                </div>
                <div className='profile' style={{color:l}} onClick={()=>{
                    if(sc===3){
                        setSc(0);
                    }else{
                    setSc(sc+1)}}}>
                    <IoIosColorPalette />
                </div>
            </div>
        </div>
        <div className='u-container'>
            <div className='sidebar'  style={{backgroundColor:m}}>
                <div className='chapter-name'>
                    <h3>Thermodynamics</h3>
                </div>
                <div className='topic-box'>
                {topicName.length>0 ?
                    <SidebarTopicShow topics={topicName} setTopic={setTopic} selectedTopic={topic} getTopic={getTopic}/>
                    :"No topics to show"
                }
                </div>
                <div className='test'></div>
            </div>
            <div className='hero'>
                <div className='hero-btn'>
                    <div className="btns active-btn" style={{backgroundColor:(activeHeroBtn===0)?p:m,color:(activeHeroBtn===0)?l:p}} onClick={()=>{HeroBtn(0);}}><IoIosBook/> <span>Read</span></div>
                    <div className="btns"  style={{backgroundColor:(activeHeroBtn===1)?p:m,color:(activeHeroBtn===1)?l:p}} onClick={()=>{HeroBtn(1);}}><IoIosTabletLandscape/> <span>Videos</span></div>
                    <div className="btns"  style={{backgroundColor:(activeHeroBtn===2)?p:m,color:(activeHeroBtn===2)?l:p}} onClick={()=>{HeroBtn(2)}}><IoIosDocument/> <span>Tests</span></div>
                    <div className="btns"  style={{backgroundColor:(activeHeroBtn===3)?p:m,color:(activeHeroBtn===3)?l:p}} onClick={()=>{HeroBtn(3)}}><IoIosPeople/> <span>Community</span></div>
                </div>
                 <div className='doc-box'>
                 {/* <div> */}
                 {/* <MathJax.Provider>
            <div>
                This is an inline math formula: <MathJax.Node inline formula='\textrm{ it contains the process and characteristics}\\ \sum_{i=1}^n i = \frac{n(n+1)}{2}' />
                And a block one:
 
                <MathJax.Node formula={eq} />
            </div>
        </MathJax.Provider> */}
        {/* <MathJax>
      <div>
        {mather}
      </div>
    </MathJax> */}
        {/* <button onClick={()=>seteq(data)}>click</button> */}
                 {/* </div> */}
                    {/* <HeroHandler stream={stream} subject={subject} chapter={chapter} topic={topic} screen={activeHeroBtn} /> */}
                    <div className='area'><Outlet /></div>
                    <div className='doc-box-footer'>
                        <div><IoIosArrowBack/><span>Previous</span></div>
                        <div><span>Next</span><IoIosArrowForward/></div>
                    </div>
                </div>

            </div>
        </div>
        
    </>
  )
}

export default UserPad;