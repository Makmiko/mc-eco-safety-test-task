import React, { Component } from 'react';
import './App.css';
import FilmsPage from './pages/FilmsPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import FilmPage from './pages/FilmPage';
import { ThemeProvider } from '@material-ui/core';
import theme from './assets/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/film/:id" exact component={FilmPage}/>
          <Route path="/films/:searchParam?/:page?" exact component={FilmsPage}/>
          <Redirect path="/" to="/films" component={FilmsPage}/>
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
