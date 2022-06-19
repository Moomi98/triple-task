# Triple 사전 과제
본 Repository는 Triple 과제 전형을 위해 열려있습니다.

## 프로젝트 실행 방법
해당 프로젝트는 create-react-app을 활용하여 진행했습니다.

먼저 필요한 라이브러리를 설치합니다.
```shell
npm install
```

그 후 프로젝트를 실행합니다.
```shell
  npm start
```

## 사용한 기술
![image](https://user-images.githubusercontent.com/76273383/174466572-45bc8aa8-64dd-4d72-bb63-93b6ed572a59.png)

### 사용 이유

1. CSS를 컴포넌트화 할 수 있어 가독성과 모듈성이 좋습니다.
2. 컴포넌트화된 CSS를 바로 사용할 수 있어 `className`등 부차적인 것을 적지 않아도 되기 때문에 코드 경량화가 가능합니다.
3. 해당 과제는 다양한 인터렉션을 요구하지 않았기 때문에 CSS-in-JS의 성능 감소에 영향을 거의 미치지 않는다고 생각했습니다.
4. 이전에도 사용해본 경험이 있어 러닝커브 없이 바로 사용할 수 있었습니다.

## 주요 코드 설명

### Layout.js

```javascript
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
```

페이지의 전체적인 레이아웃을 잡는 컴포넌트 입니다. **App.js의 기본 호출 컴포넌트로 설정**했습니다.

### Logo.js

```javascript
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

```
로고 이미지를 나타내는 컴포넌트 입니다. 

이미지와 설명이 함께 첨부되기 때문에 `figure` 태그로 이미지를 감싼 후 `figcaption` 태그로 이미지를 설명하고 있습니다.

애니매이션이 가장 먼저 나오도록 하기 위해 delay를 주지 않았습니다.

### TextMetrics.js

```javascript
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
```
지표 문구를 출력하는 컴포넌트 입니다.

뒤에 나올 custom hook을 이용하여 숫자 지표를 출력하고 있습니다.

로고보다 0.1초 뒤에 보여줘야 하기 때문에 animation delay를 0.1초로 설정했습니다.

### Awards.js

```javascript
const Layout = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  opacity: 0;
  animation: ${showComponent} 0.7s 0.2s linear forwards;
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
```
수상 내역을 보여주는 컴포넌트 입니다.

지표 출력 컴포넌트 이후에 보여줘야 하기 때문에 animation delay를 0.2초로 설정했습니다.

### animations.js

```javascript
import { keyframes } from "styled-components";

export const showComponent = keyframes`
  from {
    opacity: 0;
    margin-top: 10px;
  }
  to {
    opacity: 1;
    margin-top: 0px;
  }
`;

```

`keyframes`를 활용해 애니매이션을 설정하는 파일 입니다.

`opacity:0` 에서 `opacity:1`로 설정하여 컴포넌트가 점차 보여지게 하였고, `margin-top: 10px`에서 `margin-top: 0px`로 설정하여 밑에서 위로 살짝 떠오르는 애니매이션을 표현했습니다.

### useCount.js

```javascript
const useCount = (countNumber) => {
  const [count, setCount] = useState(0);

  const easeOutExpo = (x) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  useEffect(() => {
    let times = 0;
    const interval = 2000 / 120;
    const totalTimes = 120;
    const countFastTime = setInterval(() => {
      times++;
      const currentCount = Math.round(
        easeOutExpo(times / totalTimes) * countNumber
      );

      if (countNumber >= currentCount) {
        setCount(currentCount);
      }
      if (times === totalTimes) {
        clearInterval(countFastTime);
      }
    }, interval);
    return () => {
      clearInterval(countFastTime);
    };
  }, [countNumber]);

  return count;
};
```

지표 출력을 도와주는 custom hook 입니다.

2초간 지표 숫자의 카운팅을 점점 느려지게 표현해야 했기 때문에 easeOut 공식을 활용해 2초에 가까울 수록 카운팅을 느리게 할 수 있도록 했습니다.

그 후 `useEffect` 안에서 `setInterval`를 실행하여 일정 주기마다 easeOut 공식을 통한 출력과 `clearInterval` 시점을 관리할 수 있도록 했습니다.
