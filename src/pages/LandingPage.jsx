import React,{useState,useEffect} from 'react';
import Filter from '../components/Filter';
import { RiArrowDownSLine } from 'react-icons/ri';
import Preparation from './Preparation';
import { fetchSubjectNames, fetchChapterNames } from '../firebase/preparationFunctions';

const LandingPage = () => {
    const [subjectNames, setSubjectNames] = useState([]);
    const [chapterNames, setChapterNames] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSubjectNames("stream/47WQWCWWr3QRK8pXZa2k/subjects");
      setSubjectNames(data);
      console.log(data);
    };
    fetchData();
    }, []);
    useEffect(() => {
        const fetchData1 = async () => {
          const data = await fetchChapterNames("chapters");
          setChapterNames(data);
          console.log(data);
        };
        fetchData1();
        }, []);
  return (
    <div className='star'>
        <div className='nav'>
            <h2>LADDER</h2>
            <div className='side row-flex'>
                <div className='page-btn'>
                    <div className='btn'>Home</div>
                    <div className='btn'>My Courses</div>
                    <div className='btn'>Tests</div>
                    <div className='btn active'>Preparation</div>
                    <div className='btn'>Contests</div>
                </div>
                <div className='course-select row-flex'>
                    <span>JEE Mains</span><RiArrowDownSLine />
                </div>
                <div className='profile'>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.nTK-yAWL01laY6CKjMEq3gHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="profile" />
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='left-panel'>
                <Filter  />
            </div>
            <div className='right-panel'>
                <Preparation/>
            </div>
        </div>
        <div className='footer'></div>
    </div>
  )
}

export default LandingPage;