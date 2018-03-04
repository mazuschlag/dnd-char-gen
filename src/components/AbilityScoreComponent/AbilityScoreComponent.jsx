import React from "react";
import { connect } from "react-redux";

class CharacterGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreType: "",
      str: "",
      dex: "",
      const: "",
      int: "",
      wis: "",
      char: ""
    };

    this.handleChoice = this.handleChoice.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.dragstart_handler =  this.dragstart_handler.bind(this);
    this.drop_handler = this.drop_handler.bind(this);
    this.dragover_handler =  this.dragover_handler.bind(this);
  }

  handleChoice(e) {
    const { dispatch } = this.props;
    dispatch({ type: `UPDATE_${this.props.app.step}`, payload: e.target.value });
  }

  handleNext(e) {
    const { dispatch } = this.props;
    dispatch({
      type: "TAKE_STEP",
      payload: {
        step: this.props.nextStep,
        componentType: this.props.nextType
      }
    });
  }

  dragstart_handler(e){
      console.log('dragging');
      e.dataTransfer.setData("text/plain", e.target.value);
    e.dataTransfer.dropEffect = "link";
  }


  dragover_handler(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = "link"
      
  }

  drop_handler(e){
      e.preventDefault();
      console.log('dropped')
      let data = e.dataTransfer.getData("text");
      let stat = e.target.id
      console.log('data', data);
      console.log('stat', stat);
    this.setState({
        [stat] : data
    });
  }

  
  render() {
    return (
      <div>
        <h3>Generate random scores or choose from the standard set?</h3>
        <input type="radio" id="Random Scores" name="score-type" value="random scores" />
        <label htmlFor="Random Scores">Roll the dice!</label>

        <input type="radio" id="Standard Set" name="score-type" value="standard set" />
        <label htmlFor="Standard Set">Gimme the standard set</label>

        <div id="show-scores-container">
          <h4>Here are your standard scores. Drag and drop them to the abilities of your choice</h4>
          <div id="drag-and-drop-scores-container" style={{ border: "solid" }}>
            <div id="scores" style={{ display: "inline-block", width: "50%" }}>
              <ul style={{ listStyle: "none" }}>
                <li draggable onDragStart={this.dragstart_handler} value="15" >15</li>
                <br />
                <li draggable onDragStart={this.dragstart_handler} value="14" > 14</li>
                <br />
                <li draggable onDragStart={this.dragstart_handler} value="13" >13</li>
                <br />
                <li draggable onDragStart={this.dragstart_handler} value="12" >12 </li>
                <br />
                <li draggable onDragStart={this.dragstart_handler} value="10" >10</li>
                <br />
                <li draggable onDragStart={this.dragstart_handler} value="8" >8</li>
              </ul>
            </div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <ul style={{ listStyle: "none" }}>
                <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="str"> {`Strength ${this.state.str}`} </li>
                <br />
                <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="dex" > Dexterity {this.state.dex}</li>
                <br />
                <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="const" > Constitution {this.state.const}</li>
                <br />
                <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="int" > Intelligence {this.state.int}</li>
                <br />
                <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="wis" > Wisdom {this.state.wis}</li>
                <br />
                <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="char" > Charisma {this.state.char}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(store) {
  return {
    character: store.character,
    app: store.app
  };
}

export default connect(mapStateToProps)(CharacterGenerator);
