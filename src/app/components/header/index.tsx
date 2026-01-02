import { Input } from "antd";

type HeaderProps = {
    placeholder?: string;
};

const Header: React.FC<HeaderProps> = ({
    placeholder = "What needs to be done?",
}) => {
    return <Input className="new-todo" placeholder={placeholder} />;
};

export default Header;
