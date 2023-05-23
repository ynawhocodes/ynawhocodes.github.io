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
            description: [
                '끝없이 고민하는',
                '부족함으로부터 나아가는',
                '기록과 공유의 힘을 믿는',
            ],
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
                activity: 'IT 연합 창업 동아리 『멋쟁이사자처럼』 활동 및 9기 학교 대표',
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
                activity: '학교 컴퓨터공학과 동아리 1기 운영진',
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
                activity: 'MUSINSA 프론트엔드개발팀 근무 (계약직)',
                links: {
                    post: '/activities/musinsa',
                },
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
                date: '2021.09 ~',
                activity: '『수정광산』 개발 및 운영',
                links: {
                    post: '/projects/crystalmine',
                    github: 'https://github.com/sungshin-community',
                    googlePlay: 'https://play.google.com/store/apps/details?id=com.crystalminefrontend',
                    appStore: 'https://apps.apple.com/kr/app/%EC%88%98%EC%A0%95%EA%B4%91%EC%82%B0/id1641132567',
                },
            },
            {
                date: '2022.11 ~',
                activity: '『QmA』 기획 및 개발',
                links: {
                    post: '/projects/qma',
                    github: 'https://github.com/orgs/QmA-project/repositories',
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
                description: ' 웹 개발에 관심이 많아 IT 연합 창업 동아리 『멋쟁이사자처럼』에 참여하고 배운 내용을 바탕으로 다른 기능도 응용해보고 직접 서비스를 배포하고 운영하고 싶다는 생각에 시작한 프로젝트입니다. 프론트 단은 HTML과 CSS, 백 단은 django로 구현했습니다. AWS를 이용하여 배포하였고 3년간 운영 끝에 서비스를 종료했습니다. 처음으로 클라이언트(모델)와 상의하며 진행한 프로젝트였습니다. 클라이언트의 요구를 최대한 맞춰주고 싶어 요구사항대로 구현하기 위해 많은 시도와 공부를 하며 많이 성장할 수 있는 경험이었습다. 또한, 처음으로 클라우드 컴퓨팅 서비스를 이용하여 배포한 경험을 통해 사용자에게 서비스를 노출하는 과정까지 몸소 체험할 수 있었습니다.',
                techStack: ['django', 'html/css', 'aws'],
                thumbnailUrl: 'arinniee_thumbnail.jpg',
                links: {
                    post: '/projects/arinniee',
                },
            },
            {
                title: '개인 포트폴리오 웹사이트 개발 및 운영',
                description: " 이전 한 번의 배포 경험을 통해, 자신의 포트폴리오 사이트도 만들어보고 싶다는 생각이 들어 시작한 프로젝트입니다. '나는 어떤 개발자일까?', '사용자가 어떻게 봐야 나를 잘 이해할 수 있을까?'에 초점을 두며 프로젝트를 진행하였습니다. 또한 기능 구현에 욕심이 생겨 새로운 기능을 구현해보며 django에 대해 더 깊이 이해할 수 있었습니다. 제 이름으로 된 도메인을 구매하며 포트폴리오 사이트에 큰 애정을 가졌습니다. 커뮤니티 기능도 만들어 제 포트폴리오 사이트에 들어온 손님들과도 소통하며 2년간 운영하였습니다. \n서비스 배포 이후에도 이뤄진 잦은 수정사항으로 수정 후 다시 배포하는데 복잡한 배포 과정을 거쳤습니다. 검색 끝에 CI/CD의 개념을 알게 되었고 CI/CD를 적용한 프로젝트도 진행해보리라 다짐하였습니다. 이 다짐으로 시작한 프로젝트는 추후 『QmA』에서 만나볼 수 있습니다.",
                techStack: ['django', 'html/css', 'aws'],
                thumbnailUrl: 'portfolio_thumbnail.jpg',
                links: {
                    post: '/projects/portfolio',
                },
            },
            {
                title: '업무 자동화 프로그램 『spauto』 개발',
                description: ' 무신사에서 스페셜 이슈와 기획전 페이지를 작업했습니다. 이벤트 담당이다 보니 하루에 여러 이벤트를 동시다발적으로 진행해야 했었습니다. 몇십개의 이벤트 바로가기 URL 연결, 바로가기 클릭 영역 잡기 등 반복되는 작업이 많았습니다. 게다가 이벤트마다 수정사항이 생기면 업무 피로도와 휴먼 에러도 증가했습니다. 이 문제를 자동화할 수 없을까하는 고민에서 시작한 프로젝트입니다. 기존 해당 업무를 담당하시던 분과 같은 업무를 진행 중인 분께 피드백을 얻으며 프로그램을 개발했습니다. 그 결과 작업 소요 시간을 80% 감소시킬 수 있었고, 이를 사내 컨플루언스에 문서화하여 공유 중입니다. 퇴사 후에도 받은 피드백을 바탕으로 고도화했고 사내에서 해당 프로그램을 사용 중입니다.',
                techStack: ['python', 'cv2'],
                thumbnailUrl: 'spauto_thumbnail.jpg',
                links: {
                    post: '/projects/spauto',
                    github: 'https://github.com/ynawhocodes/self-perish-project',
                },
            },
            {
                title: '『수정광산』 개발 및 운영',
                description: ' 자대 동문끼리 서로 정보를 공유하며 성장할 수 있는 시간과 공간에 대한 갈증으로 시작한 프로젝트입니다. 수정광산은 자대 커뮤니티 서비스로, 현재는 출시 9개월 기준 사용자 6,000명을 달성했습니다. FE PL로서 일정 관리와 개발에 참여했고, 현재까지 운영을 담당하고 있습니다. 사용자 접근성, 빠른 개발 속도를 고려하여 크로스 플랫폼 앱인 React native로 개발했습니다. 처음 다뤄보는 프레임워크라 어려움도 많았지만, 팀원들과 스터디, 질의응답, 많은 실패와 도전을 통해 성공적으로 출시할 수 있었습니다. 출시 이후에도 안정성과 신규 사용자 확보를 위해 힘을 쏟고 있습니다.',
                techStack: ['react native', 'typescript'],
                thumbnailUrl: 'crystalmine_thumbnail.jpg',
                links: {
                    post: '/projects/crystalmine',
                    github: 'https://github.com/sungshin-community',
                    googlePlay: 'https://play.google.com/store/apps/details?id=com.crystalminefrontend&hl=ko',
                    appStore: 'https://apps.apple.com/kr/app/%EC%88%98%EC%A0%95%EA%B4%91%EC%82%B0/id1641132567',
                },
            },
            {
                title: '『QmA』 기획 및 개발',
                description: " 졸업 전 지금까지 얻은 지식을 모두 총동원한 결과물을 만들고 컴퓨터공학사로 마무리하고 싶다는 생각에 시작한 프로젝트입니다. 기획부터 디자인, 클라이언트, 서버, CI/CD, 배포까지 모든 과정을 거치며 진행했습니다. 개념으로만 배웠던 지식도 직접 개발해보니 애매하게 알고 있던 것들이 얼마나 위험하고 오만한지 알 수 있었습니다. 이 경험은 기본기 스터디를 시작하게 된 계기가 되었습니다. 거품 없는 기본기를 쌓기 위해 '모름', '애매하게 앎' 상태를 '확실히 앎' 상태로 만드는 데에 초점을 맞추며 기본기 스터디를 시작하게 되었습니다.",
                techStack: ['nodejs', 'react native', 'mysql', 'k8', 'jenkins', 'docker'],
                thumbnailUrl: 'qma_thumbnail.jpg',
                links: {
                    post: '/projects/qma',
                    github: 'https://github.com/orgs/QmA-project/repositories',
                },
            },
        ],
    },
};