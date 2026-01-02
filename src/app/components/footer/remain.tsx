import { Typography } from "antd";

const Title = Typography.Title;

type RemainingTodoProps = {
    count: number;
};

const RemainingTodo: React.FC<RemainingTodoProps> = ({ count }) => {
    const suffix = count === 1 ? "" : "s";

    return (
        <div className="todo-count">
            <Title level={5}>Remaining Todos</Title>
            <strong>{count}</strong> item{suffix} left
        </div>
    );
};

export default RemainingTodo;
