import React from 'react';

class ButtonChallenge extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               on: false,
          };
     }
     setOn = () => {
          this.setState({
               on: !this.state.on,
          });
     }
     render() {
          return (
               <div>
                    <button onClick={this.setOn}>
                         {this.state.on ? 'ON' : 'OFF'}
                    </button>
               </div>
          );
     }
}

export default ButtonChallenge;