# 서지효 (Seo Ji-hyo) — Backend Engineer Portfolio

백엔드 엔지니어 **서지효**의 5년 경력(`2021.11.01 ~ 2026.10.31`)과 9개 엔터프라이즈·자사 프로젝트 수행 이력을 담은 에디토리얼 포트폴리오 웹사이트입니다.

## 주요 구성
- **01. Engineer Profile**: 신상기록(블루웨이브 개발 1팀 대리, 중급 기술등급, 정보처리기사) 및 핵심 기여도 요약
- **02. Core Capabilities**: 인증 보안(JWT/Spring Security), 외부 API 연동, AOP traceId 로그 체계, 프론트엔드 브릿지 인터랙티브 아코디언
- **03. Career Progression**: 2021~2026년 5년 경력 성장 타임라인
- **04. Featured Case Studies & Skill Inventory**: 주요 4대 케이스 스터디 및 전체 9개 프로젝트 필터·상세 모달
- **05. Technical Matrix & Engineering Q&A**: 기술 스택 매트릭스, 핵심 성과 지표, 기술 Q&A 아코디언 및 PDF 인쇄/요약 복사 지원

## 로컬 실행
```bash
npm install
npm run dev
```

## GitHub 저장 및 Vercel 배포
1. GitHub 저장소에 전체 프로젝트를 푸시합니다:
   ```bash
   git init
   git add .
   git commit -m "feat: backend developer portfolio"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. [Vercel](https://vercel.com) 대시보드에서 **Add New Project** → 해당 GitHub 저장소를 선택합니다.
3. 프레임워크 프리셋 **Vite** (`Build Command: npm run build`, `Output Directory: dist`)가 `vercel.json`과 함께 자동 인식되며, 즉시 배포됩니다.
