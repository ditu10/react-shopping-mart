import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Reviews from './Review/Reviews';
import Inventory from './Inventory/Inventory';
import NotFound from './NotFound/NotFound';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Body></Body>
          </Route>

          <Route exact path="/Shop">
            <Body></Body>
          </Route>

          <Route exact path="/Orders">
            <Reviews></Reviews>
          </Route>

          <Route exact path="/Inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
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
