import styled from "styled-components";
import { playStore } from "../images";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const AwardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const AwardImage = styled.img`
  width: 54px;
  height: 54px;
`;

const TextLayout = styled.div`
  height: 100%;
`;

const AwardText = styled.span`
  font-size: 14px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`;

const Awards = () => {
  return (
    <Layout>
      <AwardLayout>
        <AwardImage src={playStore} />
        <TextLayout>
          <AwardText>2018 구글 플레이스토어</AwardText>
          <br />

          <AwardText>올해의 앱 최우수상 수상</AwardText>
        </TextLayout>
      </AwardLayout>
      <AwardLayout>
        <AwardImage src={playStore} />
        <TextLayout>
          <AwardText>2018 구글 플레이스토어</AwardText>
          <br />
          <AwardText>올해의 앱 최우수상 수상</AwardText>
        </TextLayout>
      </AwardLayout>
    </Layout>
  );
};

export default Awards;
