// 강남점 연락처는 변수만 쓰고, 화면 어디서든 이 파일만 고친다.
export const TODO_ADDRESS = "서울시 강남구 강남동 999-9999 온담빌딩 5층";
export const TODO_PHONE = "02-9999-9999";

const img = (file) => `/images/${file}`;

export const clinic = {
  name: "온담치과 강남점",
  slogan: "편안함으로, 스파처럼 머물다 가는 온담치과 강남점",
  subcopy: "강남 직장인·주민들의 평생 치아 주치의 · 과잉진료 없는 올곧은 진료",
  address: TODO_ADDRESS,
  phone: TODO_PHONE,
  hours:
    "월/수/금 09:30~18:30(점심 13:00~14:00) · 화/목 09:30~21:00(야간진료) · 토 09:30~14:00(연속 진료) · 일·공휴일 휴진",
  naverReserveUrl: "#reserve",
  kakaoTalkUrl: "#kakao",
};

export const navItems = [
  { href: "#about", label: "소개" },
  { href: "#doctors", label: "의료진" },
  { href: "#services", label: "진료과목" },
  { href: "#tech", label: "장비" },
  { href: "#reviews", label: "후기" },
  { href: "#visit", label: "오시는 길" },
];

const vid = (file) => `/videos/${file}`;

// 원본은 /move . 배포용은 public/videos 로 복사한 파일만 쓴다.
export const videos = {
  main: vid("main.mp4"),
  interior: vid("interior.mp4"),
  chair: vid("chair.mp4"),
  smile: vid("smile.mp4"),
  ct: vid("ct.mp4"),
  microscope: vid("microscope.mp4"),
  laser: vid("laser.mp4"),
};

export const stats = [
  { label: "정품 임플란트 인증", to: 100, suffix: "%" },
  { label: "분과별 전문의 협진", to: 3, suffix: "인" },
  { label: "야간진료 화·목", to: 21, suffix: "시" },
  { label: "정품 보증제", to: 0, suffix: "", text: "평생" },
];

export const badges = [
  "보건복지부 인증",
  "대한구강악안면외과학회",
  "대한치과교정학회",
  "대한구강악안면임플란트학회",
];

export const marqueeItems = [
  "정품 임플란트 인증",
  "3인 전문의 협진",
  "화/목 야간진료",
  "평생 사후관리 정품 보증제",
  "치료 전 서면 동의제",
  "지하 3개층 무료주차",
];

export const aboutPhotos = [
  { src: img("clinic-modern-interior-reception.jpg"), alt: "대기·리셉션 슬롯" },
  { src: img("consultation-3d-oral-scan-screen.jpg"), alt: "상담실 슬롯" },
  { src: img("candid-WFsNCIn8OF4-unsplash.jpg"), alt: "진료 공간 슬롯" },
];

export const doctorsIntro = [
  "보철과 · 구강악안면외과 · 교정과 등 각 임상 분과별 전문의가 유기적으로 협진하여",
  "환자 맞춤형 최적의 치료 솔루션을 제공 합니다.",
];

export const doctors = [
  {
    id: "kim",
    name: "김온담",
    title: "대표원장",
    specialty: "구강악안면외과 전문의(보건복지부 인증)",
    quote:
      "치과 치료는 차가운 시술이 아닌, 지친 마음까지 치유받는 편안한 여정이어야 합니다. 과잉진료 없는 올곧은 진단을 약속합니다.",
    career: [
      "서울대 치의학대학원 졸업·석사",
      "서울대 치과병원 구강악안면외과 임상강사",
      "대한구강악안면외과학회 전문의 및 평생회원",
      "인비절라인 코리아 인증 공식 교육의",
    ],
    photo: img("Dental-clinic-director.jpg"),
  },
  {
    id: "han",
    name: "한소영",
    title: "원장",
    specialty: "치과교정과 전문의",
    quote:
      "교정은 결과만큼 과정도 편안해야 합니다. 매 단계 눈으로 확인시켜드리는 투명한 진료를 지향합니다.",
    career: [
      "경희대 치과대학원 교정학 석사",
      "대한치과교정학회 정회원",
      "iTero 공인 교정 시뮬레이션 전문의",
    ],
    photo: img("Orthodontic-specialist.png"),
  },
  {
    id: "oh",
    name: "오민준",
    title: "원장",
    specialty: "구강악안면외과 전문의(임플란트 전문)",
    quote:
      "정밀한 진단이 곧 안전한 시술입니다. 디지털 가이드 없이는 임플란트를 식립하지 않습니다.",
    career: [
      "연세대 치과대학원 졸업",
      "대한구강악안면임플란트학회 정회원",
      "3D 네비게이션 임플란트 500례 이상",
    ],
    photo: img("Implant-specialist.png"),
  },
];

export const services = [
  {
    id: "implant",
    name: "원데이 네비게이션 임플란트",
    price: "890,000원~",
    tagline: "절개 없이 진행하는 당일 식립",
    photo: img("dental-implant-structure-model.jpg"),
  },
  {
    id: "aligner",
    name: "프리미엄 투명교정(인비절라인)",
    price: "3,500,000원~5,500,000원",
    tagline: "티 나지 않게 진행하는 교정",
    photo: img("patient-wearing-clear-aligner-closeup.jpg"),
  },
  {
    id: "laminate",
    name: "최소삭제 미세현미경 라미네이트",
    price: "550,000원~",
    tagline: "최소 삭제로 자연치아를 지키는 라미네이트",
    photo: img("dental-veneer-prosthetics-retractor.jpg"),
  },
  {
    id: "spa",
    name: "예방 & 스파 스케일링",
    price: "약 16,000원(본인부담금)",
    tagline: "치과가 아닌, 스파 같은 예방 관리",
    photo: img("dental-instruments-tools-set.jpg"),
  },
];

export const techItems = [
  {
    name: "3D Digital CT / Trios 5 스캐너",
    tab: "CT",
    photo: img("3D-Dental-CT-Panoramic-X-ray.png"),
    video: videos.ct,
    body: "잇몸뼈 두께와 신경관 위치를 입체 영상으로 미리 확인합니다.",
    points: [
      "정밀한 3D 진단: 뼈·신경 구조를 다각도로 살펴 안전한 진료 계획 수립",
      "방사선 부담 감소: 저선량 촬영으로 촬영 부담 완화",
      "빠르고 편안한 촬영: 한 번의 촬영으로 진료 시간 단축",
    ],
  },
  {
    name: "iTero Element 5D 시뮬레이터",
    tab: "iTero",
    photo: img("Premium-Intraoral-Scanner.png"),
    body: "이물감 없이 빠르게 스캔해 치아 구조를 3D로 확인합니다.",
    points: [
      "편안한 디지털 스캔: 인상재 없이 쾌적하게 채득",
      "3D 시뮬레이션 확인: 치료 전 치열·교합 상태를 미리 확인",
      "정밀 제작 지원: 오차를 줄인 데이터로 맞춤 보철·교정 제작",
    ],
  },
  {
    name: "Carl Zeiss 미세현미경 + CAD/CAM",
    tab: "현미경",
    photo: img("Dental-Operating-Microscope.png"),
    video: videos.microscope,
    body: "미세한 균열과 신경관까지 확대해서 살펴봅니다.",
    points: [
      "고배율 확대 시야: 미세 균열과 복잡한 신경관 세밀 확인",
      "자연치아 보존: 병소 부위만 선택적으로 처치",
      "고난도 신경치료 지원: 재신경치료 정밀도 향상",
    ],
  },
  {
    name: "컴퓨터 제어 무통 마취 시스템",
    tab: "무통마취",
    photo: img("High-End-Dental-Unit-Chair-.png"),
    video: videos.chair,
    body: "주입 속도와 압력을 일정하게 맞춰 통증을 줄입니다.",
    points: [
      "일정한 주입 압력: 압력 변화로 인한 통증 완화",
      "체온 맞춤 보온: 이물감을 줄이는 적정 온도 유지",
      "치과 공포 완화: 편안한 진료 준비 지원",
    ],
  },
  {
    name: "Waterlase 하이브리드 레이저 시스템",
    tab: "레이저",
    photo: img("Dental-Hybrid-Laser---Waterlase.png"),
    video: videos.laser,
    body: "물과 레이저를 함께 사용해 열·진동 부담을 줄입니다.",
    points: [
      "적은 열·진동: 기존 기구 대비 편안한 시술감",
      "상황별 무마취 진행: 증상에 따라 마취 없이 진행 가능",
      "다양한 진료 활용: 충치·잇몸치료 등 폭넓게 사용",
    ],
  },
];

export const reviews = [
  {
    name: "김*민",
    age: 42,
    treatment: "원데이 네비게이션 임플란트",
    text: "치과 공포증이 심해서 계속 미루다가 방문했는데, 병원 분위기부터 편안했어요. 원장님이 진행 과정을 화면으로 하나하나 보여주시면서 차근차근 설명해주셔서 마음이 놓였습니다. 스탭분들도 친절하시고, 대기 공간도 편안했어요.",
  },
  {
    name: "박*정",
    age: 28,
    treatment: "인비절라인 투명교정",
    text: "상담 때부터 궁금한 걸 편하게 물어볼 수 있었어요. 진행 과정을 화면으로 미리 보여주셔서 이해가 잘 됐고, 원장님도 매번 꼼꼼하게 봐주셔서 믿음이 갔습니다.",
  },
  {
    name: "이*석",
    age: 55,
    treatment: "상악동 거상술 및 맞춤 임플란트",
    text: "다른 병원에서 어렵다는 얘기를 듣고 걱정이 많았는데, 여기서는 진단 과정부터 비용까지 하나하나 서면으로 짚어주셔서 신뢰가 갔습니다. 상담이 정말 친절하고 자세했어요.",
  },
];

export const caseStories = [
  {
    title: "치과 공포증이 있던 환자의 진료 기록",
    topic: "원데이 임플란트",
    photo: img("dentist-patient-xray-consultation.jpg"),
    body: "김*민 환자는 당일 시뮬레이션과 무통 마취, 임시치아까지 한 동선으로 일상을 이어갔다.",
  },
  {
    title: "투명장치로 진행한 6개월의 기록",
    topic: "인비절라인",
    photo: img("patient-wearing-clear-aligner-yellow.jpg"),
    body: "박*정 환자는 투명장치와 3D 예측 화면으로 교정 과정을 단계마다 확인했다.",
  },
  {
    title: "얇은 잇몸뼈, 정밀 진단으로 접근한 사례",
    topic: "상악동 거상술",
    photo: img("digital-ct-implant-simulation-tablet.jpg"),
    body: "이*석 환자는 CT 진단 후 무절개 접근과 서면 비용·정품 안내를 함께 받았다.",
  },
];

export const faqs = [
  {
    q: "온담치과 강남점의 정확한 주소와 주차 이용 방법은?",
    a: `${TODO_ADDRESS} · 건물 내 지하주차장 무료 이용권 제공`,
  },
  {
    q: "직장인을 위한 야간 진료나 주말 진료도 운영하나요?",
    a: "매주 화/목요일 밤 9시까지 야간진료, 토요일 09:30~14:00 점심시간 없이 연속 진료",
  },
  {
    q: "임플란트 치료 시 정품 보증과 사후 관리는 어떻게 진행되나요?",
    a: "시술 후 정품 인증서 발급, 정기 검진·스케일링 무상 케어 제공",
  },
  {
    q: "치과 공포증이 심한데 통증을 줄여주는 마취 시스템이 있나요?",
    a: "체온 맞춤 컴퓨터 제어 무통 마취기 사용, 프라이빗 1:1 진료 부스 운영",
  },
];

export const mapImg = `${img("map.png")}?v=2`;
export const smileImg = img("cosmetic-dentistry-smile-profile.jpg");
