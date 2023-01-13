import React from 'react';
import ExpenseDate from './ExpenseDate';
import './expenseItems.css';
import Card from './Card';

function ExpenseItems(props) {

    return (
        <li>
            <Card className="expense-item">

                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>

                </div>

            </Card>
        </li>
    );
}

export default ExpenseItems;