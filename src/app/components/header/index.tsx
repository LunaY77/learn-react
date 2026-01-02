import { Input } from "antd";
import { useContext, useState } from "react";
import TodoContext from "../../todoContext";
import type { TodoItem } from "../todos/item";

const Header: React.FC = () => {
    const [input, setInput] = useState("");
    const { todos, setTodos } = useContext(TodoContext);

    const addTodo = () => {
        if (input !== "") {
            const lastTodoId =
                todos.length > 0 ? todos[todos.length - 1].id : 0;

            const newTodo: TodoItem = {
                id: lastTodoId + 1,
                text: input,
                completed: false,
            };

            setTodos([...todos, newTodo]);
            setInput("");
        }
    };

    return (
        <Input
            className="new-todo"
            placeholder="What needs to be done?"
            value={input}
            onChange={(ev) => {
                setInput(ev.target.value);
            }}
            onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                    addTodo();
                }
            }}
        />
    );
};

export default Header;
