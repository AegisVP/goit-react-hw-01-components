import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 5px;
  margin: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 15px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin: 0 10px 0 0;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;
