/**
 * Created by eleonora on 3/27/17.
 */

import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.battles_total}</td>
                <td>{this.props.user.wins_total}</td>
                <td>{this.props.user.days_total}</td>
                <td>{this.props.user.vehicles_x}</td>
                <td>{this.props.user.rating}</td>
                <td>{this.props.user.exp_avg}</td>
                <td>{this.props.user.exp_total}</td>
                <td>{this.props.user.is_hidden.toString()}</td>
                <td>{this.props.user.created_at}</td>
            </tr>
        );
    }
}

export default Item;