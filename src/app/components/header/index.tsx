import { Input } from "antd";
import { useState } from "react";
import { useAddTodo } from "../../hooks/use-todos";

const Header: React.FC = () => {
    const [input, setInput] = useState("");
    const addTodoMutation = useAddTodo();

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
                    addTodoMutation.mutate(input);
                    setInput("");
                }
            }}
        />
    );
};

export default Header;
