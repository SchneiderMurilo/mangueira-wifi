/* Dashboard / Painel ao vivo */

function FarmMap({ activeSector, sectors, hoveredSector, onHover, onSelect }) {
  // 800x600 viewbox
  return (
    <svg className="map-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid-fine" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(31, 160, 255, 0.04)" strokeWidth="0.5"/>
        </pattern>
        <pattern id="grid-coarse" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(31, 160, 255, 0.08)" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="pulse-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(31, 160, 255, 0.6)"/>
          <stop offset="60%" stopColor="rgba(31, 160, 255, 0.1)"/>
          <stop offset="100%" stopColor="rgba(31, 160, 255, 0)"/>
        </radialGradient>
        <linearGradient id="sector-active" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(31, 160, 255, 0.22)"/>
          <stop offset="100%" stopColor="rgba(31, 160, 255, 0.06)"/>
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#grid-fine)"/>
      <rect width="800" height="600" fill="url(#grid-coarse)"/>

      {/* River / contour line */}
      <path
        d="M 0 380 Q 150 350, 300 390 T 600 410 T 800 380"
        fill="none"
        stroke="rgba(31, 160, 255, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="2 4"
      />
      <path
        d="M 0 395 Q 150 365, 300 405 T 600 425 T 800 395"
        fill="none"
        stroke="rgba(31, 160, 255, 0.12)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      {/* Mesh connection lines between sectors */}
      {sectors.map((s, i) => {
        const next = sectors[(i + 1) % sectors.length];
        return (
          <line
            key={`mesh-${i}`}
            x1={s.cx} y1={s.cy}
            x2={next.cx} y2={next.cy}
            stroke="rgba(31, 160, 255, 0.15)"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />
        );
      })}

      {/* Sectors */}
      {sectors.map((s, i) => {
        const isActive = i === activeSector;
        const isHover = i === hoveredSector;
        return (
          <g key={s.id}
             onMouseEnter={() => onHover(i)}
             onMouseLeave={() => onHover(null)}
             onClick={() => onSelect(i)}
             style={{ cursor: 'pointer' }}>
            {/* Pulse rings on active */}
            {isActive && (
              <>
                <circle cx={s.cx} cy={s.cy} r="50"
                  fill="url(#pulse-grad)">
                  <animate attributeName="r" from="35" to="70" dur="2.4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx={s.cx} cy={s.cy} r="35"
                  fill="url(#pulse-grad)">
                  <animate attributeName="r" from="25" to="55" dur="2.4s" begin="0.6s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" begin="0.6s" repeatCount="indefinite"/>
                </circle>
              </>
            )}
            {/* Sector polygon */}
            <polygon
              points={s.points}
              fill={isActive ? "url(#sector-active)" : (isHover ? "rgba(31, 160, 255, 0.08)" : "rgba(31, 160, 255, 0.02)")}
              stroke={isActive ? "rgba(31, 160, 255, 0.9)" : (isHover ? "rgba(31, 160, 255, 0.5)" : "rgba(31, 160, 255, 0.25)")}
              strokeWidth={isActive ? "1.2" : "0.7"}
              strokeDasharray={isActive ? "0" : "3 3"}
              style={{ transition: 'fill 0.3s, stroke 0.3s' }}
            />
            {/* Node dot */}
            <circle cx={s.cx} cy={s.cy} r="3"
              fill={isActive ? "#1FA0FF" : (s.online ? "#1FA0FF" : "#FFB020")}
              opacity={isActive ? 1 : 0.7}
            />
            {isActive && (
              <circle cx={s.cx} cy={s.cy} r="3" fill="none" stroke="#1FA0FF" strokeWidth="1">
                <animate attributeName="r" from="3" to="14" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite"/>
              </circle>
            )}
            {/* Label */}
            <text x={s.cx} y={s.cy - 12}
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fill={isActive ? "#4CB7FF" : "rgba(230, 238, 248, 0.55)"}
              textAnchor="middle"
              letterSpacing="0.5">
              {s.id}
            </text>
          </g>
        );
      })}

      {/* Compass */}
      <g transform="translate(740, 50)">
        <circle r="18" fill="rgba(11, 18, 27, 0.6)" stroke="rgba(31, 160, 255, 0.3)" strokeWidth="0.5"/>
        <path d="M 0 -10 L 3 0 L 0 10 L -3 0 Z" fill="rgba(31, 160, 255, 0.6)"/>
        <text y="-22" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="rgba(230, 238, 248, 0.5)" textAnchor="middle">N</text>
      </g>

      {/* Scan line */}
      <rect x="0" y="0" width="800" height="2" fill="rgba(31, 160, 255, 0.4)" opacity="0.6">
        <animate attributeName="y" from="0" to="600" dur="6s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}

function LiveChart({ data }) {
  const w = 280, h = 100;
  const min = Math.min(...data) - 5;
  const max = Math.max(...data) + 5;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => [i * step, h - ((v - min) / (max - min)) * h]);
  const pathLine = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const pathFill = `${pathLine} L ${w} ${h} L 0 ${h} Z`;
  const last = points[points.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="chart-svg">
      <defs>
        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(31, 160, 255, 0.4)"/>
          <stop offset="100%" stopColor="rgba(31, 160, 255, 0)"/>
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map(p => (
        <line key={p} x1="0" y1={h * p} x2={w} y2={h * p} stroke="rgba(31, 160, 255, 0.06)" strokeWidth="0.5"/>
      ))}
      <path d={pathFill} className="chart-fill"/>
      <path d={pathLine} className="chart-line"/>
      <circle cx={last[0]} cy={last[1]} r="3" className="chart-glow"/>
      <circle cx={last[0]} cy={last[1]} r="2.5" className="chart-dot"/>
    </svg>
  );
}

function Dashboard() {
  const sectors = React.useMemo(() => ([
    { id: 'A-01', cx: 130, cy: 130, points: '40,60 220,55 230,200 60,210', online: true },
    { id: 'A-02', cx: 360, cy: 120, points: '240,55 480,50 490,190 250,200', online: true },
    { id: 'A-03', cx: 600, cy: 145, points: '510,55 740,70 730,220 510,210', online: true },
    { id: 'B-01', cx: 145, cy: 290, points: '60,225 230,215 240,355 80,360', online: false },
    { id: 'B-02', cx: 380, cy: 280, points: '250,215 490,205 500,345 260,355', online: true },
    { id: 'B-03', cx: 605, cy: 305, points: '510,225 730,235 720,370 510,355', online: true },
    { id: 'C-01', cx: 200, cy: 480, points: '90,440 320,440 330,560 100,560', online: true },
    { id: 'C-02', cx: 460, cy: 480, points: '350,440 570,440 580,560 360,560', online: true },
    { id: 'C-03', cx: 670, cy: 480, points: '595,440 740,440 750,560 600,560', online: true },
  ]), []);

  const [activeSector, setActiveSector] = React.useState(4);
  const [hoveredSector, setHoveredSector] = React.useState(null);
  const [chartData, setChartData] = React.useState(() =>
    Array.from({ length: 32 }, (_, i) => 55 + Math.sin(i / 3) * 8 + Math.random() * 6)
  );
  const [tab, setTab] = React.useState('mapa');

  // cycle active sector
  React.useEffect(() => {
    const id = setInterval(() => {
      setActiveSector(s => (s + 1) % sectors.length);
    }, 5200);
    return () => clearInterval(id);
  }, [sectors.length]);

  // animate chart
  React.useEffect(() => {
    const id = setInterval(() => {
      setChartData(prev => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        next.push(Math.max(35, Math.min(85, last + (Math.random() - 0.45) * 6)));
        return next;
      });
    }, 600);
    return () => clearInterval(id);
  }, []);

  const active = sectors[activeSector];
  const focusSector = hoveredSector != null ? sectors[hoveredSector] : active;

  // derive synthetic sensor readings
  const seed = focusSector.id.charCodeAt(2) + chartData[chartData.length - 1];
  const humidity = chartData[chartData.length - 1].toFixed(1);
  const tempC = (22 + (seed % 7) - 2 + Math.sin(chartData.length / 5) * 1.2).toFixed(1);
  const pressure = (2.1 + ((seed * 0.31) % 1.4)).toFixed(2);
  const flow = (focusSector.online ? (12 + (seed % 6)) : 0).toFixed(0);

  const events = [
    { time: '14:42:18', msg: <><strong>Setor {active.id}</strong> iniciou ciclo automático · 12 min</>, kind: 'ok' },
    { time: '14:38:02', msg: <>Modelo de ET sugeriu adiar setor <strong>C-02</strong> em 2 h</>, kind: 'info' },
    { time: '14:31:50', msg: <>Bateria do nó <strong>B-01</strong> abaixo de 28%</>, kind: 'warn' },
    { time: '14:24:11', msg: <>Mesh reconfigurado · 3 saltos via <strong>A-03</strong></>, kind: 'info' },
    { time: '14:18:55', msg: <>Vazão estabilizada em setor <strong>B-02</strong></>, kind: 'ok' },
  ];

  return (
    <section className="dashboard-wrap" id="painel">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">03</span> Painel ao vivo</div>
            <h2 className="section-title">
              Toda fazenda vira <em>uma única tela</em> — e a tela responde.
            </h2>
          </div>
          <p className="section-desc">
            Geometria da propriedade, telemetria por bocal, modelo agrometeorológico e fila de comandos numa mesma superfície. Funciona offline e sincroniza por satélite.
          </p>
        </div>

        <div className="dash">
          <div className="dash-bar">
            <div className="dash-bar-left">
              <div className="dash-bar-title">Fazenda Boa Vista · Goiás</div>
              <div className="dash-bar-tabs">
                {['mapa', 'lista', 'analytics', 'agenda'].map(t => (
                  <button key={t} className={`dash-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="dash-bar-right">
              <span>14:42 · UTC-3</span>
              <div className="sat-indicator">
                <span>SAT</span>
                <div className="sat-bars"><span></span><span></span><span></span><span></span></div>
                <span>−68 dBm</span>
              </div>
              <span>NÓS 2.341/2.358</span>
            </div>
          </div>

          <div className="dash-body">
            <div className="dash-map">
              <FarmMap
                sectors={sectors}
                activeSector={activeSector}
                hoveredSector={hoveredSector}
                onHover={setHoveredSector}
                onSelect={setActiveSector}
              />
              <div className="map-overlay">
                <div className="map-corner tl">FAZ-BV · 04°S 16°48'W</div>
                <div className="map-corner tr">ZOOM 1:2000</div>
                <div className="map-corner bl">9 SETORES · 4.280 NÓS</div>
                <div className="map-corner br">
                  <span className="status-dot"></span> SYNC
                </div>
                <div className="map-legend">
                  <span><span className="swatch" style={{ background: '#1FA0FF' }}></span>Irrigando</span>
                  <span><span className="swatch" style={{ background: 'rgba(31, 160, 255, 0.4)', border: '1px solid rgba(31, 160, 255, 0.6)' }}></span>Online</span>
                  <span><span className="swatch" style={{ background: '#FFB020' }}></span>Bateria baixa</span>
                  <span><span className="swatch" style={{ background: 'rgba(255, 90, 95, 0.2)', border: '1px solid #FF5A5F' }}></span>Sem sinal</span>
                </div>
              </div>
            </div>

            <div className="dash-side">
              <div className="side-section">
                <div className="side-head">
                  <div className="side-title">SETOR {focusSector.id} · TELEMETRIA</div>
                  <div className="side-action">DETALHES →</div>
                </div>

                <div className="sensor-row">
                  <div className="sensor-info">
                    <div className="icon"><Drop size={14}/></div>
                    <div>
                      <div className="sensor-name">Umidade do solo</div>
                      <div className="sensor-sub">12 cm prof.</div>
                    </div>
                  </div>
                  <div className="sensor-value">
                    <span className="big">{humidity}<span className="unit">%</span></span>
                    <span className="sensor-trend up">▲ 2.4</span>
                  </div>
                </div>

                <div className="sensor-row">
                  <div className="sensor-info">
                    <div className="icon"><Thermo size={14}/></div>
                    <div>
                      <div className="sensor-name">Temperatura</div>
                      <div className="sensor-sub">solo + ar</div>
                    </div>
                  </div>
                  <div className="sensor-value">
                    <span className="big">{tempC}<span className="unit">°C</span></span>
                    <span className="sensor-trend down">▼ 0.3</span>
                  </div>
                </div>

                <div className="sensor-row">
                  <div className="sensor-info">
                    <div className="icon"><Gauge size={14}/></div>
                    <div>
                      <div className="sensor-name">Pressão</div>
                      <div className="sensor-sub">linha principal</div>
                    </div>
                  </div>
                  <div className="sensor-value">
                    <span className="big">{pressure}<span className="unit">bar</span></span>
                  </div>
                </div>

                <div className="sensor-row">
                  <div className="sensor-info">
                    <div className="icon"><Activity size={14}/></div>
                    <div>
                      <div className="sensor-name">Vazão atual</div>
                      <div className="sensor-sub">L/min</div>
                    </div>
                  </div>
                  <div className="sensor-value">
                    <span className="big">{flow}<span className="unit">L/m</span></span>
                  </div>
                </div>
              </div>

              <div className="side-section">
                <div className="side-head">
                  <div className="side-title">UMIDADE · ÚLTIMAS 24 H</div>
                  <div className="side-action mono" style={{ color: 'var(--text-dim)' }}>{humidity}%</div>
                </div>
                <div className="chart-wrap">
                  <LiveChart data={chartData}/>
                </div>
              </div>

              <div className="side-section">
                <div className="side-head">
                  <div className="side-title">EVENTOS</div>
                  <div className="side-action">VER TUDO →</div>
                </div>
                {events.map((e, i) => (
                  <div className="event" key={i}>
                    <div className="event-time">{e.time}</div>
                    <div className="event-msg">
                      <span className={`event-dot ${e.kind}`}></span>{e.msg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Below dash: small helper row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, color: 'var(--text-dimmer)', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.06em' }}>
          <span>↑ CLIQUE NUM SETOR PARA INSPECIONAR — A SIMULAÇÃO ATUALIZA EM TEMPO REAL</span>
          <span>BUILD 0.4.21 · SAT-LINK ATIVO</span>
        </div>
      </div>
    </section>
  );
}

window.Dashboard = Dashboard;
