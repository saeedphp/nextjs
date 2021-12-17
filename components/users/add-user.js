import React, {Fragment, useState} from 'react';
import styles from './add-user.module.css';
import Card from "../ui/card";
import ErrorModal from "../ui/error-modal";

const AddUsers = (props) => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [error, setError] = useState(false);

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const genderChangeHandler = (event) => {
        setEnteredGender(event.target.value);
    };

    const addressChangeHandler = (event) => {
        setEnteredAddress(event.target.value);
    };

    const addUserHandler = (event) => {

        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || enteredGender.length === 0 || enteredAddress.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid and not empty values'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
               title: 'Invalid age',
               message: 'Please enter a valid age (> 0)',
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge, enteredGender, enteredAddress);

        setEnteredUsername('');
        setEnteredAge('');
        setEnteredGender('');
        setEnteredAddress('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}>
            </ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>

                <label htmlFor="username">
                Name
                </label>
                <input id="username" value={enteredUserName} onChange={userNameChangeHandler} type="text"/>

                <label htmlFor="age">
                Age
                </label>
                <input id="age" value={enteredAge} onChange={ageChangeHandler} type="number" min="1" step="1"/>

                <label htmlFor="gender">
                Gender
                </label>
                <select id="gender" value={enteredGender} onChange={genderChangeHandler}>
                <option>--select--</option>
                <option value="female">female</option>
                <option value="male">male</option>
                </select>

                <label htmlFor="adress">
                Address
                </label>
                <textarea placeholder="Address..." onChange={addressChangeHandler} value={enteredAddress}>

                </textarea>

                <button type="submit">
                Add User
                </button>

                </form>
                </Card>
                </Fragment>
                )
                };

                export default AddUsers;