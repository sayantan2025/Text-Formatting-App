import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import React , {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
    }
  }
  return (
    <>
<Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
      <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          
          <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text below" mode={mode}/>    }/>
          
        </Routes>
        
         {/* <AboutUs/> */}
      </div>
      </Router>
    </>
  );
}

export default App;