import React, {Component} from 'react';
import {logo} from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp.js";
import {Login} from "./components/Login.js";
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('email',"juanmanuelherreramoya@gmail.com");
        localStorage.setItem('password',"123");

    }

    render() {
        const LoginView = () => (
            <Login/>
        );

        const TodoAppView = () => (
            <TodoApp/>
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('isLoggedIn')==="true"?
                        <li><Link to="/">Login</Link></li>:<li><Link to="/todo">Todo</Link></li>}
                    </ul>

                    <div>
                        {localStorage.getItem('isLoggedIn')==="true"?
                        <Route exact path="/" component={LoginView}/>:<Route path="/todo" component={TodoAppView}/>}
                    </div>
                </div>
            </Router>
        );
    }

}
export default App;
