import React from "react";
import styles from "./Counter.module.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount || 0,
    };
  }

  onClickPlus = () => {
    this.setState({ count: ++this.state.count });
  };

  onClickMinus = () => {
    this.setState({ count: --this.state.count });
  };

  onClickReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className={styles.counter}>
        <div className={styles.value}>{count}</div>
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonPlus} onClick={this.onClickPlus}>
            +
          </button>
          <button
            className={styles.buttonReset}
            onClick={this.onClickReset}
          ></button>
          <button className={styles.buttonMinus} onClick={this.onClickMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}
