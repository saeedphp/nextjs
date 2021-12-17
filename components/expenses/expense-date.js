import styles from './expense-date.module.css';

const ExpenseDate = (props) => {

    const {date} = props;

    const month = new Date(date).toLocaleString('en-US', {
        month: 'long',
    });
    const day = new Date(date).toLocaleString('en-US', {
        day: '2-digit',
    });
    const year = new Date(date).getFullYear();

    return (
        <div className={styles['expense-date']}>
            <div className={styles['expense-date__month']}>
                {month}
            </div>
            <div className={styles['expense-date__year']}>
                {year}
            </div>
            <div className={styles['expense-date__day']}>
                {day}
            </div>
        </div>
    );
};

export default ExpenseDate;