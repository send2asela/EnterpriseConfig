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
  const text = "#1f2937";
  const muted = "#64748b";
  const blue = "#0ea5e9";
  const darkBlue = "#0369a1";
  const green = "#059669";
  const amber = "#d97706";
  const red = "#dc2626";

  return (
    <figure className="overflow-hidden rounded-[28px] border border-white/10 bg-stone-50 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="overflow-x-auto">
        <svg
          aria-labelledby="enterprise-network-diagram-title"
          className="min-w-[980px]"
          role="img"
          viewBox="0 0 1180 760"
        >
          <title id="enterprise-network-diagram-title">
            Enterprise HA network architecture diagram
          </title>
          <defs>
            <marker
              id="arrow-blue"
              markerHeight="8"
              markerWidth="8"
              orient="auto"
              refX="7"
              refY="4"
            >
              <path d="M0 0l8 4-8 4z" fill={blue} />
            </marker>
            <marker
              id="arrow-green"
              markerHeight="8"
              markerWidth="8"
              orient="auto"
              refX="7"
              refY="4"
            >
              <path d="M0 0l8 4-8 4z" fill={green} />
            </marker>
            <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="8"
                floodColor="#0f172a"
                floodOpacity="0.16"
                stdDeviation="8"
              />
            </filter>
          </defs>

          <rect fill="#f8fafc" height="760" rx="28" width="1180" />

          <g>
            <text fill={text} fontSize="26" fontWeight="700" x="34" y="48">
              Enterprise HA Network Design
            </text>
            <text fill={muted} fontSize="14" x="34" y="72">
              Fortinet edge, Cisco campus, hybrid identity, Azure cloud, VPN,
              servers, and segmented access zones
            </text>
          </g>

          <g stroke="#cbd5e1" strokeDasharray="8 8" strokeWidth="2">
            <line x1="28" x2="1152" y1="126" y2="126" />
            <line x1="28" x2="1152" y1="316" y2="316" />
            <line x1="28" x2="1152" y1="520" y2="520" />
          </g>

          <g fill={darkBlue} fontSize="22" fontWeight="700">
            <text x="940" y="112">Internet / Cloud Zone</text>
            <text x="905" y="302">Enterprise DMZ and Security Edge</text>
            <text x="884" y="506">Campus, Server, and Identity Zone</text>
            <text x="878" y="710">Access, Branch, and Remote User Zone</text>
          </g>

          <g filter="url(#soft-shadow)">
            <path
              d="M910 48c18-42 89-45 113-6 38-4 73 24 75 60 44 6 62 61 28 91H897c-47-19-35-88 13-90z"
              fill="#e0f2fe"
              stroke={blue}
              strokeWidth="3"
            />
            <text fill={darkBlue} fontSize="24" fontWeight="700" x="963" y="120">
              Internet
            </text>
            <text fill={darkBlue} fontSize="14" fontWeight="600" x="943" y="150">
              SaaS / Azure / Public DNS
            </text>
          </g>

          <g filter="url(#soft-shadow)">
            <rect fill="#ffffff" height="86" rx="12" stroke="#bae6fd" width="156" x="704" y="70" />
            <rect fill="#dbeafe" height="18" rx="4" width="110" x="727" y="92" />
            <rect fill="#bfdbfe" height="18" rx="4" width="88" x="727" y="120" />
            <text fill={darkBlue} fontSize="13" fontWeight="700" x="726" y="146">
              Azure vNet
            </text>
          </g>

          <g stroke={blue} strokeWidth="4">
            <line markerEnd="url(#arrow-blue)" x1="860" x2="907" y1="112" y2="112" />
            <line markerEnd="url(#arrow-blue)" x1="614" x2="704" y1="180" y2="112" />
          </g>

          <g filter="url(#soft-shadow)">
            <rect fill="#ffffff" height="96" rx="12" stroke="#fed7aa" width="170" x="70" y="160" />
            <text fill={text} fontSize="15" fontWeight="700" x="92" y="190">
              Dual ISP Edge
            </text>
            <line stroke={amber} strokeWidth="5" x1="100" x2="210" y1="212" y2="212" />
            <circle cx="112" cy="232" fill={amber} r="8" />
            <circle cx="200" cy="232" fill={green} r="8" />
            <text fill={muted} fontSize="12" x="94" y="250">
              Fiber + backup circuit
            </text>
          </g>

          <g filter="url(#soft-shadow)">
            <rect fill="#fee2e2" height="72" rx="10" stroke={red} strokeWidth="3" width="106" x="333" y="154" />
            <rect fill="#fee2e2" height="72" rx="10" stroke={red} strokeWidth="3" width="106" x="493" y="154" />
            <path d="M359 180h54M359 198h54M519 180h54M519 198h54" stroke={red} strokeWidth="3" />
            <text fill={red} fontSize="13" fontWeight="700" x="342" y="246">
              FortiGate HA-A
            </text>
            <text fill={red} fontSize="13" fontWeight="700" x="502" y="246">
              FortiGate HA-B
            </text>
          </g>

          <path
            d="M240 206h93M439 190h54M439 210h54M599 190h92M599 210h88"
            fill="none"
            stroke={green}
            strokeWidth="4"
          />
          <path d="M386 226v68M546 226v68" stroke={green} strokeWidth="4" />
          <path d="M386 294h160M386 294l160-68M546 294L386 226" stroke={green} strokeOpacity="0.85" strokeWidth="3" />

          <g filter="url(#soft-shadow)">
            <rect fill="#ffffff" height="86" rx="12" stroke="#cbd5e1" width="150" x="705" y="178" />
            <text fill={text} fontSize="14" fontWeight="700" x="724" y="207">
              External DMZ
            </text>
            <text fill={muted} fontSize="12" x="724" y="230">
              Reverse proxy
            </text>
            <text fill={muted} fontSize="12" x="724" y="248">
              Published services
            </text>
          </g>

          <g filter="url(#soft-shadow)">
            <rect fill="#ffffff" height="92" rx="12" stroke="#bbf7d0" width="168" x="76" y="348" />
            <text fill={text} fontSize="15" fontWeight="700" x="96" y="378">
              Identity Services
            </text>
            <text fill={muted} fontSize="12" x="96" y="402">
              AD DS / DNS / DHCP
            </text>
            <text fill={muted} fontSize="12" x="96" y="420">
              Entra ID sync + MFA
            </text>
          </g>

          <g filter="url(#soft-shadow)">
            <rect fill="#e0f2fe" height="86" rx="12" stroke={blue} strokeWidth="3" width="106" x="332" y="360" />
            <rect fill="#e0f2fe" height="86" rx="12" stroke={blue} strokeWidth="3" width="106" x="494" y="360" />
            <path d="M354 389h62M354 410h62M516 389h62M516 410h62" stroke={darkBlue} strokeWidth="4" />
            <text fill={darkBlue} fontSize="13" fontWeight="700" x="337" y="466">
              Cisco Core A
            </text>
            <text fill={darkBlue} fontSize="13" fontWeight="700" x="499" y="466">
              Cisco Core B
            </text>
          </g>

          <path
            d="M244 394h88M438 382h56M438 424h56M546 318v42M386 318v42M438 402h56M438 382l56 42M494 382l-56 42"
            fill="none"
            stroke={green}
            strokeWidth="4"
          />

          <g filter="url(#soft-shadow)">
            <rect fill="#ffffff" height="114" rx="12" stroke="#cbd5e1" width="180" x="674" y="350" />
            <text fill={text} fontSize="15" fontWeight="700" x="698" y="380">
              Server Networks
            </text>
            <rect fill="#f1f5f9" height="16" rx="3" width="118" x="704" y="396" />
            <rect fill="#f1f5f9" height="16" rx="3" width="96" x="704" y="421" />
            <text fill={muted} fontSize="12" x="704" y="452">
              Apps / DB / backup / monitoring
            </text>
          </g>

          <path d="M600 402h74" stroke={green} strokeWidth="4" />

          <g filter="url(#soft-shadow)">
            <rect fill="#fef3c7" height="76" rx="12" stroke={amber} strokeWidth="3" width="130" x="924" y="356" />
            <text fill="#92400e" fontSize="15" fontWeight="700" x="950" y="386">
              SSL VPN
            </text>
            <text fill="#92400e" fontSize="12" x="945" y="409">
              SAML + MFA
            </text>
          </g>
          <path d="M546 226c128 10 277 47 378 130" fill="none" stroke={amber} strokeDasharray="7 7" strokeWidth="3" />

          <g filter="url(#soft-shadow)">
            <rect fill="#e0f2fe" height="72" rx="12" stroke={blue} strokeWidth="3" width="112" x="410" y="590" />
            <rect fill="#e0f2fe" height="72" rx="12" stroke={blue} strokeWidth="3" width="112" x="548" y="590" />
            <rect fill="#e0f2fe" height="72" rx="12" stroke={blue} strokeWidth="3" width="112" x="686" y="590" />
            <text fill={darkBlue} fontSize="13" fontWeight="700" x="432" y="634">
              Access 1
            </text>
            <text fill={darkBlue} fontSize="13" fontWeight="700" x="570" y="634">
              Access 2
            </text>
            <text fill={darkBlue} fontSize="13" fontWeight="700" x="708" y="634">
              Access 3
            </text>
          </g>

          <path
            d="M386 446l80 144M546 446l58 144M546 446l196 144M386 446l356 144"
            stroke={blue}
            strokeWidth="4"
          />

          <g filter="url(#soft-shadow)">
            <rect fill="#ffffff" height="90" rx="12" stroke="#cbd5e1" width="180" x="70" y="590" />
            <text fill={text} fontSize="15" fontWeight="700" x="95" y="622">
              Branch / Remote Site
            </text>
            <text fill={muted} fontSize="12" x="95" y="646">
              IPsec or SD-WAN overlay
            </text>
            <text fill={muted} fontSize="12" x="95" y="664">
              Local breakout + templates
            </text>
          </g>
          <path d="M240 620c78-80 177-130 292-158" fill="none" stroke={amber} strokeDasharray="6 7" strokeWidth="3" />

          <g filter="url(#soft-shadow)">
            <rect fill="#ecfdf5" height="90" rx="12" stroke={green} strokeWidth="3" width="174" x="900" y="584" />
            <text fill={green} fontSize="15" fontWeight="700" x="926" y="617">
              Management Zone
            </text>
            <text fill="#047857" fontSize="12" x="926" y="641">
              FortiAnalyzer / SIEM
            </text>
            <text fill="#047857" fontSize="12" x="926" y="659">
              Jump host / admin access
            </text>
          </g>
          <path d="M900 628H798" stroke={green} strokeDasharray="6 6" strokeWidth="3" />

          <g fill={muted} fontSize="12">
            <circle cx="54" cy="724" fill={green} r="5" />
            <text x="66" y="728">Redundant production path</text>
            <circle cx="252" cy="724" fill={blue} r="5" />
            <text x="264" y="728">Campus access uplinks</text>
            <circle cx="426" cy="724" fill={amber} r="5" />
            <text x="438" y="728">VPN / SD-WAN / failover path</text>
            <circle cx="660" cy="724" fill={red} r="5" />
            <text x="672" y="728">Firewall security boundary</text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-stone-600">
        Sample enterprise design concept showing redundant Fortinet edge,
        Cisco core, hybrid identity, server networks, Azure connectivity,
        branch access, SSL VPN, and management visibility.
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
