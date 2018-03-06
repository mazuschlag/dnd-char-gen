import React from 'react';
import { connect } from 'react-redux';

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
                <p>{this.props.character.name}, a {this.props.character.race} {this.props.character.class} {this.props.character.background}</p>
                <p>Strength: {this.props.character.abilityScores.str}</p>
                <p>Dexterity: {this.props.character.abilityScores.dex}</p>
                <p>Constitution: {this.props.character.abilityScores.const}</p>
                <p>Intelligence: {this.props.character.abilityScores.int}</p>
                <p>Wisdom: {this.props.character.abilityScores.wis}</p>
                <p>Charisma: {this.props.character.abilityScores.char}</p>
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