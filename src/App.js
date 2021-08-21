import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/'>
              <Header />
              <Home />
              <Footer/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
