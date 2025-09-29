import { useEffect } from "react";

type Props = {
  name: string;
  lat: number;
  lng: number;
  height?: number;
};
function loadKakao(appKey: string) {
  return new Promise<void>((resolve) => {
    const w = window as any;
    if (w.kakao?.maps) return resolve();

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.async = true;
    script.onload = () => {
      w.kakao.maps.load(() => resolve());
    };
    document.head.appendChild(script);
  });
}

export default function KakaoMapSection({
  name,
  lat,
  lng,
  height = 240,
}: Props) {
  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_APP_KEY as string;
    if (!appKey) return;

    loadKakao(appKey).then(() => {
      const kakao = (window as any).kakao;
      const container = document.getElementById("kakao-map");
      if (!container) return;

      const center = new kakao.maps.LatLng(lat, lng);
      const map = new kakao.maps.Map(container, { center, level: 3 });

      const marker = new kakao.maps.Marker({ position: center, map });

      const iwContent = `<div style="padding:6px 10px;border:1px solid #111;background:#fff;font-size:12px;border-radius:6px;">${name}</div>`;
      const infowindow = new kakao.maps.InfoWindow({ content: iwContent });
      infowindow.open(map, marker);
    });
  }, [lat, lng, name]);

  return (
    <section className="px-5 py-6">
      <h2 className="text-[17px] font-semibold tracking-tight mb-3">
        오시는 길
      </h2>
      <div
        id="kakao-map"
        className="rounded-2xl border border-zinc-200 overflow-hidden"
        style={{ width: "100%", height }}
      />
    </section>
  );
}
