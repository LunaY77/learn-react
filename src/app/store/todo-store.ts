import { create } from "zustand";
import { FILTERS, type FiltersValueType } from "../components/footer/filter-constants";

// 定义类型，用于描述状态管理器的状态和操作
type TodoState = {
    filter: FiltersValueType;
}

type TodoActions = {
    setFilter: (filter: FiltersValueType) => void;
}

export type TodoStore = TodoState & TodoActions;

const useTodoStore = create<TodoStore>((set) => ({
    filter: FILTERS.All,
    setFilter: (filter: FiltersValueType) => set({ filter }),
}))

export default useTodoStore;