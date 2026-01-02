import TodoItem, { type TodoItemProps } from "./item";
import "./list.less";

type TodoListProps = {
    data: TodoItemProps[];
};

const TodoList: React.FC<TodoListProps> = ({ data }) => {
    return (
        <ul className="todo-list">
            {data.map(({ id, text, completed }) => (
                <TodoItem key={id} text={text} completed={completed} />
            ))}
        </ul>
    );
};

export default TodoList;
