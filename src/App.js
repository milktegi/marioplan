import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'

class App extends Component {
  // state = {  }
  render() { 
    return (  
      <BrowserRouter>
      <div className="App"> 
        {/* nest Navbar */}
        <Navbar/>
        {/* switch */}
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
        </Switch>
      </div>
      </BrowserRouter>
      )
    ;
  }
}
 
export default App;