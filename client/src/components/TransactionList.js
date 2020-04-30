import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>Transactions</h3>
      <ul className="list">
        <li>
          Name
          <span className="span"> Category </span>
          <span> Amount </span>
        </li>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
