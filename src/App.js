import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
