import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import UserPad from './pages/UserPad';
import Home from './pages/Home';
import InsertTopic from './pages/InsertTopic';
import VideoPlayer from './pages/VideoPlayer';
import TestBox from './pages/TestBox';
import Community from './pages/Community';
import Read from './pages/Read';
import ChapterShow from './pages/ChapterShow';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChapterShow />} />
        <Route path="/user/:stream/:subject/:chapter/" element={<UserPad />} >
          <Route path="read/:topic" element={<Read />} />
          <Route path="video" element={<VideoPlayer />} />
          <Route path="test" element={<TestBox />} />
          <Route path="community" element={<Community />} />
        </Route>
        <Route path="/editTest" element={<Home />} /> 
        <Route path="/insertTopic" element={<InsertTopic />} />
        <Route path="/landingPage" element={<LandingPage />} />
        {/* <Route path="/testStatics" element={<TestStatics />} /> */}
      </Routes>

    </>
  );
}

export default App;
