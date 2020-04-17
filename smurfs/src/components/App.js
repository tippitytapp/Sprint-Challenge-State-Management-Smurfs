import React, { Component } from "react";
import Smurfs from './Smurfs'
import AddSmurfForm from './addSmurf'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <AddSmurfForm />
      </div>
    );
  }
}

export default App;
