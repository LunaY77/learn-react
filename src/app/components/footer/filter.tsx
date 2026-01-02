import { Radio, Typography } from "antd";

const Title = Typography.Title;

export const FILTERS = {
    All: "all",
    Active: "active",
    Completed: "completed",
} as const;

export type FiltersValueType = (typeof FILTERS)[keyof typeof FILTERS];

type FilterProps = {
    filter: FiltersValueType;
};

const Filter: React.FC<FilterProps> = ({ filter }) => {
    const filterTextList = Object.keys(FILTERS) as Array<keyof typeof FILTERS>;
    return (
        <div className="filters status-filters">
            <Title level={5}>Filter by Status</Title>
            <Radio.Group defaultValue={filter} size="small">
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
