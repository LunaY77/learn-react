import { useEffect, useState } from "react";

export default function Counter(props: { readonly count: number }) {
    const [count, setCount] = useState(props.count);

    useEffect(() => {
        setTimeout(() => {
            console.log(`Count is: ${count}`);
        }, 1000);
    });

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // 只有当 count 变化时才执行

    useEffect(() => {
        console.log("Component mounted");
    }, []); // 只在组件挂载时执行一次

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
