import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import TextComponent from '../TextComponent/TextComponent'

class CharacterGenerator extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(e) {
        const { dispatch } = this.props;
        dispatch({type:'TAKE_STEP', payload:'CLASS' })
    }

    render(){
<<<<<<< HEAD
        
        return(
            <div>
                
            </div>
=======

        return(
    
            <TextComponent />
            
>>>>>>> master
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