export const FILTERS = {
    All: "all",
    Active: "active",
    Completed: "completed",
} as const;

export type FiltersValueType = (typeof FILTERS)[keyof typeof FILTERS];
