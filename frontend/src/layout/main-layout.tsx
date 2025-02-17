// src/layout/MainLayout.tsx
import { Layout } from "antd";
import { Sidebar } from "./sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const ContentContainer = styled(Content)`
  padding: 24px;
  background: #f0f2f5;
`;

export const MainLayout = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <Layout>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Layout>
    </StyledLayout>
  );
};
