import styled from 'styled-components';

export const ListStatistic = styled.ul`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #9edaff;
  border-radius: 4px;
  width: 500px;
  box-shadow: ${props => props.theme.colors.boxShadow};
`;

export const ItemStatistic = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 24px;

  & + & {
    margin-top: 8px;
  }

  &:nth-child(4) {
    margin-top: 50px;
  }

  &:last-child {
    margin-top: 8px;
  }
`;
