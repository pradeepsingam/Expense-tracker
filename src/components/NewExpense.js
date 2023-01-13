import React from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';


const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.movetoAppJs(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpenses;