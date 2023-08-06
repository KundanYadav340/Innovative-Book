import React,{useState,useEffect} from 'react';
import MathJax from 'react-mathjax';
import CodeToJson from './CodeToJson';
import JsonToComponent from './JsonToComponent';
import EquationList from './EquationList';
import { app ,db} from "../firebase/initializeApp";
import { query,limit, collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import {fetchFromCollection} from './../firebase/fetchFunctions';
// import RenderJson from './RenderJson';
// import ReactComponent from './ReactComponent';
import Matht from './Matht';

const Home = () => {
  const [test, setTest] = useState(null);
  const [tex, setTex] = useState(0);
  const eq = ['\\int_{0}^{\\pi} \\sin(x) dx = 2', 'x^2 + y^2 = r^2'];
  useEffect(()=>{
    console.log(test);
  },[test])
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromCollection("stream");
      setTest(data);
    };
    fetchData();
  }, []);
  const equations = [
    '\\frac{dy}{dx} = 3x^2 + 2x + 1',
    'e^{i\\pi} + 1 = 0',
    '\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}',
    '\\sum_{i=1}^n i = \\frac{n(n+1)}{2}',
    'f(x) = \\begin{cases} x^2, & x < 0 \\\\ 0, & x \\geq 0 \\end{cases}',
  ];
  
  const fetchData = async (path) =>{
  const data = await fetchFromCollection("stream");
    console.log("data",data);
    setTest(data);
  }
  // setTest(fetchFromCollection("stream"));
  // fetchData("gh");


  // fetchData("stream");
  return (
    <div>
    <Matht tex={eq[tex]} />
    <button onClick={()=>{setTex(tex+1);MathJax.typsest();}}>click</button>
      <CodeToJson />
      <JsonToComponent />
      {/* <RenderJson /> */}
      {/* <ReactComponent /> */}
      {/* <MathJax.Provider>
        <MathJax.Node formula="\frac{1}{2}\int_{-\infty}^{\infty}x^2 e^{-\frac{x^2}{2}}dx" />
    </MathJax.Provider> */}
    <EquationList equations={equations} />
    </div>
  )
}

export default Home;

