## 一、什么是 JSX

JSX 是 JS 的语法扩展，用来在 JS 文件中通过 `类 HTML` 标签表达页面的视图与交互逻辑

```html
<div className="container">
    <CustomComponent onClick={() => alert("hello")}>
        Hello {props.name}!
    </CustomComponent>
</div>
```

## 二、React 组件

返回 JSX 的函数就是 React 最简单的组件，可以和 HTML 标签一样嵌套使用。React 使用 `props` 参数向组件传递数据，提升组件的复用性。

```typescript
import React from "react";
import "./Button.css";

export type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger"; // 增加样式变体
};

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant = "secondary", // 默认为次要按钮
}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
```

在使用组件的时候，通过其标签的属性组装成 props 对象，传递给组件，语法和 HTML attribute 类似，但是值可以是任意的 JS 对象

```typescript
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
```

```typescript
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
```

组件写好后通过 reac-dom 渲染到页面

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <App />
    </StrictMode>
);
```

## 三、JSX 规则

React 组件规定：

1. 组件名称使用 Pascal 风格（首字母大写）

2. 组件仅接收 props 一个参数，用来暴露可配置属性，其子组件被 React 通过 children 属性注入

3. 在组件内部 props 是只读的，不允许对其进行修改

### 1. 必须有根节点

如果不想在 DOM 中增加额外的 `<div>`，可以使用 **Fragment**（即空标签 `<>...</>` 或 `<React.Fragment>...</React.Fragment>`）。

### 2. 所有标签需要闭合

包括单标签（自闭合标签），例如 `<img />`、`<br />`、`<input />`，不闭合会报错。

### 3. 和 HTML 属性差异

`class` 变为 `className`，`for` 变为 `htmlFor`，`tabindex` 变为 `tabIndex`

### 4. 自动转移 content

JSX 默认会转义所有输入内容，防止 XSS 攻击。如果确实要渲染 HTML 字符串，需使用 `dangerouslySetInnerHTML`

### 5. JavaScript 表达式用 `{}` 包裹

任何 JavaScript **变量**、**函数调用**或**表达式**，都需要放在大括号里。

-   _例子_：`<h1>Hello, {name}</h1>` 或 `<img src={user.avatarUrl} />`

### 6. 内联样式 (style) 接受对象，而非字符串

_规则_：第一层 `{}` 代表这是 JS 表达式，第二层 `{}` 代表这是个对象。

_例子_：`<div style={{ color: 'red', fontSize: '16px' }}>` (注意属性值也是驼峰)。

### 7. JSX 中的注释写法

不能直接写 HTML 注释 \`\`，也不能直接写 JS 注释 `//`。

-   _规则_：必须包裹在 `{}` 中。

-   _例子_：`{/* 这是一个注释 */}`。
