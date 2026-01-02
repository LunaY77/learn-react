import { Radio, Typography } from "antd";
import { useContext } from "react";
import TodoContext from "../../todoContext";

const Title = Typography.Title;

export const FILTERS = {
    All: "all",
    Active: "active",
    Completed: "completed",
} as const;

export type FiltersValueType = (typeof FILTERS)[keyof typeof FILTERS];

const Filter: React.FC = () => {
    const { filter, setFilter } = useContext(TodoContext);

    const filterTextList = Object.keys(FILTERS) as Array<keyof typeof FILTERS>;
    return (
        <div className="filters status-filters">
            <Title level={5}>Filter by Status</Title>
            <Radio.Group
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                size="small"
            >
                {filterTextList.map((text) => {
                    const val = FILTERS[text];
                    return (
                        <Radio.Button key={val} value={val}>
                            {text}
                        </Radio.Button>
                    );
                })}
            </Radio.Group>
        </div>
    );
};

export default Filter;
