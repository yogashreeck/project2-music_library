import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './footer/Footer'
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
   <Footer />
    </div>
  );
}

export default App;