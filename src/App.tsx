import { useState } from "react";
import Button from "./Button";
import Dialog from "./Dialog";

const App = () => {
    // 1. 定义状态控制弹窗显示
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleConfirm = () => {
        alert("操作已确认！");
        // 这里可以执行 API 请求等操作
    };

    return (
        <div style={{ padding: 50 }}>
            <h1>React Dialog Demo</h1>

            {/* 点击按钮打开弹窗 */}
            <Button
                text="打开弹窗"
                onClick={() => setIsDialogOpen(true)}
                variant="primary"
            />

            {/* Dialog 组件 */}
            <Dialog
                isOpen={isDialogOpen}
                title="删除确认"
                onClose={() => setIsDialogOpen(false)} // 传递关闭函数
                onConfirm={handleConfirm}
            >
                <p>确定要删除这个项目吗？</p>
                <p style={{ color: "red", fontSize: "12px" }}>
                    此操作无法撤销。
                </p>
            </Dialog>
        </div>
    );
};

export default App;
