import React, {useState} from 'react';
import styles from './expense-form.module.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>

            <div className={styles['new-expense__controls']}>
                <div className={styles['new-expense__control']}>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input id="title" value={enteredTitle} type="text" onChange={titleChangeHandler}/>
                </div>
            </div>

            <div className={styles['new-expense__controls']}>
                <div className={styles['new-expense__control']}>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input id="price" value={enteredPrice} type="number" min="0.01" step="0.01"
                           onChange={priceChangeHandler}/>
                </div>
            </div>

            <div className={styles['new-expense__controls']}>
                <div className={styles['new-expense__control']}>
                    <label htmlFor="date">
                        Date
                    </label>
                    <input id="date" value={enteredDate} type="date" min="2021-01-01" max="2022-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className={styles['new-expense__actions']}>
                <button onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">
                    Add Expense
                </button>
            </div>

        </form>
    )
};

export default ExpenseForm;