import React from 'react';
import Form from './components/form/form';
import List from './components/list/list';

import {createStore, applyMiddleware} from 'redux';
import  reducer from './store/form/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';

let store = createStore(reducer, applyMiddleware(thunk));


class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleListClick = this.handleListClick.bind(this);
    }

    handleInputChange(newValue) {
      this.setState({
        inputValue: newValue
      });
    }

    handleFormSubmit() {
      console.log('form submitted, search for: ' + this.state.inputValue);
    }

    handleListClick(target) {
        if (target.dataset.index) {
          console.log(target.dataset.index);
          this.showModal(target.dataset.index)
        }
    }

    showModal(index) {
      console.log(this.state.data[index]);
    }

    render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Form />
        <List onListClick={this.handleListClick}/>
      </div>
      </Provider>
    );
  }
}

export default App;
