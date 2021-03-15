import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {
  state={
    usernames:[
      {username: 'rock2020'},
      {username: 'bird419'},
      {username: 'bobmarley77'}
    ]
  }
  changeNameHandler = (event) =>{
    this.setState({usernames:[
      {username: event.target.value},
      {username: 'bird419'},
      {username: 'bobmarley77'}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <UserInput
         changed={this.changeNameHandler}/>
        <UserOutput
         name={this.state.usernames[0].username}
        />
        <UserOutput
        name={this.state.usernames[1].username}/>
        <UserOutput
        name={this.state.usernames[2].username}>ayushbudh41</UserOutput>
      </div>
    );
  }
}

export default App;
