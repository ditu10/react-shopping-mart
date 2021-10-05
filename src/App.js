import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Reviews from './Review/Reviews';
import Inventory from './Inventory/Inventory';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Body></Body>
          </Route>
          <Route exact path="/Shop">
          <Header></Header>
            <Body></Body>
          </Route>
          <Route exact path="/Orders">
            <Header></Header>
            <Reviews></Reviews>
          </Route>
          <Route exact path="/Inventory">
            <Header></Header>
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
