import styled from 'styled-components';

export const TransactionList = styled.table`
  margin: 0;
  padding: 5px;

  width: 500px;

  font-size: 16px;
  font-weight: normal;
`;

export const TableHeader = styled.thead`
  padding: 5px;

  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  background-color: #009999;
  color: #ffffff;
`;

export const TableBody = styled.tbody`
  font-size: 16px;
  font-weight: normal;
  color: #555555;
  background-color: #ffffff;
`;

export const TranRow = styled.tr`
  :nth-child(2n) {background-color: #e8eeee;}
`;

export const TranType = styled.td`
  padding: 0 0 0 15px;
  width: 60%;
`;

export const TranAmount = styled.td`
  padding: 0 10px 0;
  width: 20%;
  text-align: right;
`;

export const TranCurrency = styled.td`
  width: 20%;
  text-align: center;
`;