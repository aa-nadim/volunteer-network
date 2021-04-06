import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from "./components/AddEvents/AddEvents";
import Home from "./components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">Add Event</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addEvents">
            <AddEvents />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


