import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieHeader from "./components/movieheader";
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path="/" render={() => <p>Movie List</p>}/>
          </div>
        </HashRouter>
      </Provider>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <h1 className={"App-title"}>Deployed automatically from GitHub</h1>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
