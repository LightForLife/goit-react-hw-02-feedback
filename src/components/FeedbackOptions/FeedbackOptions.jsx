import PropTypes from 'prop-types';
import css from './Test.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <>
        {options.map(option => (
          <button
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            className={css.button}
            name={option}
          >
            {option}
          </button>
        ))}
      </>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
