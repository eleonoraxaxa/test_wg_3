/**
 * Created by eleonora on 3/26/17.
 */

import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="/list">List</a>
                <a href="/compare">Compare</a>
            </div>
        );
    }
}

export default Header;