import { Typography } from "antd";
import useTodoStore from "../../store/todo-store";

const Title = Typography.Title;

const RemainingTodo: React.FC = () => {
    const todos = useTodoStore((state) => state.todos);

    const count = todos.reduce((acc, prev) => {
        return prev.completed ? acc : acc + 1;
    }, 0);

    const suffix = count === 1 ? "" : "s";

    return (
        <div className="todo-count">
            <Title level={5}>Remaining Todos</Title>
            <strong>{count}</strong> item{suffix} left
        </div>
    );
};

export default RemainingTodo;
