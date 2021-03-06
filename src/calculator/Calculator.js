import React, { Component } from "react";

import "./Calculator.css";

//pratica de classcomponent
export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: "",
      num2: "",
      operation: "",
    };
  }

  //Theses 3 methods are for handling cahanges in the input field.
  changeNum1(num1) {
    console.log("num1 hit-------------", this.state.num1);
    this.setState({ num1: `${this.state.num1}${num1}` });
  }

  changeNum2(num2) {
    this.setState({ num2: `${this.state.num2}${num2}` });
  }

  clearInput(e) {
    e.preventDefault();
    //Destruct num1 and num2
    const { num1, num2 } = this.state;
    if (num1 && num2) {
      this.setState({ num1: "" });
    } else {
      this.setState({ num1: "", num2: "", operation: "" });
    }
  }

  //IN your equal method that where you will assign the result based on if it's add or not. Set the result to num1
  equal() {
    //Destruct num1, and num2, operation from state.
    const { operation, num1, num2 } = this.state;
    //Have a if else statement to determine whetehr to add, divide, multiply, and subtract
    if (operation === "add") {
      return this.setState({ num1: +num1 + +num2, num2: "", operation: "" });
    } else if (operation === "subtract") {
      return this.setState({ num1: +num1 - +num2, num2: "", operation: "" });
    } else if (operation === "multiply") {
      return this.setState({ num1: +num1 * +num2, num2: "", operation: "" });
    } else if (operation === "divide") {
      return this.setState({ num1: +num1 / +num2, num2: "", operation: "" });
    } else if (operation === "remainder") {
      return this.setState({ num1: +num1 % +num2, num2: "", operation: "" });
    }
  }
  add() {
    //add method
    // eslint-disable-next-line no-unused-vars
    const { num1, num2 } = this.state;
    this.setState({ operation: "add" });
  }
  //Subtract Function
  subtract() {
    //Set state of the operation to subtract so when you equal it will ad the first and second number.
    this.setState({ operation: "subtract" });
  }

  multiply() {
    //Set the state of operation to multiply, so when you equal it will multiply first and second number.
    this.setState({ operation: "multiply" });
  }

  divide() {
    //Set the operation to multiply so when you equal it will divide the first and second number.
    this.setState({ operation: "divide" });
  }

  getRemainder() {
    //Set the operation to remaidner so when you equal it will get remainder of the first and second number.
    this.setState({ operation: "remainder" });
  }

  render() {
    //Destruct values from state
    const { num1, num2, operation } = this.state;

    return (
      <div className="container">
        <div className="wrapper">
          <input value={operation ? num2 : num1} />
          <button onClick={(e) => this.clearInput(e)} className="btn">
            CE
          </button>
        </div>
        <div className="wrapper">
          <button
            onClick={(e) =>
              operation ? this.changeNum2("7") : this.changeNum1("7")
            }
            className="btn"
          >
            7
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("8") : this.changeNum1("8")
            }
            className="btn"
          >
            8
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("9") : this.changeNum1("9")
            }
            className="btn"
          >
            9
          </button>
          <button className="btn">/</button>
        </div>
        <div className="wrapper">
          <button
            onClick={(e) =>
              operation ? this.changeNum2("4") : this.changeNum1("4")
            }
            className="btn"
          >
            4
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("5") : this.changeNum1("5")
            }
            className="btn"
          >
            5
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("6") : this.changeNum1("6")
            }
            className="btn"
          >
            6
          </button>
          <button className="btn">x</button>
        </div>
        <div className="wrapper">
          <button
            onClick={(e) =>
              operation ? this.changeNum2("1") : this.changeNum1("1")
            }
            className="btn"
          >
            1
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("2") : this.changeNum1("2")
            }
            className="btn"
          >
            2
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("3") : this.changeNum1("3")
            }
            className="btn"
          >
            3
          </button>
          <button className="btn">-</button>
        </div>
        <div className="wrapper">
          <button
            onClick={(e) =>
              operation ? this.changeNum2(".") : this.changeNum1(".")
            }
            className="btn"
          >
            .
          </button>
          <button
            onClick={(e) =>
              operation ? this.changeNum2("0") : this.changeNum1("0")
            }
            className="btn"
          >
            0
          </button>
          <button onClick={() => this.equal()} className="btn">
            =
          </button>
          <button onClick={() => this.add()} className="btn">
            +
          </button>
          <button onClick={() => this.subtract()} className="btn">
            -
          </button>

          <button onClick={() => this.multiply()} className="btn">
            x
          </button>
          <button onClick={() => this.divide()} className="btn">
            /
          </button>
          <button onClick={() => this.getRemainder()} className="btn">
            %
          </button>
        </div>
      </div>
    );
  }
}
