import styled from 'styled-components';

const ProfileCard = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border: 1px solid #000000;
  border-radius: 10px;

  overflow: hidden;
`;

export const Avatar = styled.img`
  margin: 0 0 10px 0;
  width: 100%;
`;

export const Name = styled.p`
  margin: 0 0 5px 0;

  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const Info = styled.p`
  margin: 0 0 5px 0;

  font-size: 16px;
  font-weight: normal;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  margin: -10px;
  padding: 0;
  width: 100%;

  list-style: none;
`;

export const StatItem = styled.li`
  margin: 10px;
  width: calc((100%-10 * 6 / 3));

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ccdddd;
`;

export const StatLabel = styled.span`
  margin: 0;
  font-weight: bold;
`;

export const StatValue = styled.span`
  margin: 0;
  font-weight: normal;
`;

export { ProfileCard };