import { create } from "zustand";
import { FILTERS, type FiltersValueType } from "../components/footer/filter";
import { type TodoItem } from "../components/todos/item";

// 定义类型，用于描述状态管理器的状态和操作
type TodoState = {
    todos: TodoItem[];
    filter: FiltersValueType;
}

type TodoActions = {
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    initTodos: (todos: TodoItem[]) => void;
    clearCompleted: () => void;
    markAllCompleted: () => void;
    setFilter: (filter: FiltersValueType) => void;
}

export type TodoStore = TodoState & TodoActions;

const useTodoStore = create<TodoStore>((set) => ({
        todos: [],
        addTodo: (text: string) => set((state) => {
            const newTodo: TodoItem = {
                id: state.todos.length > 0 ? state.todos.at(-1)!.id + 1 : 1,
                text,
                completed: false,
            };
            return { todos: [...state.todos, newTodo] };
        }),
        removeTodo: (id: number) => set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
        toggleTodo: (id: number) => set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
        initTodos: (todos: TodoItem[]) => set({ todos }),
        clearCompleted: () => set((state) => ({
            todos: state.todos.filter((todo) => !todo.completed),
        })),
        markAllCompleted: () => set((state) => ({
            todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        })),
        filter: FILTERS.All,
        setFilter: (filter: FiltersValueType) => set({ filter }),
}))

export default useTodoStore;