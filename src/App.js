import React from 'react';
import Form from './components/form/form';
import InfoMain from './components/info/infoMain';
import InfoFav from './components/info/infoFav';
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
                <SearchResults pathname={props.location.pathname}/>
                </>
              )
            }} />
          
          <Route exact={true} path="/favourites" render={(props) => {
              return (
                <>
                  <Link to='/' className='favButton'>Close Favourites</Link>
                  <Favourites pathname={props.location.pathname}/>
                </>
              )
              }} />

          <Route path="/favourites/info/:index" component={InfoFav} />
          
          <Route path="/info/:index" component={InfoMain} />
          </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
