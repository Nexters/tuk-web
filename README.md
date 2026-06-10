# 툭, 건네는 만남 TUK

> 단톡방은 살아있지만, 모임은 사라진 사이에게

TUK(툭)은 뜸해진 모임에 **넌지시 만남을 건네는** 서비스입니다.
"누군가 나를 떠올리며 툭, 건넸어요" — 먼저 연락하기 어려운 사이에 자연스럽게 만남의 타이밍을 만들어, 잠들어 있던 모임에 다시 활기를 불어넣어 줘요.

<p align="center">
  <!-- 메인 사진: 인스타 1번(편지봉투) 이미지를 업로드해 src를 교체하면 더 좋습니다 -->
  <img width="320" src="https://raw.githubusercontent.com/Nexters/tuk-web/main/apps/tuk-landing/public/service-capture-1.webp" />
</p>

## 링크

| Type          | Link                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| web     | https://landing.tuk.kr                                                                                        |
| ios     | https://apps.apple.com/kr/app/%ED%88%AD-%EB%A7%8C%EB%82%A8%EC%9D%84-%EB%84%8C%EC%A7%80%EC%8B%9C/id6749781762  |
| android | https://play.google.com/store/apps/details?id=com.plottwist.tuk                                               |

## 프로젝트 소개

보고는 싶지만 먼저 연락하기 어려운 순간이 있어요. TUK은 그 어색함을 대신 건네줍니다.
설정한 주기에 맞춰 자연스럽게 만남을 제안하는 알림을 보내고, 익명으로 전해지는 가벼운 초대장으로 누구나 조금 더 쉽게 용기를 낼 수 있도록 설계했습니다.

## 주요 기능

### 1. 만남의 타이밍

- 설정한 주기에 따라, 자연스럽게 만남을 제안하는 알림이 도착해요.
- "슬슬 그리워질 타이밍"을 놓치지 않도록 모임에 먼저 신호를 건넵니다.

### 2. 우리만의 제안

- 늘 같은 인삿말 대신, 우리만의 이야기로 만든 초대장을 보낼 수 있어요.
- 모임의 분위기와 성향을 담아 딱 맞는 만남 제안이 가능합니다.

### 3. 가볍게 건네는 만남

- 익명으로 전해지는 제안이라, 먼저 손 내밀기가 한결 쉬워져요.
- 웃음과 의외성으로 대화의 시작을 부담 없이 열어 줍니다.

### 4. 초대 · 제안 웹뷰

- 앱에서 보낸 모임/제안 초대를 웹 링크로 열어 받은 초대, 보낸 초대를 확인할 수 있어요.
- 앱 설치 없이도 초대 내용을 바로 확인하고 응답할 수 있습니다.

## Screenshots

| 만남의 타이밍 | 우리만의 제안 | 가볍게 건네는 만남 | 툭, 우리만의 만남 |
| :---: | :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/Nexters/tuk-web/main/apps/tuk-landing/public/mockup-1.webp" width="250" /> | <img src="https://raw.githubusercontent.com/Nexters/tuk-web/main/apps/tuk-landing/public/mockup-2.webp" width="250" /> | <img src="https://raw.githubusercontent.com/Nexters/tuk-web/main/apps/tuk-landing/public/mockup-3.webp" width="250" /> | <img src="https://raw.githubusercontent.com/Nexters/tuk-web/main/apps/tuk-landing/public/mockup-4.webp" width="250" /> |

## Stack & Libraries

모노레포(Turborepo + pnpm) 기반으로 두 개의 앱을 함께 관리합니다.

| App                | 역할                  | 스택                                                                                               |
| ------------------ | --------------------- | -------------------------------------------------------------------------------------------------- |
| `apps/tuk-landing` | 서비스 소개 랜딩 페이지 | Next.js 15 · React 19 · TypeScript · Tailwind CSS · CVA                                             |
| `apps/tuk-web`     | 초대 · 제안 웹뷰        | Next.js 15 · React 19 · TypeScript · TanStack Query v5 · Zod · Axios · react-error-boundary · Tailwind CSS |

- Turborepo
- pnpm
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Zod
- Husky · lint-staged · ESLint · Prettier

## Getting Started

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (전체)
pnpm dev

# 빌드
pnpm build

# 린트
pnpm lint
```

## Contributors

|                                              [sikkzz](https://github.com/sikkzz)                                               |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/100590110?s=400&u=6e0106f23a731e32bdc419191a2c6db649258055&v=4" width="180"> |
|                                                           JunSik Kim                                                           |

## Development Collaboration Rules

### 이슈 생성 규칙

- 이슈는 이슈 템플릿에 맞춰 작성합니다.
- 기능 구현은 Feature 템플릿을 사용합니다.
- 이슈 제목은 [이슈 종류] 이슈 제목 형식으로 작성합니다.
  - 예시: `[Feature] 프로젝트 초기 설정`

### 브랜치 이름 규칙

- 브랜치 이름은 이슈 번호와 종류를 조합하여 작성합니다.
- 기능 구현은 feat, 버그 수정은 fix를 사용합니다.
  - 예시: 이슈번호 1번 기능 구현 → `feat/#1`

### 커밋 메시지 규칙

- 커밋 메시지는 한글로 작성하고 prefix는 다음과 같이 사용합니다.
- feat: 새로운 기능 추가
- fix: 버그 수정
- refactor: 기능 변경 없는 코드 수정
- chore: 개발 이외의 작업
- test: 테스트 코드 작성
  - 예시: `feat: 초대 목록 컴포넌트 추가`

### PR 작성 규칙

- PR 제목은 [이슈 종류/#이슈번호] PR 제목 형식으로 작성하고 본문은 템플릿에 맞춰 작성합니다.
  - 예시: `[feat/#1] 프로젝트 초기 설정`
