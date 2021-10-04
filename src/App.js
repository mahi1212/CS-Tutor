import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './componants/Home/Home';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import About from './componants/About/About';
import Header from './componants/Header/Header';
import Services from './componants/Services/Services';
import Review from './componants/Review/Review';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
