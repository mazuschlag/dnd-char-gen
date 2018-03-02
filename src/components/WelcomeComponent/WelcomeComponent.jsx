import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class WelcomeComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { dispatch } = this.props;
        dispatch({type:'TAKE_STEP', payload: {
            step: this.props.nextStep,
            componentType: this.props.nextType, 
            } 
        });
    }

    render(){
        return(
            <div>
                <h1>{this.props.question}</h1>
                <h3> Click start to begin </h3>

                <button type="button" onClick={ this.handleClick }>Start</button>       

            </div>

            
        );
    }
}

export function mapStateToProps(store){
    return {
        app: store.app
    };
}

export default connect(mapStateToProps)(WelcomeComponent);