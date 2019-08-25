import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header';
import homePage from './components/Home Page/homePage'


function App() {
  return (
    <div>
        <Header />
      <Router>
      <switch>
          <Route exact path='/' component={homePage}></Route>
          
        </switch>
      </Router>
   
    </div>
  );
}

export default App;