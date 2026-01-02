import { useContext } from "react";
import TodoContext from "../../todoContext";
import { FILTERS } from "../footer";
import TodoItem from "./item";
import "./list.less";

const TodoList: React.FC = () => {
    const { todos, filter } = useContext(TodoContext);

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

    return (
        <ul className="todo-list">
            {visibleTodos.map((todo) => (
                <TodoItem key={todo.id} data={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
