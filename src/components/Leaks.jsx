import { ArrowRight, ShieldCheck, Drop, Bolt, Hand } from './Icons';

export function Leaks() {
  const features = [
    {
      icon: <Drop size={18}/>,
      title: 'Detecção por RSSI da rosca',
      desc: 'Cada espira da fita escuta a queda de pacotes hídricos em volta da conexão — em tempo real.',
    },
    {
      icon: <ShieldCheck size={18}/>,
      title: 'Auto-vedação térmica',
      desc: 'O circuito esquenta 0,3 °C e sela a rosca em 6 segundos quando detecta um vazamento.',
    },
    {
      icon: <Bolt size={18}/>,
      title: 'Antena dual-band integrada',
      desc: 'Reporta perdas para o mesh mesmo a 80 cm de profundidade. Sem zona morta.',
    },
    {
      icon: <Hand size={18}/>,
      title: 'Aplicação manual, leitura digital',
      desc: 'Você enrola como qualquer veda rosca — só que essa conta packets enquanto sela.',
    },
  ];

  const stats = [
    { label: 'PACKETS RECUPERADOS / H', val: '14.7k' },
    { label: 'ROSCAS MONITORADAS', val: '1.2M' },
    { label: 'PERDA HÍDRICA REDUZIDA', val: '−97,4%' },
    { label: 'VIDA ÚTIL · USO CONTÍNUO', val: '8 anos' },
  ];

  return (
    <section className="leaks" id="veda-rosca">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow leaks-eyebrow">
              <span className="num">★</span> Acessório · Veda Rosca Wi-Fi
            </div>
            <h2 className="section-title">
              Vazamentos de <em>água-wifi</em> acontecem. A <em>Veda Rosca Wi-Fi</em> resolve.
            </h2>
          </div>
          <p className="section-desc">
            Quando um pacote hídrico escapa pela rosca, sua fazenda perde sinal e água ao mesmo tempo. A fita PTFE com circuito embarcado detecta, reporta e veda — sozinha.
          </p>
        </div>

        <div className="leaks-grid">
          <div className="leaks-image">
            <div className="leaks-image-frame">
              <img src="/assets/veda-rosca-wifi.png" alt="Veda Rosca Wi-Fi com circuito embarcado" />
            </div>
            <div className="leaks-badge">PTFE-LINK · v1.0</div>
            <div className="leaks-corner tl">DUAL-BAND ANT.</div>
            <div className="leaks-corner tr">26 SENSORES / m</div>
            <div className="leaks-corner bl">AUTO-VEDA · 6s</div>
            <div className="leaks-corner br">
              <span className="status-dot"></span> SEAL OK
            </div>
          </div>

          <div className="leaks-content">
            <div className="leaks-features">
              {features.map((f, i) => (
                <div className="leaks-feature" key={i}>
                  <div className="leaks-feature-icon">{f.icon}</div>
                  <div>
                    <div className="leaks-feature-title">{f.title}</div>
                    <div className="leaks-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="leaks-stats">
              {stats.map((s, i) => (
                <div className="leaks-stat" key={i}>
                  <div className="leaks-stat-label">{s.label}</div>
                  <div className="leaks-stat-val">{s.val}</div>
                </div>
              ))}
            </div>

            <a href="#parceria" className="btn btn-primary leaks-cta">
              Quero a fita no piloto <ArrowRight size={14}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
