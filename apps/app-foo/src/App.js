import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import CompOne from '@project/comp-one';
import CompTwo from '@project/comp-two';
import CompThree from './components/comp-three';

class App extends Component {
    render() {
      console.log(this.props);
      console.log(this.context);
      const { store } = this.props;
      // this.context.store = this.props.store;
      return (
        <Provider store={store}>
          <div className="App">
              <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
              <CompOne />
              <CompThree />
              <CompTwo />
              </header>
          </div>
        </Provider>
        );
    }
}

export default App;
