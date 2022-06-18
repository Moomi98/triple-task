import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextLayout = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
  margin-bottom: 20px;
`;

const StrongText = styled.strong`
  font-weight: bold;
`;
const TextMetrics = () => {
  return (
    <Layout>
      <TextLayout>
        <StrongText>
          <span>700</span>만 명
        </StrongText>
        의 여행자
      </TextLayout>
      <TextLayout>
        <StrongText>
          <span>100</span>만 개
        </StrongText>
        의 여행 리뷰
      </TextLayout>
      <TextLayout>
        <StrongText>
          <span>470</span>만 개
        </StrongText>
        의 여행 일정
      </TextLayout>
    </Layout>
  );
};

export default TextMetrics;
