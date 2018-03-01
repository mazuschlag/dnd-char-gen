import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class CharacterGenerator extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(e) {
        const { dispatch } = this.props;
        dispatch({type:'TAKE_STEP', payload:'ClassComponent' })
    }

    render(){
        
        return(
            <div>
              
                

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