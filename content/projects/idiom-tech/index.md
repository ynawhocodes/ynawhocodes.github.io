---
emoji: 🧚🏻‍♂️
title: '[idiom] 수천만개의 고민이 담긴 이디엄의 기술을 소개합니다.'
date: '2024-02-12 00:00:00'
author: ynawhocodes
tags: project retrospect
categories: 🎳project
---
안녕하세요. 오늘은 co-founder로 활동했던 SaSS 서비스, idiom(이디엄)의 개발 이야기를 해보려합니다.

idiom에 대한 간단한 소개를 하자면,
서비스 이름은 idiom(이디엄)으로 간편 수거가 가능한 중고 거래 서비스입니다.  
모바일로 수거 신청을 하면, 희망 수거일에 택배사에거 수거하고, 저희가 검수/촬영/업로드해주는 중고 거래 서비스를 창업했습니다. 판매자에겐 판매의 부담을 줄이고, 구매자에겐 정확하고 신뢰있는 정보만을 주고 싶어 해당 아이템으로 창업을 시작했습니다.
  
평소 내가 만든 제품을 사용자들이 쓰는 걸 좋아하고 창업같은 0에서 1을 만드는 활동을 좋아하기에 졸업 후 창업을 해보고 싶다는 생각에 마음 맞는 사람과 창업을 시작했습니다.  

창업 아이템 구축(기획부터 출시까지)에 대한 더욱 자세한 내용은 [수백가지 고민이 담긴 첫 창업, idiom]() 해당 페이지에서 확인해주시면 감사하겠습니다.

## 🏔️ idiom 기술 한눈에 보기
```
코어: React, TypeScript, Next.js
상태 관리: React-Query
스타일링: TailwindCSS, Framer-motion
패키지 매니저: PNPM
자동화: GitHub Actions, Discord Webhook
```
## 👀 왜 해당 스택을 선택하셨나요?
### 1) 하나씩 설명
가설을 토대로 만들어진 MVP를 빠른 주기로 검증해야 했기에 빠른 개발 속도와 코드 안정성이 필요했습니다.
- **Next.js**   
따라서 Next는 SSR, SEO최적화, 페이지 기반 라우팅, 이미지 최적화 관련 기능이 내장돼있어 이러한 요구사항을 간편하게 처리할 수 있을 것 같기 때문에 Next를 선택했습니다.
- **React**  
재사용 가능한 UI 컴포넌트를 쉽게 작성하기 위한 목적과 가상 DOM으로 빠른 렌더링시키기 위해 React를 사용했습니다.
- **TypeScript**  
빠른 개발 속도엔 안정성이 중요했기에 런타임 에러를 사전에 방지하기 위해 정적 타입 언어를 사용했고, 정의한 타입 정보를 바탕으로 자동 완성 기능이 제공됨과 가독성/유지보수성을 위해 TypeScript를 사용했습니다.
- **React-Query**  
서버에서 데이터를 fetching하는 기능이 많이 필요했기에 Recoil보다 API 호출과 캐싱 부분에서 특화된 React-Query를 사용했습니다.  
- **TailwindCSS**  
쉽게 반응형 디자인을 구현할 수 있고 클래스 이름 해당 스타일의 기능이기에 직관적이고 개발 생산성이 좋다고 생각하려 TailwindCSS를 사용했습니다.
- **Framer-motion**  
React내에서 애니메이션 효과를 구현하기에 가장 간편하다고 생각하여 Framer-motion을 사용했습니다.  
자세한 애니메이션 라이브러리 비교는 []() 참고해주시면 감사하겠습니다.
- **PNPM**  
전역 캐시를 사용하기에 중복을 최소화하는 장점 때문에 PNPM을 선택했습니다.  
- **GitHub Actions, Discord Webhook**   
개발에 더 몰두할 수 있도록 Github Action을 통해 이슈 생성 시 브랜치 생성 자동화나 Supabase table 변화가 있을 시 trigger를 통해 Discord로 알림이 오는 자동화 작업을 진행했습니다.
  
### 2) 디렉토리 살펴보기
또한 이디엄은 모노레포로 구성돼있습니다.
```
📦apps
 ┣ 📦admin
 ┣ 📦landing
 ┣ 📦web
 ┣ 📦packages
 ┗ ...
```
그 이유는 코드 재사용성을 향상 시키기 위함이었습니다.  
이디엄은 어드민/랜딩페이지/메인으로 총 3가지 repo로 분류할 것 같아 모노레포로 관리해도 의존성과 유지보수의 걱정보단 코드 재사용을 통한 장점이 더 클 것 같기 때문이었습니다.  

따라서 이디엄은 총 3가지 repo로 구성되어있고,  
packages로 모듈을 공유하고 있습니다.  

```
📦packages
 ┣...
 ┣📦src
 ┣ 📂api
 ┃ ┗ ... // api 핸들러
 ┣ 📂hook
 ┃ ┗ ... // data fetching hook
 ┣📦types
 ┣📦ui
 ┗ ...
```
 
```
📦src
 ┣ 📂_assets
 ┃ ┃ ┗ ...
 ┣ 📂_hooks
 ┃ ┣ 📂page
 ┃ ┃ ┗ 📜use-applyfilter.ts
 ┃ ┗ 📂util
 ┃ ┃ ┣ 📜use-intersection.ts
 ┃ ┃ ┣ 📜use-navigation.ts
 ┃ ┃ ┗ 📜use-select.ts
 ┣ 📂_lib
 ┃ ┣ 📜HistoryProvider.tsx
 ┃ ┗ 📜getQueryClient.tsx
 ┣ 📂app
 ┃ ┣ 📂(components)
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┗ ...
 ┃ ┣ 📂(pages)
 ┃ ┃ ┣ 📂(home)
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂@modal
 ┃ ┃ ┃ ┃ ┗ ...
 ┃ ┃ ┃ ┗ ...
 ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ ...
 ┃ ┣ 📂style
 ┃ ┃ ┣ 📜fonts.ts
 ┃ ┃ ┗ 📜globals.css
 ┃ ┣ 📜apple-icon.png
 ┃ ┗ ...
 ┗ 📜middleware.ts
```
```
// tailwind.config
 theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#222222",
      red: "#FF4040",
      yellow: "#FAFF00",
      "gray-100": "#EEEEEE",
      "gray-300": "#BABABA",
      "gray-500": "#909090",
      "gray-700": "#535353",
    },
    extend: {
      fontSize: {
        10: [
          "10px",
          {
            lineHeight: "10px",
            letterSpacing: "0.00em",
            fontWeight: "400",
          },
        ],
        12: [
          "12px",
          {
            lineHeight: "12px",
            letterSpacing: "0.00em",
            fontWeight: "400",
          },
        ],
        14: [
          "14px",
          {
            lineHeight: "14px",
            letterSpacing: "0.00em",
            fontWeight: "400",
          },
        ],
        16: [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0.00em",
            fontWeight: "400",
          },
        ],
```
## 구현하면서 고민 3가지만 소개
### 1) 이번 버전 MVP도 갈아 엎을 수 있다. 유지 보수 용이하게 컴포넌트 작성하려면?
### 2) 모든 유저에게 일관적인 사용 경험을 주기 위해선?  
개발 생산성뿐만이 아니라 모든 유저에게도 일관적인 사용 경험을 주기 위해 디자인 시스템이 필요하다 여겼습니다. 
한 픽셀까지 완벽한 아름다운 사용자 경험 
### 3) 캐싱으로 인한 업로드 확인 불분명
### 4) 브라우저 호환성 고려

