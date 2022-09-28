import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Button = styled.button`
  width: 150px;
  background-color: ${props => {
    switch (props.name) {
      case 'good':
        return theme.colors.green;
      case 'neutral':
        return theme.colors.orange;
      case 'bad':
        return theme.colors.red;
      default:
        return '#000';
    }
  }};
  height: 40px;
  border-radius: 4px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  border: 1px solid black;

  /* font-weight: bolder; */
  text-transform: capitalize;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;
