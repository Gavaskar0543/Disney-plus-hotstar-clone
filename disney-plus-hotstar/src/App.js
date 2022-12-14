import React from 'react';
import './App.css';
import Header from './Components/Header'
import Login from './Components/Login'
import Home from './Components/Home'
import DetailPage from './Components/DetailPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
     <Switch>
    <Route exact path='/'>
      {< Home />}
    </Route>
    <Route  path='/detail/:id'>
    {<DetailPage />}
    </Route>
      <Route exact path='/login'>
      {<Login />}
      </Route>
    </Switch>
</Router>
    </div>
  );
}

export default App;
