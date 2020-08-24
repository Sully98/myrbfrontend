import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import './App.css';
import home from './pages/home/home';
import about from './pages/about/about';
import dashboard from './pages/dashboard/dashboard';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/about" component={about} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/" component={home} />
      </Switch>
    </Router>
  );
}

export default App;
