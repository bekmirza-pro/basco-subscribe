import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./views/contact";
import Thanks from "./views/thanks";
import Error from "./views/hato";

function App() {
  return (
    <div className='App'>
      {" "}
      <Router>
        <Switch>
          <Route exact path='/' component={Contact} />
          <Route exact path='/thanks' component={Thanks} />
          <Route exact path='/error' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
