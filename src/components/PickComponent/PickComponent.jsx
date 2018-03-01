import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class CharacterGenerator extends React.Component{
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleChoice(e) {
        const { dispatch } = this.props;
        dispatch({type: `UPDATE_${this.props.app.step}`, payload: e.target.value});
    }

    handleNext(e) {
        const { dispatch } = this.props;
        dispatch({type:'TAKE_STEP', payload: {
            step: this.props.nextStep,
            componentType: this.props.nextType,
            nextOptions: this.props.nextOptions 
            } 
        });
    }

    render(){
        
        return(
            <div>
                <h3> { this.props.question || 'Question missing' } </h3>
                {this.props.app.nextOptions.map(option => { 
                    return <button type='button' value={option} onClick={this.handleChoice}>{option}</button> 
                    }
                )}
            </div>
        );
    }
}

export function mapStateToProps(store){
    return {
        character: store.character,
        app : store.app
    };
}

export default connect(mapStateToProps)(CharacterGenerator);