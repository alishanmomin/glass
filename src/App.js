import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route to="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
