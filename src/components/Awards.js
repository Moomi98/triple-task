import styled from "styled-components";
import { playStore, apple } from "../images";

const Layout = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

const AwardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const AwardImage = styled.img`
  width: 54px;
  height: 54px;
`;

const TextLayout = styled.div`
  text-align: left;
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
        <AwardImage src={apple} />
        <TextLayout>
          <AwardText>2018 애플 앱스토어</AwardText>
          <br />
          <AwardText>오늘의 여행앱 선정</AwardText>
        </TextLayout>
      </AwardLayout>
    </Layout>
  );
};

export default Awards;
