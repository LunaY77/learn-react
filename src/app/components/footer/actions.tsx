import { Button, Typography } from "antd";
import { useClearCompleted, useMarkAllCompleted } from "../../hooks/use-todos";

const Title = Typography.Title;

const FooterActions: React.FC = () => {
    const clearCompletedMutation = useClearCompleted();
    const markAllCompletedMutation = useMarkAllCompleted();

    return (
        <>
            <Title level={5}>Actions</Title>
            <Button
                className="btn-action"
                size="small"
                onClick={() => markAllCompletedMutation.mutate()}
            >
                Mark All as Completed
            </Button>
            <Button
                className="btn-action"
                size="small"
                onClick={() => clearCompletedMutation.mutate()}
            >
                Clear Completed
            </Button>
        </>
    );
};

export default FooterActions;
