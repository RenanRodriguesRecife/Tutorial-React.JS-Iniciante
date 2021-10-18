import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
        data: []
    }
  }

  componentDidMount() {
      axios.get('https://api.github.com/repositories')
        .then(({ data }) =>{
          this.setState({data})
      })
  }
  
 
  render(){
      const {data} = this.state
  console.log(this.stage)
  return (
    <div>
        <ul>
            {data.map(item => <li>{item.full_name}</li>)}
        </ul>

    </div>
  );
  }
}

export default App;
