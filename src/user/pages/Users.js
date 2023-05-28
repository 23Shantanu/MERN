import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Shan",
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2022/11/How-old-is-Kratos-in-God-of-War-Ragnarok-fe3d5f5.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};
export default Users;
