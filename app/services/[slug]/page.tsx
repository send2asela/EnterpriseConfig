import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServicePage, servicePages } from "../service-data";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function EnterpriseNetworkArchitectureDiagram() {
  const layers = [
    {
      title: "EXTERNAL\nNETWORKS",
      y: 28,
      height: 132,
      stroke: "#a5b4fc",
      fill: "#f8fafc",
    },
    {
      title: "PERIMETER / EDGE",
      y: 214,
      height: 146,
      stroke: "#d8b4fe",
      fill: "#fdf4ff",
    },
    {
      title: "CORE LAYER",
      y: 408,
      height: 128,
      stroke: "#93c5fd",
      fill: "#eff6ff",
    },
    {
      title: "DISTRIBUTION\nLAYER",
      y: 598,
      height: 142,
      stroke: "#bbf7d0",
      fill: "#f0fdf4",
    },
    {
      title: "ACCESS\nLAYER",
      y: 802,
      height: 262,
      stroke: "#fde68a",
      fill: "#fffbeb",
    },
    {
      title: "MANAGEMENT\n& SERVICES",
      y: 1094,
      height: 150,
      stroke: "#ddd6fe",
      fill: "#f5f3ff",
    },
  ];

  const renderExternalNode = ({
    x,
    title,
    subtitle,
    kind,
  }: {
    x: number;
    title: string;
    subtitle: string;
    kind: "internet" | "cloud" | "saas";
  }) => (
    <g>
      <rect fill="#ffffff" height="108" rx="10" stroke="#e5e7eb" width="174" x={x} y="34" />
      {kind === "internet" ? (
        <g>
          <circle cx={x + 87} cy="64" fill="none" r="20" stroke="#111827" strokeWidth="3" />
          <path d={`M${x + 67} 64h40M${x + 87} 44c10 12 10 28 0 40M${x + 87} 44c-10 12-10 28 0 40`} fill="none" stroke="#111827" strokeWidth="2" />
        </g>
      ) : (
        <path d={`M${x + 62} 72c6-18 34-20 43-4 18-2 32 10 33 27 17 4 22 30 3 39H${x + 54}c-24-8-20-43 8-43z`} fill="none" stroke="#111827" strokeWidth="3" />
      )}
      {kind === "saas" ? (
        <path d={`M${x + 93} 73v18M${x + 84} 82h18`} stroke="#111827" strokeLinecap="round" strokeWidth="3" />
      ) : null}
      <text fill="#111827" fontSize="13" fontWeight="800" textAnchor="middle" x={x + 87} y="110">
        {title}
      </text>
      <text fill="#111827" fontSize="12" fontWeight="700" textAnchor="middle" x={x + 87} y="129">
        {subtitle}
      </text>
    </g>
  );

  const renderFortiGate = ({
    x,
    y,
    label,
    role,
  }: {
    x: number;
    y: number;
    label: string;
    role: string;
  }) => (
    <g filter="url(#enterprise-soft-shadow)">
      <rect fill="#e5e7eb" height="58" rx="5" stroke="#cbd5e1" width="164" x={x} y={y} />
      <rect fill="#111827" height="25" rx="2" width="132" x={x + 16} y={y + 24} />
      <rect fill="#ef2929" height="9" rx="1" width="19" x={x + 22} y={y + 11} />
      <rect fill="#ef2929" height="9" rx="1" width="19" x={x + 46} y={y + 11} />
      <rect fill="#ef2929" height="9" rx="1" width="19" x={x + 70} y={y + 11} />
      <circle cx={x + 151} cy={y + 46} fill="#ef4444" r="4" />
      <text fill="#111827" fontSize="13" fontWeight="800" textAnchor="middle" x={x - 62} y={y + 22}>
        {label}
      </text>
      <text fill="#111827" fontSize="12" fontWeight="700" textAnchor="middle" x={x - 62} y={y + 42}>
        {role}
      </text>
    </g>
  );

  const renderSwitch = ({
    x,
    y,
    label,
    width = 176,
  }: {
    x: number;
    y: number;
    label: string;
    width?: number;
  }) => (
    <g filter="url(#enterprise-soft-shadow)">
      <rect fill="#111827" height="52" rx="6" width={width} x={x} y={y} />
      {Array.from({ length: Math.floor((width - 42) / 16) }).map((_, index) => (
        <rect
          fill="#020617"
          height="12"
          key={index}
          rx="1"
          stroke="#e5e7eb"
          strokeOpacity="0.45"
          width="12"
          x={x + 18 + index * 16}
          y={y + 16}
        />
      ))}
      <circle cx={x + width - 18} cy={y + 18} fill="#f97316" r="3" />
      <circle cx={x + width - 18} cy={y + 34} fill="#f97316" r="3" />
      <text fill="#111827" fontSize="13" fontWeight="800" textAnchor="middle" x={x + width / 2} y={y + 76}>
        {label}
      </text>
    </g>
  );

  const renderEndpointGroup = ({
    x,
    label,
    vlan,
    kind,
  }: {
    x: number;
    label: string;
    vlan: string;
    kind: "users" | "voice" | "servers" | "wireless";
  }) => (
    <g>
      <rect fill="#ffffff" fillOpacity="0.65" height="102" rx="10" stroke="#94a3b8" strokeDasharray="5 5" width="204" x={x} y="920" />
      {kind === "users" ? (
        [0, 1, 2, 3].map((item) => (
          <g key={item}>
            <rect fill="#bfdbfe" height="22" rx="2" stroke="#64748b" width="34" x={x + 22 + item * 42} y="948" />
            <path d={`M${x + 18 + item * 42} 978h42`} stroke="#64748b" strokeWidth="3" />
          </g>
        ))
      ) : null}
      {kind === "voice" ? (
        [0, 1, 2].map((item) => (
          <g key={item}>
            <rect fill="#1f2937" height="44" rx="5" width="30" x={x + 42 + item * 48} y="940" />
            <rect fill="#60a5fa" height="10" rx="1" width="18" x={x + 48 + item * 48} y="948" />
          </g>
        ))
      ) : null}
      {kind === "servers" ? (
        [0, 1, 2].map((item) => (
          <g key={item}>
            <rect fill="#1f2937" height="58" rx="5" width="38" x={x + 38 + item * 52} y="934" />
            <circle cx={x + 50 + item * 52} cy="950" fill="#60a5fa" r="3" />
            <path d={`M${x + 48 + item * 52} 964h18M${x + 48 + item * 52} 976h18`} stroke="#94a3b8" />
          </g>
        ))
      ) : null}
      {kind === "wireless" ? (
        [0, 1, 2].map((item) => (
          <g key={item}>
            <ellipse cx={x + 52 + item * 50} cy="962" fill="#e5e7eb" rx="22" ry="10" stroke="#94a3b8" />
            <circle cx={x + 52 + item * 50} cy="960" fill="#60a5fa" r="3" />
          </g>
        ))
      ) : null}
      <text fill="#1d4ed8" fontSize="12" fontWeight="900" textAnchor="middle" x={x + 102} y="1002">
        {label}
      </text>
      <text fill="#111827" fontSize="11" fontWeight="700" textAnchor="middle" x={x + 102} y="1018">
        {vlan}
      </text>
    </g>
  );

  const renderSidePanel = ({
    x,
    y,
    title,
    items,
    color,
  }: {
    x: number;
    y: number;
    title: string;
    items: string[];
    color: string;
  }) => (
    <g>
      <rect fill="#ffffff" height={36 + items.length * 22} rx="10" stroke="#e5e7eb" width="194" x={x} y={y} />
      <text fill={color} fontSize="13" fontWeight="900" x={x + 14} y={y + 27}>
        {title}
      </text>
      {items.map((item, index) => (
        <g key={item}>
          <circle cx={x + 19} cy={y + 52 + index * 22} fill={color} r="3" />
          <text fill="#111827" fontSize="12" x={x + 32} y={y + 56 + index * 22}>
            {item}
          </text>
        </g>
      ))}
    </g>
  );

  const renderServiceIcon = ({
    x,
    label,
    sub,
  }: {
    x: number;
    label: string;
    sub: string;
  }) => (
    <g>
      <rect fill="#ffffff" height="66" rx="8" stroke="#c4b5fd" width="90" x={x} y="1130" />
      <rect fill="#1f2937" height="35" rx="4" width="45" x={x + 23} y="1140" />
      <path d={`M${x + 33} 1158h25M${x + 33} 1166h18`} stroke="#93c5fd" strokeWidth="3" />
      <text fill="#111827" fontSize="11" fontWeight="800" textAnchor="middle" x={x + 45} y="1216">
        {label}
      </text>
      <text fill="#475569" fontSize="9" textAnchor="middle" x={x + 45} y="1230">
        {sub}
      </text>
    </g>
  );

  return (
    <figure className="overflow-hidden rounded-[28px] border border-white/10 bg-stone-50 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="overflow-x-auto">
        <svg
          aria-labelledby="enterprise-network-design-title"
          className="min-w-[1120px]"
          role="img"
          viewBox="0 0 1280 1370"
        >
          <title id="enterprise-network-design-title">
            Enterprise network architecture design with FortiGate HA, switching layers, access networks, and management services
          </title>
          <defs>
            <filter id="enterprise-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" floodColor="#0f172a" floodOpacity="0.18" stdDeviation="7" />
            </filter>
          </defs>

          <rect fill="#ffffff" height="1370" rx="24" width="1280" />

          {layers.map((layer) => (
            <g key={layer.title}>
              <rect
                fill={layer.fill}
                height={layer.height}
                rx="8"
                stroke={layer.stroke}
                width="965"
                x="16"
                y={layer.y}
              />
              {layer.title.split("\n").map((line, index) => (
                <text
                  fill="#1d4ed8"
                  fontSize="15"
                  fontWeight="900"
                  key={line}
                  x="30"
                  y={layer.y + 28 + index * 20}
                >
                  {line}
                </text>
              ))}
            </g>
          ))}

          {renderExternalNode({ kind: "internet", subtitle: "ISP A", title: "Internet", x: 150 })}
          {renderExternalNode({ kind: "internet", subtitle: "ISP B", title: "Internet", x: 350 })}
          {renderExternalNode({
            kind: "cloud",
            subtitle: "Microsoft 365 / AWS / Azure",
            title: "Cloud Services",
            x: 550,
          })}
          {renderExternalNode({
            kind: "saas",
            subtitle: "Business Applications",
            title: "SaaS / Business",
            x: 750,
          })}

          <g stroke="#111827" strokeWidth="2">
            <path d="M237 142v38h150v70" fill="none" />
            <path d="M437 142v38h-50v70" fill="none" />
            <path d="M637 142v38h20v70" fill="none" strokeDasharray="6 5" />
            <path d="M837 142v38h-180v70" fill="none" strokeDasharray="6 5" />
            <path d="M387 180h150v70M657 180h-120v70" fill="none" />
          </g>

          <text fill="#111827" fontSize="12" x="288" y="248">Public IPs</text>
          <text fill="#111827" fontSize="12" x="807" y="248">Public IPs</text>
          {renderFortiGate({ label: "FortiGate 1800F", role: "HA Primary", x: 330, y: 270 })}
          {renderFortiGate({ label: "FortiGate 1800F", role: "HA Secondary", x: 650, y: 270 })}
          <path d="M494 301h156" stroke="#ef4444" strokeWidth="3" />
          <ellipse cx="572" cy="301" fill="#ffffff" rx="34" ry="6" stroke="#ef4444" />
          <text fill="#ef4444" fontSize="13" fontWeight="900" textAnchor="middle" x="572" y="286">HA Link</text>

          <g stroke="#111827" strokeWidth="2">
            <path d="M390 328v110" />
            <path d="M720 328v110" />
            <path d="M390 328l330 120" />
            <path d="M720 328l-330 120" />
          </g>

          {renderSwitch({ label: "Core Switch 01 (L3, Stack/VSX)", x: 330, y: 446 })}
          {renderSwitch({ label: "Core Switch 02 (L3, Stack/VSX)", x: 660, y: 446 })}
          <path d="M506 474h154" stroke="#2563eb" strokeWidth="3" />
          <ellipse cx="584" cy="474" fill="#ffffff" rx="42" ry="8" stroke="#111827" />
          <text fill="#111827" fontSize="12" textAnchor="middle" x="584" y="496">MLAG / LACP</text>
          <text fill="#111827" fontSize="12" textAnchor="middle" x="584" y="514">10/25/40/100G</text>

          <g stroke="#111827" strokeWidth="2">
            <path d="M385 498l-180 148M385 498l0 148M385 498l270 148M385 498l490 148" />
            <path d="M715 498l-510 148M715 498l-330 148M715 498l-60 148M715 498l160 148" />
          </g>
          <g fill="#22c55e">
            {[205, 385, 655, 875].map((x) => (
              <circle cx={x} cy="646" key={x} r="4" />
            ))}
            <circle cx="385" cy="498" r="4" />
            <circle cx="715" cy="498" r="4" />
          </g>

          {renderSwitch({ label: "Distribution 01 (Stack)", width: 128, x: 150, y: 640 })}
          {renderSwitch({ label: "Distribution 02 (Stack)", width: 128, x: 330, y: 640 })}
          {renderSwitch({ label: "Distribution 03 (Stack)", width: 128, x: 645, y: 640 })}
          {renderSwitch({ label: "Distribution 04 (Stack)", width: 128, x: 825, y: 640 })}
          <path d="M278 667h52M773 667h52" stroke="#111827" strokeWidth="3" />
          <text fill="#111827" fontSize="12" textAnchor="middle" x="584" y="632">L3 Uplinks</text>
          <text fill="#111827" fontSize="12" textAnchor="middle" x="584" y="650">10/25/40/100G</text>

          <g stroke="#2563eb" strokeDasharray="6 5" strokeWidth="2">
            <path d="M210 716v92" />
            <path d="M390 716v92" />
            <path d="M710 716v92" />
            <path d="M890 716v92" />
            <path d="M210 778h680" />
          </g>

          {renderSwitch({ label: "", width: 150, x: 120, y: 856 })}
          {renderSwitch({ label: "", width: 150, x: 320, y: 856 })}
          {renderSwitch({ label: "", width: 150, x: 610, y: 856 })}
          {renderSwitch({ label: "", width: 150, x: 810, y: 856 })}
          <g stroke="#111827" strokeWidth="2">
            <path d="M210 692v164M390 692v164M710 692v164M890 692v164" />
            <path d="M210 908v38M390 908v38M710 908v38M890 908v38" />
          </g>
          <text fill="#111827" fontSize="12" textAnchor="middle" x="584" y="836">L2 / L3 Uplinks</text>
          <text fill="#111827" fontSize="12" textAnchor="middle" x="584" y="854">1/10/25G</text>

          {renderEndpointGroup({ kind: "users", label: "USERS", vlan: "VLAN 10", x: 72 })}
          {renderEndpointGroup({ kind: "voice", label: "VOICE", vlan: "VLAN 20", x: 300 })}
          {renderEndpointGroup({ kind: "servers", label: "SERVERS", vlan: "VLAN 30", x: 600 })}
          {renderEndpointGroup({ kind: "wireless", label: "WIRELESS", vlan: "VLAN 40", x: 828 })}

          <g stroke="#2563eb" strokeDasharray="6 5" strokeWidth="2">
            <path d="M174 1022v78M402 1022v78M702 1022v78M930 1022v78" />
            <path d="M174 1100h756" />
          </g>

          {renderServiceIcon({ label: "FortiManager", sub: "Centralized Management", x: 154 })}
          {renderServiceIcon({ label: "FortiAnalyzer", sub: "Logging & Reporting", x: 300 })}
          {renderServiceIcon({ label: "FortiNAC", sub: "Network Access Control", x: 446 })}
          {renderServiceIcon({ label: "RADIUS / AD / LDAP", sub: "Authentication", x: 592 })}
          {renderServiceIcon({ label: "Syslog / NTP / DNS", sub: "Infrastructure Services", x: 738 })}
          {renderServiceIcon({ label: "Backup / Monitoring", sub: "Availability & Alerts", x: 884 })}

          {renderSidePanel({
            color: "#1d4ed8",
            items: ["High Availability", "Redundancy", "Scalability", "Security Segmentation", "Performance", "Resilience"],
            title: "DESIGN PRINCIPLES",
            x: 1010,
            y: 80,
          })}
          {renderSidePanel({
            color: "#059669",
            items: ["WAN", "DMZ", "LAN", "Management"],
            title: "SECURITY ZONES",
            x: 1010,
            y: 310,
          })}
          {renderSidePanel({
            color: "#1d4ed8",
            items: ["High-speed Switching", "Inter-VLAN Routing", "Redundant Uplinks", "Fast Convergence"],
            title: "CORE FUNCTIONS",
            x: 1010,
            y: 505,
          })}
          {renderSidePanel({
            color: "#047857",
            items: ["Policy Enforcement", "Route Summarization", "Inter-VLAN Filtering", "High Availability"],
            title: "DISTRIBUTION FUNCTIONS",
            x: 1010,
            y: 690,
          })}
          {renderSidePanel({
            color: "#d97706",
            items: ["Endpoint Connectivity", "VLAN Assignment", "802.1X / NAC", "PoE for IP Phones / APs"],
            title: "ACCESS FUNCTIONS",
            x: 1010,
            y: 875,
          })}
          {renderSidePanel({
            color: "#6d28d9",
            items: ["Out-of-Band Management", "Monitoring & Logging", "Authentication Services", "Backup & Reporting"],
            title: "MANAGEMENT NETWORK",
            x: 1010,
            y: 1090,
          })}

          <g>
            <rect fill="#ffffff" height="84" rx="10" stroke="#e5e7eb" width="570" x="16" y="1270" />
            <text fill="#64748b" fontSize="12" fontWeight="900" x="32" y="1296">LINK LEGEND</text>
            <line stroke="#111827" strokeWidth="3" x1="34" x2="82" y1="1320" y2="1320" />
            <text fill="#111827" fontSize="10" x="92" y="1324">10/25/40/100G Fiber</text>
            <line stroke="#ef4444" strokeWidth="3" x1="230" x2="278" y1="1320" y2="1320" />
            <text fill="#111827" fontSize="10" x="288" y="1324">HA / Synchronization</text>
            <line stroke="#2563eb" strokeWidth="3" x1="430" x2="478" y1="1320" y2="1320" />
            <text fill="#111827" fontSize="10" x="488" y="1324">Access / Copper</text>
            <line stroke="#2563eb" strokeDasharray="6 5" strokeWidth="3" x1="34" x2="82" y1="1342" y2="1342" />
            <text fill="#111827" fontSize="10" x="92" y="1346">Management Network</text>
            <line stroke="#111827" strokeDasharray="6 5" strokeWidth="3" x1="230" x2="278" y1="1342" y2="1342" />
            <text fill="#111827" fontSize="10" x="288" y="1346">Internet / WAN</text>
          </g>

          <g>
            <rect fill="#ffffff" height="84" rx="10" stroke="#e5e7eb" width="604" x="606" y="1270" />
            <text fill="#64748b" fontSize="12" fontWeight="900" x="624" y="1296">KEY BENEFITS</text>
            {[
              ["Secure by Design", 650],
              ["High Availability", 795],
              ["Scalable Architecture", 950],
              ["Operational Efficiency", 1110],
            ].map(([label, x]) => (
              <g key={label}>
                <circle cx={x as number} cy="1324" fill="#f8fafc" r="18" stroke="#94a3b8" />
                <text fill="#111827" fontSize="10" fontWeight="800" textAnchor="middle" x={x as number} y="1350">
                  {label}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-stone-600">
        Layered enterprise network design concept with external networks,
        FortiGate HA edge security, redundant core and distribution switching,
        access VLANs, user/voice/server/wireless endpoints, management services,
        design principles, and link legends.
      </figcaption>
    </figure>
  );
}

function OtPurdueModelDiagram() {
  const levels = [
    {
      level: "4-5",
      name: "Enterprise",
      color: "#36d399",
      y: 118,
      detail: "Business systems / Internet access",
    },
    {
      level: "3.5",
      name: "Industrial DMZ",
      color: "#fbbf24",
      y: 222,
      detail: "Patch / AV / Jump host / Historian",
    },
    {
      level: "3",
      name: "Operations",
      color: "#f59e0b",
      y: 326,
      detail: "Operations systems / ICS DMZ",
    },
    {
      level: "2",
      name: "Supervisory Control",
      color: "#fb923c",
      y: 430,
      detail: "SCADA / HMI / View / Control",
    },
    {
      level: "1",
      name: "Basic Control",
      color: "#ef4444",
      y: 534,
      detail: "PLCs / RTUs / IEDs",
    },
    {
      level: "0",
      name: "Process",
      color: "#f97316",
      y: 638,
      detail: "Sensors / actuators / physical process",
    },
  ];

  return (
    <figure className="overflow-hidden rounded-[28px] border border-emerald-300/20 bg-[#020b12] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="overflow-x-auto">
        <svg
          aria-labelledby="ot-purdue-diagram-title"
          className="min-w-[980px]"
          role="img"
          viewBox="0 0 1280 760"
        >
          <title id="ot-purdue-diagram-title">
            Securing the Purdue model with FortiGate OT reference architecture
          </title>
          <defs>
            <linearGradient id="ot-bg" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#020617" />
              <stop offset="0.55" stopColor="#062033" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="ot-panel" x1="0" x2="1">
              <stop stopColor="#07111f" stopOpacity="0.95" />
              <stop offset="1" stopColor="#0b2436" stopOpacity="0.9" />
            </linearGradient>
            <filter id="ot-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" floodColor="#22d3ee" floodOpacity="0.35" stdDeviation="5" />
            </filter>
            <filter id="ot-card-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" floodColor="#000000" floodOpacity="0.35" stdDeviation="8" />
            </filter>
          </defs>

          <rect fill="url(#ot-bg)" height="760" rx="28" width="1280" />
          <g opacity="0.22">
            <path d="M742 114h18v362h-18zM790 80h22v396h-22zM846 132h24v344h-24zM910 98h20v378h-20zM982 122h28v354h-28zM1058 72h24v404h-24zM1130 116h30v360h-30z" fill="#38bdf8" />
            <path d="M700 476h500" stroke="#38bdf8" strokeOpacity="0.6" />
            <path d="M760 80c16-36 58-28 68 0M1058 72c10-24 44-18 50 4M1130 116c18-42 60-30 68-2" fill="none" stroke="#38bdf8" strokeOpacity="0.35" strokeWidth="3" />
          </g>
          <g opacity="0.2" stroke="#22d3ee">
            <path d="M44 520h126l35-35h124M44 570h214l52 46h170M44 650h320l40-42h96" />
            <circle cx="44" cy="520" r="4" fill="#22d3ee" />
            <circle cx="44" cy="570" r="4" fill="#22d3ee" />
            <circle cx="44" cy="650" r="4" fill="#22d3ee" />
          </g>

          <g>
            <rect fill="#ef2929" height="26" rx="5" width="26" x="44" y="44" />
            <rect fill="#ef2929" height="26" rx="5" width="26" x="77" y="44" />
            <rect fill="#ef2929" height="26" rx="5" width="26" x="110" y="44" />
            <rect fill="#ef2929" height="26" rx="5" width="26" x="44" y="78" />
            <rect fill="#ef2929" height="26" rx="5" width="26" x="77" y="78" />
            <rect fill="#ef2929" height="26" rx="5" width="26" x="110" y="78" />
          </g>

          <text fill="#f8fafc" fontSize="56" fontWeight="900" letterSpacing="2" x="44" y="184">
            SECURING THE
          </text>
          <text fill="#34d399" fontSize="58" fontWeight="900" letterSpacing="2" x="44" y="252">
            PURDUE MODEL
          </text>
          <text fill="#f8fafc" fontSize="28" fontWeight="800" x="46" y="312">
            A FortiGate OT reference architecture
          </text>
          <line stroke="#34d399" strokeOpacity="0.65" strokeWidth="2" x1="46" x2="438" y1="342" y2="342" />

          {[
            ["DEFEND EVERY LEVEL", "of the OT environment"],
            ["SEGMENT & CONTROL", "with FortiGate policy"],
            ["VISIBILITY & THREAT DETECTION", "from IT to process"],
            ["BUILT FOR AVAILABILITY", "and industrial resilience"],
          ].map(([title, body], index) => (
            <g key={title}>
              <rect fill="#041521" height="55" rx="10" stroke="#34d399" strokeOpacity="0.55" width="55" x="46" y={378 + index * 72} />
              <circle cx="73.5" cy={405 + index * 72} fill="none" r="16" stroke="#34d399" strokeWidth="3" />
              <path d={`M65 ${405 + index * 72}l7 7 13-17`} fill="none" stroke="#34d399" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <text fill="#f8fafc" fontSize="18" fontWeight="850" x="120" y={398 + index * 72}>
                {title}
              </text>
              <text fill="#cbd5e1" fontSize="16" x="120" y={423 + index * 72}>
                {body}
              </text>
            </g>
          ))}

          {levels.map((row) => (
            <g key={row.level} filter="url(#ot-card-shadow)">
              <rect fill="url(#ot-panel)" height="82" rx="8" stroke={row.color} strokeOpacity="0.55" width="242" x="494" y={row.y} />
              <rect fill={row.color} height="82" rx="6" width="8" x="494" y={row.y} />
              <text fill={row.color} fontSize="13" fontWeight="800" x="520" y={row.y + 28}>
                LEVEL
              </text>
              <text fill={row.color} fontSize="22" fontWeight="900" x="570" y={row.y + 30}>
                {row.level}
              </text>
              <text fill="#f8fafc" fontSize="18" fontWeight="900" x="520" y={row.y + 54}>
                {row.name}
              </text>
              <text fill="#cbd5e1" fontSize="12" x="520" y={row.y + 72}>
                {row.detail}
              </text>
            </g>
          ))}

          <g stroke="#22d3ee" strokeOpacity="0.55" strokeWidth="2">
            <line x1="736" x2="842" y1="159" y2="159" />
            <line x1="736" x2="842" y1="263" y2="263" />
            <line x1="736" x2="842" y1="367" y2="367" />
            <line x1="736" x2="842" y1="471" y2="471" />
            <line x1="736" x2="842" y1="575" y2="575" />
          </g>

          {[
            [842, 133, "FORTIGATE", "PERIMETER", "NGFW / IPS / SSL inspection"],
            [842, 237, "FORTIGATE", "INTERNAL SEGMENTATION", "VLAN / Zone / Access control"],
            [842, 341, "FORTIGATE", "ICS DMZ", "Remote access / Jump host"],
            [842, 445, "FORTIGATE", "OT SEGMENT PROTECTION", "App control / IPS for OT"],
            [870, 554, "INDUSTRIAL", "SWITCH", "Ruggedized plant network"],
          ].map(([x, y, top, name, desc]) => (
            <g key={`${top}-${name}`} filter="url(#ot-card-shadow)">
              <rect fill="#e5e7eb" height="48" rx="4" stroke="#f8fafc" width="150" x={x as number} y={y as number} />
              <rect fill="#111827" height="23" rx="2" width="112" x={(x as number) + 10} y={(y as number) + 17} />
              <rect fill="#ef2929" height="6" rx="1" width="16" x={(x as number) + 56} y={(y as number) + 7} />
              <rect fill="#ef2929" height="6" rx="1" width="16" x={(x as number) + 76} y={(y as number) + 7} />
              <circle cx={(x as number) + 132} cy={(y as number) + 28} fill="#22c55e" r="4" />
              <text fill="#f8fafc" fontSize="14" fontWeight="900" x={(x as number) + 166} y={(y as number) + 16}>
                {top}
              </text>
              <text fill="#f8fafc" fontSize="13" fontWeight="850" x={(x as number) + 166} y={(y as number) + 36}>
                {name}
              </text>
              <text fill="#cbd5e1" fontSize="11" x={(x as number) + 166} y={(y as number) + 57}>
                {desc}
              </text>
            </g>
          ))}

          <g stroke="#34d399" strokeDasharray="4 5" strokeWidth="2">
            <line x1="992" x2="1120" y1="159" y2="159" />
            <line x1="992" x2="1120" y1="263" y2="263" />
            <line x1="992" x2="1120" y1="367" y2="367" />
            <line x1="992" x2="1120" y1="471" y2="471" />
            <line x1="1020" x2="1120" y1="575" y2="575" />
          </g>

          <g filter="url(#ot-card-shadow)">
            <rect fill="#062033" height="455" rx="12" stroke="#34d399" strokeOpacity="0.55" width="130" x="1110" y="170" />
            {[
              ["FORTICENTER", "Centralized management"],
              ["FORTIANALYZER", "Logging & analytics"],
              ["FORTISIEM", "Event correlation"],
              ["SECURITY FABRIC", "Threat intelligence"],
            ].map(([title, body], index) => (
              <g key={title}>
                <rect fill="#07111f" height="88" rx="8" stroke="#34d399" strokeOpacity="0.35" width="110" x="1120" y={184 + index * 106} />
                <circle cx="1175" cy={211 + index * 106} fill="none" r="15" stroke="#34d399" strokeWidth="2" />
                <text fill="#34d399" fontSize="11" fontWeight="900" textAnchor="middle" x="1175" y={246 + index * 106}>
                  {title}
                </text>
                <text fill="#cbd5e1" fontSize="10" textAnchor="middle" x="1175" y={263 + index * 106}>
                  {body}
                </text>
              </g>
            ))}
          </g>

          <g>
            <path d="M860 623h260" stroke="#ef4444" strokeWidth="3" />
            <path d="M900 623v38M970 623v38M1040 623v38" stroke="#ef4444" strokeWidth="3" />
            {[
              [874, 670, "PLC"],
              [944, 670, "HMI"],
              [1014, 670, "I/O"],
              [1084, 670, "ROBOT"],
            ].map(([x, y, label]) => (
              <g key={label as string}>
                <rect fill="#07111f" height="50" rx="8" stroke="#94a3b8" strokeOpacity="0.65" width="56" x={x as number} y={y as number} />
                <text fill="#e2e8f0" fontSize="11" fontWeight="800" textAnchor="middle" x={(x as number) + 28} y={(y as number) + 31}>
                  {label}
                </text>
              </g>
            ))}
          </g>

          <g filter="url(#ot-glow)">
            <path d="M900 112c9-29 57-31 70-5 24-2 43 15 44 37 27 3 37 38 16 56H890c-31-13-24-58 10-59z" fill="#041521" stroke="#a7f3d0" strokeWidth="2" />
            <text fill="#f8fafc" fontSize="15" fontWeight="850" textAnchor="middle" x="961" y="160">
              INTERNET
            </text>
            <path d="M961 202v34" stroke="#22d3ee" strokeWidth="3" />
          </g>

          <rect fill="#020617" height="78" opacity="0.7" width="1280" y="682" />
          <path d="M92 690l52 24 52-24v45l-52 20-52-20z" fill="#052e2b" stroke="#6ee7b7" strokeWidth="2" />
          <rect fill="#ef2929" height="14" rx="2" width="14" x="126" y="717" />
          <rect fill="#ef2929" height="14" rx="2" width="14" x="146" y="717" />
          <rect fill="#ef2929" height="14" rx="2" width="14" x="166" y="717" />
          <text fill="#f8fafc" fontSize="24" fontWeight="900" x="220" y="724">
            STRONGER TOGETHER.
          </text>
          <text fill="#34d399" fontSize="19" fontWeight="850" x="220" y="750">
            SECURE EVERY LEVEL. PROTECT WHAT MATTERS.
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-stone-300">
        Dark FortiGate OT reference architecture concept for securing Purdue
        model levels with perimeter controls, internal segmentation, ICS DMZ
        services, OT segment protection, industrial switching, centralized
        management, analytics, SIEM, and security-fabric visibility.
      </figcaption>
    </figure>
  );
}

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | EnterpriseConfig`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.13),_transparent_30%),radial-gradient(circle_at_88%_10%,_rgba(16,185,129,0.1),_transparent_28%),linear-gradient(135deg,_#11100c_0%,_#171510_48%,_#050505_100%)] text-stone-50">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.25em] text-stone-100"
        >
          EnterpriseConfig
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-stone-300 md:flex">
          <Link href="/#services" className="transition hover:text-amber-300">
            Services
          </Link>
          <Link href="/#projects" className="transition hover:text-amber-300">
            Projects
          </Link>
          <Link href="/#about" className="transition hover:text-amber-300">
            About
          </Link>
          <Link href="/#contact" className="transition hover:text-amber-300">
            Contact
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-400/20"
        >
          Schedule a Consultation
        </Link>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-24 lg:px-8">
        <section className="grid gap-10 rounded-[32px] border border-stone-200/10 bg-zinc-950/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div>
            <Link
              href="/#services"
              className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
            >
              Back to services
            </Link>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              {service.description}
            </p>
          </div>

          <div className="grid content-start gap-3">
            {service.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-stone-100/5 p-5"
              >
                <p className="text-sm leading-7 text-stone-200">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {service.design ? (
          <section className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                {service.design.title}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Full HA enterprise network layout.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                {service.design.description}
              </p>
            </div>

            {service.slug === "enterprise-networking" ? (
              <EnterpriseNetworkArchitectureDiagram />
            ) : null}

            <div className="grid gap-4 lg:grid-cols-3">
              {service.design.zones.map((zone, index) => (
                <div
                  key={zone.label}
                  className="relative rounded-[24px] border border-white/10 bg-stone-100/5 p-5"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-zinc-950">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {zone.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {zone.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-200">
                Traffic flow
              </p>
              <div className="mt-5 grid gap-3 text-sm font-medium text-stone-100 md:grid-cols-6">
                {[
                  "Users",
                  "Cisco Access",
                  "Cisco Core",
                  "Fortinet HA",
                  "VPN / Cloud",
                  "Apps + DC",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-full border border-white/10 bg-zinc-950/55 px-4 py-3 text-center"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.slug === "ot-ics-security" ? (
          <section className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Fortinet Purdue model concept
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                IT/OT segmentation from enterprise to field devices.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                A practical Purdue model view for separating enterprise IT,
                industrial DMZ services, site operations, supervisory control,
                basic control, and process networks.
              </p>
            </div>
            <OtPurdueModelDiagram />
          </section>
        ) : null}

        {service.samples ? (
          <section className="grid gap-8 rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Sample network designs
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Practical patterns for real environments.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                These examples show how the same principles can be shaped for a
                single office, branch network, hybrid cloud, or remote access
                requirement.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {service.samples.map((sample) => (
                <article
                  key={sample.title}
                  className="rounded-[28px] border border-white/10 bg-stone-100/5 p-6"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {sample.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {sample.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
                    {sample.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {service.portfolio ? (
          <section className="grid gap-8 rounded-[32px] border border-amber-200/15 bg-zinc-950/60 p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                Web development portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Selected website work.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                Examples of customer-facing sites built around clear branding,
                responsive presentation, and simple conversion paths.
              </p>
            </div>

            <div className="grid gap-5">
              {service.portfolio.map((project) => (
                <article
                  key={project.title}
                  className="grid gap-6 rounded-[28px] border border-white/10 bg-stone-100/5 p-6 lg:grid-cols-[1fr_auto] lg:items-center"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-400">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-sm text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-amber-300/30 bg-amber-400/10 px-5 py-3 text-center text-sm font-semibold text-amber-100 transition hover:bg-amber-400 hover:text-zinc-950"
                  >
                    Visit Website
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-2">
          {service.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border border-white/10 bg-zinc-950/60 p-6 lg:p-8"
            >
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                {section.body}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-stone-300">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-[32px] border border-white/10 bg-zinc-950/60 p-8 lg:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Technology stack
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-stone-100/5 px-4 py-2 text-sm font-medium text-stone-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-amber-200/15 bg-gradient-to-br from-amber-400/15 to-emerald-500/10 p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-200">
                Next step
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Discuss a design for your environment.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
                Share your current topology, pain points, cloud plans, and
                security goals. EnterpriseConfig can turn that into a practical
                design and implementation path.
              </p>
            </div>
            <Link
              href="/#contact"
              className="rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Contact EnterpriseConfig
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
