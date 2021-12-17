import React from 'react';
import styles from './users-list.module.css';
import UsersListItem from "./users-list-item";
import Card from "../ui/card";

const UsersList = (props) => {

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) =>(
                    <UsersListItem
                        name={user.name}
                        age={user.age}
                        gender={user.gender}
                        address={user.address}
                    />
                ))}
            </ul>
        </Card>
    )
};

export default UsersList;