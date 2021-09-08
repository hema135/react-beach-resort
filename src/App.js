import './App.css';
import Home from './Pages/Home';
import Room from './Pages/Room';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import { Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.js';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/rooms" exact component={Room} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
