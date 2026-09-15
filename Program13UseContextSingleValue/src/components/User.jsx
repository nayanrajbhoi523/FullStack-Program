import { useContext } from "react";
import { UserContext } from "../App";

export default function User() {
    const name = useContext(UserContext);

    return (
        <div>
            Name is {name}
        </div>
    );
}