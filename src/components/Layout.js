import styled from "styled-components";
import Awards from "./Awards";
import Logo from "./Logo";
import TextMetrics from "./TextMetrics";

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const LogoLayout = styled.div`
  width: 100%;
`;

const InfoLayout = styled.div`
  width: 100%;
  height: 367px;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <MainLayout>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <InfoLayout>
        <TextMetrics />
        <Awards />
      </InfoLayout>
    </MainLayout>
  );
};

export default Layout;
