import './App.css';
import Login from './Login'
import Home from './Home'
import Header from './NavBar'
import Details from './Details'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path ='/'>
            <Login/>
          </Route>
          <Route exact path = '/home'>
            <Home/>
          </Route>
          <Route path='/detail/:id'>
            <Details/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
