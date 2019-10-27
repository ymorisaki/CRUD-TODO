import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css'
import './App.css'

export let jsonUrl = 'https://api.myjson.com/bins/1e8uds'

fetch(jsonUrl)
  .then(response => {
    return response.json()
  })
  .then(initTodo => {
    ReactDOM.render(
      <App initTodo={initTodo} />,
      document.getElementById('root')
    )
  })
