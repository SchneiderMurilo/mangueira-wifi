export const Icon = ({ children, size = 20, stroke = 1.6, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>{children}</svg>
);

export const WifiIcon = ({ size = 24, animated = false, ...rest }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 32 26" fill="none" {...rest}>
    <path d="M2 8 C 10 0, 22 0, 30 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={animated ? "wifi-arc a1" : ""}/>
    <path d="M6 13 C 12 7, 20 7, 26 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={animated ? "wifi-arc a2" : ""}/>
    <path d="M10 18 C 13 15, 19 15, 22 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={animated ? "wifi-arc a3" : ""}/>
    <circle cx="16" cy="23" r="2" fill="currentColor" className={animated ? "wifi-arc a4" : ""}/>
  </svg>
);

export const ArrowRight = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
export const ArrowUpRight = (p) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9"/></Icon>;
export const Drop = (p) => <Icon {...p}><path d="M12 3c-3 4-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-3-7-6-11z"/></Icon>;
export const Thermo = (p) => <Icon {...p}><path d="M14 14V5a2 2 0 1 0-4 0v9a4 4 0 1 0 4 0z"/></Icon>;
export const Gauge = (p) => <Icon {...p}><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 12l4-4"/></Icon>;
export const Pin = (p) => <Icon {...p}><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></Icon>;
export const Bolt = (p) => <Icon {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></Icon>;
export const Sun = (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></Icon>;
export const Valve = (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M5.6 18.4l3.5-3.5M14.9 9.1l3.5-3.5"/></Icon>;
export const Satellite = (p) => <Icon {...p}><path d="M5 5l4 4M9 5l-4 4 5 5 4-4-5-5z"/><path d="M14 14l5 5"/><path d="M19 14a5 5 0 0 0-5-5"/><path d="M22 14a8 8 0 0 0-8-8"/></Icon>;
export const Globe = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9z"/></Icon>;
export const Cpu = (p) => <Icon {...p}><rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9" y="9" width="6" height="6"/><path d="M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3"/></Icon>;
export const Activity = (p) => <Icon {...p}><path d="M3 12h4l3-9 4 18 3-9h4"/></Icon>;
export const Leaf = (p) => <Icon {...p}><path d="M3 21c0-9 5-14 14-14-3 9-7 14-14 14z"/><path d="M3 21c4-2 7-5 9-9"/></Icon>;
export const ShieldCheck = (p) => <Icon {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></Icon>;
export const Hand = (p) => <Icon {...p}><path d="M9 11V5a2 2 0 1 1 4 0v6"/><path d="M13 11V4a2 2 0 1 1 4 0v9"/><path d="M17 11V6a2 2 0 1 1 4 0v9a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-4l-2-2a1.4 1.4 0 0 1 2-2l2 2"/></Icon>;
export const Plug = (p) => <Icon {...p}><path d="M9 2v6M15 2v6"/><rect x="6" y="8" width="12" height="6" rx="1"/><path d="M12 14v3a4 4 0 0 0 4 4"/></Icon>;
export const Sliders = (p) => <Icon {...p}><path d="M4 8h11M19 8h1M9 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/><path d="M4 16h3M11 16h9M7 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></Icon>;
export const MapIcon = (p) => <Icon {...p}><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/><path d="M9 3v15M15 6v15"/></Icon>;
export const ChevronDown = (p) => <Icon {...p}><path d="M6 9l6 6 6-6"/></Icon>;
