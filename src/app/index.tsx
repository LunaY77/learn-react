import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Typography } from "antd";
import Footer from "./components/footer";
import Header from "./components/header";
import TodoList from "./components/todos/list";

import "../global.less";

const Title = Typography.Title;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60, // 1 minute
            refetchOnWindowFocus: false,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="todo-container">
                <Title level={2}>Todos</Title>
                <div className="todo">
                    <Header />
                    <TodoList />
                    <Footer />
                </div>
            </div>
        </QueryClientProvider>
    );
}
