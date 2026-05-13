/* Como funciona, Diferencial, Roadmap, Mercados, CTA, Footer */

function StepIllust1() {
  return (
    <svg viewBox="0 0 280 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="tap-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2a3a4d"/>
          <stop offset="1" stopColor="#0F1824"/>
        </linearGradient>
      </defs>
      {/* tap */}
      <rect x="40" y="40" width="14" height="60" fill="url(#tap-grad)" stroke="rgba(31,160,255,0.3)"/>
      <rect x="32" y="34" width="30" height="10" fill="url(#tap-grad)" stroke="rgba(31,160,255,0.3)"/>
      <rect x="40" y="100" width="14" height="8" fill="#1FA0FF" opacity="0.4"/>
      {/* connector */}
      <rect x="36" y="108" width="22" height="14" rx="2" fill="#0F1824" stroke="#1FA0FF" strokeWidth="1"/>
      <circle cx="47" cy="115" r="2" fill="#1FA0FF">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      {/* wifi waves emanating */}
      <g stroke="#1FA0FF" fill="none" strokeWidth="1.5" strokeLinecap="round" transform="translate(70, 115)">
        <path d="M 0 0 Q 30 -20, 60 0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 10 5 Q 30 -8, 50 5">
          <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite"/>
        </path>
        <path d="M 20 10 Q 30 5, 40 10">
          <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.6s" repeatCount="indefinite"/>
        </path>
      </g>
      {/* node */}
      <circle cx="200" cy="80" r="20" fill="#0F1824" stroke="#1FA0FF" strokeWidth="1"/>
      <circle cx="200" cy="80" r="3" fill="#1FA0FF">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="200" y="115" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#4CB7FF" textAnchor="middle">BOCAL.001</text>
    </svg>
  );
}

function StepIllust2() {
  return (
    <svg viewBox="0 0 280 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* satellite */}
      <g transform="translate(140, 30)">
        <rect x="-8" y="-6" width="16" height="12" fill="#1FA0FF" opacity="0.8"/>
        <rect x="-22" y="-3" width="12" height="6" fill="#0F1824" stroke="#1FA0FF"/>
        <rect x="10" y="-3" width="12" height="6" fill="#0F1824" stroke="#1FA0FF"/>
        <line x1="-22" y1="0" x2="-12" y2="0" stroke="rgba(31,160,255,0.4)"/>
        <line x1="22" y1="0" x2="12" y2="0" stroke="rgba(31,160,255,0.4)"/>
      </g>
      {/* beams down */}
      <g stroke="#1FA0FF" strokeWidth="0.5" opacity="0.5">
        <line x1="140" y1="40" x2="60" y2="125" strokeDasharray="2 3"/>
        <line x1="140" y1="40" x2="140" y2="125" strokeDasharray="2 3"/>
        <line x1="140" y1="40" x2="220" y2="125" strokeDasharray="2 3"/>
      </g>
      {/* pulse along beams */}
      <circle r="2" fill="#1FA0FF">
        <animate attributeName="cx" values="140;60" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="40;125" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle r="2" fill="#1FA0FF">
        <animate attributeName="cx" values="140;220" dur="2s" begin="0.7s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="40;125" dur="2s" begin="0.7s" repeatCount="indefinite"/>
      </circle>
      {/* ground nodes */}
      <circle cx="60" cy="125" r="4" fill="#0F1824" stroke="#1FA0FF"/>
      <circle cx="140" cy="125" r="4" fill="#0F1824" stroke="#1FA0FF"/>
      <circle cx="220" cy="125" r="4" fill="#0F1824" stroke="#1FA0FF"/>
      <line x1="60" y1="130" x2="220" y2="130" stroke="rgba(31,160,255,0.15)" strokeDasharray="1 2"/>
      <text x="140" y="60" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="rgba(230,238,248,0.5)" textAnchor="middle">SAT-LINK</text>
    </svg>
  );
}

function StepIllust3() {
  return (
    <svg viewBox="0 0 280 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="valve-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#1FA0FF" stopOpacity="0.6"/>
          <stop offset="1" stopColor="#1FA0FF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* nozzle */}
      <g transform="translate(60, 70)">
        <rect x="0" y="-10" width="40" height="20" rx="3" fill="#0F1824" stroke="#1FA0FF"/>
        <circle cx="40" cy="0" r="8" fill="#0F1824" stroke="#1FA0FF"/>
        <rect x="38" y="-2" width="6" height="4" fill="#1FA0FF"/>
      </g>
      {/* spray */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <g key={i}>
          <circle r="2" fill="#1FA0FF" opacity="0.6">
            <animate attributeName="cx" values="104;240" dur="1.4s" begin={`${i * 0.18}s`} repeatCount="indefinite"/>
            <animate attributeName="cy" values={`70;${50 + (i * 6) % 50}`} dur="1.4s" begin={`${i * 0.18}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0" dur="1.4s" begin={`${i * 0.18}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
      {/* arc representing spread */}
      <path d="M 105 70 Q 180 30, 250 70" fill="none" stroke="rgba(31,160,255,0.18)" strokeDasharray="2 4"/>
      <path d="M 105 70 Q 180 110, 250 70" fill="none" stroke="rgba(31,160,255,0.18)" strokeDasharray="2 4"/>
      {/* leaf icon */}
      <g transform="translate(240, 95)" stroke="#22D39A" fill="none">
        <path d="M -8 8 C -8 -4, 0 -8, 8 -8 C 8 4, 0 8, -8 8 Z"/>
        <path d="M -6 6 L 4 -4"/>
      </g>
    </svg>
  );
}

function HowItWorks() {
  return (
    <section id="funciona">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">04</span> Como funciona</div>
            <h2 className="section-title">
              Da torneira ao satélite, do satélite à raiz da planta — em <em>menos de meio segundo</em>.
            </h2>
          </div>
          <p className="section-desc">
            Um pipeline simples por fora, denso por dentro: dados sobem, comandos descem, água é otimizada.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">PASSO 01 / SENSE</div>
            <div className="step-illust"><StepIllust1 /></div>
            <div className="step-title">Cada bocal se anuncia</div>
            <div className="step-desc">
              Ao ser conectado, o bocal lê umidade, pressão e GPS e entra no mesh da fazenda automaticamente. Sem cabos, sem config.
            </div>
          </div>
          <div className="step">
            <div className="step-num">PASSO 02 / RELAY</div>
            <div className="step-illust"><StepIllust2 /></div>
            <div className="step-title">Sobe por satélite</div>
            <div className="step-desc">
              O nó mais próximo agrega o tráfego e envia em pacotes comprimidos via link satelital. Cobertura global, mesmo offline em terra.
            </div>
          </div>
          <div className="step">
            <div className="step-num">PASSO 03 / ACT</div>
            <div className="step-illust"><StepIllust3 /></div>
            <div className="step-title">A IA decide e irriga</div>
            <div className="step-desc">
              Modelo de evapotranspiração combina clima + solo + cultura e despacha o comando de volta. A válvula abre — só onde, quanto e quando precisa.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differential() {
  const cards = [
    { icon: <Cpu size={18}/>, title: 'Dispositivo IoT modular', desc: 'Encaixe industrial, firmware OTA, novos sensores plugáveis sem trocar o bocal.', tag: 'EDGE · ARM Cortex-M' },
    { icon: <Globe size={18}/>, title: 'Coletor climático global', desc: 'Cada nó publica microclima local — densidade de dados que satélite sozinho não captura.', tag: '5 leituras/seg' },
    { icon: <Satellite size={18}/>, title: 'Repetidor rural', desc: 'A própria rede de bocais expande sinal por mesh em fazendas grandes e estradas vicinais.', tag: 'LoRa + KU' },
    { icon: <Bolt size={18}/>, title: 'Camada de receita SaaS', desc: 'Hardware é o veículo. O valor recorrente está no analytics, IA e dados climáticos licenciáveis.', tag: 'ARR · 4 streams' },
  ];
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">05</span> Diferencial estratégico</div>
            <h2 className="section-title">
              Quatro produtos dentro do mesmo bocal. <em>Esse é o moat.</em>
            </h2>
          </div>
          <p className="section-desc">
            Por que isso interessa a uma operadora de satélite, a uma agritech e a um governo — ao mesmo tempo.
          </p>
        </div>
        <div className="diff-grid">
          {cards.map((c, i) => (
            <div className="diff-card" key={i}>
              <div>
                <div className="diff-icon">{c.icon}</div>
                <div className="diff-title">{c.title}</div>
                <div className="diff-desc">{c.desc}</div>
              </div>
              <div className="diff-foot">{c.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    {
      label: 'FASE 01 · ATIVA',
      title: 'Protótipo funcional',
      window: 'Q2 2026 — Q4 2026',
      active: true,
      bullets: [
        'Bocal v0.4 em 6 fazendas piloto',
        'Dashboard básico + controle remoto',
        'Link sat. operacional (KU + LoRa)',
      ],
    },
    {
      label: 'FASE 02 · CONTRATAÇÃO',
      title: 'Pilotos em escala',
      window: 'Q1 2027 — Q3 2027',
      bullets: [
        'Pilotos agrícolas em 3 países',
        'Modelo de IA proprietário em produção',
        'Programa de parceria com cooperativas',
      ],
    },
    {
      label: 'FASE 03 · ROLLOUT',
      title: 'Produção industrial',
      window: 'Q4 2027 — 2029',
      bullets: [
        'Fábrica contratada para 250 mil un./ano',
        'Licenciamento da tecnologia a OEMs',
        'API pública de dados climáticos globais',
      ],
    },
  ];
  return (
    <section id="roadmap">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">06</span> Roadmap</div>
            <h2 className="section-title">
              Do protótipo a uma <em>rede planetária</em> em três fases — sem pular nenhuma.
            </h2>
          </div>
          <p className="section-desc">
            MVP enxuto, validação no campo e só depois escala industrial. A linha do tempo é conservadora de propósito.
          </p>
        </div>
        <div className="roadmap">
          {phases.map((p, i) => (
            <div className={`phase ${p.active ? 'active' : ''}`} key={i}>
              <div className="phase-marker">
                <div className="phase-dot"></div>
                <div className="phase-label">{p.label}</div>
              </div>
              <div className="phase-title">{p.title}</div>
              <div className="phase-window mono">{p.window}</div>
              <ul className="phase-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobeSvg() {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <radialGradient id="globe-fill" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(31, 160, 255, 0.15)"/>
          <stop offset="100%" stopColor="rgba(31, 160, 255, 0.02)"/>
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="160" fill="url(#globe-fill)" stroke="rgba(31, 160, 255, 0.4)" strokeWidth="0.6"/>
      {/* Latitude lines */}
      {[-60, -30, 0, 30, 60].map(lat => (
        <ellipse key={lat} cx="200" cy={200 + lat * 1.5} rx={Math.sqrt(160 * 160 - (lat * 1.5) * (lat * 1.5)) || 1} ry="6" fill="none" stroke="rgba(31, 160, 255, 0.18)" strokeWidth="0.5"/>
      ))}
      {/* Longitude lines */}
      {[-60, -30, 0, 30, 60].map(lon => (
        <ellipse key={lon} cx="200" cy="200" rx={Math.abs(lon) * 1.5 + 10} ry="160" fill="none" stroke="rgba(31, 160, 255, 0.12)" strokeWidth="0.5"/>
      ))}
      {/* Orbits */}
      <ellipse cx="200" cy="200" rx="200" ry="60" fill="none" stroke="rgba(31, 160, 255, 0.3)" strokeWidth="0.6" strokeDasharray="3 5" transform="rotate(-18 200 200)"/>
      <ellipse cx="200" cy="200" rx="190" ry="55" fill="none" stroke="rgba(31, 160, 255, 0.15)" strokeWidth="0.5" strokeDasharray="2 4" transform="rotate(28 200 200)"/>

      {/* Satellites */}
      <g>
        <circle r="3" fill="#1FA0FF">
          <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbit-a"/>
          </animateMotion>
        </circle>
      </g>
      <path id="orbit-a" d="M 200 200 m -200 0 a 200 60 0 1 0 400 0 a 200 60 0 1 0 -400 0" fill="none" style={{ display: 'none' }} transform="rotate(-18 200 200)"/>

      {/* Hot spots */}
      {[
        { x: 150, y: 230, label: 'BR' },
        { x: 240, y: 190, label: 'US' },
        { x: 220, y: 240, label: 'AR' },
        { x: 200, y: 175, label: 'MX' },
        { x: 260, y: 220, label: 'AF' },
        { x: 295, y: 245, label: 'KE' },
        { x: 280, y: 175, label: 'IN' },
        { x: 175, y: 165, label: 'US-CA' },
      ].map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r="2.5" fill="#1FA0FF"/>
          <circle cx={s.x} cy={s.y} r="2.5" fill="none" stroke="#1FA0FF">
            <animate attributeName="r" values="2.5;10" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
    </svg>
  );
}

function Markets() {
  const markets = [
    { code: 'BR', name: 'Brasil', focus: 'Agronegócio e irrigação de precisão', stat: '230 M', sub: 'HA AGRÍCOLA' },
    { code: 'US', name: 'Estados Unidos', focus: 'Agricultura de precisão · midwest', stat: '405 M', sub: 'HA AGRÍCOLA' },
    { code: 'AF', name: 'África Subsaariana', focus: 'Conectividade rural + agricultura resiliente', stat: '6 of 10', sub: 'PAÍSES C/ SECA' },
    { code: 'IN', name: 'Índia', focus: 'Pequenas propriedades + monção variável', stat: '156 M', sub: 'PRODUTORES' },
  ];
  return (
    <section className="markets" id="mercados">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">07</span> Mercados-alvo</div>
            <h2 className="section-title">
              Quatro geografias, um mesmo problema: <em>água + sinal</em>.
            </h2>
          </div>
          <p className="section-desc">
            Começamos onde a dor é maior e a infraestrutura satelital já está chegando. Cada mercado abre um perfil de receita diferente.
          </p>
        </div>
        <div className="markets-grid">
          <div className="market-list">
            {markets.map((m, i) => (
              <div className="market-row" key={i}>
                <div className="market-code">{m.code}</div>
                <div>
                  <div className="market-name">{m.name}</div>
                  <div className="market-focus">{m.focus}</div>
                </div>
                <div className="market-stat">
                  <div className="big">{m.stat}</div>
                  <div className="sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="globe-wrap">
            <GlobeSvg />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta" id="parceria">
      <div className="container cta-inner">
        <div className="section-eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
          <span className="num">08</span> Parceria
        </div>
        <h2>
          Vamos transformar irrigação em <em>infraestrutura digital</em> juntos.
        </h2>
        <p className="cta-desc">
          Buscamos parceiros estratégicos — governos, operadoras de satélite, cooperativas e agritechs — para os 12 primeiros pilotos. 6 vagas restantes em 2026.
        </p>
        <div className="cta-actions">
          <a href="#painel" className="btn btn-primary">Solicitar piloto <ArrowRight size={14}/></a>
          <a href="#produto" className="btn btn-ghost">Baixar deck técnico</a>
        </div>

        <form className="cta-form" onSubmit={(e) => { e.preventDefault(); alert('Recebido! A equipe entra em contato em 24 h.'); }}>
          <input type="email" placeholder="seu-email@organizacao.com" required />
          <button type="submit" className="btn btn-primary btn-sm">Quero conversar</button>
        </form>

        <div className="cta-strip">
          <div className="cta-strip-item">
            <div className="cta-strip-label">PILOTOS ATIVOS</div>
            <div className="cta-strip-val">6 fazendas · 3 estados</div>
          </div>
          <div className="cta-strip-item">
            <div className="cta-strip-label">PRÓXIMA JANELA</div>
            <div className="cta-strip-val">Set 2026 · 6 vagas</div>
          </div>
          <div className="cta-strip-item">
            <div className="cta-strip-label">SUPORTE TÉCNICO</div>
            <div className="cta-strip-val">24/7 · pt / en / es</div>
          </div>
          <div className="cta-strip-item">
            <div className="cta-strip-label">CONTATO DIRETO</div>
            <div className="cta-strip-val">parcerias@mangueirawifi.io</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <span style={{ color: 'var(--accent)' }}><WifiIcon size={22} /></span>
              <span>MANGUEIRA <span style={{ color: 'var(--accent)' }}>WI-FI</span></span>
            </div>
            <p>Infraestrutura de irrigação inteligente conectada por satélite. Cada bocal é um sensor, um repetidor e um ponto de coleta climática.</p>
          </div>
          <div className="footer-col">
            <h4>Produto</h4>
            <ul>
              <li><a href="#produto">Bocal v0.4</a></li>
              <li><a href="#painel">Painel</a></li>
              <li><a href="#funciona">Como funciona</a></li>
              <li><a href="#">API · em breve</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#mercados">Mercados</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#parceria">Parceria</a></li>
              <li><a href="#">Carreiras</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Estudos de campo</a></li>
              <li><a href="#">Imprensa</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MANGUEIRA WI-FI · DOC.PT-BR · BUILD 0.4.21</span>
          <span>FEITO COM ÁGUA, CÓDIGO E UM POUCO DE SOL</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { HowItWorks, Differential, Roadmap, Markets, CTA, Footer });
