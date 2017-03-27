/**
 * Created by eleonora on 3/26/17.
 */

import React, { Component } from 'react';
import Header from "../components/Header";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}