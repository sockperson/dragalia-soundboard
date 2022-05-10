import React, {Component} from 'react';

//Stateless Functional Component
const img = require("../resources/images/EN/34.png");

class NavBar extends Component {
    render(){
        return (
            <nav className = "navbar navbar-light bg-light">
                <a className = "navbar-brand ml-2" href="#">
                    Dragalia Soundboard
                    <img src={img} width="40" className="ml-2 mr-2"/>
                    <span className="navbar-text mb-0">
                          how do i move this text right wtf???
                    </span>
                </a>
            </nav>
        );
    }
};

export default NavBar;