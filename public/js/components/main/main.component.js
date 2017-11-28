import React, {Component} from 'react';

// Import custom components
import Header from './header.component';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <section className="content">
                    <div className="container">

                        {this.props.children}

                    </div>
                </section>
            </div>
        );
    }
}

export default Main;