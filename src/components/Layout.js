import styled from "styled-components";
import Logo from "./Logo";

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid red;
`;

const LogoLayout = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`;

const InfoLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Layout = () => {
  return (
    <MainLayout>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <InfoLayout></InfoLayout>
    </MainLayout>
  );
};

export default Layout;
