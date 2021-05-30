import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Navigation} from './Navigation';
import {ContactForm} from './ContactForm';


import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/ContactForm' component={ContactForm}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;