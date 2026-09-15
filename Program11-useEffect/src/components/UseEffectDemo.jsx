import { useEffect, useState } from "react";

function UseEffectDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Click :${count}`;
    }, [count]);

    return (
        <div>
            <h2>Changing Document Title</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default UseEffectDemo;