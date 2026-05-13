import { useEffect, useState } from 'react';

const continents = [
  { id: 'na', d: 'M 130 60 L 280 60 L 320 100 L 310 160 L 285 200 L 250 230 L 220 240 L 180 230 L 140 200 L 110 150 L 100 100 Z' },
  { id: 'ca', d: 'M 200 240 L 250 240 L 265 280 L 240 295 L 220 280 Z' },
  { id: 'sa', d: 'M 290 290 L 350 290 L 360 360 L 340 420 L 305 440 L 285 410 L 280 350 Z' },
  { id: 'gr', d: 'M 360 35 L 410 35 L 415 80 L 365 80 Z' },
  { id: 'is', d: 'M 460 80 L 480 80 L 480 95 L 460 95 Z' },
  { id: 'eu', d: 'M 480 95 L 600 95 L 610 150 L 540 175 L 490 165 L 475 130 Z' },
  { id: 'uk', d: 'M 488 105 L 506 105 L 506 130 L 488 130 Z' },
  { id: 'af', d: 'M 500 175 L 590 175 L 620 250 L 615 320 L 555 390 L 515 365 L 495 290 L 490 220 Z' },
  { id: 'mg', d: 'M 625 320 L 640 320 L 640 360 L 625 360 Z' },
  { id: 'me', d: 'M 600 175 L 660 175 L 680 225 L 615 230 Z' },
  { id: 'ru', d: 'M 600 60 L 920 60 L 940 130 L 800 150 L 680 140 L 600 110 Z' },
  { id: 'in', d: 'M 680 200 L 740 200 L 745 280 L 690 285 L 680 250 Z' },
  { id: 'cn', d: 'M 740 130 L 850 130 L 860 200 L 800 220 L 745 200 Z' },
  { id: 'se', d: 'M 760 220 L 800 220 L 810 270 L 770 270 Z' },
  { id: 'id1', d: 'M 770 290 L 820 290 L 830 320 L 770 320 Z' },
  { id: 'id2', d: 'M 840 295 L 880 295 L 880 325 L 840 325 Z' },
  { id: 'au', d: 'M 830 350 L 920 350 L 935 410 L 870 430 L 825 400 Z' },
  { id: 'jp', d: 'M 880 145 L 905 145 L 905 195 L 880 195 Z' },
];

const consumers = [
  { id: 'NYC', x: 290, y: 175, drops: '12.4k', priority: 1 },
  { id: 'LA',  x: 220, y: 195, drops: '8.1k',  priority: 2 },
  { id: 'MEX', x: 240, y: 255, drops: '4.7k',  priority: 3 },
  { id: 'SP',  x: 340, y: 360, drops: '22.9k', priority: 1 },
  { id: 'BSB', x: 318, y: 335, drops: '5.2k',  priority: 3 },
  { id: 'BUE', x: 320, y: 415, drops: '3.6k',  priority: 2 },
  { id: 'LON', x: 498, y: 122, drops: '9.2k',  priority: 2 },
  { id: 'PAR', x: 510, y: 145, drops: '6.7k',  priority: 3 },
  { id: 'BER', x: 540, y: 130, drops: '5.4k',  priority: 3 },
  { id: 'MOS', x: 620, y: 105, drops: '7.1k',  priority: 2 },
  { id: 'LOS', x: 545, y: 275, drops: '11.3k', priority: 2 },
  { id: 'NBO', x: 590, y: 305, drops: '4.4k',  priority: 3 },
  { id: 'CPT', x: 545, y: 375, drops: '3.1k',  priority: 3 },
  { id: 'DXB', x: 645, y: 205, drops: '6.0k',  priority: 2 },
  { id: 'MUM', x: 705, y: 240, drops: '15.4k', priority: 1 },
  { id: 'DEL', x: 715, y: 215, drops: '12.0k', priority: 2 },
  { id: 'BKK', x: 778, y: 240, drops: '7.8k',  priority: 3 },
  { id: 'SIN', x: 795, y: 305, drops: '8.5k',  priority: 2 },
  { id: 'TYO', x: 890, y: 180, drops: '13.6k', priority: 1 },
  { id: 'BEJ', x: 820, y: 165, drops: '14.2k', priority: 2 },
  { id: 'SYD', x: 895, y: 400, drops: '5.9k',  priority: 2 },
  { id: 'MEL', x: 880, y: 418, drops: '3.7k',  priority: 3 },
];

const meshPairs = [
  ['NYC', 'LON'],
  ['SP', 'LOS'],
  ['MOS', 'BEJ'],
  ['DXB', 'MUM'],
  ['TYO', 'SYD'],
  ['LON', 'DXB'],
  ['MUM', 'SIN'],
  ['LA', 'TYO'],
];

const byId = Object.fromEntries(consumers.map(c => [c.id, c]));

function rand(seed, min, max) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  const frac = x - Math.floor(x);
  return min + frac * (max - min);
}

export function WorldMap() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1400);
    return () => clearInterval(id);
  }, []);

  const dropsPerSec = (47832 + Math.floor(rand(tick, 0, 4000))).toLocaleString('pt-BR');
  const activeUsers = (1240000 + Math.floor(rand(tick + 1, 0, 12000))).toLocaleString('pt-BR');
  const bandwidth = (9.4 + rand(tick + 2, -0.4, 0.4)).toFixed(2);
  const latency = (247 + Math.floor(rand(tick + 3, -28, 28)));
  const nodes = (47832 + Math.floor(rand(tick + 4, -120, 120))).toLocaleString('pt-BR');

  return (
    <div className="worldmap">
      <div className="worldmap-bar">
        <div className="worldmap-bar-left">
          <span className="status-dot"></span>
          <span>AQUA-LINK · GLOBAL TELEMETRY</span>
        </div>
        <div className="worldmap-bar-right mono">
          <span>SAT 312/318</span>
          <span>UPLINK · KU·LORA</span>
          <span>BUILD 0.4.21</span>
        </div>
      </div>

      <div className="worldmap-canvas">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="worldmap-svg">
          <defs>
            <pattern id="wm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(31,160,255,0.05)" strokeWidth="0.5"/>
            </pattern>
            <pattern id="wm-dots" width="9" height="9" patternUnits="userSpaceOnUse">
              <circle cx="4.5" cy="4.5" r="0.7" fill="rgba(31,160,255,0.55)"/>
            </pattern>
            <radialGradient id="wm-pulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(31,160,255,0.7)"/>
              <stop offset="60%" stopColor="rgba(31,160,255,0.12)"/>
              <stop offset="100%" stopColor="rgba(31,160,255,0)"/>
            </radialGradient>
            <radialGradient id="wm-globe" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(31,160,255,0.08)"/>
              <stop offset="100%" stopColor="rgba(31,160,255,0)"/>
            </radialGradient>
            <mask id="wm-continent-mask">
              {continents.map(c => (
                <path key={c.id} d={c.d} fill="white"/>
              ))}
            </mask>
          </defs>

          <rect width="1000" height="500" fill="url(#wm-grid)"/>
          <ellipse cx="500" cy="250" rx="480" ry="230" fill="url(#wm-globe)"/>

          {/* latitudes */}
          {[100, 175, 250, 325, 400].map(y => (
            <line key={y} x1="20" y1={y} x2="980" y2={y}
              stroke="rgba(31,160,255,0.08)" strokeWidth="0.5" strokeDasharray="2 6"/>
          ))}
          {[200, 400, 600, 800].map(x => (
            <line key={x} x1={x} y1="20" x2={x} y2="480"
              stroke="rgba(31,160,255,0.06)" strokeWidth="0.5" strokeDasharray="2 6"/>
          ))}

          {/* continents fill + outline */}
          <g>
            {continents.map(c => (
              <path key={c.id} d={c.d}
                fill="rgba(31,160,255,0.06)"
                stroke="rgba(31,160,255,0.32)"
                strokeWidth="0.7"/>
            ))}
          </g>
          {/* dot texture, masked to continents */}
          <rect width="1000" height="500" fill="url(#wm-dots)" mask="url(#wm-continent-mask)" opacity="0.6"/>

          {/* mesh connections */}
          <g>
            {meshPairs.map(([a, b], i) => {
              const A = byId[a], B = byId[b];
              const mx = (A.x + B.x) / 2;
              const my = (A.y + B.y) / 2 - Math.abs(A.x - B.x) * 0.15;
              return (
                <g key={`mesh-${i}`}>
                  <path
                    d={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}
                    fill="none"
                    stroke="rgba(31,160,255,0.35)"
                    strokeWidth="0.7"
                    strokeDasharray="4 6"
                  >
                    <animate attributeName="stroke-dashoffset"
                      from="0" to="-100"
                      dur={`${5 + i * 0.4}s`}
                      repeatCount="indefinite"/>
                  </path>
                  <circle r="2" fill="#1FA0FF">
                    <animateMotion
                      dur={`${4 + (i % 3)}s`}
                      repeatCount="indefinite"
                      path={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}/>
                    <animate attributeName="opacity"
                      values="0;1;1;0"
                      dur={`${4 + (i % 3)}s`}
                      repeatCount="indefinite"/>
                  </circle>
                </g>
              );
            })}
          </g>

          {/* consumers */}
          <g>
            {consumers.map((c, i) => {
              const r0 = c.priority === 1 ? 3.5 : c.priority === 2 ? 2.8 : 2.2;
              const pulseMax = c.priority === 1 ? 26 : c.priority === 2 ? 18 : 12;
              const pulseDur = 2 + (i % 5) * 0.25;
              const delay = (i % 7) * 0.35;
              return (
                <g key={c.id}>
                  <circle cx={c.x} cy={c.y} r={pulseMax} fill="url(#wm-pulse)" opacity="0.6">
                    <animate attributeName="r"
                      from={r0} to={pulseMax}
                      dur={`${pulseDur}s`}
                      begin={`${delay}s`}
                      repeatCount="indefinite"/>
                    <animate attributeName="opacity"
                      from="0.7" to="0"
                      dur={`${pulseDur}s`}
                      begin={`${delay}s`}
                      repeatCount="indefinite"/>
                  </circle>
                  <circle cx={c.x} cy={c.y} r={r0} fill="#1FA0FF">
                    <animate attributeName="opacity"
                      values="0.7;1;0.7"
                      dur="1.6s"
                      repeatCount="indefinite"/>
                  </circle>
                  {c.priority <= 2 && (
                    <g transform={`translate(${c.x + 7}, ${c.y - 6})`}>
                      <rect x="0" y="-8" width={c.id.length * 6 + c.drops.length * 5 + 14} height="12" rx="2"
                        fill="rgba(6,11,18,0.78)"
                        stroke="rgba(31,160,255,0.45)"
                        strokeWidth="0.5"/>
                      <text x="4" y="1" fontSize="8" fontFamily="JetBrains Mono, monospace"
                        fill="#4CB7FF" letterSpacing="0.5">
                        {c.id}
                      </text>
                      <text x={c.id.length * 6 + 6} y="1" fontSize="8" fontFamily="JetBrains Mono, monospace"
                        fill="rgba(230,238,248,0.75)">
                        ·{c.drops}/s
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </g>

          {/* scan line */}
          <rect x="0" y="0" width="1000" height="1.5" fill="rgba(31,160,255,0.5)" opacity="0.55">
            <animate attributeName="y" from="0" to="500" dur="7s" repeatCount="indefinite"/>
          </rect>

          {/* compass / corner labels */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(230,238,248,0.4)" letterSpacing="0.5">
            <text x="14" y="22">N · 90°</text>
            <text x="14" y="486">S · -90°</text>
            <text x="940" y="22" textAnchor="end">E · 180°</text>
            <text x="940" y="486" textAnchor="end">PROJ · MERCATOR</text>
            <text x="500" y="252" textAnchor="middle" fill="rgba(31,160,255,0.35)">0° EQUADOR</text>
          </g>
        </svg>
      </div>

      <div className="worldmap-strip">
        <div className="worldmap-strip-cell">
          <div className="worldmap-strip-label">DROPS · WI-FI / S</div>
          <div className="worldmap-strip-val">{dropsPerSec}</div>
        </div>
        <div className="worldmap-strip-cell">
          <div className="worldmap-strip-label">CONSUMIDORES ATIVOS</div>
          <div className="worldmap-strip-val">{activeUsers}</div>
        </div>
        <div className="worldmap-strip-cell">
          <div className="worldmap-strip-label">NÓS AQUA-LINK</div>
          <div className="worldmap-strip-val">{nodes}</div>
        </div>
        <div className="worldmap-strip-cell">
          <div className="worldmap-strip-label">LARG. DE BANDA H₂O</div>
          <div className="worldmap-strip-val">{bandwidth}<span className="unit"> Gbps</span></div>
        </div>
        <div className="worldmap-strip-cell">
          <div className="worldmap-strip-label">LATÊNCIA HÍDRICA</div>
          <div className="worldmap-strip-val">{latency}<span className="unit"> ms</span></div>
        </div>
        <div className="worldmap-strip-cell">
          <div className="worldmap-strip-label">COBERTURA PLANETÁRIA</div>
          <div className="worldmap-strip-val">87,3<span className="unit"> %</span></div>
        </div>
      </div>
    </div>
  );
}
