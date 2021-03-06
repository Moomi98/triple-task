import styled from "styled-components";
import { triple } from "../images";
import { showComponent } from "../utils/animations";

const Layout = styled.figure`
  width: 400px;
  height: 338px;
  position: relative;
  opacity: 0;
  animation: ${showComponent} 0.7s linear forwards;
`;

const TripleImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageCaption = styled.figcaption`
  position: absolute;
  font-size: 15px;
  left: 35%;
  bottom: 40px;
  color: rgba(58, 58, 58, 0.7);
`;

const Logo = () => {
  return (
    <Layout>
      <TripleImage src={triple}></TripleImage>
      <ImageCaption>2021년 12월 기준</ImageCaption>
    </Layout>
  );
};

export default Logo;
