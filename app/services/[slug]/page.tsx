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
      name: "ENTERPRISE",
      color: "#2563eb",
      y: 190,
      left: ["Business systems", "Internet access"],
      rightTitle: "PERIMETER",
      right: ["IPS / SSL Inspection", "Web Filtering", "DLP / Anti-Malware"],
    },
    {
      level: "3.5",
      name: "Industrial DMZ",
      color: "#16a34a",
      y: 330,
      left: ["Patch / AV / Jump host", "Historian / Data Broker"],
      rightTitle: "INDUSTRIAL DMZ",
      right: ["Secure Proxy", "Jump Server", "Historian", "Data Diode (Optional)"],
    },
    {
      level: "3",
      name: "Operations",
      color: "#f59e0b",
      y: 470,
      left: ["Operations systems", "ICS DMZ"],
      rightTitle: "ICS DMZ",
      right: ["Remote Access VPN", "Application Proxy", "Data Collection"],
    },
    {
      level: "2",
      name: "Supervisory Control",
      color: "#f97316",
      y: 610,
      left: ["SCADA / HMI / View / Control"],
      rightTitle: "OT SEGMENT PROTECTION",
      right: ["Application Control", "IPS for OT Protocols", "Allowlist / Denylist"],
    },
    {
      level: "1",
      name: "Basic Control",
      color: "#ef4444",
      y: 750,
      left: ["PLCs / RTUs / IEDs"],
      rightTitle: "INDUSTRIAL SWITCHING",
      right: ["Ruggedized Switching", "VLAN / QoS / ACL", "Redundant Topology"],
    },
    {
      level: "0",
      name: "Process",
      color: "#64748b",
      y: 890,
      left: ["Sensors / Actuators", "Physical Process"],
      rightTitle: "",
      right: [],
    },
  ];

  const renderFortinetMark = (x: number, y: number, scale = 1) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {[0, 1, 2].map((col) => (
        <rect fill="#ef2929" height="12" key={`top-${col}`} rx="2" width="20" x={col * 25} y="0" />
      ))}
      {[0, 1, 2].map((col) => (
        <rect fill="#ef2929" height="12" key={`bottom-${col}`} rx="2" width="20" x={col * 25} y="18" />
      ))}
    </g>
  );

  const renderDevice = (x: number, y: number, width = 154) => (
    <g filter="url(#ot-white-shadow)">
      <rect fill="#e5e7eb" height="54" rx="5" stroke="#cbd5e1" width={width} x={x} y={y} />
      <rect fill="#111827" height="24" rx="2" width={width - 42} x={x + 22} y={y + 22} />
      {renderFortinetMark(x + 30, y + 11, 0.48)}
      <circle cx={x + width - 19} cy={y + 36} fill="#22c55e" r="5" />
    </g>
  );

  const renderSimpleIcon = (x: number, y: number, label: string) => (
    <g>
      <rect fill="#ffffff" height="58" rx="6" stroke="#cbd5e1" width="72" x={x} y={y} />
      <rect fill="#111827" height="34" rx="4" width="34" x={x + 19} y={y + 10} />
      <path d={`M${x + 27} ${y + 26}h18M${x + 27} ${y + 34}h12`} stroke="#60a5fa" strokeWidth="3" />
      <text fill="#111827" fontSize="10" fontWeight="800" textAnchor="middle" x={x + 36} y={y + 82}>
        {label}
      </text>
    </g>
  );

  const renderSidePanel = (
    x: number,
    y: number,
    title: string[],
    items: [string, string][],
    height: number,
    itemStep = 70,
  ) => (
    <g>
      <rect fill="#ffffff" height={height} rx="10" stroke="#cbd5e1" width="210" x={x} y={y} />
      {title.map((line, index) => (
        <text fill="#1e3a8a" fontSize="13" fontWeight="900" key={line} x={x + 18} y={y + 28 + index * 18}>
          {line}
        </text>
      ))}
      {items.map(([name, desc], index) => (
        <g key={name}>
          <rect fill="#ffffff" height="52" rx="6" stroke="#cbd5e1" width="52" x={x + 18} y={y + 58 + index * itemStep} />
          <circle cx={x + 44} cy={y + 84 + index * itemStep} fill="none" r="15" stroke="#047857" strokeWidth="2" />
          <text fill="#111827" fontSize="12" fontWeight="800" x={x + 84} y={y + 77 + index * itemStep}>
            {name}
          </text>
          <text fill="#111827" fontSize="10" x={x + 84} y={y + 94 + index * itemStep}>
            {desc}
          </text>
        </g>
      ))}
    </g>
  );

  return (
    <figure className="overflow-hidden rounded-[28px] border border-white/10 bg-stone-50 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="overflow-hidden rounded-2xl bg-white">
        <svg
          aria-labelledby="ot-purdue-diagram-title"
          className="h-auto w-full"
          role="img"
          viewBox="0 0 1720 1180"
        >
          <title id="ot-purdue-diagram-title">
            Fortinet OT Purdue model reference architecture
          </title>
          <defs>
            <filter id="ot-white-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" floodColor="#0f172a" floodOpacity="0.18" stdDeviation="7" />
            </filter>
          </defs>

          <rect fill="#ffffff" height="1180" rx="18" width="1720" />

          {renderFortinetMark(34, 28, 0.56)}
          <text fill="#111827" fontSize="32" fontWeight="900" x="96" y="52">FORTINET</text>
          <text fill="#0f172a" fontSize="33" fontWeight="900" x="32" y="112">SECURING THE</text>
          <text fill="#047857" fontSize="42" fontWeight="900" x="32" y="160">PURDUE MODEL</text>
          <text fill="#475569" fontSize="18" x="32" y="194">A FortiGate OT Reference Architecture</text>

          <g>
            {[
              ["DEFEND EVERY LEVEL", "Comprehensive protection", "across IT and OT environments"],
              ["SEGMENT & CONTROL", "Enforce secure segmentation", "and access policies"],
              ["VISIBILITY & THREAT DETECTION", "End-to-end visibility from IT", "to industrial assets"],
              ["BUILT FOR AVAILABILITY", "High availability, redundancy", "and industrial resilience"],
            ].map(([title, lineOne, lineTwo], index) => (
              <g key={title}>
                <rect fill="#ffffff" height="60" rx="8" stroke="#cbd5e1" width="64" x="32" y={238 + index * 95} />
                <circle cx="64" cy={268 + index * 95} fill="none" r="18" stroke="#047857" strokeWidth="3" />
                <path d={`M54 ${268 + index * 95}l8 8 15-21`} fill="none" stroke="#047857" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <text fill="#111827" fontSize="14" fontWeight="900" x="110" y={257 + index * 95}>{title}</text>
                <text fill="#111827" fontSize="12" x="110" y={281 + index * 95}>{lineOne}</text>
                <text fill="#111827" fontSize="12" x="110" y={299 + index * 95}>{lineTwo}</text>
              </g>
            ))}
          </g>

          <g>
            {[
              [390, "INTERNET", "ISP A", "internet"],
              [620, "INTERNET", "ISP B", "internet"],
              [850, "CLOUD SERVICES", "M365 / AWS / Azure", "cloud"],
              [1090, "BUSINESS APPS", "SaaS / CRM / ERP", "apps"],
            ].map(([x, title, subtitle, kind], index) => (
              <g key={`${title}-${index}`}>
                <rect fill="#ffffff" height="96" rx="10" stroke="#cbd5e1" width="208" x={x as number} y="28" />
                {kind === "internet" ? (
                  <g>
                    <circle cx={(x as number) + 46} cy="62" fill="none" r="18" stroke="#111827" strokeWidth="3" />
                    <path d={`M${(x as number) + 28} 62h36M${(x as number) + 46} 44c9 11 9 25 0 36M${(x as number) + 46} 44c-9 11-9 25 0 36`} fill="none" stroke="#111827" strokeWidth="2" />
                  </g>
                ) : null}
                {kind === "cloud" ? (
                  <path d={`M${(x as number) + 26} 72c4-12 22-13 29-3 11-1 20 7 21 18 12 3 14 21 0 25H${(x as number) + 22}c-17-6-13-29 4-29z`} fill="none" stroke="#111827" strokeWidth="3" transform="translate(0 -24)" />
                ) : null}
                {kind === "apps" ? (
                  <g stroke="#111827" strokeWidth="3">
                    <path d={`M${(x as number) + 28} 80V48h42v32`} fill="none" />
                    <path d={`M${(x as number) + 38} 80V60h22v20`} fill="none" />
                    <path d={`M${(x as number) + 42} 56h4M${(x as number) + 54} 56h4M${(x as number) + 42} 66h4M${(x as number) + 54} 66h4`} />
                  </g>
                ) : null}
                <text fill="#111827" fontSize="12" fontWeight="900" x={(x as number) + 92} y="64">{title}</text>
                <text fill="#111827" fontSize="11" x={(x as number) + 92} y="87">{subtitle}</text>
              </g>
            ))}
          </g>

          <g>
            {levels.map((level) => (
              <g key={level.level}>
                <rect fill={level.level === "0" ? "#f8fafc" : "#ffffff"} height="120" rx="10" stroke={level.color} strokeOpacity="0.42" width="1000" x="360" y={level.y} />
                <rect fill={level.color} fillOpacity="0.1" height="120" rx="10" width="240" x="360" y={level.y} />
                <text fill={level.color} fontSize="16" fontWeight="900" x="382" y={level.y + 30}>LEVEL {level.level}</text>
                <text fill={level.color} fontSize="15" fontWeight="900" x="382" y={level.y + 54}>{level.name}</text>
                {level.left.map((line, index) => (
                  <text fill="#111827" fontSize="12" key={line} x="382" y={level.y + 82 + index * 18}>{line}</text>
                ))}
                {level.rightTitle ? (
                  <text fill={level.color} fontSize="12" fontWeight="900" x="1224" y={level.y + 34}>{level.rightTitle}</text>
                ) : null}
                {level.right.map((line, index) => (
                  <text fill="#111827" fontSize="10.5" key={line} x="1226" y={level.y + 58 + index * 17}>• {line}</text>
                ))}
              </g>
            ))}
          </g>

          <g stroke="#0057d9" strokeWidth="3">
            <path d="M494 124v66h238v38" fill="none" />
            <path d="M724 124v66h8v38" fill="none" />
            <path d="M954 124v66h240v38" fill="none" />
            <path d="M1194 124v66h0v38" fill="none" />
          </g>

          {renderDevice(650, 220, 166)}
          {renderDevice(1050, 220, 166)}
          <text fill="#111827" fontSize="11" fontWeight="900" textAnchor="middle" x="733" y="206">FortiGate 1800F</text>
          <text fill="#111827" fontSize="11" fontWeight="900" textAnchor="middle" x="733" y="292">(HA Primary)</text>
          <text fill="#111827" fontSize="11" fontWeight="900" textAnchor="middle" x="1133" y="206">FortiGate 1800F</text>
          <text fill="#111827" fontSize="11" fontWeight="900" textAnchor="middle" x="1133" y="292">(HA Secondary)</text>
          <text fill="#ef4444" fontSize="11" fontWeight="900" textAnchor="middle" x="933" y="236">HA HEARTBEAT</text>
          <path d="M816 246h234" stroke="#ef4444" strokeDasharray="7 6" strokeWidth="2" />

          {renderDevice(650, 360, 166)}
          {renderDevice(1050, 360, 166)}
          {renderDevice(650, 500, 166)}
          {renderDevice(1050, 500, 166)}
          {renderDevice(650, 640, 166)}
          {renderDevice(1050, 640, 166)}
          {renderDevice(660, 784, 144)}
          {renderDevice(1060, 784, 144)}

          <g stroke="#047857" strokeWidth="2">
            <path d="M733 274v86" />
            <path d="M1133 274v86" />
            <path d="M733 274l400 86" />
            <path d="M1133 274l-400 86" />
            <path d="M816 386h234" strokeDasharray="7 6" />
          </g>
          <g stroke="#f59e0b" strokeWidth="2">
            <path d="M733 414v86" />
            <path d="M1133 414v86" />
            <path d="M733 414l400 86" />
            <path d="M1133 414l-400 86" />
            <path d="M816 526h234" strokeDasharray="7 6" />
          </g>
          <g stroke="#f97316" strokeWidth="2">
            <path d="M733 554v86" />
            <path d="M1133 554v86" />
            <path d="M733 554l400 86" />
            <path d="M1133 554l-400 86" />
            <path d="M816 666h234" strokeDasharray="7 6" />
          </g>
          <g stroke="#ef4444" strokeWidth="2">
            <path d="M733 694v90" />
            <path d="M1133 694v90" />
            <path d="M804 812h256" />
            <path d="M733 838v52M1133 838v52" />
          </g>

          {[
            [590, 944, "PLC"],
            [740, 944, "HMI"],
            [900, 944, "I/O"],
            [1060, 944, "ROBOT / ACTUATOR"],
          ].map(([x, y, label]) => (
            <g key={label as string}>
              {renderSimpleIcon(x as number, y as number, label as string)}
            </g>
          ))}

          <path d="M1360 246h50v590h-50" fill="none" stroke="#6d28d9" strokeDasharray="8 7" strokeWidth="2" />
          <path d="M1360 386h50M1360 526h50M1360 666h50M1360 812h50" stroke="#6d28d9" strokeDasharray="8 7" strokeWidth="2" />

          {renderSidePanel(1430, 150, ["CENTRALIZED MANAGEMENT", "& ANALYTICS"], [
            ["FortiManager", "Centralized Management"],
            ["FortiAnalyzer", "Logging & Analytics"],
            ["FortiSIEM", "Event Correlation"],
            ["FortiDeceptor", "Threat Detection"],
            ["FortiNAC", "Network Access Control"],
            ["Security Fabric", "Integrated Protection"],
          ], 560, 78)}

          {renderSidePanel(1430, 720, ["MANAGEMENT NETWORK"], [
            ["Out-of-Band Mgmt", "Dedicated admin path"],
            ["Monitoring", "Availability alerts"],
            ["RADIUS / AD", "Authentication"],
            ["Syslog / NTP / DNS", "Shared services"],
            ["Backup Reporting", "Recovery records"],
          ], 300, 46)}

          <g>
            <rect fill="#ffffff" height="166" rx="10" stroke="#cbd5e1" width="216" x="30" y="652" />
            <text fill="#111827" fontSize="14" fontWeight="900" x="48" y="676">TRAFFIC FLOWS</text>
            {[
              ["#0057d9", "Internet / Cloud Access"],
              ["#047857", "IT / Enterprise Traffic"],
              ["#f59e0b", "OT / ICS Traffic"],
              ["#6d28d9", "Management / Monitoring"],
              ["#ef4444", "HA / Heartbeat"],
            ].map(([color, label], index) => (
              <g key={label}>
                <line stroke={color} strokeDasharray={index === 3 ? "7 6" : undefined} strokeWidth="2" x1="48" x2="86" y1={704 + index * 24} y2={704 + index * 24} />
                <text fill="#111827" fontSize="11" x="104" y={708 + index * 24}>{label}</text>
              </g>
            ))}
          </g>

          <g>
            <rect fill="#ffffff" height="122" rx="10" stroke="#cbd5e1" width="1664" x="28" y="1030" />
            <text fill="#1e3a8a" fontSize="15" fontWeight="900" x="52" y="1058">KEY BENEFITS</text>
            {[
              ["SECURE BY DESIGN", "Defense-in-depth across IT and OT"],
              ["HIGH AVAILABILITY", "Redundant firewalls and links"],
              ["VISIBILITY", "Clear view across the OT stack"],
              ["COMPLIANCE READY", "Supports IEC 62443 and ISO 27001"],
              ["SCALABLE ARCHITECTURE", "Growth-ready segmented design"],
              ["OPERATIONAL EFFICIENCY", "Centralized policy and reporting"],
            ].map(([title, body], index) => (
              <g key={title}>
                <circle cx={78 + index * 268} cy="1102" fill="#f8fafc" r="26" stroke="#94a3b8" />
                <text fill="#111827" fontSize="11" fontWeight="900" x={116 + index * 268} y="1094">{title}</text>
                <text fill="#111827" fontSize="10" x={116 + index * 268} y="1114">{body}</text>
                {index < 5 ? <line stroke="#cbd5e1" x1={278 + index * 268} x2={278 + index * 268} y1="1076" y2="1128" /> : null}
              </g>
            ))}
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-stone-600">
        Fortinet-style OT Purdue reference architecture with enterprise access,
        industrial DMZ, operations, supervisory control, basic control, process
        assets, centralized management, traffic-flow legend, and key benefits.
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
