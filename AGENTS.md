# 온담치과 강남점 (Vivid 구조 클론 데모)

## 목적
표본 사이트 https://www.vividdental.ca/ 의 레이아웃·CSS·인터랙션을 구조적으로 동일하게 재현하고, 텍스트·이미지·연락처는 전부 "온담치과 강남점" 콘텐츠로 치환한 1페이지 데모 사이트를 만든다. 실제 vivid의 영문 카피, 의료진 이름, 환자 후기, 사진은 절대 그대로 쓰지 않는다 (저작권/초상권/의료광고법 문제).

## 스택 (기본값 — 다른 방식이 낫다고 판단되면 이유와 함께 제안)
- React + Vite + Tailwind CSS
- 배포: 기존 온담 데모 패턴과 동일하게 GitHub → Cloudflare Pages
- 저장소명 후보: `neowired-demo-ondal-gangnam`

## 폴더 구조 (제안)
```
/reference        표본 사이트 로컬 저장본 (성노님이 넣어둘 예정, 없으면 라이브 사이트를 직접 확인)
/src
  /components      섹션별 컴포넌트 분리 (Header, Hero, Stats, Badges, About, Doctors, Services, Tech, Reviews, CaseStories, Marquee, CTA, FAQ, Visit, Footer)
  /assets/images    이미지 플레이스홀더 (실사진은 성노님이 추후 직접 교체)
```

## 확정된 결정사항
- 구조·CSS·인터랙션 패턴: vivid 원본을 그대로 참고
- 콘텐츠(텍스트/의료진/후기/가격/연락처): 온담치과 강남점 전용 데이터만 사용 (README.md 첫 지시서 참고)
- 강남점 실제 주소·전화번호는 미확정 → `TODO_ADDRESS`, `TODO_PHONE` 변수/주석으로 명확히 표시해둘 것
- 이미지: 실사진 없음 → 중립 톤 플레이스홀더로 처리, 교체하기 쉽게 슬롯을 명확히 분리

## 하지 말 것
- vivid의 실제 의료진 이름, 환자 후기 원문, 학회 로고 이미지, 사진을 그대로 복사/다운로드해서 쓰지 말 것
- 협회 인증 로고는 실제 이미지 대신 텍스트 기반 배지로 대체할 것
