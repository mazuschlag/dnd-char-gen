import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class TextComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: ''
        }
        this.handleClick =  this.handleClick.bind(this);
        this.handleTextChange =  this.handleTextChange.bind(this);

    }

    handleClick(e) {
        const { dispatch } = this.props;
        dispatch({type: `UPDATE_${this.props.app.step}`, payload: this.state.answer });
        dispatch({type:'TAKE_STEP', payload: {step:this.props.next, componentType: this.props.nextType } });
        
    }

    handleTextChange(e){
        this.setState({
            answer : e.target.value
        });
    }

    render(){
        return(
            <div>
                <h3> { this.props.question || 'Question missing' } </h3>
                <input type="text" onChange={ this.handleTextChange } required/>
                <button onClick={this.handleClick}>
                Next
                </button>
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

export default connect(mapStateToProps)(TextComponent);