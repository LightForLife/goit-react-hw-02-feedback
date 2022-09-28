import PropTypes from 'prop-types';
import { ListStatistic } from './Statistics.styled';
import { ItemStatistic } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListStatistic>
      <ItemStatistic>
        <span>Good:</span>
        <span>{good}</span>
      </ItemStatistic>
      <ItemStatistic>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </ItemStatistic>
      <ItemStatistic>
        <span>Bad:</span>
        <span>{bad}</span>
      </ItemStatistic>
      <ItemStatistic>
        <span>Total:</span>
        <span>{total}</span>
      </ItemStatistic>
      <ItemStatistic>
        <span> Positive feedback:</span>
        <span>{positivePercentage ? positivePercentage : 0}%</span>
      </ItemStatistic>
    </ListStatistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
