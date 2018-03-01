import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { dispatch } = this.props;
        dispatch({type: 'ADD_ONE', payload: 1});
    }

    render(){
        return(
            <div>
                <button type="button" onClick={ this.handleClick }>Increase</button>
                <p>{ this.props.home.num }</p>
            </div>
        );
    }
}

export function mapStateToProps(store){
    return {
        home: store.home
    };
}

export default connect(mapStateToProps)(HomeComponent);