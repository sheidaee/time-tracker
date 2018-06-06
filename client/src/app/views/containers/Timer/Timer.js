import React, { Component } from 'react';
import moment from "moment";
import "moment-timer";
import { Button } from "@blueprintjs/core";
import { connect } from "react-redux";

import BookTime from "../../components/BookTime";
import { classNames } from '../../../utilities';
import Styles from './Timer.module.scss';
import { timeOperations } from "../../../state/ducks/time";

/**
 * Display and manage timer
 * 
 * @class Timer
 * @extends {Component}
 */
export class Timer extends Component {
  state = {
    started: true
  };

  /**
   * time ticker
   *
   * @memberof Timer
   */
  updateTimeHandler = () => {
    this.props.onUpdateTime(this.props.counter);
  };

  componentDidMount() {
    const timeTicker = new moment.duration(1000).timer(
      { start: true, loop: true },
      this.updateTimeHandler
    );

    this.props.onInitTime(timeTicker);
  }

  /**
   * switch pause/play
   *
   * @param isOn {boolean} - if set false always turns the timer off
   *
   * @memberof Timer
   */
  switchTimeHandler = (isOn = true) => {
    const { timer } = this.props;
    
    this.setState({ started: !this.state.started && isOn });    
    timer.isStopped() && isOn ? timer.start() : timer.stop();
  };

  render() {
    const timeCounter = moment()
      .hour(0)
      .minute(0)
      .second(this.props.counter)
      .format("HH:mm:ss");
    
    return (
      <div className={Styles.Timer}>
        <div className={Styles.date}>{moment().format("MMM Do YY")}</div>
        <div className={Styles.timerDuration}>{timeCounter}</div>
        
        <BookTime
          time={timeCounter}
          onStopTime={() => this.switchTimeHandler(false)}
          btnType="button"
          btnClassName="pt-intent-primary pt-large pt-icon-add"
        />        
        
        <Button
          className={classNames(
            "pt-intent-success pt-large",
            Styles.btn,
            this.state.started ? "pt-icon-pause" : "pt-icon-play"
          )}
          onClick={this.switchTimeHandler}
        >
          {this.state.started ? "Pause" : "Play"}
        </Button>

        <Button
          className="pt-intent-danger pt-large pt-icon-refresh"
          onClick={() => this.props.onUpdateTime(-1)}
        >
          Reset
        </Button>
      </div>
    );
  }

  componentWillUnmount() {      
    this.props.timer.stop();
  }
}

const mapStateToProps = state => ({
  timer  : state.app.time.timer,
  counter: state.app.time.counter
});

const mapDispatchToProps = dispatch => {
  return {
    onInitTime  : (timer) => dispatch(timeOperations.initTime(timer)),
    onUpdateTime: (counter) => dispatch(timeOperations.updateTime(counter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
