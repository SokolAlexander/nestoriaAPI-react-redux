import React from 'react';
import Form from './components/form/form';
import Info from './components/info/info';
import Favourites from './components/list/favourites';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import  reducer from './store/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import SearchResults from './components/list/searchResults';

const store = createStore(reducer, applyMiddleware(thunk));

/**
 * function for rendering an App
 * @return {ReactComponent}
 */
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Route exact={true} path="/" render={(props) => {
          return (
            <>
              <div className='nav-buttons'>
              <Link to="/favourites" className="favButton">Favourites</Link>
              </div>
              <Form />
              <SearchResults pathname={props.location.pathname} toggleFavClassName='add'/>
              </>
            )
          }} />

        <Route path="/favourites" render={(props) => {
            return (
              <>
                <div className='nav-buttons'>
                  <Link to='/' className='favButton'>Home</Link>
                </div>
                <Favourites pathname={props.location.pathname} toggleFavClassName='remove'/>
              </>
            )
            }} />

        <Route path="/info/" render={(props) => {
          return (
            <>
            <div className='nav-buttons'>
              <Link to='/' className='homeButton favButton'>Home</Link>
              <Link to='/favourites' className='favButton'>Favourites</Link>
            </div>
            <Info />
            </>
          )
        }} />
        </Router>
    </div>
    </Provider>
  );
}

export default App;
