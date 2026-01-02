import { useState } from "react";

export default function Counter(props: { count: number }) {
    const [count, setCount] = useState(props.count);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
