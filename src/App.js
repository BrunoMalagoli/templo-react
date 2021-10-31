
import './App.css';
import './components/styles/App.scss'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
    <Switch>

          <Route exact path="/">
        <ItemListContainer />
          </Route>

          <Route exact path="/:itemId">
        <ItemDetailContainer/>
          </Route>
          
    </Switch>
    </BrowserRouter>
  );
}

export default App;
