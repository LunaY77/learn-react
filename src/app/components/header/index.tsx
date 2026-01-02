import { Input } from "antd";
import { useState } from "react";
import useTodoStore from "../../store/todo-store";

const Header: React.FC = () => {
    const [input, setInput] = useState("");

    const addTodo = useTodoStore((state) => state.addTodo);

    return (
        <Input
            className="new-todo"
            placeholder="What needs to be done?"
            value={input}
            onChange={(ev) => {
                setInput(ev.target.value);
            }}
            onKeyDown={(ev) => {
                if (ev.key === "Enter" && input !== "") {
                    addTodo(input);
                    setInput("");
                }
            }}
        />
    );
};

export default Header;
