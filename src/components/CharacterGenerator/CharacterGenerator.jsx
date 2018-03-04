import React from "react";
import { connect } from "react-redux";
import { Router, Link } from "react-router-dom";
import WelcomeComponent from "../WelcomeComponent/WelcomeComponent";
import PickComponent from "../PickComponent/PickComponent";
import AbilityScores from '../AbilityScoreComponent/AbilityScoreComponent';
import TextComponent from "../TextComponent/TextComponent";
import EndComponent from "../EndComponent/EndComponent";
import dictionary from "../../dictionary.js";

class CharacterGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.createComponent = this.createComponent.bind(this);
  }

  createComponent(type, props) {
    let toRender;
    switch(type) {
        case 'PICK':
            toRender = <PickComponent
                            question={props.question}
                            options={props.options}
                            nextStep={props.nextStep}
                            nextType={props.nextType}
                        />
            break;
        case 'ABILITY':
            toRender = <AbilityScores question={props.question} nextStep={props.nextStep} nextType={props.nextType}/>
            break;
        case 'TEXT':
            toRender = <TextComponent question={props.question} nextStep={props.nextStep} nextType={props.nextType}/>
            break;
        case 'END':
            toRender = <EndComponent question={props.question} nextStep={props.nextStep} nextType={props.nextType}/>
            break;
        default:
            toRender = <WelcomeComponent question={props.question} nextStep={props.nextStep} nextType={props.nextType}/>
            break;
        
    }
    return toRender;
  }

  render() {
    const childProps = {
      question: dictionary.charQuestions[this.props.app.step],
      options: dictionary.charOptions[this.props.app.step],
      nextStep: dictionary.nextComponent[this.props.app.step].step,
      nextType: dictionary.nextComponent[this.props.app.step].type
    };
    return this.createComponent(this.props.app.componentType, childProps);
  }
}

export function mapStateToProps(store) {
  return {
    character: store.character,
    app: store.app
  };
}

export default connect(mapStateToProps)(CharacterGenerator);
