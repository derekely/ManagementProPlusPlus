import React, { Component } from "react";
import "./NavBarStyles.css";
import Login from "../Login";

class NavBar extends Component {

    state = { clicked: false };
    // optional change state of navbar when clicked if in small screen
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* add link to logo in href */}
                <a className="navbar-brand" href="index.html">add logo here</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar">
                        <li className="nav-item">
                            {/* add link to home page in href */}
                            <a className="nav-link active" aria-current="page" href="index.html">
                                Home
                            </a>
                        </li>
                        {/* add link to projects page in href */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            {/* Optional dropdown menu */}
                            {/* <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index.html">Project 1</a></li>
                                <li><a className="dropdown-item" href="index.html">Project 2</a></li>
                                <li><a className="dropdown-item" href="index.html">Project 3</a></li>
                            </ul> */}
                        </li>
                        {/* add link to login page in href */}
                        <li className="nav-item">
                            <button className="loginButton" onClick={Login}>
                                Login
                            </button>
                            {/* <a className="nav-link active" href="index.html">
                                login()
                            </a> */}
                        </li> 
                    </ul>
                    {/* Optional search menu */}
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
            {/* Optional change navbar to fit small screen */}
            <div id="mobile" onClick={this.handleClick}>
                <i
                    id="bar"
                    className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                ></i>

            </div>
        </nav>
    );
}
}

export default NavBar;