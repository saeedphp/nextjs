import styles from './users-list-item.module.css';

const UsersListItem = (props) => {

    const {id, name, age, gender, address} = props;

    return (
        <li className={styles.item} key={id}>
            {name} ({age} years old and is {gender} who lives in {address})
        </li>
    );
};

export default UsersListItem;