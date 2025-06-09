import React from "react";

class LiveParagraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  setText = (e) => {
    this.setState({
        text: e.target.value,
    })
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.text}
          onChange={this.setText}
        />
        <p>{this.state.text}</p>
      </>
    );
  }
}

export default LiveParagraph;
