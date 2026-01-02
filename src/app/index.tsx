import { Typography } from "antd";
import Footer, { FILTERS } from "./components/footer";
import Header from "./components/header";
import TodoList from "./components/todos/list";

import defaultTodoData from "./data";

import { useEffect, useState } from "react";
import "../global.less";
import type { FiltersValueType } from "./components/footer/filter";
import type { TodoItem } from "./components/todos/item";
import TodoContext from "./todoContext";

const Title = Typography.Title;

function getTodoData(): Promise<TodoItem[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(defaultTodoData);
        }, 300);
    });
}

export default function App() {
    const [filter, setFilter] = useState<FiltersValueType>(FILTERS.All);
    const [todos, setTodos] = useState<TodoItem[]>();

    useEffect(() => {
        getTodoData().then(setTodos);
    }, []);

    return (
        <TodoContext.Provider
            value={{
                filter,
                setFilter,
                todos: todos || [],
                setTodos: setTodos,
            }}
        >
            <div className="todo-container">
                <Title level={2}>Todos</Title>
                <div className="todo">
                    <Header />
                    <TodoList />
                    <Footer />
                </div>
            </div>
        </TodoContext.Provider>
    );
}
