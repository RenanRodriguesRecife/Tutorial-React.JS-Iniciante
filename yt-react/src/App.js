import './App.css';
import React, { Component } from 'react';

class Mybutton extends Component{
  render(){
    return (
    <button onClick={() => {this.props.handleClick(this.props.label);}}>
      {this.props.label}
      
       </button>
    );
  }
}

class MyLabel extends Component{
  render(){
    return <p>Click no: {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({labelText});
  }

  render(){
  console.log(this.stage)
  return (
    <div>
    <MyLabel text={this.state.labelText}/>
    <Mybutton handleClick={this.setLabelText} label="Botão 1"/>
    <Mybutton handleClick={this.setLabelText} label="Botão 2"/>
    <Mybutton handleClick={this.setLabelText} label="Botão 3"/>
    

    </div>
  );
  }
}

export default App;
