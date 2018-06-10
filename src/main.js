import React from 'react';
import ReactDOM from 'react-dom';
import App, { getName as _getName } from './App.js';
export const getName = _getName
console.log(getName())
// ReactDOM.render(<App />, document.getElementById('root'));
