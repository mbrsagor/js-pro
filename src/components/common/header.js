import React, { Component } from 'react';

class Header extends Component {
    
    render() { 
        return (
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="/">Calone Calculator</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className= "nav navbar-nav ml-auto">
                                <li className= "nav-item active" >
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                < li className= "nav-item" >
                                    <a className="nav-link" href="0#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="0#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
 
export default Header;
