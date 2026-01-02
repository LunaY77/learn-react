export default function Counter(props: { count: number }) {
    let { count } = props;
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => (count += 1)}>Increment</button>
        </div>
    );
}
