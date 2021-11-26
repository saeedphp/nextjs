import styles from './logistics-item.module.css';

const LogisticsItem = (props) => {
    return (
        <li className={styles.item}>
            <span>
                <i className="fa fa-clock"></i>
            </span>
            <span>
                {props.children}
            </span>
        </li>
    );
};

export default LogisticsItem;