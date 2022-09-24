import react, { useState } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/createObjective/home.js'

const App = () => {
  const [isSignUp,setIsSignUp] =useState(false);
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route path="/objectives" exact component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}


export default App



