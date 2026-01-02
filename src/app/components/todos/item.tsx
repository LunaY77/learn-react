import { DeleteFilled } from "@ant-design/icons";
import { Checkbox, Col, Row } from "antd";

import { useContext } from "react";
import TodoContext from "../../todoContext";
import "./item.less";

export type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoItemProps = {
    data: TodoItem;
};

const TodoItem: React.FC<TodoItemProps> = ({
    data: { id, text, completed },
}) => {
    const { todos, setTodos } = useContext(TodoContext);

    const toggleCompleted = () => {
        const todoItem = todos.find((todo) => todo.id === id);
        if (todoItem) {
            todoItem.completed = !todoItem.completed;
            setTodos([...todos]);
        }
    };

    const remove = () => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <li className="todo-item">
            <Row>
                <Col span={2} className="toggle-status">
                    <Checkbox checked={completed} onClick={toggleCompleted} />
                </Col>
                <Col span={20} className="todo-text">
                    {text}
                </Col>
                <Col span={2} className="delete-todo">
                    <DeleteFilled
                        className="delete-todo-icon"
                        onClick={remove}
                    />
                </Col>
            </Row>
        </li>
    );
};

export default TodoItem;
