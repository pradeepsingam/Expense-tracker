
import "./expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return <Card className="expenses">
        <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
    </Card>
}

export default Expenses;