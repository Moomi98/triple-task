import styled from "styled-components";
import useCount from "../hooks/useCount";
import { showComponent } from "../utils/animations";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0;

  animation: ${showComponent} 0.7s 0.1s linear forwards;
`;
const TextLayout = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
  margin-bottom: 20px;
`;

const TextMetrics = () => {
  const travelCount = useCount(700);
  const reviewCount = useCount(100);
  const scheduleCount = useCount(470);
  return (
    <Layout>
      <TextLayout>
        <strong>
          <span>{travelCount}</span>만 명
        </strong>
        의 여행자
      </TextLayout>
      <TextLayout>
        <strong>
          <span>{reviewCount}</span>만 개
        </strong>
        의 여행 리뷰
      </TextLayout>
      <TextLayout>
        <strong>
          <span>{scheduleCount}</span>만 개
        </strong>
        의 여행 일정
      </TextLayout>
    </Layout>
  );
};

export default TextMetrics;
