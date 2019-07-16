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

let store = createStore(reducer, applyMiddleware(thunk));


class App extends React.Component {
    render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact={true} path="/" render={(props) => {
            return (
              <>
                <Link to="/favourites" className="favButton">Open Favourites</Link>
                <Form />
                <SearchResults pathname={props.location.pathname} toggleFavClassName='add'/>
                </>
              )
            }} />
          
          <Route exact={true} path="/favourites" render={(props) => {
              return (
                <>
                  <Link to='/' className='favButton'>Close Favourites</Link>
                  <Favourites pathname={props.location.pathname} toggleFavClassName='remove'/>
                </>
              )
              }} />

          <Route path="/info/" render={(props) => {
            return (
              <>
              <Link to='/' className='homeButton favButton'>Home</Link>
              <Info />
              </>
            )
          }} />
          </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
