import React from 'react';
import './App.css';


var user = {
  firstName: 'Bold',
  lastName: 'Baldan',
  age: 17,
  Married: true,
}

function App() {
  return (
    <div className="App">
      Hello React {user.firstName}, {user.lastName}
      <Example ovogNer="Bold" nas="17"/>
      <Example ovogNer="Sarnai"/>
      <Example/>
      <Example/>
      <Example/>
      
    </div>
  );
}

function Example(props) {
  return (
    <h1>Example, {props.ovogNer}, {props.nas}</h1>
  );
}

export default App;
