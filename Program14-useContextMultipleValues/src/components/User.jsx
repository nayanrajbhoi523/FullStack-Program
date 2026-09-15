import { useContext } from "react";
import { UserContext } from "../App";

export default function User() {
    const user = useContext(UserContext);

    return (
        <div>
            <p>Name is {user.name}</p>
            <p>Email is {user.email}</p>
            <p>Class is {user.class}</p>
        </div>
    );
}