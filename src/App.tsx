import { Phone, Mail } from "lucide-react";

import hero from "/sujakgol1.jpeg";
import LocationSection from "./components/LocationSearch";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[17px] font-semibold tracking-tight mb-3">
      {children}
    </h2>
  );
}

export default function App() {
  return (
    <div className="min-h-svh bg-neutral-100">
      <div className="mx-auto w-full max-w-[420px] bg-white text-zinc-800 shadow-sm">
        <section className="relative h-[58vh] max-h-[560px] overflow-hidden">
          <img
            src={hero}
            alt="수작골 별장 전경"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-0 right-0 px-5">
            <h1 className="text-3xl font-bold text-white">
              소중한 여러분을 수작골 작은집으로 초대합니다.
            </h1>
            <p className="mt-1 text-[13px] text-white/90">
              12월 20일 13시, 소중한 분들을 수작골 작은집으로 초대합니다.
            </p>
          </div>
        </section>

        <section className="px-5 pt-7 pb-6">
          <SectionHeader>소개</SectionHeader>
          <p className="text-[13px] leading-6 text-zinc-600">
            충청남도 공주시에 위치한 작은집입니다. <br />
            도심에서 벗어나 자연 속에서 편안한 휴식을 즐기실 수 있습니다.
            <br /> 가족, 친구들과 함께 특별한 추억을 만들어보세요.
          </p>
        </section>

        <section className="px-5 py-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">SERVICE</p>
              <p className="text-sm font-medium">향기로운 차</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">FOOD</p>
              <p className="text-sm font-medium">바베큐</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">SNACK</p>
              <p className="text-sm font-medium">겨울 간식</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-[12px] text-zinc-500 mb-1">PARKING</p>
              <p className="text-sm font-medium">주차 가능</p>
            </div>
          </div>
        </section>

        <LocationSection
          name="수작골 별장"
          address="충남 공주시 이인면 수작골길 43-3"
          lat={36.3710243582134}
          lng={127.10712108902}
          height={240}
        />

        <section className="px-5 pt-6 pb-[calc(24px+env(safe-area-inset-bottom))]">
          <SectionHeader>문의</SectionHeader>
          <p className="text-[13px] text-zinc-600 mb-4">
            이용 문의는 아래 연락처로 부탁드립니다.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Phone size={18} />
              </div>
              <div className="flex-1 leading-tight">
                <div className="text-[12px] text-zinc-500">전화</div>
                <a
                  href="tel:01012345678"
                  className="text-sm font-medium text-zinc-900"
                >
                  010-3825-0022
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                <Mail size={18} />
              </div>
              <div className="flex-1 leading-tight">
                <div className="text-[12px] text-zinc-500">이메일</div>
                <a
                  href="mailto:woong258@hanmail.net"
                  className="text-sm font-medium text-zinc-900 break-all"
                >
                  woong258@hanmail.net
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-5 pb-6 text-center text-[12px] text-zinc-400">
          WELCOME TO SUJAKGOL
        </footer>
      </div>
    </div>
  );
}
