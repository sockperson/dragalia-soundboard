import React, {Component} from 'react';

//Stateless Functional Component
const img = require("../resources/images/EN/34.png");

class NavBar extends Component {
    render(){
        return (
            <nav className = "navbar navbar-light bg-light">
                <a className = "navbar-brand m-2" href="#">
                    Dragalia Soundboard
                    <img src={img} width="40" className="mr-2"/>
                    <span className="navbar-text ms-auto">
                          how do i move this text right wtf???
                    </span>
                </a>
            </nav>
        );
    }
};

export default NavBar;