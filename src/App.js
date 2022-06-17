
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='#032741';
    showAlert('Dark Mode is Enabled', 'success');
  }
  else{
    setMode('light')
    document.body.style.backgroundColor ='white';
    showAlert('Light Mode is Enabled', 'success');
  }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} about = "About TextUtils"></Navbar>
    <Alert alert={alert}/>
    <div className="container ">
    {/* <Routes>
          <Route exact path="/about"
            element={<About />}>
          </Route> */}
          {/* <Route exact path="/" */}
           {/* element={<TextForm heading= "Enter your Text to analyze below" showAlert={showAlert} mode={mode}/>}>   */}
            {/* </Route> */}
    {/* </Routes> */}
           <TextForm heading= "Enter your Text to analyze below" showAlert={showAlert} mode={mode}/>  
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
