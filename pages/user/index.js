import React, {useState} from 'react';
import AddUsers from "../../components/users/add-user";
import UsersList from "../../components/users/users-list";

const AddUser = () => {

    const [usersList, setUsersList] = useState([]);
    const addUSerHandler = (uName, uAGe, uGender, uAddress) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    id: Math.random().toString(),
                    name: uName,
                    age: uAGe,
                    gender: uGender,
                    address: uAddress,
                }
            ];
        });
    };

    return (
        <div>
            <AddUsers onAddUser={addUSerHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
};

export default AddUser;