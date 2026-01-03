import { DeleteFilled } from "@ant-design/icons";
import { Checkbox, Col, Row } from "antd";

import { useRemoveTodo, useToggleTodo } from "../../hooks/use-todos";
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
    const toggleTodoMutation = useToggleTodo();
    const removeTodoMutation = useRemoveTodo();

    return (
        <li className="todo-item">
            <Row>
                <Col span={2} className="toggle-status">
                    <Checkbox
                        checked={completed}
                        onClick={() => toggleTodoMutation.mutate(id)}
                    />
                </Col>
                <Col span={20} className="todo-text">
                    {text}
                </Col>
                <Col span={2} className="delete-todo">
                    <DeleteFilled
                        className="delete-todo-icon"
                        onClick={() => removeTodoMutation.mutate(id)}
                    />
                </Col>
            </Row>
        </li>
    );
};

export default TodoItem;
