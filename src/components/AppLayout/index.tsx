import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AppBar, LoginModal, RegisterModal } from "@/components";

const { Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);
  const [isRegisterModal, setIsRegisterModal] = useState<boolean>(false);

  console.log(isLoginModal);

  const loginModalToggle = () => {
    setIsLoginModal(!isLoginModal);
  };

  const registerModalToggle = () => {
    setIsRegisterModal(!isRegisterModal);
  };
  return (
    <Layout className="min-h-screen">
      <AppBar onLogin={loginModalToggle} onRegister={registerModalToggle} />
      <Content className="p-5 flex flex-col">
        <Outlet />
      </Content>
      <Footer className="text-center">
        TKNShop ©{new Date().getFullYear()} Created by Me
      </Footer>
      <LoginModal isOpen={isLoginModal} onClose={loginModalToggle} />
      <RegisterModal isOpen={isRegisterModal} onClose={registerModalToggle} />
    </Layout>
  );
};

export default AppLayout;
