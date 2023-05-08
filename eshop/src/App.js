import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import {Routes,Route} from 'react-router-dom'
import Shooping from './component/Shooping';


function App() {

  return (
    <div className="App">

    <Routes>
      <Route exex path='/checkout'
      element={<><Header/><Shooping/></>}
      />
      <Route exec path ='/' element={<><Header/><Home/></>}/>
    </Routes>
   
       
         
  
   
 

    
   
    
    
   
      
    </div>
  );
}

export default App;
