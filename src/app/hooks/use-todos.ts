import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodoApi, clearCompletedApi, fetchTodos, markAllCompletedApi, removeTodoApi, toggleTodoApi } from "../api/todo-api";
import { type TodoItem } from "../components/todos/item";

// Query Key
export const TODOS_QUERY_KEY = ["todos"];

// 获取所有 Todos
export function useTodos() {
    return useQuery({
        queryKey: TODOS_QUERY_KEY,
        queryFn: fetchTodos,
    })
}

// 添加所有 todo
export function useAddTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addTodoApi,
        onSuccess: (newTodo) => {
            queryClient.setQueryData<TodoItem[]>(TODOS_QUERY_KEY, (old) => {
                return old ? [...old, newTodo] : [newTodo];
            })
        }
    })
}

// 切换 todo 状态
export function useToggleTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: toggleTodoApi,
        onSuccess: ({ id }) => {
            queryClient.setQueryData<TodoItem[]>(TODOS_QUERY_KEY, (old) => {
                if (!old) return old;
                return old.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                );
            });
        }
    })
}

// 删除 todo
export function useRemoveTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeTodoApi,
        onSuccess: ({ id }) => {
            queryClient.setQueryData<TodoItem[]>(TODOS_QUERY_KEY, (old) => {
                if (!old) return old;
                return old.filter((todo) => todo.id !== id);
            });
        }
    })
}

// 清除已完成的 todos
export function useClearCompleted() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => {
            const todos = queryClient.getQueryData<TodoItem[]>(TODOS_QUERY_KEY) || [];
            const completedIds = todos.filter(todo => todo.completed).map(todo => todo.id);
            return clearCompletedApi(completedIds);
        },
        onSuccess: (completedIds) => {
            queryClient.setQueryData<TodoItem[]>(TODOS_QUERY_KEY, (old) => {
                return old ? old.filter(todo => !completedIds.includes(todo.id)) : [];
            });
        }
    })
}

// 标记所有 todos 为已完成
export function useMarkAllCompleted() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: () => {
            const todos = queryClient.getQueryData<TodoItem[]>(TODOS_QUERY_KEY) || [];
            const todoIds = todos.filter(todo => !todo.completed).map(todo => todo.id);
            return markAllCompletedApi(todoIds);
        },
        onSuccess: (todoIds) => {
            queryClient.setQueryData<TodoItem[]>(TODOS_QUERY_KEY, (old) => {
                if (!old) return old;
                return old.map(todo => 
                    todoIds.includes(todo.id) ? { ...todo, completed: true } : todo
                );
            });
        }
    })
}
