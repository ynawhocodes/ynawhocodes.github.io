module.exports = {
  title: `ynawhocodes`,
  description: `숨참고 Deep Dive`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://ynawhocodes.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `양나원`,
    bio: {
      role: `개발자`,
      description: ['끝없이 고민하는', '기록과 공유의 힘을 믿는'],
      thumbnail: 'memoji.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/ynawhocodes`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `ynawhocodes@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.02 ~ 2022.03',
        activity: 'IT 연합 웹 창업 동아리 『멋쟁이사자처럼』 8기 활동 및 9기 학교 대표',
        links: {},
      },
      {
        date: '2020.08 ~ 2023.03',
        activity: '모델 포트폴리오 웹사이트 『arinniee』 개발 및 운영',
        links: {
          post: '/projects/arinniee',
        },
      },
      {
        date: '2020.09 ~ 2021.01',
        activity: '성신여자대학교 컴퓨터공학과 동아리 『init』 창설 및 1기 운영진',
      },
      {
        date: '2020.10 ~ 2023.03',
        activity: '개인 포트폴리오 웹사이트 개발 및 운영',
        links: {
          post: '/projects/portfolio',
        },
      },
      {
        date: '2021.01 ~ 2022.02',
        activity: '💼 MUSINSA 프론트엔드개발팀 근무 (계약직)',
        links: {},
      },
      {
        date: '2021.05 ~ 2022.05',
        activity: 'MUSINSA 업무 자동화 프로그램 『spauto』 개발',
        links: {
          post: '/projects/spauto',
          github: 'https://github.com/ynawhocodes/self-perish-project',
        },
      },
      {
        date: '2021.09 ~ 2022.12',
        activity: '『수정광산』 개발 및 운영(진행중)',
        links: {
          post: '/projects/crystalmine',
          github: 'https://github.com/sungshin-community',
          googlePlay: 'https://play.google.com/store/apps/details?id=com.crystalminefrontend',
          appStore:
            'https://apps.apple.com/kr/app/%EC%88%98%EC%A0%95%EA%B4%91%EC%82%B0/id1641132567',
        },
      },
      {
        date: '2022.11 ~ 2022.12',
        activity: '『QmA』 기획 및 개발',
        links: {
          github: 'https://github.com/orgs/QmA-project/repositories',
        },
      },
      {
        date: '2023.02',
        activity: '🎓 성신여자대학교 컴퓨터공학과 졸업',
        links: {},
      },
      {
        date: '2023.06',
        activity: '천체동아리 3D 홍보페이지 『mastar』 개발',
        links: {
          github: 'https://github.com/ynawhocodes/mastar',
          demo: 'https://mastar.yangnawon.com/',
        },
      },
      {
        date: '2023.07 ~ 2023.08',
        activity: '문화 공공데이터 공모전 『countrip』 개발',
        links: {
          github: 'https://github.com/countrip/countrip-frontend',
        },
      },
      {
        date: '2023.08 ~ 2023.09',
        activity: '모델 포트폴리오 웹사이트 『arinniee』 운영 및 재출시',
        links: {
          post: '/projects/arinniee',
          github: 'https://github.com/ynawhocodes/arinniee',
          demo: 'https://www.arinniee.com/',
        },
      },
      {
        date: '2023.05 ~ 2024.01',
        activity: '☄️ 새로운 중고 거래 창업 서비스 『idiom』 개발/기획/디자인',
        links: {
          post: '/projects/idiom-tech',
          demo: 'https://idiom.kr/',
        },
      },
      {
        date: '2023.09 ~',
        activity: '🎯 인터렉션 스튜디오 『영원』 창설 및 활동 시작',
        links: {
          demo: 'https://01.works/',
        },
      },
      {
        date: '2023.11',
        activity: 'free event 인터렉션 랜딩페이지 개발',
        links: {
          post: '/projects/compare-animation-lib',
          demo: 'https://free.01.works/',
        },
      },
      {
        date: '2024.01',
        activity: '한화 LIFE PLUS 랜딩페이지 3D section 외주 개발',
        links: {
          post: '/projects/three-ribbon',
          demo: 'https://lifeplus.co.kr/',
        },
      },
      {
        date: '2024.02',
        activity: 'Purito motion Slider 외주 개발',
        links: {
          post: '/projects/compare-animation-lib',
          demo: 'https://purito.com/ko/',
        },
      },
      {
        date: '2024.02',
        activity: 'OURSTUDIO 건축 사이트 외주 개발(canceled)',
        links: {
          demo: 'https://simplified-role-438985.framer.app/',
        },
      },
      {
        date: '2024.02',
        activity: '『idiom』 랜딩페이지 개발',
        links: {
          post: '/projects/framer',
          demo: 'https://witty-system-032729.framer.app/',
        },
      },
      {
        date: '2024.03',
        activity: 'Data Distribution in Edge Cloud Environments 시뮬레이션 웹',
        links: {
          post: '/projects/compare-animation-lib',
          github: 'https://github.com/ynawhocodes/ddec-simul-project',
          demo: 'https://ddec-simul-project-ynawhocodes.vercel.app/',
        },
      },
      {
        date: '2024.03',
        activity: '3D 인터렉션 작업 목록 사이트',
        links: {
          demo: 'https://yangnawon.com/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '모델 포트폴리오 웹사이트 『arinniee』 개발 및 운영',
        description:
          ' 웹 개발에 관심이 많아 IT 연합 창업 동아리 『멋쟁이사자처럼』에 참여하고 배운 내용을 바탕으로 다른 기능도 응용해보고 직접 서비스를 배포하고 운영하고 싶다는 생각에 시작한 프로젝트입니다. 프론트 단은 HTML과 CSS, 백 단은 django로 구현했습니다. AWS를 이용하여 배포하였고 3년간 운영 끝에 서비스를 종료했습니다. 처음으로 클라이언트(모델)와 상의하며 진행한 프로젝트였습니다. 클라이언트의 요구를 최대한 맞춰주고 싶어 요구사항대로 구현하기 위해 많은 시도와 공부를 하며 많이 성장할 수 있는 경험이었습다. 또한, 처음으로 클라우드 컴퓨팅 서비스를 이용하여 배포한 경험을 통해 사용자에게 서비스를 노출하는 과정까지 몸소 체험할 수 있었습니다.',
        techStack: ['django', 'html/css', 'aws'],
        thumbnailUrl: 'arinniee_thumbnail.jpg',
        links: {
          post: '/projects/arinniee',
        },
      },
      {
        title: '개인 포트폴리오 웹사이트 개발 및 운영',
        description:
          " 이전 한 번의 배포 경험을 통해, 자신의 포트폴리오 사이트도 만들어보고 싶다는 생각이 들어 시작한 프로젝트입니다. '나는 어떤 개발자일까?', '사용자가 어떻게 봐야 나를 잘 이해할 수 있을까?'에 초점을 두며 프로젝트를 진행하였습니다. 또한 기능 구현에 욕심이 생겨 새로운 기능을 구현해보며 django에 대해 더 깊이 이해할 수 있었습니다. 제 이름으로 된 도메인을 구매하며 포트폴리오 사이트에 큰 애정을 가졌습니다. 커뮤니티 기능도 만들어 제 포트폴리오 사이트에 들어온 손님들과도 소통하며 2년간 운영하였습니다. \n서비스 배포 이후에도 이뤄진 잦은 수정사항으로 수정 후 다시 배포하는데 복잡한 배포 과정을 거쳤습니다. 검색 끝에 CI/CD의 개념을 알게 되었고 CI/CD를 적용한 프로젝트도 진행해보리라 다짐하였습니다. 이 다짐으로 시작한 프로젝트는 추후 『QmA』에서 만나볼 수 있습니다.",
        techStack: ['django', 'html/css', 'aws'],
        thumbnailUrl: 'portfolio_thumbnail.jpg',
        links: {
          post: '/projects/portfolio',
        },
      },
      {
        title: '업무 자동화 프로그램 『spauto』 개발',
        description:
          ' 무신사에서 스페셜 이슈와 기획전 페이지를 작업했습니다. 이벤트 담당이다 보니 하루에 여러 이벤트를 동시다발적으로 진행해야 했었습니다. 몇십개의 이벤트 바로가기 URL 연결, 바로가기 클릭 영역 잡기 등 반복되는 작업이 많았습니다. 게다가 이벤트마다 수정사항이 생기면 업무 피로도와 휴먼 에러도 증가했습니다. 이 문제를 자동화할 수 없을까하는 고민에서 시작한 프로젝트입니다. 기존 해당 업무를 담당하시던 분과 같은 업무를 진행 중인 분께 피드백을 얻으며 프로그램을 개발했습니다. 그 결과 작업 소요 시간을 80% 감소시킬 수 있었고, 이를 사내 컨플루언스에 문서화하여 공유 중입니다. 퇴사 후에도 받은 피드백을 바탕으로 고도화했고 사내에서 해당 프로그램을 사용 중입니다.',
        techStack: ['python', 'cv2'],
        thumbnailUrl: 'spauto_thumbnail.jpg',
        links: {
          post: '/projects/spauto',
          github: 'https://github.com/ynawhocodes/self-perish-project',
        },
      },
      {
        title: '『수정광산』 개발 및 운영',
        description:
          ' 자대 동문끼리 서로 정보를 공유하며 성장할 수 있는 시간과 공간에 대한 갈증으로 시작한 프로젝트입니다. 수정광산은 자대 커뮤니티 서비스로, 현재는 출시 9개월 기준 사용자 6,000명을 달성했습니다. FE PL로서 일정 관리와 개발에 참여했고, 현재까지 운영을 담당하고 있습니다. 사용자 접근성, 빠른 개발 속도를 고려하여 크로스 플랫폼 앱인 React native로 개발했습니다. 처음 다뤄보는 프레임워크라 어려움도 많았지만, 팀원들과 스터디, 질의응답, 많은 실패와 도전을 통해 성공적으로 출시할 수 있었습니다. 출시 이후에도 안정성과 신규 사용자 확보를 위해 힘을 쏟고 있습니다.',
        techStack: ['react native', 'typescript', 'styled-components'],
        thumbnailUrl: 'crystalmine_thumbnail.jpg',
        links: {
          post: '/projects/crystalmine',
          github: 'https://github.com/sungshin-community',
          googlePlay: 'https://play.google.com/store/apps/details?id=com.crystalminefrontend&hl=ko',
          appStore:
            'https://apps.apple.com/kr/app/%EC%88%98%EC%A0%95%EA%B4%91%EC%82%B0/id1641132567',
        },
      },
      {
        title: '『QmA』 기획 및 개발',
        description:
          ' 졸업 전 지금까지 얻은 지식을 모두 총동원한 결과물을 만들고 컴퓨터공학사로 마무리하고 싶다는 생각에 시작한 프로젝트입니다. 기획부터 디자인, 클라이언트, 서버, CI/CD, 배포까지 모든 과정을 거치며 진행했습니다. 학부생때 배운 내용을 총집합하여 개발하다보니, 개념으로만 배웠던 지식도 실습해보지 않으면 애매하게 알고 있음을 알 수 있었습니다. 해당 프로젝트 덕분에 내가 무엇이 부족한지 알게 되었고, 기능 구현에 있어 "왜"에 초첨을 두며 실습하게 되는 습관을 가지게 되었습니다.',
        techStack: ['nodejs', 'react native', 'mysql', 'k8', 'jenkins', 'docker'],
        thumbnailUrl: 'qma_thumbnail.jpg',
        links: {
          post: '/projects/qma',
          github: 'https://github.com/orgs/QmA-project/repositories',
        },
      },
      {
        title: 'three를 이용한 천체동아리 3D 홍보페이지 『mastar』 개발',
        description:
          ' 평소에 인터렉션에 많은 관심이 있었기에 three 이용한 개발을 하고싶어 진행한 천체동아리 랜딩 페이지입니다. night/day/fantasy로 3가지 테마를 정했고 테마에 맞춰 다양한 모습을 보여주기 위해 BoxGeometry의 texture 이미지를 변경히거나 style color를 변경하였습니다. 또한 svg를 draggable하게 하여 인터렉션을 주고자 했습니다. master 프로젝트는 three를 이용한 첫 작업으로 camera, geometry, texture, mesh, renderer등 three의 기본을 이해할 수 있었습니다.',
        techStack: ['three', 'three-js-webpack', 'html', 'css', 'github.io'],
        thumbnailUrl: 'mastar_thumbnail.gif',
        links: {
          github: 'https://github.com/ynawhocodes/mastar/tree/master',
          demo: 'https://mastar.yangnawon.com/',
        },
      },
      {
        title: '문화 공공데이터 공모전 『countrip』 개발',
        description:
          ' React를 공부하고 React로 프로젝트를 만들고 싶은 마음에 문화 공공데이터 공모전에 참가했습니다. countrip은 로컬 주민 추천 농촌 여행 예약 웹앱 서비스입니다. 낮선 3인과 함께 합께 합을 맞추며 주어진 기간 내에 기획 및 모든 기능을 구현해야 한다는 부담감도 있었지만 배운 내용으로 구현할 수 있음에 큰 기쁨을 느끼며 프로젝트를 마무리할 수 있었고, 높은 경쟁률을 뚫어 본선 진출까지 할 수 있었습니다. ',
        techStack: ['react', 'styled-component', 'axios', 'aws'],
        thumbnailUrl: 'countrip_thumbnail.jpg',
        links: {
          github: 'https://github.com/countrip/countrip-frontend',
        },
      },
      {
        title: '모델 포트폴리오 웹사이트 『arinniee』 이관 및 재출시',
        description:
          ' 3년 전 django로 만든 서비스의 사용자가 지속적으로 있었고, 웹 서비스의 성능 향상을 위해 nextjs로 이관을 하였습니다. 가장 큰 문제였던 페이지 로드 속도를 줄일 수 있었고, Google PageSpeed Insight에 의하면 성능은 2.35배 개선시킬 수 있었습니다. 또한 Google Analytics, 한달 동안의 통계에 의하면 사용자 731명, 조회수 3.1천(2023.09기준)을 기록하였습니다.',
        techStack: [
          'nextjs',
          'react',
          'react-query',
          'typescript',
          'tailwindcss',
          'vercel',
          'supabase',
          'google analytics',
        ],
        thumbnailUrl: 'arinniee_thumbnail.png',
        links: {
          post: '/projects/arinniee',
          github: 'https://github.com/ynawhocodes/arinniee',
          demo: 'https://www.arinniee.com/',
        },
      },
      {
        title: '새로운 중고 거래 창업 서비스 『idiom』 기획 및 개발',
        description:
          ' 졸업 후, SaSS 서비스로 창업하고 싶다는 생각에 co-founder로 함께한 서비스입니다. idiom에서 기획/디자인/개발을 담당하였고, 기획 후 6달 간의 3번의 MVP 스프린트와 pivoting으로 빠르고 안정성있는 개발이 중요했기에 이 부분에 초점을 맞춰 좋은 성과를 낼 수 있었습니다. 개발 뿐만이 아니라 가설 검증, 디자인 시스템 구축 등 전체 프로세스를 다뤄볼 수 있는 경험이었고, 해당 아이템은 사업적 기업가 육성사업 예비 선정/생애최초 청년창업 지원사업 선정/K 이노스 건국대학교 캠퍼스타운 선정/생애최초 청년창업 지원사업 우수상 수상 등 좋은 성과뿐만 아니라 오너십을 가지고 개발할 경우 느낄 수 있는 소중한 경험을 할 수 있었습니다.',
        techStack: [
          'nextjs',
          'react',
          'typescipt',
          'tailwindcss',
          'vercel',
          'supabase',
          'google analytics',
        ],
        thumbnailUrl: 'idiom_thumbnail.png',
        links: {
          post: '/projects/idiom-tech',
          demo: 'https://idiom.kr/',
        },
      },
      {
        title: '인터렉션 스튜디오 『영원』 활동 시작',
        description:
          ' 인터렉션을 사랑했기에 인터렉션 사랑하는 둘이 모여 인터렉션 스튜디오를 만들었습니다. 사용하고 싶은 라이브러리가 있으면 해당 라이브러리 기반으로 작업을 하거나 인터렉션 외주를 받으며 애니메이션 구현 실력을 키우고 싶어 활동을 시작했습니다. 활동 4개월이 된 지금, 영원 활동 덕분에 gsap/animejs/framer-motion/three 등 많은 애니메이션 라이브러리를 사용해 볼 수 있었습니다. 또한 브라우저 호환성을 고려하며 개발하는 습관이 생겼고, 클라이언트와 원활한 커뮤니케이션을 위한 문서화 작업이나 인터렉션 작업에 있어 디자이너와 효율적으로 소통하는 방법을 터득할 수 있었습니다.',
        techStack: [
          'nextjs',
          'react',
          'typescipt',
          'tailwindcss',
          'vercel',
          'supabase',
          'google analytics',
        ],
        thumbnailUrl: '01-works_thumbnail.gif',
        links: {
          demo: 'https://01.works',
        },
      },
      {
        title: 'free event 인터렉션 랜딩페이지 개발',
        description:
          ' 스튜디오 영원을 널리 알리고 싶은 마음으로 진행한 이벤트의 소개 사이트를 개발했습니다. 긴 이벤트 정보글을 가독성있게 전달하기 위해 GSAP의 ScrollTrigger, Text Plugin을 이용했습니다. 해당 프로젝트를 통해 GSAP을 경험할 수 있었습니다.',
        techStack: ['gsap', 'nextjs', 'react', 'typescript', 'tailwindcss'],
        thumbnailUrl: 'free-event_thumbnail.gif',
        links: {
          post: '/projects/compare-animation-lib',
          demo: 'https://free.01.works/',
        },
      },
      {
        title: '한화 LIFE PLUS 랜딩페이지 3D section 외주 개발',
        description:
          '3D 모션에서 리본을 담당했습니다. MASTAR에서 다뤘던 Three 개념을 토대로 리본을 구현하기 위해 많은 시행착오를 거쳐 성공적으로 작업할 수 있었습니다. 자세한 기술 내용은 연결된 post 참고해주시면 감사하겠습니다. 기술 구현 외에도 3D 모션 구현에 있어 디자이너와 최대한 효율적이게 소통하는 방법, 다양한 브라우저 환경을 고려하는 방법을 배울 수 있었습니다.',
        techStack: ['three', 'html', 'css', 'vanilla js'],
        thumbnailUrl: 'hanwha-lifeplus_thumbnail.gif',
        links: {
          post: '/projects/three-ribon',
          demo: 'https://lifeplus.co.kr/',
        },
      },
      {
        title: 'Purito motion Slider 외주 개발',
        description:
          '성공적으로 마친 이전 LIFE PLUS 작업 덕분에 같은 클라이언트와 추가적으로 작업을 진행했습니다. 해당 작업에서 Swiper.js을 이용하여 반응형 슬라이드 작업, anime.js를 이용하여 텍스트 애니메이션 타임라인 제어 부분을 구현했습니다.',
        techStack: ['swiper.js', 'anime.js', 'html', 'css', 'vanilla js'],
        thumbnailUrl: 'purito_thumbnail.gif',
        links: {
          post: '/projects/compare-animation-lib',
          demo: 'https://purito.com/ko/',
        },
      },
      {
        title: 'OURSTUDIO 건축디자인회사 사이트 외주 개발(canceled)',
        description:
          ' 건축디자인사의 포트폴리오 사이트 개발을 framer로 진행했습니다. framer의 code component와 code overrrides를 이용해 커스텀을 진행했고, 작업 전달드린 후 client의 유지보수가 최대한 용이하게 되기 위해 CMS와 컴포넌트를 연동했습니다. 하지만 포트폴리오 리스트 페이지의 grid형태가 독특하여 직접 커스텀하거나 라이브러리를 사용했었어야 했습니다. 라이브러리는 Framer와의 호환성 문제로 사용할 수 없었고, 직접 구현하기엔 라이브러리 하나를 만들만큼의 개발 비용이 소요될 것이라 판단했습니다. 기간 내 구현 불가능한 점과 Framer 내에서 코드 규모가 커질 경우 Framer 런타임 성능 저하로 렌더링 시간이 길어질 것이라 판단하여 불가피하게 의뢰를 중단하였지만, 그 외의 부분은 Framer 개념 공부를 위해 진행을 마무리했습니다. 해당 작업을 통해 Framer가 일반적인 웹 개발에 비해 제한이 있지만, 디자이너와 개발자간의 협업에선 효율적인 툴일 것 같다는 생각을 할 수 있었습니다.',
        techStack: ['framer'],
        thumbnailUrl: 'ourstudio_thumbnail.png',
        links: {
          post: '/projects/framer',
          demo: 'https://simplified-role-438985.framer.app/',
        },
      },
      {
        title: '『idiom』 랜딩페이지 개발',
        description:
          ' 위 작업으로 Framer를 다뤄볼 수 있었고, 가벼운 작업 시 Framer에게 큰 장점이 있다고 판단하여 idiom의 랜딩페이지는 Framer를 통해 작업을 진행했습니다. Framer를 최대한 활용하여 idiom 서비스를 소개하는 랜딩페이지를 기획/디자인/퍼블리싱 작업을 진행했습니다. 랜딩페이지를 작업하며 Framer의 다양한 내제된 기능을 탐색해볼 수 있었습니다.',
        techStack: ['framer'],
        thumbnailUrl: 'idiom-landing_thumbnail.png',
        links: {
          demo: 'https://witty-system-032729.framer.app/',
        },
      },
      {
        title: 'Data Distribution in Edge Cloud Environments 시뮬레이션 웹',
        description:
          'DDECE는 클라우드 분산 서비스 시뮬레이션을 위한 웹 서비스로, "개발자들은 클라우드 서비스를 선택할 때 성능과 비용을 가장 중요하게 생각하지만, 정작 그걸 어느정도 원하는지 물어보면 제시하기 어려워한다."라는 가설을 시작으로 가설을 검증하기 위해 실험할 시뮬레이션 웹을 개발했습니다. 엣지 클라우드 서비스에서 시뮬레이션에서 각 전략의 성능과 예측 비용을 보여주는 기능이 사용자에게 얼마나, 어떻게 영향을 주는지 알기 위해 14명의 개발자들을 대면으로 유저 테스트를 진행했습니다. 엣지 클라우드 서비스 환경에서 정보를 사용자에게 더 직관적으로 전달하기 위한 레벨별 전략, 전략(Edge/Cloud) 커스텀 마이징 기능, 시각화된 분산 지도를 제공한 A와 시뮬레이션 결과가 아닌 레벨별로 나눠져 있는 속도 향상에 대한 수치, 예측 비용에 대한 텍스트만 있는 페이지 B에 대해 B가 얼마나 효과적으로 사용자들의 의사결정을 도왔는지 객관적으로 실험 결과가 나오기 위해 A/B의 UI/UX를 각각 편향되지 않게 구현했습니다. SUS(System Usability Scale) 사용성 테스트 설문 결과에 따르면, 모든 사용자가 A/B 페이지 둘 다 평균 이상(68점 이상)의 사용성이라고 평가함 뿐만 아니라 A/B 페이지의 UI/UX로 인해 편향되지 않고 실험의 핵심이었던 시뮬레이션 결과값 제공에 대한 사용자 경험 차이를 도출해낼 수 있었습니다.',
        techStack: [
          'nextjs',
          'react',
          'typescipt',
          'recoil',
          'tailwindcss',
          'vercel',
          'framer-motion',
        ],
        thumbnailUrl: 'ddec_thumbnail.gif',
        links: {
          post: '/projects/compare-animation-lib',
          github: 'https://github.com/ynawhocodes/ddec-simul-project',
          demo: 'https://ddec-simul-project-ynawhocodes.vercel.app/',
        },
      },
      {
        title: '3D 인터렉션 작업 목록 사이트',
        description:
          'R3F의 존재를 알고 이를 이용해 프로젝트를 진행하고 싶어 개발했습니다. React 기반 three 라이브러리 답게 React 컴포넌트로 쉽게 변환하여 사용할 수 있었고, React 상태 및 생명주기와 함께 three scene을 관리할 수 있는 등 R3F에 대한 장점을 느낄 수 있었던 프로젝트 였습니다. ',
        techStack: [
          'three',
          'R3F',
          'recoil',
          'nextjs',
          'react',
          'typescript',
          'tailwindcss',
          'vercel',
        ],
        thumbnailUrl: 'yang_thumbnail.gif',
        links: {
          demo: 'https://yangnawon.com/',
        },
      },
    ],
  },
};
