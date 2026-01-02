import { DeleteFilled } from "@ant-design/icons";
import { Checkbox, Col, Row } from "antd";

import "./item.less";

export type TodoItemProps = {
    id: number;
    text: string;
    completed: boolean;
};

const TodoItem: React.FC<Pick<TodoItemProps, "text" | "completed">> = ({
    text,
    completed,
}) => {
    return (
        <li className="todo-item">
            <Row>
                <Col span={2} className="toggle-status">
                    <Checkbox checked={completed} />
                </Col>
                <Col span={20} className="todo-text">
                    {text}
                </Col>
                <Col span={2} className="delete-todo">
                    <DeleteFilled className="delete-todo-icon" />
                </Col>
            </Row>
        </li>
    );
};

export default TodoItem;
