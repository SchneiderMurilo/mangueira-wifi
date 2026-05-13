import { ArrowRight, Drop, Bolt, Satellite, Globe } from './Icons';

export function Mars() {
  const specs = [
    {
      icon: <Satellite size={16}/>,
      name: 'Distância de uplink',
      val: '225 M km',
      unit: 'média Terra · Marte',
    },
    {
      icon: <Drop size={16}/>,
      name: 'Payload H₂O por Starship',
      val: '1.400 kg',
      unit: 'por pouso',
    },
    {
      icon: <Bolt size={16}/>,
      name: 'Recarga solar marciana',
      val: '0,43 W',
      unit: 'contínuos · 0,38 g',
    },
    {
      icon: <Globe size={16}/>,
      name: 'Cobertura mesh prevista',
      val: 'Jezero + Olympus Mons',
      unit: 'fase inicial',
    },
  ];

  const phases = [
    {
      year: '2028',
      title: 'Lab. Antártico',
      desc: 'Bocal congelado a −78 °C por 12 meses. Zero falhas.',
    },
    {
      year: '2031',
      title: 'Starship M-01',
      desc: 'Primeiros 6 bocais entregues à Cratera Jezero. Janela ago/31.',
    },
    {
      year: '2034',
      title: 'Mesh marciano',
      desc: '240 nós ativos · primeiro link estável Terra-Marte.',
      active: true,
    },
    {
      year: '2041',
      title: 'Terraform · fase 0',
      desc: 'Rede planetária irriga 18 estufas pressurizadas.',
    },
  ];

  return (
    <section className="mars" id="marte">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow mars-eyebrow">
              <span className="num">∞</span> Programa Interplanetário
            </div>
            <h2 className="section-title">
              Antes de irrigar <em>Marte</em>, é preciso conectá-lo. A primeira mangueira parte em <em>2031</em>.
            </h2>
          </div>
          <p className="section-desc">
            Cada Starship que pousa precisa instalar uma rede hídrica. O bocal Wi-Fi foi calibrado para −63 °C e 0,38 g — porque colonizar começa com água, e água começa com sinal.
          </p>
        </div>

        <div className="mars-grid">
          <div className="mars-visual">
            <div className="mars-frame">
              <img src="/assets/mars-mission.png" alt="Astronauta operando Mangueira Wi-Fi em Marte" />
            </div>
            <div className="mars-tag tg-tl">MISSÃO M-01 · MARS</div>
            <div className="mars-tag tg-tr">SOL 04 · 14:38 LMST</div>
            <div className="mars-tag tg-bl">PAYLOAD H₂O · 1.4t</div>
            <div className="mars-tag tg-br">
              <span className="status-dot"></span> AQUA-LINK · UP
            </div>
            <div className="mars-marquee">
              <div className="mars-marquee-track mono">
                <span>· LATÊNCIA TERRA → MARTE 4m 12s · WI-FI SAT-MESH ATIVO · PRESSÃO 0,012 ATM · TEMPERATURA −63 °C · GRAVIDADE 0,38 g · CICLO 04/180 SOL · MODO TERRAFORM ON ·</span>
                <span>· LATÊNCIA TERRA → MARTE 4m 12s · WI-FI SAT-MESH ATIVO · PRESSÃO 0,012 ATM · TEMPERATURA −63 °C · GRAVIDADE 0,38 g · CICLO 04/180 SOL · MODO TERRAFORM ON ·</span>
              </div>
            </div>
          </div>

          <div className="mars-content">
            <div className="mars-specs">
              {specs.map((s, i) => (
                <div className="mars-spec" key={i}>
                  <div className="mars-spec-icon">{s.icon}</div>
                  <div>
                    <div className="mars-spec-name">{s.name}</div>
                    <div className="mars-spec-val">
                      {s.val} <span className="unit">{s.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mars-timeline">
              {phases.map((p, i) => (
                <div className={`mars-phase ${p.active ? 'active' : ''}`} key={i}>
                  <div className="mars-phase-year mono">{p.year}</div>
                  <div>
                    <div className="mars-phase-title">{p.title}</div>
                    <div className="mars-phase-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#parceria" className="btn btn-primary mars-cta">
              Reservar payload na M-01 <ArrowRight size={14}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
