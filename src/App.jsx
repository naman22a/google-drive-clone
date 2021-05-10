import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// PAGES
import Home from './pages/Home';

// COMPONENTS
import Navbar from "./components/Navbar";
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="lower">
          <SideBar />
          <Switch>
            <Route exact path='/my-drive'>
              <Home />
            </Route>
            <Route path='*'>
              <Redirect to='/my-drive' />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
