import css from './Test.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <>
        {options.map(option => (
          <button
            type="button"
            onClick={onLeaveFeedback}
            className={css.button}
            name={option}
            key={option}
          >
            {option}
          </button>
        ))}
      </>
    </div>
  );
};
