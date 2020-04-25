import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const plus_total = transactions
        .map(transaction => transaction.amount < 0 ? 0 : transaction.amount)
        .reduce((acc, item) => (acc += item), 0).toFixed(2);
    const minus_total = transactions
        .map(transaction => transaction.amount < 0 ? transaction.amount : 0)
        .reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${plus_total}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(minus_total)}</p>
            </div>
        </div>
    )
}
