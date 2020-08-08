import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/Form/index";
const ContainerLoginPage = styled.div`
  padding-top: 80px;
`;

const LoginPage = () => {
  return (
    <ContainerLoginPage>
      <LoginForm />
    </ContainerLoginPage>
  );
};

export default LoginPage;
