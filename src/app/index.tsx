import { Typography } from "antd";
import Footer from "./components/footer";
import Header from "./components/header";
import TodoList from "./components/todos/list";

import defaultTodoData from "./data";

import { useEffect } from "react";
import "../global.less";
import type { TodoItem } from "./components/todos/item";
import useTodoStore from "./store/todo-store";

const Title = Typography.Title;

function getTodoData(): Promise<TodoItem[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(defaultTodoData);
        }, 300);
    });
}

export default function App() {
    const initTodos = useTodoStore((state) => state.initTodos);

    useEffect(() => {
        getTodoData().then(initTodos);
    }, [initTodos]);

    return (
        <div className="todo-container">
            <Title level={2}>Todos</Title>
            <div className="todo">
                <Header />
                <TodoList />
                <Footer />
            </div>
        </div>
    );
}
