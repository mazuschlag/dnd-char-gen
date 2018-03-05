import React from "react";
import { connect } from "react-redux";

class AbilityScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreType: "",
      randomScore1: "",
      randomScore2: "",
      randomScore3: "",
      randomScore4: "",
      randomScore5: "",
      randomScore6: "",
      firstDraggable: true,
      secondDraggable: true,
      thirdDraggable: true,
      fourthDraggable: true,
      fifthDraggable: true,
      sixthDraggable: true,
      rolled: false
    };

    this.handleNext = this.handleNext.bind(this);
    this.dragstart_handler = this.dragstart_handler.bind(this);
    this.drop_handler = this.drop_handler.bind(this);
    this.dragover_handler = this.dragover_handler.bind(this);
    this.handleStandardScoreSelect = this.handleStandardScoreSelect.bind(this);
    this.handleRandomScoreSelect = this.handleRandomScoreSelect.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.rollDice = this.rollDice.bind(this);
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

  handleStandardScoreSelect(e) {
    this.setState({
      scoreType: e.target.value
    });
  }

  handleRandomScoreSelect(e) {
    if (!this.state.rolled) {
      this.setState({
        scoreType: e.target.value,
        randomScore1: this.rollDice(),
        randomScore2: this.rollDice(),
        randomScore3: this.rollDice(),
        randomScore4: this.rollDice(),
        randomScore5: this.rollDice(),
        randomScore6: this.rollDice(),
        rolled: true
      });
    } else {
      this.setState({
        scoreType: e.target.value
      });
    }
  }

  dragstart_handler(e) {
    e.dataTransfer.setData("text/plain", e.target.value);
    e.dataTransfer.dropEffect = "link";
    let draggableProperty = `${e.target.id}Draggable`;
    this.setState({
      [draggableProperty]: false
    });
  }

  dragover_handler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
  }

  drop_handler(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    let data = e.dataTransfer.getData("text");
    let stat = e.target.id;
    let newAbilityScores = this.props.character.abilityScores;
    newAbilityScores[stat] = data;
    dispatch({ type: `UPDATE_${this.props.app.step}`, payload: newAbilityScores });
    this.setState({
      [stat]: data
    });
  }

  handleReset() {
    this.setState({
      str: "",
      dex: "",
      const: "",
      int: "",
      wis: "",
      char: "",
      firstDraggable: true,
      secondDraggable: true,
      thirdDraggable: true,
      fourthDraggable: true,
      fifthDraggable: true,
      sixthDraggable: true
    });
  }

  rollDice() {
    let diceRolls = [];
    let score = 0;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = 0; i < 4; i++) {
      let roll = Math.floor(Math.random() * Math.floor(6)) + 1;
      diceRolls.push(roll);
    }
    diceRolls.sort();
    diceRolls.shift();
    score = diceRolls.reduce(reducer);
    if (score < 7) {
      return this.rollDice();
    }

    return score;
  }

  render() {
    const standardSetJSX = (
      <div id="show-scores-container">
        <h5>Here are your standard scores. Drag and drop them to the abilities of your choice</h5>
        <div id="drag-and-drop-scores-container" style={{ border: "solid" }}>
          <div id="scores" style={{ display: "inline-block", width: "50%" }}>
            <ul style={{ listStyle: "none" }}>
              <li draggable={this.state.firstDraggable} onDragStart={this.dragstart_handler} id="first" value="15">
                15
              </li>
              <br />
              <li draggable={this.state.secondDraggable} onDragStart={this.dragstart_handler} id="second" value="14">
                14
              </li>
              <br />
              <li draggable={this.state.thirdDraggable} onDragStart={this.dragstart_handler} id="third" value="13">
                13
              </li>
              <br />
              <li draggable={this.state.fourthDraggable} onDragStart={this.dragstart_handler} id="fourth" value="12">
                12
              </li>
              <br />
              <li draggable={this.state.fifthDraggable} onDragStart={this.dragstart_handler} id="fifth" value="10">
                10
              </li>
              <br />
              <li draggable={this.state.sixthDraggable} onDragStart={this.dragstart_handler} id="sixth" value="8">
                8
              </li>
            </ul>
          </div>
          <div style={{ display: "inline-block", width: "50%" }}>
            <ul style={{ listStyle: "none" }}>
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="str">
                Strength {this.state.str}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="dex">
                Dexterity {this.state.dex}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="const">
                Constitution {this.state.const}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="int">
                Intelligence {this.state.int}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="wis">
                Wisdom {this.state.wis}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="char">
                Charisma {this.state.char}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

    const randomScoresJSX = (
      <div id="show-scores-container">
        <h5>Here are your scores. Drag and drop them to the abilities of your choice</h5>
        <div id="drag-and-drop-scores-container" style={{ border: "solid" }}>
          <div id="scores" style={{ display: "inline-block", width: "50%" }}>
            <ul style={{ listStyle: "none" }}>
              <li
              id="first"
                draggable={this.state.firstDraggable}
                onDragStart={this.dragstart_handler}
                value={this.state.randomScore1}
              >
                {this.state.randomScore1}
              </li>
              <br />
              <li
              id="second"
                draggable={this.state.secondDraggable}
                onDragStart={this.dragstart_handler}
                value={this.state.randomScore2}
              >
                {this.state.randomScore2}
              </li>
              <br />
              <li
              id="third"
                draggable={this.state.thirdDraggable}
                onDragStart={this.dragstart_handler}
                value={this.state.randomScore3}
              >
                {this.state.randomScore3}
              </li>
              <br />
              <li
              id="fourth"
                draggable={this.state.fourthDraggable}
                onDragStart={this.dragstart_handler}
                value={this.state.randomScore4}
              >
                {this.state.randomScore4}
              </li>
              <br />
              <li
              id="fifth"
                draggable={this.state.fifthDraggable}
                onDragStart={this.dragstart_handler}
                value={this.state.randomScore5}
              >
                {this.state.randomScore5}
              </li>
              <br />
              <li
              id="sixth"
                draggable={this.state.sixthDraggable}
                onDragStart={this.dragstart_handler}
                value={this.state.randomScore6}
              >
                {this.state.randomScore6}
              </li>
            </ul>
          </div>
          <div style={{ display: "inline-block", width: "50%" }}>
            <ul style={{ listStyle: "none" }}>
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="str">
                Strength {this.state.str}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="dex">
                Dexterity {this.state.dex}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="const">
                Constitution {this.state.const}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="int">
                Intelligence {this.state.int}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="wis">
                Wisdom {this.state.wis}
              </li>
              <br />
              <li onDrop={this.drop_handler} onDragOver={this.dragover_handler} id="char">
                Charisma {this.state.char}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <h3>{this.props.question || "Question Missing"}</h3>
        <h4>Generate random scores or choose from the standard set?</h4>
        <input
          type="radio"
          id="Standard Set"
          onClick={this.handleStandardScoreSelect}
          name="score-type"
          value="standardSet"
        />
        <label htmlFor="Standard Set">Gimme the standard set</label>

        <input
          type="radio"
          id="Random Scores"
          onClick={this.handleRandomScoreSelect}
          name="score-type"
          value="randomScores"
        />
        <label htmlFor="Random Scores">Roll the dice!</label>

        {this.state.scoreType === "standardSet" ? (
          standardSetJSX
        ) : this.state.scoreType === "randomScores" ? (
          randomScoresJSX
        ) : (
          <div> Select above to see scores </div>
        )}
        <button onClick={this.handleReset}>Reassign Scores</button>
        <button onClick={this.handleNext}> Next</button>
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

export default connect(mapStateToProps)(AbilityScores);
