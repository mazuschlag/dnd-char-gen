import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';

class CharacterGenerator extends React.Component {
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.buildCard = this.buildCard.bind(this);
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
            } 
        });
    }

    buildCard(option) {
        return(
            <div className='card sticky-action' id='info-card'>
                <div className='card-image waves-effect waves-block waves-light'>
                     <img className='activator' src='assets/ILLDOITFORYOU.png'/> 
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>{option.name}<i className='material-icons right'>more_vert</i></span>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>{option.name}<i className='material-icons right'>close</i></span>
                    <p>{option.info}</p>
                </div>
                <div className='card-action'> 
                    <button type='button' value={option.name} onClick={this.handleChoice}>OK!</button>
                </div>
            </div>
        ) 
    }

    render(){
        return(
            <div>
                <h3> { this.props.question || 'Question missing' } </h3>
                <div className='info-cards'>
                    {this.props.options.map(option => { 
                        return this.buildCard(option);
                        }
                    )}
                </div>
                <button onClick={this.handleNext}>Next</button>
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