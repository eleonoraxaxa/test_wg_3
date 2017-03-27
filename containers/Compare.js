/**
 * Created by eleonora on 3/27/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToComp } from '../actions/compareActions';
import ResultTable from './ResultTable';

class Compare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            showError: false,
            errorMessage: ''
        };
    }

    handleInputChange(key) {
        return function (e) {
            let state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    compare() {
        let addToComp = this.props.addToComp;
        if(!this.state.first && !this.state.second ) {
            this.setState({ showError: true, errorMessage: 'Fields should not be empty'});
            return;
        } else if(this.state.first === this.state.second) {
            this.setState({ showError: true, errorMessage: 'Please enter 2 different names'});
        } else {
            this.setState({ showError: false });

            let first, second;
            first = this.props.users.find(x => x.name === this.state.first);
            second = this.props.users.find(x => x.name === this.state.second);
            if(!first || !second) {
                this.setState({ showError: true, errorMessage: 'Please check both names'});
            } else if (first.is_hidden || second.is_hidden) {
                this.setState({ showError: true, errorMessage: 'Some players doesn\'t want to share their info. Please try again with different names' });
            } else {
                addToComp(first, second);
            }
        }
    }

    render() {

        return (
            <div className="compare-block">
                <p>Please enter names of two players to compare</p>
                { this.state.showError && <div className="error-message">{this.state.errorMessage}</div> }
                <input type="text" className="form-control" placeholder="First player" onChange={ this.handleInputChange('first') }/>
                <input type="text" className="form-control" placeholder="Second player" onChange={ this.handleInputChange('second') }/>
                <button className="form-control" onClick={this.compare.bind(this)}>Compare</button>
                { this.props.compare && <ResultTable player1={ this.props.compare[0] } player2={ this.props.compare[1] }/> }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users,
        compare: state.compare.compare
    }
}

export default connect(mapStateToProps, {addToComp})(Compare);
