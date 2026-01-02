import { createContext } from "react";
import type { FiltersValueType } from "./components/footer/filter";
import type { TodoItem } from "./components/todos/item";

type Context = {
    filter: FiltersValueType;
    setFilter: (filter: FiltersValueType) => void;
    todos: TodoItem[];
    setTodos: (todos: TodoItem[]) => void;
};

const TodoContext = createContext<Context>({} as Context);

export default TodoContext;
