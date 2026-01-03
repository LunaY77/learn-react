import { Col, Row } from "antd";
import Actions from "./actions";
import Filter from "./filter";
import RemainingTodos from "./remain";

import "./index.less";

const Footer: React.FC = () => {
    return (
        <footer className="todo-footer">
            <Row>
                <Col className="actions" span={8}>
                    <Actions />
                </Col>
                <Col span={8}>
                    <RemainingTodos />
                </Col>
                <Col span={8}>
                    <Filter />
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
