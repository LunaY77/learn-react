import { Col, Row } from "antd";
import Actions from "./actions";
import type { FiltersValueType } from "./filter";
import Filter from "./filter";
import RemainingTodos from "./remain";

import "./index.less";

type FooterProps = {
    todosRemaining: number;
    filter: FiltersValueType;
};

const Footer: React.FC<FooterProps> = ({ todosRemaining, filter }) => {
    return (
        <footer className="todo-footer">
            <Row>
                <Col className="actions" span={8}>
                    <Actions />
                </Col>
                <Col span={8}>
                    <RemainingTodos count={todosRemaining} />
                </Col>
                <Col span={8}>
                    <Filter filter={filter} />
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
export { FILTERS } from "./filter";
