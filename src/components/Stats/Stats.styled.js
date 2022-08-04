import styled from 'styled-components';

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 10px;
  width: 300px;
`;

export const StatsTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin: 0 0 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  margin: -5px -5px 0px;
  padding: 0;

  list-style: none;
  background-color: #dddddd;
`;

export const StatItem = styled.li`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100%-5 * 5) / 5);
  background-color: #ffffff;
  font-size: 12px;
`;

export const StatLabel = styled.span`
  font-weight: bold;
`;