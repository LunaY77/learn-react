import { Button, Typography } from "antd";
import { useShallow } from "zustand/react/shallow";
import useTodoStore from "../../store/todo-store";

const Title = Typography.Title;

const FooterActions: React.FC = () => {
    const { markAllCompleted, clearCompleted } = useTodoStore(
        useShallow((state) => ({
            markAllCompleted: state.markAllCompleted,
            clearCompleted: state.clearCompleted,
        }))
    );

    return (
        <>
            <Title level={5}>Actions</Title>
            <Button
                className="btn-action"
                size="small"
                onClick={markAllCompleted}
            >
                Mark All as Completed
            </Button>
            <Button
                className="btn-action"
                size="small"
                onClick={clearCompleted}
            >
                Clear Completed
            </Button>
        </>
    );
};

export default FooterActions;
