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
            description: ['끝없이 고민하는', '부족함으로부터 나아가는', '기록과 공유의 힘을 믿는'],
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
                activity: 'IT 연합 창업 동아리 『멋쟁이사자처럼』 활동 및 학교 9기 대표',
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
                description: '',
                techStack: ['django', 'html/css', 'aws'],
                thumbnailUrl: 'arinniee_thumbnail.jpg',
                links: {
                    post: '/projects/arinniee',
                },
            },
        ],
    },
};