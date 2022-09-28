import PropTypes from 'prop-types';
import css from '../FeedbackOptions/Test.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>
        Good:<span className={css.spanStats}>{good}</span>
      </p>
      <p>
        Neutral:
        <span className={css.spanStats}>{neutral}</span>
      </p>
      <p>
        Bad:<span className={css.spanStats}>{bad}</span>
      </p>
      <p>
        Total:
        <span className={css.spanStats}>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span className={css.spanStats}>
          {positivePercentage ? positivePercentage : 0}%
        </span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
