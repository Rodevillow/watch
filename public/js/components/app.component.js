import React, { Component } from 'react';

// Import custom components
import Header from './common/header/header.component';

class App extends Component {
    render(){
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App