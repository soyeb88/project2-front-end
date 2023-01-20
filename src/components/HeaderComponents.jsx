import React, { Component } from 'react';

class HeaderComponents extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        {/* <div><a href="http://98.15.45.185:9090/"> Employee Management App</a></div> */}
                        <div><a href="http://localhost:3000/"> Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;