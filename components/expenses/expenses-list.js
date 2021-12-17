import styles from './expenses-list.module.css';
import ExpenseItem from "./expense-item";
import {Fragment} from "react";

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return  <h2 className={styles['expenses-list__fallback']}>
            Found no expenses.
        </h2>;
    }

    return (
        <Fragment>
            <ul className={styles['expenses-list']}>
                {props.items.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        date={item.date}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default ExpensesList;