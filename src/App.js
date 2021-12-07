import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import "./App.css";
import Contact from './Contact';
import Navbar from './Navbar';
import Services from './Services';
import Spp from './Component/Spp';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Contact" render={() => <Contact name="Contact" />} />
          <Route exact path="/Services" render={() => <Services name="Services" />} />
          <Route exact path="/about" render={() => <About name="About" />} />
        </Switch>
        {/* <Spp /> */}

      </BrowserRouter>
    </>
  )
}

export default App;
