import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert(null);
}, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#27264e';
      showalert("Dark Mode has been Enabled","success");
      // document.title="TextPlayer-DarkMode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been Enabled","success");
      // document.title="TextPlayer-LightMode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextPlayer" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
          <Route exact path="/about"  element= { <About  mode ={mode}/>}/>
          <Route exact path="/" element={  <TextForm heading="Try TextPlayer-WordCounter ,Character Counter, RemoveSpace" mode={mode} showalert={showalert} />}/> 
 
          {/* </Route> */}
        </Routes>
   {/* <About/> */}
   </div>
   </Router>
  </>
  );
}

export default App;
