import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { ExpenseList } from './components/ExpenseList';
import { AddExpense } from './components/AddExpense';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <ExpenseList/>
        <AddExpense/>
      </div>
    </GlobalProvider>
  );
}

export default App;
