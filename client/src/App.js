import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
        </header>
        <div>
          <h1>Multi-Docker React App</h1>
          <Route exact path='/' component={Fib}/>
          <Route path='/otherpage' component={OtherPage}/>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
