// src/App.tsx
import hero from "./assets/sujakgol.jpeg";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[17px] font-semibold tracking-tight mb-3">
      {children}
    </h2>
  );
}

export default function App() {
  return (
    // 바깥은 항상 회색 배경 + 가운데 "모바일 폭"만 보이게
    <div className="min-h-svh bg-neutral-100">
      {/* 모바일 캔버스: width 고정(max 420px), 가운데 정렬, 흰 배경 */}
      <div className="mx-auto w-full max-w-[420px] bg-white text-zinc-800 shadow-sm">
        {/* Hero */}
        <section className="relative h-[58vh] max-h-[560px] overflow-hidden">
          <img
            src={hero}
            alt="수작골 별장 전경"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-0 right-0 px-5">
            <h1 className="text-3xl font-bold text-white">수작골 별장</h1>
            <p className="mt-1 text-[13px] text-white/90">
              자연 속 프라이빗 힐링 스테이
            </p>
          </div>
        </section>

        {/* 소개 */}
        <section className="px-5 pt-7 pb-6">
          <SectionHeader>소개</SectionHeader>
          <p className="text-[13px] leading-6 text-zinc-600">
            수작골 별장은 푸른 숲과 정원으로 둘러싸인 아늑한 공간입니다.
            테라스와 야외 바비큐, 기본 조리 도구, 편안한 침구를 갖추어
            가족·연인·친구와의 휴식에 최적화되어 있습니다.
          </p>
          <ul className="mt-4 space-y-2 text-[13px]">
            <li>• 객실 2 / 욕실 2 / 최대 6인</li>
            <li>• 주방, 테라스, 야외 바비큐 공간</li>
            <li>• 무료 주차 2대 / 체크인 15:00 · 체크아웃 11:00</li>
          </ul>
        </section>

        {/* 포인트 섹션 */}
        <section className="px-5 py-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">VIEW</p>
              <p className="text-sm font-medium">정원 & 숲 전망</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">BBQ</p>
              <p className="text-sm font-medium">야외 바비큐 공간</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">PARKING</p>
              <p className="text-sm font-medium">주차 2대 무료</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">KITCHEN</p>
              <p className="text-sm font-medium">기본 조리 도구</p>
            </div>
          </div>
        </section>

        {/* 갤러리 (샘플: 동일 이미지 반복 가능 → 실제 사진으로 교체) */}
        <section className="px-5 py-6">
          <SectionHeader>갤러리</SectionHeader>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <img
                key={i}
                src={hero}
                alt={`sujakgol-${i}`}
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </section>

        {/* 오시는 길 */}
        <section className="px-5 py-6">
          <SectionHeader>오시는 길</SectionHeader>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <p className="text-sm font-medium">충청남도 ○○시 ○○로 123</p>
            <p className="mt-1 text-[13px] text-zinc-500">주차 2대 가능</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                className="rounded-xl bg-emerald-500 py-2.5 text-center text-[13px] font-semibold text-white"
                href="https://naver.me/"
                target="_blank"
              >
                네이버 지도
              </a>
              <a
                className="rounded-xl bg-yellow-400 py-2.5 text-center text-[13px] font-semibold text-black"
                href="https://kko.to/"
                target="_blank"
              >
                카카오맵
              </a>
            </div>
          </div>
        </section>

        {/* 문의/예약 */}
        <section className="px-5 pt-6 pb-[calc(24px+env(safe-area-inset-bottom))]">
          <SectionHeader>문의 / 예약</SectionHeader>
          <p className="text-[13px] text-zinc-600 mb-4">
            예약 및 이용 문의는 아래 연락처로 부탁드립니다.
          </p>
          <div className="space-y-2">
            <a
              href="tel:01012345678"
              className="block w-full rounded-xl bg-emerald-600 py-3 text-center text-sm font-semibold text-white"
            >
              전화 문의하기
            </a>
            <a
              href="mailto:contact@sujakgol.com"
              className="block w-full rounded-xl bg-zinc-900 py-3 text-center text-sm font-semibold text-white"
            >
              이메일 보내기
            </a>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="px-5 pb-6 text-center text-[12px] text-zinc-400">
          © 2025 수작골 별장
        </footer>
      </div>
    </div>
  );
}
