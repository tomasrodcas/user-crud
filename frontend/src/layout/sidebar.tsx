// src/layout/Sidebar.tsx
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Sider } = Layout;

const SidebarContainer = styled(Sider)`
  height: 100vh;
`;

export const Sidebar = () => {
  return (
    <SidebarContainer width={200}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/users">Usuarios</Link>
        </Menu.Item>
      </Menu>
    </SidebarContainer>
  );
};
