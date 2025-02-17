import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { UserList } from "./features/users/pages/user-list";
import { MainLayout } from "./layout/main-layout";
import esES from "antd/lib/locale/es_ES";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={esES}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/users" element={<UserList />} />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
