export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  highlights: string[];
  sections: {
    title: string;
    body: string;
    items: string[];
  }[];
  design?: {
    title: string;
    description: string;
    zones: {
      label: string;
      detail: string;
    }[];
  };
  samples?: {
    title: string;
    description: string;
    items: string[];
  }[];
  stack: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "enterprise-networking",
    title: "Enterprise Network Design",
    shortTitle: "Enterprise Networking",
    eyebrow: "HA enterprise architecture",
    summary:
      "Highly available campus, branch, cloud, VPN, and identity-aware network design for modern business environments.",
    description:
      "A strong enterprise network needs more than switches and firewalls. It needs clear routing boundaries, redundant paths, secure remote access, identity integration, cloud connectivity, and operational visibility from day one.",
    highlights: [
      "Fortinet HA edge with dual ISP, SD-WAN, IPS, VPN, and centralized logging",
      "Cisco campus switching with redundant core, distribution, and access layers",
      "Hybrid identity using Azure Entra ID, MFA, local domain controllers, and conditional access",
      "Secure site-to-site VPN, SSL VPN, IPsec remote access, Azure, and branch connectivity",
    ],
    design: {
      title: "Reference HA Design",
      description:
        "A practical layout for a medium enterprise with resilient internet, secure segmentation, hybrid identity, and cloud-ready routing.",
      zones: [
        {
          label: "Internet + ISPs",
          detail: "Dual ISP circuits, public DNS, DDoS-aware routing, and monitored failover.",
        },
        {
          label: "Fortinet HA Edge",
          detail:
            "FortiGate HA pair, SD-WAN rules, IPS, web filtering, SSL VPN, IPsec VPN, and FortiAnalyzer visibility.",
        },
        {
          label: "Cisco Core",
          detail:
            "Redundant Catalyst or Nexus core with HSRP/VRRP, routed uplinks, VLAN gateways, and fast convergence.",
        },
        {
          label: "Secure Access",
          detail:
            "Cisco access switching, 802.1X, ISE-ready NAC, guest networks, voice, printers, and IoT segmentation.",
        },
        {
          label: "Identity + DC",
          detail:
            "Local Active Directory domain controllers, DNS, DHCP, Azure Entra ID sync, MFA, and policy-based access.",
        },
        {
          label: "Cloud + Branch",
          detail:
            "Azure VPN Gateway or ExpressRoute, branch IPsec tunnels, SD-WAN overlays, and cloud workload routes.",
        },
      ],
    },
    samples: [
      {
        title: "Single-site HA office",
        description:
          "Best for a headquarters or main office where internet, switching, servers, and identity services must stay available during device or circuit failure.",
        items: [
          "Dual ISP links into a FortiGate HA pair with SD-WAN health checks and monitored failover.",
          "Cisco collapsed core using redundant switches, LACP uplinks, HSRP/VRRP gateways, and separate management access.",
          "Local domain controllers, DNS, DHCP failover, file/application servers, backup storage, and UPS-backed server switching.",
        ],
      },
      {
        title: "Head office plus branches",
        description:
          "Best for distributed companies that need predictable branch connectivity, secure local breakout, and central visibility.",
        items: [
          "Hub FortiGate HA pair at headquarters with branch FortiGate or Cisco edge devices connected by IPsec or SD-WAN overlays.",
          "Central route summarization, branch VLAN templates, guest networks, printer networks, and local emergency internet breakout.",
          "FortiManager templates and documented onboarding standards so every branch is built the same way.",
        ],
      },
      {
        title: "Hybrid cloud network",
        description:
          "Best for businesses running local servers while extending workloads, identity, backup, or applications into Microsoft Azure.",
        items: [
          "Azure VPN Gateway, Virtual WAN, or ExpressRoute connected to the Fortinet edge with clear route ownership.",
          "Azure Entra ID, local Active Directory, domain controller placement, DNS forwarding, and conditional access alignment.",
          "Separate cloud subnets for application, database, management, backup, and private endpoint traffic.",
        ],
      },
      {
        title: "Secure remote access design",
        description:
          "Best when engineers, staff, and vendors need access from outside while keeping internal systems protected.",
        items: [
          "FortiGate SSL VPN or IPsec VPN with Azure Entra ID SAML, MFA, named user groups, and restricted portal access.",
          "Separate access profiles for employees, administrators, vendors, and emergency support.",
          "Jump hosts, management VLANs, session logging, and deny-by-default firewall rules for sensitive servers.",
        ],
      },
    ],
    sections: [
      {
        title: "Design principles",
        body:
          "A good enterprise design is predictable under failure and simple enough for the operations team to understand. The design should reduce hidden dependencies and make every critical path visible.",
        items: [
          "Build redundancy in pairs: firewalls, switches, WAN links, power, domain controllers, DNS, DHCP, and backup paths.",
          "Keep routing boundaries clear with summarization, documented default gateways, and controlled redistribution.",
          "Separate user, server, voice, guest, management, backup, IoT, OT, and cloud traffic into intentional zones.",
          "Prefer least privilege access: users reach applications, administrators reach management planes, and vendors reach only approved targets.",
          "Document normal traffic flows, failure modes, recovery steps, and ownership before the design goes live.",
        ],
      },
      {
        title: "Server and data center design factors",
        body:
          "Server networks need stable addressing, clean east-west controls, reliable backup paths, and protected management access. They should also be designed around the applications they host.",
        items: [
          "Dedicated server VLANs or subnets for domain controllers, application servers, databases, backup, monitoring, and management.",
          "Redundant server access switches, dual-homed hypervisors, LACP port channels, and separate out-of-band management where possible.",
          "Firewall policies between user networks and server networks so only required application ports are allowed.",
          "Resilient DNS, DHCP, NTP, certificate services, backup repositories, and monitoring placed outside single points of failure.",
          "Capacity planning for virtualization, storage, east-west traffic, backup windows, internet breakout, and future cloud migration.",
        ],
      },
      {
        title: "Fortinet edge and VPN design",
        body:
          "The firewall edge is designed as a high-availability security control point, not just an internet gateway. A FortiGate HA pair can terminate dual internet circuits, run SD-WAN policies, inspect traffic, publish services safely, and provide remote access.",
        items: [
          "Active-passive or active-active FortiGate HA depending on throughput, session behavior, and licensing needs.",
          "SSL VPN or IPsec remote access with Azure Entra ID SAML, MFA, user groups, and least-privilege portal access.",
          "Site-to-site IPsec VPNs for branches, partners, Azure, and disaster recovery locations.",
          "FortiManager and FortiAnalyzer for consistent policy, configuration history, reporting, and incident visibility.",
        ],
      },
      {
        title: "Cisco campus foundation",
        body:
          "The switching design keeps the campus predictable: redundant core or collapsed-core switching, routed uplinks where appropriate, clear VLAN boundaries, and access policies that are easy to operate.",
        items: [
          "Cisco Catalyst or Nexus core/distribution with HSRP, VRRP, StackWise Virtual, vPC, or equivalent HA patterns.",
          "Access layer segmentation for users, servers, voice, printers, wireless, guest, OT, and management networks.",
          "Cisco ISE-ready 802.1X and MAC authentication for identity-aware wired and wireless access.",
          "QoS for voice, video, business applications, and WAN-sensitive traffic.",
        ],
      },
      {
        title: "Hybrid identity and access",
        body:
          "Identity ties the network together. Local domain controllers keep core services close to users, while Azure Entra ID adds cloud identity, SSO, MFA, and conditional access for remote and SaaS workflows.",
        items: [
          "Local Active Directory, DNS, DHCP, NTP, and certificate services placed on resilient server networks.",
          "Azure Entra ID Connect or cloud sync for hybrid identity and consistent user lifecycle management.",
          "MFA and conditional access for VPN, administrator access, SaaS, and privileged workflows.",
          "Admin separation using management VLANs, jump hosts, role-based access, and audited changes.",
        ],
      },
      {
        title: "Cloud, branch, and resilience",
        body:
          "Cloud and remote offices are treated as first-class network locations. Routing, segmentation, monitoring, and failover are designed before migration or expansion begins.",
        items: [
          "Azure VPN Gateway, Virtual WAN, or ExpressRoute planning based on latency, cost, and availability requirements.",
          "Branch FortiGate or Cisco edge designs with SD-WAN, local breakout, and central policy control.",
          "Backup internet, LTE/5G options, dynamic routing, and documented failover testing.",
          "Monitoring for firewall health, WAN quality, switch stack state, VPN status, and key application paths.",
        ],
      },
    ],
    stack: [
      "FortiGate",
      "FortiManager",
      "FortiAnalyzer",
      "Cisco Catalyst",
      "Cisco Nexus",
      "Cisco ISE",
      "Azure Entra ID",
      "Active Directory",
      "Azure VPN Gateway",
      "ExpressRoute",
    ],
  },
  {
    slug: "network-security",
    title: "Network Security",
    shortTitle: "Network Security",
    eyebrow: "Resilient protection",
    summary:
      "Firewall policy, segmentation, secure access, logging, and control design for business-critical environments.",
    description:
      "Network security work focuses on reducing exposure without slowing the business. The outcome is a controlled environment with clear zones, enforceable access, useful logs, and practical response paths.",
    highlights: [
      "Firewall policy cleanup and next-generation security controls",
      "Zero-trust-aligned segmentation for users, servers, cloud, OT, and guests",
      "VPN, MFA, administrator access, and privileged workflow hardening",
      "Logging, alerting, and audit-ready security documentation",
    ],
    sections: [
      {
        title: "Security architecture",
        body:
          "Security starts with a clear map of trust boundaries and business flows. Policies are then designed around required access instead of inherited rules.",
        items: [
          "Firewall zone model, policy review, NAT design, and rule lifecycle cleanup.",
          "Segmentation between users, servers, management, guest, cloud, and sensitive systems.",
          "Fortinet security profiles, IPS, web filtering, DNS filtering, application control, and SSL inspection planning.",
        ],
      },
      {
        title: "Access control",
        body:
          "User and administrator access should be traceable, role-based, and protected by strong identity signals.",
        items: [
          "Azure Entra ID SAML and MFA integration for SSL VPN and administrator portals.",
          "Cisco ISE or Fortinet identity integrations for wired, wireless, and VPN access decisions.",
          "Privileged access paths using jump hosts, management networks, and named administrator accounts.",
        ],
      },
    ],
    stack: ["FortiGate", "FortiAnalyzer", "Cisco ISE", "Azure Entra ID", "SIEM", "MFA"],
  },
  {
    slug: "ot-ics-security",
    title: "OT / ICS Security",
    shortTitle: "OT / ICS Security",
    eyebrow: "Operational resilience",
    summary:
      "Practical protection for industrial networks, production systems, and control environments where uptime matters.",
    description:
      "OT security requires careful change control, visibility, and segmentation. The goal is to protect operations while respecting vendor support, safety, latency, and uptime requirements.",
    highlights: [
      "OT asset discovery and network mapping",
      "Purdue-aligned segmentation and controlled IT/OT access",
      "Secure remote vendor access with MFA and logging",
      "Firewall policy, monitoring, and incident readiness for production networks",
    ],
    sections: [
      {
        title: "Segmentation and visibility",
        body:
          "Industrial environments benefit from simple, documented boundaries that separate enterprise IT from production systems while preserving required flows.",
        items: [
          "Purdue model zoning for enterprise, DMZ, supervisory, control, and device networks.",
          "Fortinet or Cisco firewall enforcement between IT, OT DMZ, engineering workstations, and PLC networks.",
          "Passive discovery, switch monitoring, and traffic baselining before policy tightening.",
        ],
      },
      {
        title: "Remote access and operations",
        body:
          "Vendor and engineer access needs to be deliberate, temporary where possible, and fully logged.",
        items: [
          "VPN access with MFA, approval workflows, named users, and restricted destination policies.",
          "Jump hosts, session recording options, and separate administrative credentials.",
          "Maintenance windows, rollback planning, and documentation for operational teams.",
        ],
      },
    ],
    stack: ["FortiGate", "Cisco Industrial Ethernet", "OT DMZ", "Jump Hosts", "MFA", "Monitoring"],
  },
  {
    slug: "sd-wan",
    title: "SD-WAN",
    shortTitle: "SD-WAN",
    eyebrow: "Branch connectivity",
    summary:
      "Policy-driven WAN designs that improve branch resilience, cloud access, and application performance.",
    description:
      "SD-WAN turns branch connectivity into an application-aware service. It helps use multiple circuits intelligently while keeping security, routing, and operations manageable.",
    highlights: [
      "Dual circuit branch designs with business-aware failover",
      "Fortinet Secure SD-WAN policy and SLA design",
      "Cloud breakout, hub-and-spoke, and mesh routing patterns",
      "Operational dashboards for latency, packet loss, jitter, and tunnel health",
    ],
    sections: [
      {
        title: "WAN architecture",
        body:
          "The design starts by identifying which traffic should use local internet, private circuits, cloud paths, or secure central inspection.",
        items: [
          "Underlay planning for fiber, broadband, LTE/5G, MPLS, and local internet breakout.",
          "Overlay IPsec tunnels, hub design, route summarization, and branch templates.",
          "SLA rules for Microsoft 365, voice, ERP, SaaS, and latency-sensitive applications.",
        ],
      },
      {
        title: "Security and operations",
        body:
          "SD-WAN should improve reliability without creating policy sprawl or hidden security gaps.",
        items: [
          "FortiGate policy packages, SD-WAN zones, security profiles, and centralized management.",
          "Change templates, branch onboarding standards, and failover test procedures.",
          "Monitoring for link quality, tunnel state, route changes, and application path selection.",
        ],
      },
    ],
    stack: ["Fortinet Secure SD-WAN", "IPsec", "BGP", "Azure", "Microsoft 365", "LTE/5G"],
  },
  {
    slug: "automation",
    title: "Infrastructure Automation",
    shortTitle: "Automation",
    eyebrow: "Operational tooling",
    summary:
      "Python and workflow automation for repeatable network operations, audits, reporting, and configuration tasks.",
    description:
      "Automation is most useful when it removes repetitive engineering work and makes operations more reliable. The focus is on practical tools that fit existing teams and change processes.",
    highlights: [
      "Configuration backup, compliance checks, and inventory reporting",
      "Python tooling for Fortinet, Cisco, cloud, and internal systems",
      "Change templates, validation scripts, and operational runbooks",
      "Dashboards and reports for recurring engineering tasks",
    ],
    sections: [
      {
        title: "Network automation",
        body:
          "Automation can standardize routine changes and give engineers better visibility into the current state of the environment.",
        items: [
          "Python scripts for inventory, config backup, interface checks, and policy exports.",
          "FortiManager, FortiGate, Cisco, and cloud API integrations.",
          "Pre-change validation, post-change verification, and rollback support.",
        ],
      },
      {
        title: "Business workflows",
        body:
          "The best automation connects technical work to real operational processes.",
        items: [
          "Ticket-driven change helpers, report generation, and compliance evidence collection.",
          "Scheduled health checks for VPNs, WAN links, certificates, and device state.",
          "Documentation outputs that keep diagrams, inventories, and runbooks current.",
        ],
      },
    ],
    stack: ["Python", "REST APIs", "FortiManager", "Cisco APIs", "Git", "Dashboards"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    eyebrow: "Business web systems",
    summary:
      "Modern websites and web systems for brands, service businesses, portfolios, and internal workflows.",
    description:
      "Web development work focuses on fast, clean, business-focused experiences that are easy to maintain and aligned with the way customers actually evaluate services.",
    highlights: [
      "Professional service websites and portfolio experiences",
      "Fast responsive frontend implementation",
      "SEO-minded structure, metadata, and content organization",
      "Practical admin, workflow, and operational web tools",
    ],
    sections: [
      {
        title: "Customer-facing websites",
        body:
          "A strong website should explain what the business does, build trust quickly, and make contact simple.",
        items: [
          "Clear page structure, service content, calls to action, and credibility sections.",
          "Responsive implementation for mobile, tablet, and desktop users.",
          "Portfolio, case study, blog, and contact flows.",
        ],
      },
      {
        title: "Operational tools",
        body:
          "For internal teams, web systems can reduce manual work and make recurring processes easier to manage.",
        items: [
          "Dashboards, forms, admin views, lightweight portals, and reporting tools.",
          "API integrations with business systems where useful.",
          "Maintainable code structure and deployment-ready implementation.",
        ],
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Deployment"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
