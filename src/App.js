import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoreService from './components/MoreService/MoreService';
import OurFeature from './components/OurFeature/OurFeature';
import Features from './components/Features/Features';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/moreservice">
            <MoreService></MoreService>
          </Route>
          <Route exact path="/feature">
            <Features></Features>
            <OurFeature></OurFeature>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
