import React from "react";

class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "red",
    };
    this.colors = { red: "Red", blue: "Blue", green: "Green" };
  }
  setColor = (e) => {
    this.setState({
      selectedColor: e.target.value,
    });
  };
  render() {
    return (
      <select
        id="color-selector"
        value={this.state.selectedColor}
        onChange={(e) => this.setColor(e)}
      >
        {Object.keys(this.colors).map((color, index) => {
          return (
            <option key={index} id={color} value={color}>
              {this.colors[color]}
            </option>
          );
        })}
      </select>
    );
  }
}

export default ColorSelector;