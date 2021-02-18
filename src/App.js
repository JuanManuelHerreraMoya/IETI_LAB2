import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp.js";
import {Login} from "./components/Login.js";
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
    <TodoApp/>
);

class App extends Component {


    constructor(props) {
        super(props);
        localStorage.setItem('email',"juanmanuelherreramoya@gmail.com");
        localStorage.setItem('password',"123");

    }

    render() {

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
                        {localStorage.getItem('isLoggedIn') === "true"?
                            <li><Link to="/todo">Todo</Link></li>:<li><Link to="/">Login</Link></li>}
                    </ul>

                    <div>
                        {localStorage.getItem('isLoggedIn')==="true"?
                        <Route exact path="/todo" component={TodoAppView}/>:<Route path="/" component={LoginView}/>}
                    </div>
                </div>
            </Router>
        );
    }

}
export default App;
