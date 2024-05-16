// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, SetMode] = useState('light');
  const [alert, SetAlert] = useState(null);
  const [aboutMode, SetaboutMode] = useState('black');

  const ShowAlert = (message,type)=>{
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      SetAlert(null);
    },1500)
    
  }

  const SwitchMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.background = '#094989';
      document.body.style.color = 'white';
      ShowAlert("Dark Mode Activated","success");
      SetaboutMode("black")
      SetaboutMode("#094989")
    }
    else{
      SetMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      ShowAlert("Light Mode Activated","success");
      SetaboutMode("black")
    }
        
  } 
  return (
    <BrowserRouter>
    < Navbar title= "Textutils2" aboutUs = "About Us" mode={mode} SwitchMode={SwitchMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
      <Routes>
            <Route exact path="/about" element={<About aboutMode={aboutMode}/>}/>
            <Route exact path="/" element={<TextForm ShowAlert={ShowAlert} heading="Enter Text to Analyze"/>}/>
      </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

//Tags used for routing in ReactJs

// Router -> BrowserRouter
// Switch -> Routes
// Route 