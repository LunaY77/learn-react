import React from "react";
import Button from "./Button";
import "./Dialog.css"; // 引入 CSS

type DialogProps = {
    isOpen: boolean; // 控制弹窗显示/隐藏的核心属性
    title: string;
    onClose: () => void; // 关闭时的回调
    onConfirm?: () => void; // 确认时的回调
    children?: React.ReactNode; // 弹窗内容
};

const Dialog: React.FC<DialogProps> = ({
    isOpen,
    title,
    onClose,
    onConfirm,
    children,
}) => {
    // 如果 isOpen 为 false，直接返回 null，什么都不渲染
    if (!isOpen) return null;

    return (
        // 1. 遮罩层 (Overlay)：点击背景通常也能关闭
        <div className="dialog-overlay" onClick={onClose}>
            {/* 2. 弹窗主体：阻止冒泡，防止点击弹窗内容时触发遮罩层的关闭事件 */}
            <div
                className="dialog-content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 标题栏 */}
                <div className="dialog-header">
                    <h3 className="dialog-title">{title}</h3>
                    <button className="dialog-close-icon" onClick={onClose}>
                        ×
                    </button>
                </div>

                {/* 内容区域 */}
                <div className="dialog-body">{children}</div>

                {/* 底部按钮栏 */}
                <div className="dialog-footer">
                    <Button text="取消" onClick={onClose} variant="secondary" />
                    <Button
                        text="确认"
                        onClick={() => {
                            if (onConfirm) onConfirm();
                            onClose(); // 确认后通常也自动关闭，看需求
                        }}
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dialog;
