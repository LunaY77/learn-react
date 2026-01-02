import { Button, Typography } from "antd";
import { useContext } from "react";
import TodoContext from "../../todoContext";

const Title = Typography.Title;

const FooterActions: React.FC = () => {
    const { todos, setTodos } = useContext(TodoContext);

    return (
        <>
            <Title level={5}>Actions</Title>
            <Button
                className="btn-action"
                size="small"
                onClick={() => {
                    const newTodos = todos.map((todo) => {
                        todo.completed = true;
                        return todo;
                    });
                    setTodos(newTodos);
                }}
            >
                Mark All as Completed
            </Button>
            <Button
                className="btn-action"
                size="small"
                onClick={() => {
                    const newTodos = todos.filter((todo) => !todo.completed);
                    setTodos(newTodos);
                }}
            >
                Clear Completed
            </Button>
        </>
    );
};

export default FooterActions;
