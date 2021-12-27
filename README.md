# 성공적인 프로그래밍

- 모든 프로그래밍 패러다임은 성공적인 프로그래밍을 위해 존재한다.

# 순수 함수

# 부수효과 있는 순수하지 않은 함수

# 일급함수

# 개발 트렌드

재미 / 실시간성 : 라이브 방송, 실시간 댓글, 협업, 메신저

독창성 / 완성도 : 애니메이션, 무한스크롤, 벽돌

더 많아져야하는 동시성 : 비동기 I/O, CSP, Actor, STM ..

더 빨라야하는 반응성 / 고가용성 : ELB, Auto Scaling, OTP Supervisor ..

대용량 / 정확성 / 병렬성 : MapReduce, Clojure Reducers ..

복잡도 / MSA ... : 많아지고 세미래지는 도구들(프레임워크, 라이브러리, 툴), 마이크로서비스 아키텍쳐

# Functional JavaScript

- 좋아지는 하드웨어 성능
- 좋아지는 컴파일러 (gulp -> pasel -> webpack -> vite -> esbuild -> swc?)
- 함수형 프로그래밍 기술
- 좋아지는 분산 / 리액티브 환경
- 동시성 + 병렬성 관련 기술
- 성공적인 적용 사례와 영향

# 데이터(객체 - 오브젝트) 기준

```js
duck.moveLeft();
duck.moveRight();
dog.moveLeft();
dog.moveRight();
```

# 함수 기준

```js
moveLeft(dog);
moveRight(duck);
moveLeft({ x: 5, y: 2 });
moveRight(dog);
```
