import React from "react";

class SimpleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  };
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment
        </button>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default SimpleCounter;
