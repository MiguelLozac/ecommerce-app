import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {NavBar }from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className="container" ></App>
  </React.StrictMode>
)
