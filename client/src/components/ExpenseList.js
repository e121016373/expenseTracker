import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const ExpenseList = () => {
    const { expenses } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {expenses.map(expenses => ( <li className="minus">
                    {expenses.text} 
                    <span> {expenses.amount} </span>
                    <button className="delete-btn">x</button>
                </li>))}
               
            </ul>
        </>
    )
}
