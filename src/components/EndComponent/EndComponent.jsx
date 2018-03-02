import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class EndComponent extends React.Component {
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
                <p>{this.props.character.name}</p>
                <p>{this.props.character.race}</p>
                <p>{this.props.character.class}</p>
                <button type="button" onClick={ this.handleClick }>Restart</button>       

            </div>

            
        );
    }
}

export function mapStateToProps(store){
    return {
        character: store.character,
        app: store.app
    };
}

export default connect(mapStateToProps)(EndComponent);