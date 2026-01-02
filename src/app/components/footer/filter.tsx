import { Radio, Typography } from "antd";
import { useShallow } from "zustand/react/shallow";
import useTodoStore from "../../store/todo-store";

const Title = Typography.Title;

export const FILTERS = {
    All: "all",
    Active: "active",
    Completed: "completed",
} as const;

export type FiltersValueType = (typeof FILTERS)[keyof typeof FILTERS];

const Filter: React.FC = () => {
    const { filter, setFilter } = useTodoStore(
        useShallow((state) => ({
            filter: state.filter,
            setFilter: state.setFilter,
        }))
    );

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
