/**
 * ブログ用の装飾イラスト（オイルボトル・植物）。
 * 参考デザインの「余白に散りばめた食材写真」の代わりに、SVG で描いた植物とボトルを配置する。
 */
import type { CSSProperties } from "react";

type IllustProps = { className?: string; style?: CSSProperties };

/** オイルのラベル色（ボトル・チップ共通） */
export const oilColors = {
  lavender: "#8b78c4",
  lemon: "#e2bd2c",
  peppermint: "#3d9f86",
  wildOrange: "#ec8a2b",
  frankincense: "#b08a4a",
} as const;

/** 15mL のエッセンシャルオイルボトル */
export function OilBottle({ label, color, className, style }: IllustProps & { label: string; color: string }) {
  const body = "M22 38 H42 V42 Q58 44 58 58 V122 Q58 130 50 130 H14 Q6 130 6 122 V58 Q6 44 22 42 Z";
  return (
    <svg viewBox="0 0 64 132" className={className} style={style} aria-hidden="true">
      <path d="M18 5 Q18 1 22 1 H42 Q46 1 46 5 V34 H18 Z" fill="#262626" />
      {[22, 26, 30, 34, 38, 42].map((x) => (
        <line key={x} x1={x} y1="5" x2={x} y2="33" stroke="#3b3b3b" strokeWidth="1.4" />
      ))}
      <rect x="16" y="33" width="32" height="5" rx="1.5" fill="#1b1b1b" />
      <path d={body} fill="#7b4a1d" />
      <path d="M40 42 Q58 44 58 58 V122 Q58 130 50 130 H40 Z" fill="#4a2a0d" opacity=".35" />
      <rect x="6" y="64" width="52" height="44" fill="#faf8f3" />
      <rect x="6" y="79" width="52" height="15" fill={color} />
      <text x="32" y="74" textAnchor="middle" fontSize="5" fill="#6b6b6b" fontFamily="Georgia, serif" letterSpacing=".6">
        ESSENTIAL OIL
      </text>
      <text x="32" y="89.5" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Georgia, serif" fontStyle="italic">
        {label}
      </text>
      <text x="32" y="103" textAnchor="middle" fontSize="4.5" fill="#8a8a8a" fontFamily="Georgia, serif">
        15 mL
      </text>
      <rect x="10.5" y="50" width="3.5" height="70" rx="1.75" fill="#fff" opacity=".22" />
    </svg>
  );
}

/** ラベンダーの花穂 */
export function Lavender({ className, style }: IllustProps) {
  const purples = ["#6f5ca8", "#8b78c4", "#a796d6", "#7d6bb6"];
  const buds = Array.from({ length: 18 }, (_, i) => {
    const t = i / 17;
    const y = 12 + t * 118;
    const x = 52 - t * 5;
    const side = i % 2 === 0 ? -1 : 1;
    const size = 4.2 + t * 2.6;
    const cx = x + side * (2.5 + t * 2.5);
    return (
      <ellipse
        key={i}
        cx={cx}
        cy={y}
        rx={size * 0.55}
        ry={size}
        transform={`rotate(${side * 26} ${cx} ${y})`}
        fill={purples[i % purples.length]}
      />
    );
  });
  return (
    <svg viewBox="0 0 100 320" className={className} style={style} aria-hidden="true">
      <path d="M52 6 C 50 90, 46 190, 34 318" stroke="#6d8f5a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M44 210 C 30 190, 22 180, 14 176 C 26 192, 34 204, 43 218 Z" fill="#7fa36b" />
      <path d="M41 240 C 56 222, 66 214, 76 210 C 66 226, 56 238, 42 250 Z" fill="#6d935b" />
      {buds}
      {[20, 46, 74, 100].map((y, i) => (
        <ellipse key={y} cx={52 - (y / 130) * 5} cy={y} rx={2.6 + i * 0.4} ry={5 + i * 0.6} fill="#5d4b96" />
      ))}
    </svg>
  );
}

/** 輪切りの柑橘（レモン・オレンジ） */
export function CitrusSlice({ kind = "lemon", className, style }: IllustProps & { kind?: "lemon" | "orange" }) {
  const c =
    kind === "lemon"
      ? { rind: "#eecb35", pith: "#fbf3cf", a: "#f6db5f", b: "#f1cd3f" }
      : { rind: "#ec8526", pith: "#fde4c6", a: "#f6a640", b: "#f2922b" };
  const n = 10;
  const pt = (r: number, deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return `${(50 + r * Math.cos(rad)).toFixed(2)} ${(50 + r * Math.sin(rad)).toFixed(2)}`;
  };
  const wedges = Array.from({ length: n }, (_, i) => {
    const a0 = (i * 360) / n + 3.5;
    const a1 = ((i + 1) * 360) / n - 3.5;
    return (
      <path
        key={i}
        d={`M ${pt(5, a0)} L ${pt(39, a0)} A 39 39 0 0 1 ${pt(39, a1)} L ${pt(5, a1)} Z`}
        fill={i % 2 === 0 ? c.a : c.b}
      />
    );
  });
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill={c.rind} />
      <circle cx="50" cy="50" r="44" fill={c.pith} />
      {wedges}
      <circle cx="50" cy="50" r="4" fill={c.pith} />
      <circle cx="38" cy="30" r="9" fill="#fff" opacity=".18" />
    </svg>
  );
}

/** 葉っぱ1枚（ミント・汎用） */
function Leaf({ x, y, angle, scale, fill }: { x: number; y: number; angle: number; scale: number; fill: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <path d="M0 0 C 8 -11, 30 -13, 44 0 C 30 13, 8 11, 0 0 Z" fill={fill} />
      <path d="M2 0 C 16 -1, 28 -1, 40 0" stroke="#ffffff" strokeOpacity=".45" strokeWidth="1.2" fill="none" />
      {[12, 20, 28].map((vx) => (
        <path key={vx} d={`M${vx} 0 L${vx + 5} -5 M${vx} 0 L${vx + 5} 5`} stroke="#ffffff" strokeOpacity=".3" strokeWidth=".8" />
      ))}
    </g>
  );
}

/** ペパーミントの枝 */
export function MintSprig({ className, style }: IllustProps) {
  const greens = ["#4f9a63", "#5fae72", "#47895a"];
  const nodes = [
    { y: 200, s: 1.25 },
    { y: 145, s: 1.05 },
    { y: 95, s: 0.85 },
    { y: 55, s: 0.65 },
  ];
  return (
    <svg viewBox="0 0 160 260" className={className} style={style} aria-hidden="true">
      <path d="M80 258 C 80 180, 80 100, 80 30" stroke="#4a7d4f" strokeWidth="3" fill="none" strokeLinecap="round" />
      {nodes.map((n, i) => (
        <g key={n.y}>
          <Leaf x={80} y={n.y} angle={-35} scale={n.s} fill={greens[i % 3]} />
          <Leaf x={80} y={n.y} angle={-145} scale={n.s} fill={greens[(i + 1) % 3]} />
        </g>
      ))}
      <Leaf x={80} y={32} angle={-80} scale={0.55} fill={greens[1]} />
      <Leaf x={80} y={32} angle={-100} scale={0.55} fill={greens[0]} />
    </svg>
  );
}

/** ユーカリの枝 */
export function Eucalyptus({ className, style }: IllustProps) {
  const leaves = Array.from({ length: 9 }, (_, i) => {
    const t = i / 8;
    const x = 60 + Math.sin(t * 3.2) * 16;
    const y = 300 - t * 270;
    const side = i % 2 === 0 ? -1 : 1;
    const r = 17 - t * 6;
    return { cx: x + side * (r + 3), cy: y, r, side };
  });
  return (
    <svg viewBox="0 0 120 320" className={className} style={style} aria-hidden="true">
      <path d="M58 318 C 72 240, 50 160, 70 90 S 64 40, 66 16" stroke="#8a7f6a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <g key={i}>
          <circle cx={l.cx} cy={l.cy} r={l.r} fill={i % 2 ? "#a8c7ba" : "#94b8a8"} stroke="#7aa392" strokeWidth="1.2" />
          <path d={`M${l.cx - l.side * l.r * 0.9} ${l.cy} Q ${l.cx} ${l.cy - 2} ${l.cx + l.side * l.r * 0.7} ${l.cy}`} stroke="#ffffff" strokeOpacity=".5" fill="none" />
        </g>
      ))}
    </svg>
  );
}

/** ローズマリーの枝 */
export function Rosemary({ className, style }: IllustProps) {
  const needles = Array.from({ length: 30 }, (_, i) => {
    const y = 270 - i * 8.5;
    const side = i % 2 === 0 ? -1 : 1;
    const len = 22 - (i / 30) * 12;
    return <line key={i} x1="50" y1={y} x2={50 + side * len} y2={y - len * 0.75} stroke={i % 3 ? "#4e7b55" : "#5f8f66"} strokeWidth="3.2" strokeLinecap="round" />;
  });
  return (
    <svg viewBox="0 0 100 290" className={className} style={style} aria-hidden="true">
      <path d="M50 288 L 50 14" stroke="#6b5a45" strokeWidth="2.4" strokeLinecap="round" />
      {needles}
    </svg>
  );
}

/** フランキンセンス（樹脂） */
export function Resin({ className, style }: IllustProps) {
  const blobs = [
    { d: "M20 40 Q 14 26 28 20 Q 44 16 46 30 Q 48 44 34 48 Q 24 50 20 40 Z", f: "#e6b263" },
    { d: "M54 46 Q 52 34 64 32 Q 76 32 76 44 Q 74 56 62 56 Q 54 54 54 46 Z", f: "#d99a3e" },
    { d: "M34 64 Q 30 54 42 52 Q 52 52 52 62 Q 50 72 40 72 Q 34 70 34 64 Z", f: "#eec07a" },
  ];
  return (
    <svg viewBox="0 0 90 80" className={className} style={style} aria-hidden="true">
      {blobs.map((b, i) => (
        <g key={i}>
          <path d={b.d} fill={b.f} />
          <path d={b.d} fill="#fff" opacity=".18" transform="translate(-2 -3) scale(.96)" />
        </g>
      ))}
    </svg>
  );
}

/** カモミールの花 */
export function Chamomile({ className, style }: IllustProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <ellipse key={i} cx="30" cy="14" rx="4.2" ry="11" fill="#fdfcf7" stroke="#e9e4d6" strokeWidth=".8" transform={`rotate(${i * 30} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="7.5" fill="#f2c230" />
      <circle cx="28" cy="28" r="2.5" fill="#fff" opacity=".35" />
    </svg>
  );
}

type ClusterVariant = "left-a" | "right-a" | "left-b" | "right-b";

/** ページ左右の余白に置く植物とボトルの組み合わせ */
export function BotanicalCluster({ variant, className = "" }: { variant: ClusterVariant; className?: string }) {
  return (
    <div className={`pointer-events-none absolute hidden h-[460px] w-[260px] select-none lg:block ${className}`} aria-hidden="true">
      {variant === "left-a" && (
        <>
          <Lavender className="absolute left-[38px] top-0 h-[300px] -rotate-[14deg] drop-shadow-sm" />
          <Lavender className="absolute left-[78px] top-[24px] h-[270px] rotate-[8deg] drop-shadow-sm" />
          <OilBottle label="Lavender" color={oilColors.lavender} className="absolute left-[118px] top-[210px] h-[150px] rotate-[12deg] drop-shadow-md" />
          <CitrusSlice kind="lemon" className="absolute -left-[30px] top-[250px] h-[120px] drop-shadow-md" />
          <Chamomile className="absolute left-[70px] top-[360px] h-[54px]" />
          <Chamomile className="absolute left-[118px] top-[384px] h-[40px] rotate-12" />
        </>
      )}
      {variant === "right-a" && (
        <>
          <Eucalyptus className="absolute right-[10px] top-0 h-[310px] rotate-[18deg] drop-shadow-sm" />
          <MintSprig className="absolute right-[96px] top-[120px] h-[200px] -rotate-[20deg] drop-shadow-sm" />
          <OilBottle label="Peppermint" color={oilColors.peppermint} className="absolute right-[40px] top-[250px] h-[150px] -rotate-[10deg] drop-shadow-md" />
          <CitrusSlice kind="orange" className="absolute right-[136px] top-[340px] h-[96px] drop-shadow-md" />
        </>
      )}
      {variant === "left-b" && (
        <>
          <Rosemary className="absolute left-[20px] top-[10px] h-[260px] rotate-[22deg] drop-shadow-sm" />
          <CitrusSlice kind="orange" className="absolute -left-[36px] top-[150px] h-[130px] drop-shadow-md" />
          <OilBottle label="Wild Orange" color={oilColors.wildOrange} className="absolute left-[96px] top-[170px] h-[150px] -rotate-[8deg] drop-shadow-md" />
          <MintSprig className="absolute left-[10px] top-[290px] h-[170px] rotate-[30deg] drop-shadow-sm" />
        </>
      )}
      {variant === "right-b" && (
        <>
          <Lavender className="absolute right-[60px] top-0 h-[280px] rotate-[16deg] drop-shadow-sm" />
          <OilBottle label="Frankincense" color={oilColors.frankincense} className="absolute right-[100px] top-[180px] h-[150px] rotate-[6deg] drop-shadow-md" />
          <Resin className="absolute right-[20px] top-[300px] h-[70px]" />
          <CitrusSlice kind="lemon" className="absolute -right-[40px] top-[150px] h-[120px] drop-shadow-md" />
          <Chamomile className="absolute right-[150px] top-[340px] h-[48px]" />
        </>
      )}
    </div>
  );
}

/** 見出しの下などに置く小さな飾り（スマホでも表示） */
export function BotanicalOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-1 ${className}`} aria-hidden="true">
      <Lavender className="h-[46px] -rotate-12" />
      <OilBottle label="" color={oilColors.lavender} className="h-[30px]" />
      <MintSprig className="h-[34px] rotate-12" />
    </div>
  );
}
