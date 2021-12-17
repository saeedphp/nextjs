import React,{useState} from 'react';
import ExpenseItem from "../../components/expenses/expense-item";
import Expenses from "../../components/expenses/expenses";
import ExpenseForm from "../../components/expenses/new-expense/expense-form";
import NewExpense from "../../components/expenses/new-expense/new-expense";

const DUMMY_DATA=[
    {
        id: 'e1',
        title: 'Car Insurance',
        price: 19.99,
        date: new Date(2021,11,15),
    },
    {
        id: 'e2',
        title: 'TV',
        price: 300,
        date: new Date(2021,12,25),
    },
    {
        id: 'e3',
        title: 'Price',
        price: 150,
        date: new Date(2021,10,5),
    },
    {
        id: 'e4',
        title: 'Book',
        price: 250,
        date: new Date(2021,9,10),
    },
];

const ExpensePage = () => {

    const [expenses, setExpenses] =useState(DUMMY_DATA);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [
                expense,
                ...prevExpenses
            ];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
};

export default ExpensePage;