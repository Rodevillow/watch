import React, {Component} from 'react';

class Main extends Component {

    render() {
        return (
            <div>
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