export interface ProjectRole {
  description: string;
  contribution?: number;
}

export interface ProjectItem {
  id: string;
  index: string;
  period: string;
  duration: string;
  durationMonths: number;
  title: string;
  shortTitle: string;
  client: string;
  languages: string[];
  stack: string[];
  category: 'api' | 'auth' | 'platform' | 'renewal';
  categoryLabel: string;
  summary: string;
  featured: boolean;
  url?: string;
  highlightMetrics?: { label: string; value: string }[];
  roles: ProjectRole[];
}

export interface CapabilityItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  projectsRef: string;
}

export interface CareerPhase {
  period: string;
  step: string;
  title: string;
  description: string;
  keyMilestone: string;
  isDark?: boolean;
}

export interface FaqItem {
  id: string;
  index: string;
  question: string;
  answer: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  proficiency?: number; // percentage reflected from the visual progress bars (0-100)
  code: string;
  note: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  enLabel: string;
  items: SkillItem[];
}

export const PROFILE_DATA = {
  nameKo: '서지효',
  nameEn: 'Seo Ji-hyo',
  birthDate: '1996.03.23',
  company: '블루웨이브 (Bluewave)',
  department: '개발 1팀',
  position: '대리',
  skillGrade: '중급',
  itExperience: '5년',
  totalCareerSpan: '2021.11.01 ~ 2026.10.31 (5년)',
  joinedDate: '2021.11.01',
  specialty: '백엔드 개발 (Backend Engineering)',
  certification: {
    name: '정보처리기사',
    acquiredDate: '2025.06.13',
  },
  coreLanguages: ['JAVA', 'JavaScript', 'SQL'],
  headline: 'Built For Scale, Engineered For Trust.',
  subheadline:
    '견고한 인증 보안부터 대규모 외부 API 연동, AOP 기반 로그 추적 체계까지. 비즈니스 핵심 백엔드를 끝까지 책임지는 5년차 백엔드 개발자 서지효입니다.',
};

export const CLIENT_PARTNERS = [
  { name: '호텔신라', en: 'THE SHILLA' },
  { name: '현대 오일뱅크', en: 'HYUNDAI OILBANK' },
  { name: '조선호텔앤리조트', en: 'JOSUN HOTELS' },
  { name: 'HL 만도', en: 'HL MANDO' },
  { name: '남양유업', en: 'NAMYANG' },
  { name: '캐플릭스', en: 'JEJUPASS' },
  { name: '인터파크 비즈마켓', en: 'BIZMARKET' },
  { name: '블루웨이브', en: 'BLUEWAVE' },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'auth-security',
    index: '01',
    title: '인증 및 보안 아키텍처',
    subtitle: 'JWT · Spring Security · PASS 본인인증',
    description:
      '다수의 엔터프라이즈 웹·모바일 서비스에서 JWT 토큰 기반 무상태 인증과 Spring Security 접근 제어, PASS 본인인증을 일관된 보안 표준으로 설계했습니다.',
    highlights: ['JWT 토큰 인증 설계', 'Spring Security 권한 제어', 'PASS 본인인증 연동', '쿠키 기반 행동 추적'],
    projectsRef: '신라호텔 · 현대 오일뱅크 EV&U · BW_Cms · HL 만도 카믈리에',
  },
  {
    id: 'external-api',
    index: '02',
    title: '외부 API & 커머스 연동',
    subtitle: '삼성카드 · Cloudflare · 캐치테이블 · 파킹스루',
    description:
      '금융, 미디어, 모빌리티, 식음 예약 등 이기종 외부 플랫폼 API를 안정적으로 통합했습니다. 회원·카드 가입/탈회, CDN 동영상 업로드, 포인트/예약 정합성을 보장합니다.',
    highlights: ['삼성카드 회원/카드 API', 'Cloudflare CDN 동영상', '캐치테이블 식음 예약', '파킹스루 & 인터파크 ASP'],
    projectsRef: '신라호텔 · 조선호텔앤리조트 · 인터파크 복지몰 · 현대 오일뱅크',
  },
  {
    id: 'observability-cms',
    index: '03',
    title: '관측성 & 공통 플랫폼 설계',
    subtitle: 'AOP traceId · Batch · Interceptor · CMS',
    description:
      'AOP 기반 traceId 분산 로그 추적 체계를 구축해 장애 원인 분석 속도를 높였으며, 제휴사·쿠폰·휴면회원 배치 및 멀티 사이트 CMS 핵심 모듈을 직접 개발했습니다.',
    highlights: ['AOP traceId 로그 추적', '휴면회원 배치 스케줄링', '제휴사/쿠폰 엔진 100%', 'CMS 컨텐츠 노출 관리'],
    projectsRef: 'BW_Cms · BW_Membership · 신라호텔',
  },
  {
    id: 'fullstack-bridge',
    index: '04',
    title: '프론트엔드 브릿지 & 앱 연동',
    subtitle: 'REST API · Vue.js · Thymeleaf · Hybrid App',
    description:
      'Spring Boot 백엔드와 Vue.js SPA, Thymeleaf SSR, 하이브리드 모바일 앱(PUSH/로그인) 간의 데이터 계약과 API 인터페이스를 빈틈없이 연결합니다.',
    highlights: ['Vue.js REST API 연동', '하이브리드 앱 PUSH 연동', 'Thymeleaf SSR 화면 구현', '프로그램 신청/상품 풀스택'],
    projectsRef: '남양유업 · HL 만도 카믈리에 · 제주패스 · 현대 오일뱅크',
  },
];

export const CAREER_PHASES: CareerPhase[] = [
  {
    step: '01',
    period: '2021.11 ~ 2023.03',
    title: 'MSA 기반 커머스·예약 연동의 초석을 다지다',
    description:
      '블루웨이브 입사 후 제주패스 통합 브랜드 리뉴얼을 통해 JPA, Thymeleaf, MSA 및 JWT 환경을 실무로 익혔습니다. 이어 인터파크 비즈마켓 복지몰 ASP와 조선호텔 캐치테이블 식음 예약 연동을 주도(기여도 80~90%)하며 외부 API 정합성 역량을 확보했습니다.',
    keyMilestone: '제주패스 · 인터파크 복지몰 · 조선호텔 캐치테이블',
  },
  {
    step: '02',
    period: '2023.03 ~ 2024.05',
    title: '모빌리티 하이브리드 앱과 자사 멤버십 엔진 구축',
    description:
      'HL 만도 카믈리에와 현대 오일뱅크 EV&U APP을 통해 하이브리드 앱 로그인·PUSH 연동, PASS 본인인증, 파킹스루 카드 발급/검증 로직을 구현했습니다. 자사 BW_Membership에서는 제휴사 및 쿠폰 발급 관리를 100% 전담 개발했습니다.',
    keyMilestone: 'HL 만도 카믈리에 · BW_Membership · 현대 오일뱅크 EV&U',
  },
  {
    step: '03',
    period: '2024.06 ~ 2026.10',
    title: '엔터프라이즈 보안·로그 아키텍처와 대규모 리뉴얼 리딩',
    description:
      'BW_Cms와 신라호텔 기업사이트 리뉴얼(17개월)에서 Spring Security, AOP 기반 traceId 로그 추적 체계(90%), Cloudflare CDN 동영상 업로드(90%), 삼성카드 회원·카드 API(90%)를 구축하며 중급 백엔드 엔지니어로 도약했습니다. 남양유업 리뉴얼 핵심 로직은 100% 단독 구현했습니다.',
    keyMilestone: 'BW_Cms · 남양유업 · 신라호텔 · 정보처리기사 취득',
    isDark: true,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'shilla-hotel',
    index: '09',
    period: '2025.05.19 ~ 2026.10.31',
    duration: '17개월',
    durationMonths: 17,
    title: '신라호텔 기업사이트 리뉴얼',
    shortTitle: 'Shilla Hotel Enterprise Renewal',
    client: '호텔신라',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['SpringBoot', 'SpringSecurity', 'JWT', 'AOP', 'Thymeleaf', 'Cloudflare CDN', '삼성카드 API'],
    category: 'api',
    categoryLabel: '엔터프라이즈 · 외부 API',
    summary:
      '삼성카드 제휴 회원/카드 라이프사이클 API, Cloudflare CDN 대용량 동영상 업로드 연동, AOP 기반 traceId 로그 추적 체계 및 Spring Security 인증을 통합 구축한 17개월 장기 프로젝트입니다.',
    featured: true,
    url: 'https://www.shillahotels.com/ko/shillahotels/hub/index.do',
    highlightMetrics: [
      { label: 'CLOUDFLARE CDN & 삼성카드 API', value: '90%' },
      { label: 'AOP TRACEID 로그 추적 체계', value: '90%' },
      { label: 'JWT 회원가입 및 로그인 인증', value: '80%' },
      { label: 'CMS 컨텐츠 등록·수정·노출 관리', value: '60%' },
    ],
    roles: [
      { description: 'JWT토큰 기반 회원가입 및 로그인 구현', contribution: 80 },
      { description: 'AOP 기반 traceId 로그 추적 체계 구축', contribution: 90 },
      { description: 'CMS 컨텐츠 기능 구현, 등록, 수정, 노출 관리 기능 개발', contribution: 60 },
      { description: 'cloudflare CDN 동영상 업로드 API 연동', contribution: 90 },
      { description: '삼성카드 API 연동 회원 확인, 카드 가입, 카드 탈회', contribution: 90 },
    ],
  },
  {
    id: 'hyundai-evu',
    index: '06',
    period: '2023.10.16 ~ 2024.05.31',
    duration: '8개월',
    durationMonths: 8,
    title: '현대 오일뱅크 EV&U APP 개발',
    shortTitle: 'Hyundai Oilbank EV&U App',
    client: '현대 오일뱅크',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['JWT', 'PASS 본인인증', '하이브리드 앱', 'Thymeleaf', '외부API(HDO, 파킹스루)'],
    category: 'auth',
    categoryLabel: '모빌리티 앱 · 인증/보안',
    summary:
      '전기차 충전·모빌리티 하이브리드 앱의 JWT 회원 인증, PASS 본인인증, PUSH 연동 및 쿠폰 발급 엔진(100%), 외부 파킹스루 카드 발급·검증 API를 구현했습니다.',
    featured: true,
    highlightMetrics: [
      { label: '쿠폰 등록 및 발급 관리 전담', value: '100%' },
      { label: 'PASS 본인인증 & JWT 인증', value: '80%' },
      { label: '파킹스루 카드 발급·검증 API', value: '80%' },
      { label: '하이브리드 앱 로그인·PUSH 연동', value: '80%' },
    ],
    roles: [
      { description: 'JWT토큰 기반 회원가입 및 로그인 구현', contribution: 80 },
      { description: 'PASS 본인인증 구현', contribution: 80 },
      { description: '로그인, PUSH 모바일 앱 연동', contribution: 80 },
      { description: '쿠폰 등록 및 발급 관리 개발', contribution: 100 },
      { description: '외부API(파킹스루) 카드번호 발급 및 검증 로직 구현', contribution: 80 },
    ],
  },
  {
    id: 'bw-cms',
    index: '07',
    period: '2024.06.17 ~ 2025.04.30',
    duration: '11개월',
    durationMonths: 11,
    title: 'BW_Cms',
    shortTitle: 'BW Enterprise CMS Platform',
    client: '자사 (블루웨이브)',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['SpringBoot', 'SpringSecurity', 'JWT', 'AOP', 'Thymeleaf', 'CMS'],
    category: 'platform',
    categoryLabel: '자사 공통 플랫폼 · CMS',
    summary:
      '전사 프로젝트 표준 아키텍처로 활용되는 자사 CMS 플랫폼을 개발했습니다. Spring Security 기반 JWT 인증과 AOP 기반 traceId 전역 로그 추적 체계를 정립했습니다.',
    featured: true,
    highlightMetrics: [
      { label: 'AOP TRACEID 로그 추적 체계', value: '90%' },
      { label: 'JWT 회원가입 및 로그인 인증', value: '80%' },
      { label: 'CMS 컨텐츠 등록·수정·노출 관리', value: '60%' },
      { label: '수행 기간 (자사 표준 플랫폼)', value: '11개월' },
    ],
    roles: [
      { description: 'JWT토큰 기반 회원가입 및 로그인 구현', contribution: 80 },
      { description: 'AOP 기반 traceId 로그 추적 체계 구축', contribution: 90 },
      { description: 'CMS 컨텐츠 기능 구현, 등록, 수정, 노출 관리 기능 개발', contribution: 60 },
    ],
  },
  {
    id: 'josun-catchtable',
    index: '03',
    period: '2022.08.18 ~ 2023.03.23',
    duration: '7개월',
    durationMonths: 7,
    title: '조선호텔앤리조트 캐치테이블 식음 예약 서비스 개발',
    shortTitle: 'Josun Hotels CatchTable Sync',
    client: '조선호텔앤리조트',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['외부API(캐치테이블) 연동', 'JAVA', 'SQL'],
    category: 'api',
    categoryLabel: '호스피탈리티 · 외부 API',
    summary:
      '조선호텔앤리조트 식음 업장의 실시간 예약 경험을 제공하기 위해 캐치테이블 외부 API와 연동하여 등록 업장·메뉴 조회 및 실시간 예약 프로세스를 개발했습니다.',
    featured: true,
    url: 'https://www.josunhotel.com/resve/dining/step0.do',
    highlightMetrics: [
      { label: '등록 업장 및 메뉴 조회 API', value: '90%' },
      { label: '캐치테이블 실시간 예약 연동', value: '80%' },
      { label: '핵심 기술 스택', value: 'JAVA/SQL' },
      { label: '수행 기간', value: '7개월' },
    ],
    roles: [
      { description: '캐치테이블 등록업장 및 메뉴 조회 개발', contribution: 90 },
      { description: '캐치테이블 예약 연동 개발', contribution: 80 },
    ],
  },
  {
    id: 'namyang-renewal',
    index: '08',
    period: '2024.12.10 ~ 2025.03.10',
    duration: '4개월',
    durationMonths: 4,
    title: '남양유업 기업사이트 리뉴얼',
    shortTitle: 'Namyang Corporate Renewal',
    client: '남양유업',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['SpringBoot', 'JWT'],
    category: 'renewal',
    categoryLabel: '기업사이트 리뉴얼',
    summary:
      'Spring Boot와 JWT 기반의 기업사이트 리뉴얼 프로젝트에서 프로그램 신청 비즈니스 로직과 상품 컨텐츠 페이지를 100% 단독 기여로 완수했습니다.',
    featured: false,
    url: 'https://company.namyangi.com/ko/main',
    roles: [
      { description: '프로그램 신청 로직 구현', contribution: 100 },
      { description: '상품 컨텐츠 페이지 개발', contribution: 100 },
    ],
  },
  {
    id: 'bw-membership',
    index: '05',
    period: '2023.07.01 ~ 2023.09.29',
    duration: '3개월',
    durationMonths: 3,
    title: 'BW_Membership',
    shortTitle: 'BW Integrated Membership',
    client: '자사 (블루웨이브)',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['SpringBoot', 'Vue.js', 'JWT', 'API', 'Interceptor', 'Batch'],
    category: 'platform',
    categoryLabel: '자사 플랫폼 · 배치/인터셉터',
    summary:
      '통합 멤버십 서비스에서 제휴사 및 쿠폰 발급 관리(100%), 휴면회원 배치(80%), JWT 인증(80%)과 Vue.js 프론트엔드 REST API 연동을 구현했습니다.',
    featured: false,
    roles: [
      { description: 'JWT토큰 기반 회원가입 및 로그인 구현', contribution: 80 },
      { description: '제휴사 등록 및 관리 개발', contribution: 100 },
      { description: '쿠폰 등록 및 발급 관리 개발', contribution: 100 },
      { description: '휴면회원 배치 관리 개발', contribution: 80 },
      { description: 'Vue.js 기반 프론트엔드와 REST API 연동 개발', contribution: 50 },
    ],
  },
  {
    id: 'hl-mando-camellier',
    index: '04',
    period: '2023.03.01 ~ 2023.07.07',
    duration: '4개월',
    durationMonths: 4,
    title: 'HL 만도 카믈리에 관리자, 사용자 APP 개발',
    shortTitle: 'HL Mando Camellier App',
    client: 'HL 만도',
    languages: ['JAVA', 'JavaScript', 'SQL'],
    stack: ['SpringBoot', 'Vue.js', '하이브리드 앱', 'JWT', 'AWS 차량 스캔 이미지 분석 API'],
    category: 'auth',
    categoryLabel: '하이브리드 앱 · 인증',
    summary:
      '차량 스캔 이미지 분석(AWS)을 활용한 관리자·사용자 하이브리드 앱에서 JWT 인증, 모바일 PUSH 연동 및 Vue.js REST API 백엔드를 개발했습니다.',
    featured: false,
    roles: [
      { description: 'JWT토큰 기반 회원가입 및 로그인 구현', contribution: 80 },
      { description: '로그인, PUSH 모바일 앱 연동', contribution: 80 },
      { description: 'Vue.js 기반 프론트엔드와 REST API 연동 개발', contribution: 50 },
    ],
  },
  {
    id: 'interpark-bizmarket',
    index: '02',
    period: '2022.06.29 ~ 2022.08.12',
    duration: '2개월',
    durationMonths: 2,
    title: '인터파크 비즈마켓 복지몰 ASP 연동 개발',
    shortTitle: 'Interpark Bizmarket ASP Sync',
    client: '캐플릭스',
    languages: ['JAVA', 'JavaScript'],
    stack: ['외부API(인터파크 비즈마켓) 연동'],
    category: 'api',
    categoryLabel: '커머스 · 외부 API',
    summary:
      '기업 복지몰 ASP 연동을 위해 인터파크 비즈마켓 외부 API 기반 기업 회원 SSO 로그인 연동(90%) 및 복지몰 포인트 차감/사용 로직(80%)을 개발했습니다.',
    featured: false,
    roles: [
      { description: '기업 회원 로그인 연동 로직 개발', contribution: 90 },
      { description: '복지몰 포인트 사용 로직 개발', contribution: 80 },
    ],
  },
  {
    id: 'jejupass-renewal',
    index: '01',
    period: '2021.11.15 ~ 2022.07.31',
    duration: '9개월',
    durationMonths: 9,
    title: '제주패스 통합 브랜드 리뉴얼',
    shortTitle: 'Jejupass Brand Renewal',
    client: '캐플릭스',
    languages: ['JAVA', 'JavaScript'],
    stack: ['JPA', 'Thymeleaf', '마이크로서비스 아키텍처(MSA)', 'JWT'],
    category: 'renewal',
    categoryLabel: 'MSA · 브랜드 리뉴얼',
    summary:
      'MSA와 JPA 기반의 대규모 통합 브랜드 리뉴얼 프로젝트에서 회원가입·본인인증, 쿠키 기반 사용자 행동 추적 맞춤형 노출, 카페패스/포인트/쿠폰 및 관리자 CRUD를 개발했습니다.',
    featured: false,
    url: 'https://www.jejupass.com/web',
    roles: [
      { description: '사용자 회원가입 및 본인인증 개발', contribution: 50 },
      { description: '브라우저 쿠키 기반 사용자 행동 추적 및 맞춤형 콘텐츠 노출 기능 구현' },
      { description: '사용자 카페패스, 포인트, 쿠폰 등 화면 구현 개발' },
      { description: '관리자 메뉴관리, 상품등록, 쿠폰관리 등 CRUD 개발' },
    ],
  },
];

export const TECH_MATRIX_COLUMNS = [
  {
    title: 'Backend & Architecture',
    subtitle: '핵심 서버 및 데이터 설계',
    isDark: false,
    items: [
      'Java / Spring Boot 기반 안정적 서버 아키텍처 구축',
      'Spring Security + JWT 토큰 기반 무상태 인증 설계',
      'JPA(ORM) 및 SQL을 활용한 도메인 데이터 모델링',
      'AOP 기반 traceId 전역 요청 로그 추적 체계 구축',
      'Spring Batch 기반 휴면회원 스케줄링 및 대용량 처리',
      '마이크로서비스 아키텍처(MSA) 환경 실무 개발 경험',
    ],
  },
  {
    title: 'External API & Platform',
    subtitle: '이기종 시스템 및 클라우드 연동',
    isDark: false,
    items: [
      '삼성카드 API 연동 (회원 확인, 카드 가입 및 탈회)',
      'Cloudflare CDN 동영상 업로드 API 파이프라인 연동',
      '캐치테이블 업장·메뉴 조회 및 실시간 식음 예약 연동',
      '현대 오일뱅크 HDO · 파킹스루 카드 발급/검증 API',
      '인터파크 비즈마켓 복지몰 ASP 기업 로그인·포인트 연동',
      'PASS 본인인증 및 하이브리드 앱 PUSH 연동 구현',
    ],
  },
  {
    title: 'Delivery & Engineering Rigor',
    subtitle: '풀사이클 협업 및 검증된 전문성',
    isDark: true,
    items: [
      '블루웨이브 개발 1팀 대리 (5년 재직 · 중급 기술등급)',
      '정보처리기사 국가기술자격 보유 (2025.06.13 취득)',
      'Thymeleaf SSR & Vue.js 프론트엔드 REST API 협업',
      '쿠폰·제휴사·프로그램 신청 등 핵심 도메인 100% 전담',
      '브라우저 쿠키 기반 사용자 행동 추적 및 맞춤 콘텐츠 노출',
      'AWS 차량 스캔 이미지 분석 연계 서비스 백엔드 구축',
    ],
  },
];

export const KEY_METRICS = [
  { value: '5년', label: 'BLUEWAVE BACKEND CAREER (2021.11 ~ 2026.10)' },
  { value: '9건', label: 'ENTERPRISE & IN-HOUSE PROJECTS DELIVERED' },
  { value: '90%', label: 'EXTERNAL API & AOP LOGGING CONTRIBUTION' },
  { value: '100%', label: 'COUPON, PARTNER & CORE MODULE OWNERSHIP' },
];

export const ENGINEERING_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    index: '01',
    question: 'AOP 기반 traceId 로그 추적 체계는 어떤 문제를 해결하기 위해 구축했나요?',
    answer:
      'BW_Cms와 신라호텔 기업사이트 리뉴얼 프로젝트에서 다수의 API 요청과 외부 연동 호출이 동시에 발생할 때, 특정 사용자 요청의 전체 흐름을 단일 식별자로 추적하기 위해 도입했습니다. Spring AOP와 MDC(Mapped Diagnostic Context)를 연계하여 진입점부터 서비스·외부 API 호출까지 일관된 traceId를 남겨 장애 원인 파악 시간을 획기적으로 단축했습니다.',
  },
  {
    id: 'faq-2',
    index: '02',
    question: '다양한 외부 API(삼성카드, 캐치테이블, 파킹스루, 인터파크 등) 연동 시 중점을 두는 부분은 무엇인가요?',
    answer:
      '외부 시스템 장애가 자사 서비스 전체 장애로 전파되지 않도록 명확한 요청/응답 규격 검증, 타임아웃 및 예외 처리, 트랜잭션 경계 분리에 집중합니다. 특히 삼성카드 가입/탈회나 복지몰 포인트 사용, 파킹스루 카드 검증처럼 금전·회원 정합성이 중요한 로직에서는 상태 검증과 로깅을 이중화하여 데이터 불일치를 방지합니다.',
  },
  {
    id: 'faq-3',
    index: '03',
    question: '인증 보안 아키텍처(JWT, Spring Security, PASS 본인인증) 경험은 어떻게 축적되었나요?',
    answer:
      '제주패스의 MSA 환경 인증을 시작으로 HL 만도 카믈리에, BW_Membership, 현대 오일뱅크 EV&U, BW_Cms, 신라호텔까지 총 6개 이상의 핵심 프로젝트에서 JWT 기반 회원가입·로그인과 Spring Security 보안 구성을 직접 구현(기여도 80%)했습니다. 하이브리드 앱 PUSH 토큰 연계와 PASS 본인인증 실명 확인 플로우까지 폭넓게 다뤘습니다.',
  },
  {
    id: 'faq-4',
    index: '04',
    question: '프론트엔드(Vue.js, Thymeleaf) 및 모바일 앱 팀과는 어떻게 협업하나요?',
    answer:
      '백엔드 REST API 설계 단계에서부터 화면 요구사항과 하이브리드 앱 네이티브 브릿지 스펙을 명확히 정의합니다. Vue.js 기반 SPA(카믈리에, BW_Membership)와의 비동기 REST 통신뿐만 아니라, Thymeleaf 기반 SSR 화면(제주패스, EV&U, BW_Cms, 신라호텔) 직접 구현 경험이 있어 프론트엔드 관점의 데이터 구조를 깊이 이해하고 있습니다.',
  },
  {
    id: 'faq-5',
    index: '05',
    question: '신라호텔(17개월)과 같은 장기 엔터프라이즈 프로젝트에서의 강점은 무엇인가요?',
    answer:
      '장기 프로젝트에서는 초기 아키텍처의 일관성과 유지보수성이 가장 중요합니다. 자사 BW_Cms에서 검증한 Spring Security, AOP traceId 로그 체계, CMS 노출 관리 구조를 신라호텔 환경에 맞게 고도화했고, Cloudflare CDN 동영상 API 및 삼성카드 API 연동을 90% 기여도로 안정적으로 완수했습니다.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'language',
    label: '언어',
    enLabel: 'LANGUAGES',
    items: [
      { id: 'java', name: 'Java', category: '언어', proficiency: 60, code: 'JV', note: '주력 백엔드 객체지향 설계 및 실무 5년' },
      { id: 'javascript', name: 'JavaScript', category: '언어', proficiency: 60, code: 'JS', note: 'ES6+ 비동기 통신 및 웹 인터페이스 제어' },
    ],
  },
  {
    id: 'backend',
    label: '백엔드',
    enLabel: 'BACKEND',
    items: [
      { id: 'spring-boot', name: 'Spring Boot', category: '백엔드', proficiency: 60, code: 'SB', note: 'REST API · Batch · Interceptor · AOP 아키텍처' },
      { id: 'jpa', name: 'JPA', category: '백엔드', proficiency: 30, code: 'JP', note: '엔티티 매핑 및 객체 지향 데이터 영속화' },
      { id: 'spring-security', name: 'Spring Security', category: '백엔드', proficiency: 30, code: 'SS', note: '필터 체인 기반 인증·인가 및 접근 제어' },
    ],
  },
  {
    id: 'frontend',
    label: '프론트엔드',
    enLabel: 'FRONTEND',
    items: [
      { id: 'jsp', name: 'JSP', category: '프론트엔드', proficiency: 60, code: 'JSP', note: '레거시 및 엔터프라이즈 서버 사이드 템플릿' },
      { id: 'jquery', name: 'jQuery', category: '프론트엔드', proficiency: 60, code: 'JQ', note: 'DOM 제어 및 AJAX 비동기 화면 연동' },
      { id: 'html', name: 'HTML', category: '프론트엔드', proficiency: 50, code: 'HT', note: '시맨틱 웹 마크업 및 구조화' },
      { id: 'thymeleaf', name: 'Thymeleaf', category: '프론트엔드', proficiency: 50, code: 'TL', note: 'Spring 기반 SSR 화면 및 관리자 CRUD 구현' },
      { id: 'vuejs', name: 'Vue.js', category: '프론트엔드', proficiency: 35, code: 'VU', note: '컴포넌트 기반 SPA 및 REST API 연동' },
      { id: 'css', name: 'CSS', category: '프론트엔드', proficiency: 40, code: 'CS', note: '반응형 레이아웃 및 스타일링' },
      { id: 'react', name: 'React', category: '프론트엔드', proficiency: 20, code: 'RE', note: '컴포넌트 상태 관리 및 UI 구현 이해' },
    ],
  },
  {
    id: 'database',
    label: 'DB / 캐시',
    enLabel: 'DATABASE & CACHE',
    items: [
      { id: 'mysql', name: 'MySQL', category: 'DB / 캐시', proficiency: 60, code: 'MY', note: '관계형 스키마 설계 및 인덱스·쿼리 튜닝' },
      { id: 'mariadb', name: 'Maria DB', category: 'DB / 캐시', proficiency: 60, code: 'MD', note: '엔터프라이즈 웹 서비스 운영 DB 관리' },
      { id: 'mssql', name: 'Microsoft SQL Server', category: 'DB / 캐시', proficiency: 60, code: 'MS', note: '대규모 기업 프로젝트 MSSQL 쿼리 및 프로시저' },
      { id: 'oracle', name: 'ORACLE', category: 'DB / 캐시', proficiency: 60, code: 'OR', note: '엔터프라이즈 RDBMS 트랜잭션 및 SQL 처리' },
      { id: 'redis', name: 'Redis', category: 'DB / 캐시', proficiency: 15, code: 'RD', note: '인메모리 캐싱 및 토큰·세션 관리 기초' },
    ],
  },
  {
    id: 'vcs',
    label: '형상관리',
    enLabel: 'VERSION CONTROL & CI',
    items: [
      { id: 'jenkins', name: 'Jenkins', category: '형상관리', code: 'JK', note: '빌드 및 배포 파이프라인 운영' },
      { id: 'github', name: 'GitHub', category: '형상관리', code: 'GH', note: '원격 저장소 협업 및 코드 리뷰' },
      { id: 'git', name: 'Git', category: '형상관리', code: 'GT', note: '브랜치 전략 및 분산 버전 관리' },
      { id: 'svn', name: 'SVN', category: '형상관리', code: 'SV', note: '중앙 집중형 형상 관리 환경 협업' },
    ],
  },
  {
    id: 'etc',
    label: '기타',
    enLabel: 'SECURITY & AUTH',
    items: [
      { id: 'jwt', name: 'JWT', category: '기타', proficiency: 30, code: 'JWT', note: '토큰 기반 무상태 인증 및 하이브리드 앱 로그인' },
    ],
  },
];

