import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

type Props = {
  name: string;
  address?: string;
  lat?: number;
  lng?: number;
  height?: number;
};

function loadKakao(appKey: string) {
  return new Promise<void>((resolve, reject) => {
    const w = window as any;
    if (w.kakao?.maps) return resolve();

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`;
    script.async = true;
    script.onerror = () => reject(new Error("Failed to load Kakao SDK"));
    script.onload = () => {
      w.kakao.maps.load(() => resolve());
    };
    document.head.appendChild(script);
  });
}

export default function KakaoMapSection({
  name,
  address,
  lat,
  lng,
  height = 240,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null); // kakao.maps.Map 인스턴스 저장
  const [centerLatLng, setCenterLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_APP_KEY as string;
    if (!appKey) {
      console.error(
        "VITE_KAKAO_APP_KEY 가 설정되지 않았습니다. .env에 JavaScript 키를 추가하고 dev 서버를 재시작하세요."
      );
      return;
    }

    let cancelled = false;

    (async () => {
      await loadKakao(appKey);
      if (cancelled) return;

      const kakao = (window as any).kakao;

      // 1) 중심 좌표 결정: lat/lng 우선, 없으면 주소 지오코딩
      const ensureCenter = async () => {
        if (typeof lat === "number" && typeof lng === "number") {
          return new kakao.maps.LatLng(lat, lng);
        }
        if (address) {
          const geocoder = new kakao.maps.services.Geocoder();
          const result: any = await new Promise((resolve, reject) => {
            geocoder.addressSearch(address, (res: any[], status: any) => {
              if (status === kakao.maps.services.Status.OK && res[0])
                resolve(res[0]);
              else reject(new Error("지오코딩 실패"));
            });
          });
          // result.x(lng), result.y(lat)
          setCenterLatLng({ lat: Number(result.y), lng: Number(result.x) });
          return new kakao.maps.LatLng(result.y, result.x);
        }
        throw new Error(
          "지도 중심을 결정할 수 없습니다. lat/lng 또는 address 중 하나가 필요합니다."
        );
      };

      const center = await ensureCenter();

      if (!containerRef.current) return;
      // StrictMode로 인한 중복 초기화 방지
      if (!mapRef.current) {
        mapRef.current = new kakao.maps.Map(containerRef.current, {
          center,
          level: 3,
        });
      } else {
        mapRef.current.setCenter(center);
      }

      const marker = new kakao.maps.Marker({
        position: center,
        map: mapRef.current,
      });
      //   const iwContent = `<div style="padding:6px 10px;border:1px solid #111;background:#fff;font-size:12px;border-radius:6px;">${name}</div>`;
      //   const infowindow = new kakao.maps.InfoWindow({ content: iwContent });
      //   infowindow.open(mapRef.current, marker);
      //   mapRef.current.panBy(0, -60);
    })().catch((e) => {
      console.error(e);
    });

    return () => {
      cancelled = true;
    };
  }, [name, address, lat, lng]);

  const displayAddress =
    address ??
    (centerLatLng
      ? `${centerLatLng.lat.toFixed(6)}, ${centerLatLng.lng.toFixed(6)}`
      : "");

  const handleCopy = async () => {
    if (!displayAddress) return;
    await navigator.clipboard.writeText(displayAddress);
  };
  return (
    <section className="px-5 py-6">
      <h2 className="text-[17px] font-semibold tracking-tight mb-3">
        오시는 길
      </h2>

      {displayAddress ? (
        <div className="mb-3 flex items-center gap-3 rounded-2xl border border-zinc-200 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <MapPin size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] text-zinc-500">주소</div>
            <div className="text-sm font-medium text-zinc-900 break-words">
              {displayAddress}
            </div>
          </div>
        </div>
      ) : null}

      <div
        ref={containerRef}
        className="rounded-2xl border border-zinc-200 overflow-hidden"
        style={{ width: "100%", height }}
      />
    </section>
  );
}
