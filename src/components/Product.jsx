import { Drop, Thermo, Gauge, Pin, Satellite, Sun, Valve } from './Icons';

export function Problem() {
  const stats = [
    { num: '60', unit: '%', label: 'Da água utilizada na agricultura é desperdiçada por irrigação ineficiente.' },
    { num: '2,8', unit: 'bi', label: 'Pessoas vivem em áreas com escassez hídrica pelo menos um mês por ano.' },
    { num: '71', unit: '%', label: 'Das propriedades rurais brasileiras não têm internet confiável no campo.' },
    { num: '< 8', unit: '%', label: 'Das fazendas no mundo usam alguma forma de automação inteligente.' },
  ];
  return (
    <section className="problem">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">01</span> O Problema</div>
            <h2 className="section-title">
              O campo é o último <em>black-spot</em> da infraestrutura digital — e ele paga a conta em água, energia e produtividade.
            </h2>
          </div>
          <p className="section-desc">
            Cada hectare é uma ilha desconectada. Sem dados, a irrigação é um chute calibrado por intuição.
          </p>
        </div>
        <div className="problem-grid">
          {stats.map((s, i) => (
            <div className="problem-cell" key={i}>
              <div className="problem-num">{s.num}<span className="unit">{s.unit}</span></div>
              <div className="problem-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Anatomy() {
  const specs = [
    { icon: <Drop size={18} />, name: 'Sensor de umidade do solo', desc: 'Leitura volumétrica a cada 2 minutos, calibrada por tipo de solo.', tag: 'CAP-12' },
    { icon: <Thermo size={18} />, name: 'Temperatura & microclima', desc: 'Ambiente, solo e jato — dados feedam o modelo de evapotranspiração.', tag: 'T-AMB' },
    { icon: <Gauge size={18} />, name: 'Pressão hidráulica', desc: 'Detecta vazamentos, entupimentos e quedas de vazão em tempo real.', tag: 'PSI-4' },
    { icon: <Pin size={18} />, name: 'GPS de precisão', desc: 'Cada bocal é geolocalizado; o mapa da fazenda se desenha sozinho.', tag: 'GNSS' },
    { icon: <Satellite size={18} />, name: 'Conexão satélite + LoRa', desc: 'Funciona onde não há 4G. Mesh entre bocais expande o alcance.', tag: 'KU/LoRa' },
    { icon: <Sun size={18} />, name: 'Painel solar integrado', desc: '0,8 W contínuos. Autonomia total — não precisa de cabo.', tag: '0.8W' },
    { icon: <Valve size={18} />, name: 'Válvula automática', desc: 'Abre, fecha e modula vazão por comando ou regra de IA.', tag: 'IP-68' },
  ];
  return (
    <section id="produto">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">02</span> Produto</div>
            <h2 className="section-title">
              Não é uma mangueira. <em>É um nó de rede</em> que também molha a planta.
            </h2>
          </div>
          <p className="section-desc">
            Sete subsistemas em um único bocal industrial. Modular, à prova de campo, e barato o suficiente para escalar.
          </p>
        </div>
        <div className="anatomy">
          <div className="anatomy-image">
            <img src="/assets/farmer-nozzle.png" alt="Bocal" />
          </div>
          <div className="spec-list">
            {specs.map((s, i) => (
              <div className="spec-row" key={i}>
                <div className="spec-icon">{s.icon}</div>
                <div>
                  <div className="spec-name">{s.name}</div>
                  <div className="spec-desc">{s.desc}</div>
                </div>
                <div className="spec-tag mono">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
