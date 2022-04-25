import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 2500);
  }

  render() {
   return this.state.loading ? (
     <h1 className="loading">Loading...</h1>
   ) : (
     <div className="App">
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="*" element={<Home />} />
       </Routes>
     </div>
   );
  }

}

export default App;
