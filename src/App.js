import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import ApolloClient from './ApolloClient'


import logo from './logo.svg'
import './App.css'

const Intro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Intro} />
          </Switch>
        </div>
      </Router>
      </ApolloProvider>
    )
  }
}

export default App
