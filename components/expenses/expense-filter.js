import React, {useState} from 'react';
import styles from './expense-filter.module.css';

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className={styles['expenses-filter']}>
            <div className={styles['expenses-filter__control']}>
                <label htmlFor="filterYear">
                    Filter by year
                </label>
                <select id="filterYear" value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
};

export default ExpenseFilter