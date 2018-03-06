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
            <div className="info-card" key={option.name}>
                <div className="card">
                    <img className="card-img-top" src="assets/ILLDOITFORYOU.png" alt={option.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{option.name}</h5>
                    <p className="card-text">{option.info}</p>
                    <button className="btn btn-primary" value={option.name} onClick={this.handleChoice}>OK!</button>
                  </div>
                </div>
            </div>
        ) 
    }

    render(){
        return(
            <div>
                <h3> { this.props.question || 'Question missing' } </h3>
                <div className='info-cards-holder'>
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