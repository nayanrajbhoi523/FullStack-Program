import React from "react";

function Child({ name }) {
    console.log("Child Component Rendered");

    return (
        <div>
            <h2>Hello, {name}</h2>
        </div>
    );
}

export default React.memo(Child);