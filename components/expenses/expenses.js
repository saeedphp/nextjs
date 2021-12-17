import {useState} from "react";
import ExpenseItem from "./expense-item";
import styles from './expenses.module.css';
import Card from "../ui/card";
import ExpenseFilter from "./expense-filter";
import ExpensesList from "./expenses-list";
import ExpensesChart from "./expenses-chart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const {items} = props;
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });



    return (
        <Card className={styles.expenses}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart items={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
};

export default Expenses;