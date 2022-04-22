import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Loading from './components/Home/Loading';


function App() {
   return (
     <div className="App">
       {/* {<Loading/> ? <Loading/> : <Home/>} */}
       <Home/>
     </div>
   );

}

export default App;
