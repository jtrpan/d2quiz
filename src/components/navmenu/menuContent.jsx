import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './menuContent.css';

class MenuContent extends Component {
    constructor(props) {
        super(props);
        this.items = []
        for (let i = 1; i < 2; i++) {
            this.items.push(i);
        }
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-item">
                    <Link
                        to="/"
                        onClick={this.props.closeCallback}
                    >
                        Home
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                        to="/quiz"
                        onClick={this.props.closeCallback}
                    >
                        Quiz
                    </Link>
                </div>
                <p className="hint">
                    Powered by React.
                    Made by Trissin.
                </p>
            </div>
        )
    }
}

export default MenuContent