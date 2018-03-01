mport React from 'react';
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
            step: 'STEP',
            componentType: 'ClassComponent',
            nextOptions: ['options'] 
            } 
        });
    }

    render(){
        
        return(
            <div>
                <button type='button' value={this.props.app.nextOptions[0]} onClick={this.handleChoice}>{this.props.app.nextOptions[0]}</button>
                <button type='button' value={this.props.app.nextOptions[1]} onClick={this.handleChoice}>{this.props.app.nextOptions[1]}</button>
                <button type='button' onClick={this.handleNext}>Next</button>
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