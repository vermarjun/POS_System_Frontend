import React from "react";
import styled from "styled-components";

const transactions = [
  { id: 1, name: "Customer A", amount: 500, date: "2025-01-01" },
  { id: 2, name: "Customer B", amount: 300, date: "2025-01-02" },
  { id: 3, name: "Customer C", amount: 800, date: "2025-01-03" },
  { id: 4, name: "Customer D", amount: 450, date: "2025-01-04" },
  { id: 5, name: "Customer E", amount: 700, date: "2025-01-05" },
];

function Transactions() {
  return (
    <TransactionsWrapper>
      <h2>Recent Transactions</h2>
      <p>Monitor your customer transactions in detail.</p>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.name}</td>
              <td>${tx.amount.toFixed(2)}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TransactionsWrapper>
  );
}

export default Transactions;

// Styled Components
const TransactionsWrapper = styled.div`
  background: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    color: #0044cc;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #666666;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: #0077cc;
    color: #ffffff;

    th {
      padding: 10px;
      text-align: left;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background: #f9f9f9;
      }

      &:hover {
        background: #f1f1f1;
      }

      td {
        padding: 10px;
        border-bottom: 1px solid #e0e0e0;
        font-size: 0.95rem;
        color: #333333;
      }

      td:nth-child(3) {
        font-weight: bold;
        color: #007700;
      }
    }
  }
`;
