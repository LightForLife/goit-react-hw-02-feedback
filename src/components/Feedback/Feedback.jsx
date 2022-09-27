import React from 'react';
import css from './Test.module.css';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveGoodFeedback = () => {
    console.log('Good');
    this.setState(goodFeedback => ({ good: goodFeedback.good + 1 }));
    this.countTotalFeedback();
  };

  leaveNeutralFeedback = () => {
    console.log('Neutral');
    this.setState(neutralFeedback => ({
      neutral: (neutralFeedback.neutral += 1),
    }));
  };

  leaveBadFeedback = () => {
    console.log('Bad');
    this.setState(badFeedback => ({ bad: badFeedback.bad + 1 }));
  };

  countTotalFeedback = () => {
    const total = this.state;
    return total.good + total.neutral + total.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <section>
        <div>
          <h2>Please leave feedback</h2>
          <div>
            <button
              type="button"
              onClick={this.leaveGoodFeedback}
              className={css.button}
            >
              Good
            </button>
            <button
              type="button"
              onClick={this.leaveNeutralFeedback}
              className={css.button}
            >
              Neutral
            </button>
            <button
              type="button"
              onClick={this.leaveBadFeedback}
              className={css.button}
            >
              Bad
            </button>
          </div>
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
