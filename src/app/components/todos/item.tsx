import { DeleteFilled } from "@ant-design/icons";
import { Checkbox, Col, Row } from "antd";

import { useShallow } from "zustand/react/shallow";
import useTodoStore from "../../store/todo-store";
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
    const { toggleTodo, removeTodo } = useTodoStore(
        useShallow((state) => ({
            toggleTodo: state.toggleTodo,
            removeTodo: state.removeTodo,
        }))
    );

    return (
        <li className="todo-item">
            <Row>
                <Col span={2} className="toggle-status">
                    <Checkbox
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                </Col>
                <Col span={20} className="todo-text">
                    {text}
                </Col>
                <Col span={2} className="delete-todo">
                    <DeleteFilled
                        className="delete-todo-icon"
                        onClick={() => removeTodo(id)}
                    />
                </Col>
            </Row>
        </li>
    );
};

export default TodoItem;
