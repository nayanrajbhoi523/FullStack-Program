import { useContext } from "react";
import { CollegeContext } from "../App";

export default function Faculty() {
    const college = useContext(CollegeContext);

    return (
        <div>
            <p>Username: {college.username}</p>
            <p>Email: {college.email}</p>
            <p>College Name: {college.collegeName}</p>
            <p>Department: {college.department}</p>
            <p>City: {college.city}</p>
            <p>State: {college.state}</p>
        </div>
    );
}