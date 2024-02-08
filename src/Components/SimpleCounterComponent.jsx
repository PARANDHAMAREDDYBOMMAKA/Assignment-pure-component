import { Component } from "react";
class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggleStatus: true,
    };
  }

  handleInc = () => {
    if (!this.state.toggleStatus) {
      this.setState({ ...this.state, count: this.state.count + 1 });
    } else {
      this.setState({ ...this.state, count: this.state.count });
    }
  };
  handleTooggle = () => {
    this.setState({ ...this.state, toggleStatus: !this.state.toggleStatus });
  };

  render() {
    console.log("This is simple Component");
    return (
      <>
        <div>
          <h2>Simple component</h2>
          <h4>{this.state.count}</h4>
        </div>
        <div>
          <button onClick={this.handleTooggle}>Set Toggle</button>
          <button onClick={this.handleInc}>Counter</button>
        </div>
      </>
    );
  }
}
export default SimpleCounterComponent;
