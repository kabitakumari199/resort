import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import User from './components/user';
import Welcome from './components/welcome';

class Routing  extends React.Component {
   render(){
     return(
      <Router>
      <Switch>
      <Route exact path="/" component={Welcome} />
        <Route exact path="/user" component={User} />
      </Switch>
    </Router>
     );
   }
}

export default Routing;
