import React from 'react';
import './App.css';
import Home from './components/Home/Home';



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
   return this.state.loading ? <h1 className='loading'>Loading...</h1> : (
     <div className="App">
       <Home/>
     </div>
   );
  }

}

export default App;
