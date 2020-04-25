import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import BootstrapTable from 'react-bootstrap-table-next';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const columns = [
        {
            dataField: "id",
            hidden: true
        },
        {
            dataField: "text",
            text: "Name"
        },
        {
            dataField: "category",
            text: "Category"
        },
        {
            dataField: "amount",
            text: "Amount"
        }
    ];
    const temp = [
        {
            id: 0,
            text: "banana",
            category: "fruit",
            amount: 10
        }
    ]

    return (
        <>
            <h3>Transactions</h3>
            <ul className="list">
                <li>
                    Name
                    <span> Category </span> 
                    <span> Amount </span>
                </li>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
               
            </ul>
            
            {/* <BootstrapTable responsive striped bordered hover responsive
                keyField="id"
                data={transactions.map(transaction => (<Transaction id={transaction.id} transaction={transaction} />))}
                // data = {temp}
                columns={columns}
                >
               
            </BootstrapTable> */}
        </>
    )
}
