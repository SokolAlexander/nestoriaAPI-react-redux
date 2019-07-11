import React from 'react';
import {Form} from './components/form/form';
import {List} from './components/list/list';
import {Dummy} from './data';

import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleListClick = this.handleListClick.bind(this);

      this.state = {
        inputValue: '',
        data: []
      }
    }

    handleInputChange(newValue) {
      this.setState({
        inputValue: newValue
      });
    }

    handleFormSubmit() {
      console.log('form submitted, search for: ' + this.state.inputValue);
      this.setState({
        data: Dummy
      })
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
      <div className="App">
        <Form value={this.state.inputValue} 
          onInputChange={this.handleInputChange} 
          onSubmit={this.handleFormSubmit}/>
        <List data={this.state.data}
        onListClick={this.handleListClick}/>
      </div>
    );
  }
}

export default App;
