import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      num: "",
      result: ""
    };
  }

  handlenum = (event) => {
    this.setState({
      num: event.target.value,
    });
  };

  exe = (event) => {
    var n = parseInt(this.state.num);

    function factorial(n) {
      if (n > 0 && n <= 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }

    /* factorial(n); */

    this.setState({
      result: factorial(n)
    });
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1>Factorial Calculator</h1>

        <form /* onSubmit={this.exe} */>
          <input
            type="number"
            placeholder="Enter a number..."
            value={this.state.num}
            onChange={this.handlenum}
          />
          <br />
          <button /* type="submit" */ onClick={this.exe}>
        
            Calculate Factorial
          </button>
        </form>

        <h2>Factorial: {this.state.result}</h2>
      </div>
    );
  }
}

export default App;
