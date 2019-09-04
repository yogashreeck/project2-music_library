import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './footer/Footer'
import Header from './header/Header';
import homePage from './components/Home Page/homePage'
import singUp from './components/Singup/singUp';

function App() {
  return (
    <div>
        
      <Router>
      <Header />
      <switch>
          <Route exact path='/' component={homePage}></Route>
          <Route exact path='singup' component={singUp}></Route>
        </switch>
      </Router>
   <Footer />
    </div>
  );
}

export default App;