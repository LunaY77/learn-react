import { Button, Typography } from "antd";

const Title = Typography.Title;

const FooterActions: React.FC = () => {
    return (
        <>
            <Title level={5}>Actions</Title>
            <Button className="btn-action" size="small">
                Mark All as Completed
            </Button>
            <Button className="btn-action" size="small">
                Clear Completed
            </Button>
        </>
    );
};

export default FooterActions;
