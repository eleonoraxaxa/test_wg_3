/**
 * Created by eleonora on 3/26/17.
 */

import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';


class List extends React.Component {
    renderItem() {
        return this.props.users.map((user) => <Item key={user.id} user={user}/>);
    }

    render() {
        return (
            <table className="players">
                <thead>
                <tr>
                    <th key="id">ID</th>
                    <th key="name">Name</th>
                    <th key="battles_total">Battles Total</th>
                    <th key="wins_total">Wins Total</th>
                    <th key="days_total">Days Total</th>
                    <th key="vehicles_x">Vehicles_x</th>
                    <th key="rating">Rating</th>
                    <th key="exp_avg">Exp_avg</th>
                    <th key="exp_total">Exp_total</th>
                    <th key="is_hidden">is_hidden</th>
                    <th key="created_at">created_at</th>
                </tr>
                </thead>
                <tbody>
                    { this.renderItem() }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(List);