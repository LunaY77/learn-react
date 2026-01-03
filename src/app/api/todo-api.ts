import type { TodoItem } from "../components/todos/item";
import defaultTodoData from "./data";

// 模拟服务器 API - 获取所有 todos
export async function fetchTodos(): Promise<TodoItem[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(defaultTodoData);
        }, 1000);
    });
}

// 模拟服务器 API - 添加一个新的 todo
export async function addTodoApi(text: string): Promise<TodoItem> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newTodo: TodoItem = {
                id: Math.floor(Math.random() * 10000),
                text,
                completed: false,
            };
            resolve(newTodo);
        }, 300);
    });
}

// 模拟服务器 API - 切换 todo 状态
export async function toggleTodoApi(id: number): Promise<{ id: number }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id });
        }, 300);
    });
}

// 模拟服务器 API - 删除一个 todo
export async function removeTodoApi(id: number): Promise<{ id: number }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id });
        }, 300);
    }
    );
}

// 模拟服务器 API - 清除已完成的 todos
export async function clearCompletedApi(completedIds: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(completedIds);
        }, 300);
    });
}

// 模拟服务器 API - 标记所有 todos 为已完成
export async function markAllCompletedApi(todoIds: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(todoIds);
        }, 300);
    });
}