import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>React.memo() Example</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <Child name="Darshan" />
        </div>
    );
}

export default Parent;