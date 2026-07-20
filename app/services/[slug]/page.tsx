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
  return (
    <figure className="overflow-hidden rounded-[28px] border border-sky-300/20 bg-[#111827] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="overflow-x-auto">
        <svg
          aria-labelledby="enterprise-network-rack-title"
          className="min-w-[820px]"
          role="img"
          viewBox="0 0 980 1180"
        >
          <title id="enterprise-network-rack-title">
            Enterprise network architecture rack design with HA firewalls and switching layers
          </title>
          <defs>
            <linearGradient id="rack-bg" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#111827" />
              <stop offset="0.5" stopColor="#374151" />
              <stop offset="1" stopColor="#1f2937" />
            </linearGradient>
            <linearGradient id="blue-glow" x1="0" x2="1">
              <stop stopColor="#38bdf8" stopOpacity="0.15" />
              <stop offset="0.5" stopColor="#0ea5e9" stopOpacity="0.95" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.15" />
            </linearGradient>
            <filter id="rack-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="16" floodColor="#000000" floodOpacity="0.38" stdDeviation="12" />
            </filter>
            <filter id="rack-blue-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" floodColor="#38bdf8" floodOpacity="0.65" stdDeviation="6" />
            </filter>
          </defs>

          <rect fill="url(#rack-bg)" height="1180" rx="28" width="980" />
          <g opacity="0.16" stroke="#93c5fd">
            <path d="M80 118h820M80 242h820M80 366h820M80 490h820M80 614h820M80 738h820M80 862h820" />
            <path d="M160 100v820M820 100v820M240 100v820M740 100v820" />
          </g>

          <text fill="#f8fafc" fontSize="48" fontWeight="900" textAnchor="middle" x="490" y="78">
            Enterprise Network Architecture Design
          </text>
          <text fill="#cbd5e1" fontSize="18" fontWeight="700" textAnchor="middle" x="490" y="112">
            FortiGate HA edge, Cisco core, distribution, access, VPN, cloud and endpoint services
          </text>

          <g filter="url(#rack-shadow)">
            <path d="M126 210c20-50 92-54 122-10 48-6 88 28 90 76 43 10 50 72 6 96H110c-58-20-50-112 16-116z" fill="#e5e7eb" opacity="0.92" />
            <text fill="#1d4ed8" fontSize="29" fontWeight="900" textAnchor="middle" x="216" y="287">
              ISP A
            </text>
            <text fill="#64748b" fontSize="14" fontWeight="700" textAnchor="middle" x="216" y="316">
              Primary WAN
            </text>
            <path d="M216 372v62" stroke="#fbbf24" strokeWidth="8" />
            <path d="M236 372v62" stroke="#38bdf8" strokeWidth="8" />
            <path d="M196 372v62" stroke="#ef4444" strokeWidth="8" />
          </g>

          <g filter="url(#rack-shadow)">
            <path d="M646 210c22-52 96-54 124-9 46-3 84 30 86 76 44 11 50 73 7 95H630c-60-21-50-112 16-116z" fill="#e5e7eb" opacity="0.92" />
            <rect fill="#f97316" height="58" rx="4" width="66" x="692" y="253" />
            <text fill="#111827" fontSize="22" fontWeight="900" x="770" y="276">Cloud</text>
            <text fill="#111827" fontSize="17" fontWeight="800" x="770" y="302">Business Services</text>
            <path d="M724 372v62" stroke="#f97316" strokeWidth="8" />
            <path d="M744 372v62" stroke="#38bdf8" strokeWidth="8" />
            <path d="M704 372v62" stroke="#fbbf24" strokeWidth="8" />
          </g>

          <g filter="url(#rack-shadow)">
            <rect fill="#7f1d1d" height="74" rx="10" width="396" x="82" y="430" />
            <rect fill="#f4f4f5" height="66" rx="4" width="340" x="108" y="392" />
            <rect fill="#ef2929" height="14" rx="2" width="26" x="124" y="412" />
            <rect fill="#ef2929" height="14" rx="2" width="26" x="156" y="412" />
            <rect fill="#111827" height="28" rx="2" width="184" x="205" y="411" />
            {Array.from({ length: 10 }).map((_, index) => (
              <rect key={index} fill="#020617" height="14" rx="1" width="14" x={214 + index * 16} y="418" />
            ))}
            <text fill="#f8fafc" fontSize="34" fontWeight="900" textAnchor="middle" x="280" y="486">Firewall</text>
          </g>

          <g filter="url(#rack-shadow)">
            <rect fill="#7f1d1d" height="74" rx="10" width="396" x="502" y="430" />
            <rect fill="#f4f4f5" height="66" rx="4" width="340" x="530" y="392" />
            <rect fill="#ef2929" height="14" rx="2" width="26" x="546" y="412" />
            <rect fill="#ef2929" height="14" rx="2" width="26" x="578" y="412" />
            <rect fill="#111827" height="28" rx="2" width="184" x="625" y="411" />
            {Array.from({ length: 10 }).map((_, index) => (
              <rect key={index} fill="#020617" height="14" rx="1" width="14" x={634 + index * 16} y="418" />
            ))}
            <text fill="#f8fafc" fontSize="34" fontWeight="900" textAnchor="middle" x="700" y="486">Firewall</text>
          </g>

          <g filter="url(#rack-blue-glow)">
            <rect fill="#1e3a8a" height="52" rx="8" width="92" x="444" y="425" />
            <text fill="#f8fafc" fontSize="30" fontWeight="900" textAnchor="middle" x="490" y="461">HA</text>
            <path d="M478 453h-44M536 453h44" stroke="#fbbf24" strokeWidth="8" />
          </g>

          <g filter="url(#rack-shadow)">
            <rect fill="#0f172a" height="82" rx="10" width="768" x="106" y="548" />
            <rect fill="#020617" height="40" rx="4" width="224" x="150" y="572" />
            <rect fill="#020617" height="40" rx="4" width="224" x="606" y="572" />
            {Array.from({ length: 12 }).map((_, index) => (
              <rect key={`core-a-${index}`} fill="#111827" height="18" rx="1" stroke="#fbbf24" strokeOpacity="0.5" width="12" x={164 + index * 16} y="583" />
            ))}
            {Array.from({ length: 12 }).map((_, index) => (
              <rect key={`core-b-${index}`} fill="#111827" height="18" rx="1" stroke="#fbbf24" strokeOpacity="0.5" width="12" x={620 + index * 16} y="583" />
            ))}
            <rect fill="#0e7490" height="45" rx="5" width="260" x="360" y="615" />
            <text fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle" x="490" y="646">Core Switches</text>
          </g>

          <g filter="url(#rack-blue-glow)" opacity="0.95">
            <path d="M270 630c44 86 121 129 220 129s176-43 220-129" fill="none" stroke="#38bdf8" strokeWidth="5" />
            <path d="M310 630c39 58 99 87 180 87s141-29 180-87" fill="none" stroke="#fbbf24" strokeWidth="3" />
          </g>

          <g filter="url(#rack-shadow)">
            <rect fill="#111827" height="76" rx="8" width="324" x="168" y="736" />
            <rect fill="#111827" height="76" rx="8" width="324" x="488" y="736" />
            {Array.from({ length: 16 }).map((_, index) => (
              <rect key={`dist-a-${index}`} fill="#020617" height="18" rx="1" stroke="#fbbf24" strokeOpacity="0.45" width="13" x={190 + index * 17} y="765" />
            ))}
            {Array.from({ length: 16 }).map((_, index) => (
              <rect key={`dist-b-${index}`} fill="#020617" height="18" rx="1" stroke="#fbbf24" strokeOpacity="0.45" width="13" x={510 + index * 17} y="765" />
            ))}
            <rect fill="#0e7490" height="45" rx="5" width="330" x="325" y="805" />
            <text fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle" x="490" y="836">Distribution Switches</text>
          </g>

          <g filter="url(#rack-blue-glow)" opacity="0.9">
            <path d="M322 850c38 64 94 96 168 96s130-32 168-96" fill="none" stroke="#38bdf8" strokeWidth="5" />
            <path d="M372 850c29 39 68 58 118 58s89-19 118-58" fill="none" stroke="#fbbf24" strokeWidth="3" />
          </g>

          <g filter="url(#rack-shadow)">
            <rect fill="#111827" height="76" rx="8" width="648" x="166" y="936" />
            {Array.from({ length: 28 }).map((_, index) => (
              <rect key={`access-${index}`} fill="#020617" height="18" rx="1" stroke="#fbbf24" strokeOpacity="0.45" width="13" x={190 + index * 20} y="965" />
            ))}
            <rect fill="#0e7490" height="45" rx="5" width="300" x="340" y="1006" />
            <text fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle" x="490" y="1037">Access Switches</text>
          </g>

          <g filter="url(#rack-blue-glow)" strokeLinecap="round">
            <path d="M490 1012v68" stroke="#38bdf8" strokeWidth="5" />
            <path d="M322 1012c-110 42-164 90-164 144" stroke="#38bdf8" strokeWidth="4" />
            <path d="M420 1012c-78 32-118 74-118 126" stroke="#fbbf24" strokeWidth="3" />
            <path d="M560 1012c72 38 108 81 108 128" stroke="#38bdf8" strokeWidth="4" />
            <path d="M690 1012c88 36 132 82 132 138" stroke="#38bdf8" strokeWidth="4" />
          </g>

          <g fill="#f8fafc" fontWeight="900">
            <g>
              <rect fill="#e5e7eb" height="64" rx="10" width="72" x="86" y="1062" />
              <circle cx="122" cy="1094" fill="#020617" r="18" />
              <circle cx="122" cy="1094" fill="#38bdf8" r="7" />
              <text fontSize="22" textAnchor="middle" x="122" y="1160">Camera</text>
            </g>
            <g>
              <rect fill="#111827" height="68" rx="8" width="42" x="248" y="1076" />
              <rect fill="#111827" height="68" rx="8" width="42" x="300" y="1076" />
              <rect fill="#38bdf8" height="18" rx="2" width="26" x="256" y="1085" />
              <rect fill="#38bdf8" height="18" rx="2" width="26" x="308" y="1085" />
              <text fontSize="22" textAnchor="middle" x="295" y="1170">IP Phones</text>
            </g>
            <g>
              <path d="M438 1090h108l24 50H414z" fill="#111827" />
              <rect fill="#0ea5e9" height="36" rx="4" width="88" x="448" y="1097" />
              <text fontSize="22" textAnchor="middle" x="490" y="1170">Laptops</text>
            </g>
            <g>
              <ellipse cx="780" cy="1118" fill="#e5e7eb" rx="54" ry="22" />
              <ellipse cx="820" cy="1118" fill="#e5e7eb" rx="54" ry="22" />
              <rect fill="#f8fafc" height="32" rx="10" width="108" x="726" y="1086" />
              <text fontSize="22" textAnchor="middle" x="780" y="1170">Access Points</text>
            </g>
          </g>

          <g opacity="0.75" stroke="url(#blue-glow)" strokeWidth="7">
            <line x1="120" x2="120" y1="520" y2="1048" />
            <line x1="860" x2="860" y1="520" y2="1048" />
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-stone-300">
        Rack-style enterprise design concept with dual FortiGate firewalls in HA,
        redundant core and distribution switching, access switching, ISP/cloud
        uplinks, and endpoint access for cameras, IP phones, laptops, and access
        points.
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
