import { useState, useEffect } from 'react';
import { WifiIcon, ArrowRight, ArrowUpRight } from './Icons';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className="nav" style={{ borderBottomColor: scrolled ? 'var(--line-2)' : 'var(--line)' }}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <span style={{ color: 'var(--accent)' }}><WifiIcon size={22} animated /></span>
          <span>MANGUEIRA <span style={{ color: 'var(--accent)' }}>WI-FI</span></span>
        </a>
        <div className="nav-links">
          <a href="#produto">Produto</a>
          <a href="#painel">Painel</a>
          <a href="#funciona">Como funciona</a>
          <a href="#mercados">Mercados</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#parceria">Parceria</a>
        </div>
        <div className="nav-cta">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>REDE OK · 2.341 nós</span>
          </div>
          <a href="#parceria" className="btn btn-primary btn-sm">
            Solicitar piloto <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="dot"></span>
            <span>v0.4 · piloto fechado · agro + parceiros estratégicos</span>
          </div>
          <h1>
            <span className="line-1">Mangueira</span>
            <span className="line-2">
              Wi-Fi
              <span style={{ color: 'var(--accent)' }} className="big-wifi">
                <WifiIcon size={120} animated />
              </span>
            </span>
          </h1>
          <div className="hero-tag">Água sem tubos. Conexão sem limites.</div>
          <p className="hero-body">
            Uma <strong>infraestrutura de irrigação inteligente</strong> conectada por satélite. Cada bocal é um sensor, um repetidor de internet rural e um ponto de coleta climática — transformando a fazenda em uma rede de dados em tempo real.
          </p>
          <div className="hero-actions">
            <a href="#parceria" className="btn btn-primary">
              Falar com a equipe <ArrowUpRight size={14} />
            </a>
            <a href="#painel" className="btn btn-ghost">
              Ver painel ao vivo
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="hero-meta-label">Cobertura via satélite</div>
              <div className="hero-meta-value">99,4<span className="unit">%</span></div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Economia média</div>
              <div className="hero-meta-value">38<span className="unit">% água</span></div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">Latência sensor → app</div>
              <div className="hero-meta-value">420<span className="unit">ms</span></div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit"></div>
          <div className="orbit o-2"></div>
          <div className="orbit o-3"></div>
          <img src="/assets/hero-nozzle.png" alt="Bocal Mangueira Wi-Fi" />
          <div className="hero-callouts">
            <div className="callout callout-tl">Antena · 1.2 GHz</div>
            <div className="callout callout-tr">Bocal modular</div>
            <div className="callout callout-br">Bateria · 8 h</div>
            <div className="callout callout-bl">Painel solar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
