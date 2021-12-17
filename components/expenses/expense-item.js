import styles from './expense-item.module.css';
import ExpenseDate from "./expense-date";
import Card from "../ui/card";

const ExpenseItem = (props) => {

    const {date, title, price} = props;

    return (
        <Card className={styles['expense-item']}>
            <ExpenseDate date={date}/>
            <div className={styles['expense-item__description']}>
                <h2>
                    {title}
                </h2>
                <div className={styles['expense-item__price']}>
                    ${price}
                </div>
            </div>
        </Card>
    );
};

export default ExpenseItem;