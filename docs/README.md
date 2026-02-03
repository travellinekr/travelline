# Documentation Structure

이 폴더는 프로젝트 작업 기록을 관리합니다.

## 📁 구조

```
docs/
├─ implementation/     # 구체적인 구현 작업 기록
│  └─ YYYY-MM-DD-feature-name.md
│
└─ decisions/          # 아키텍처 결정 사항
   └─ architecture-decisions.md
```

## 📝 작성 규칙

### implementation/
- **파일명 형식**: `YYYY-MM-DD-feature-name.md`
- **내용**: 
  - 작업 내용
  - 수정된 파일
  - 구현 상세
  - 테스트 항목

### decisions/
- **내용**:
  - 기술 선택 이유
  - 아키텍처 패턴
  - 중요한 설계 결정

## 🔗 관계

**PROJECT_RULES.md** = "어떻게 개발해야 하나" (규칙)  
**docs/** = "무엇을 개발했나" (기록)

---

**작성자**: AI + User  
**최초 작성**: 2026-01-22
