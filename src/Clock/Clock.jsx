import React from "react";
import styles from "./Clock.module.css";

export class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return <div className={styles.clock}>{this.state.time}</div>;
  }
}
