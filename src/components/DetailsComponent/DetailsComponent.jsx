import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';

class DetailsComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(e) {
        const { dispatch } = this.props;
        dispatch({type: `UPDATE_${this.props.app.step}`, payload: e.target.value});
    }

    render(){
        return(
            <div className="card" onClick={this.props.handleHide}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.details.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.details.sub}</h6>
                    <p className="card-text">{this.props.details.info}</p>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(store){
    return {
        character: store.character,
    };
}

export default connect(mapStateToProps)(DetailsComponent);