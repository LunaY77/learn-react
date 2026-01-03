import { useTodos } from "../../hooks/use-todos";
import useTodoStore from "../../store/todo-store";
import { FILTERS } from "../footer/filter-constants";
import TodoItem from "./item";
import "./list.less";

const TodoList: React.FC = () => {
    const { data: todos = [], isLoading } = useTodos();
    const filter = useTodoStore((state) => state.filter);

    const visibleTodos = todos.filter((todo) => {
        switch (filter) {
            case FILTERS.Active:
                return todo.completed === false;
            case FILTERS.Completed:
                return todo.completed === true;
            default:
                return true;
        }
    });

    if (isLoading) {
        return <div className="todo-list-loading">Loading todos...</div>;
    }

    return (
        <ul className="todo-list">
            {visibleTodos.map((todo) => (
                <TodoItem key={todo.id} data={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
