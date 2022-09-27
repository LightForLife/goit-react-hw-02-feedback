import React, { Component } from 'react';
import css from './FeedbackOptions/Test.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    let key = event.target.name;
    this.setState(prevstate => {
      return { [key]: (prevstate[key] += 1) };
    });
  };

  countTotalFeedback = () => {
    const total = this.state;
    return total.good + total.neutral + total.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </div>
        <div>
          <h2>Statistics</h2>
          <div>
            <p>
              Good:<span className={css.spanStats}>{this.state.good}</span>
            </p>
            <p>
              Neutral:
              <span className={css.spanStats}>{this.state.neutral}</span>
            </p>
            <p>
              Bad:<span className={css.spanStats}>{this.state.bad}</span>
            </p>
            <p>
              Total:
              <span className={css.spanStats}>{this.countTotalFeedback()}</span>
            </p>
            <p>
              Positive feedback:
              <span className={css.spanStats}>
                {this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0}
                %
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
