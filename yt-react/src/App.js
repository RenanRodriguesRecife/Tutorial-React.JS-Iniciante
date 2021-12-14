import './App.css';
import React from 'react';
import{ 
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";


import Repositories from "./containers/Repositories"


function App(){
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" component={Repositories}/>
        </Routes> 
        <Repositories/>
      </div>
    </Router>
   );
}


export default App;
