import React from 'react';
import { connect } from 'react-redux';
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import '../../index.css';

class PickComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.buildCard = this.buildCard.bind(this);
        this.handleShowDetails = this.handleShowDetails.bind(this);
        this.handleHideDetails = this.handleHideDetails.bind(this);
        this.state = {
            showDetails: false,
            toShow: {}
        };
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

    handleShowDetails(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({showDetails: true, toShow: {}});
    }

    handleHideDetails(e) {
        e.preventDefault();
        this.setState({showDetails: false, toShow: {}});
    }

    buildCard(option) {
        return(
            <div className="info-card" onClick={this.handleShowDetails} key={option.name}>
                <div className="card">
                    <img className="card-img-top" src="assets/ILLDOITFORYOU.png" alt={option.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{option.name}</h5>
                    <p className="card-text">{option.sub}</p>
                    <button type="button" className="btn btn-primary" value={option.name} onClick={this.handleChoice}>OK!</button>
                  </div>
                </div>
            </div>
        ) 
    }

    render(){
        console.log(this.props);
        let currentComponent;
        if (!this.state.showDetails) {
            currentComponent = (<div className='info-cards-holder'>
                    {this.props.options.map(option => { 
                        return this.buildCard(option);
                        }
                    )}
                    </div>);
        } else {
            currentComponent = <DetailsComponent details={this.state.toShow} handleHide={this.handleHideDetails}/>
        }
        return(
            <div>
                <h3> { this.props.question || 'Question missing' } </h3>
                {currentComponent}
                <button type='button' className='btn btn-primary' onClick={this.handleNext}>Next</button>
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

export default connect(mapStateToProps)(PickComponent);