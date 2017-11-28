import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#/main">Watch Films</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#">LogOut</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
       );
    }
}

export default Header