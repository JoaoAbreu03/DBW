import react from 'react'
import ReactDOM  from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddClient from './components/AddClient'
import App from './components/App'
const app = (
      <App />
  )
  

   
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(app, rootElement); 
  }

 