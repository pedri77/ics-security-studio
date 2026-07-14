// ICS/OT Cybersecurity Vendor Comparison Data
// Generated: 2026-07-14
// Structure mirrors SASE Studio format, adapted for ICS/OT/SCADA

window.ICS_DATA = {

  // ─── VENDORS (20 global) ────────────────────────────────────────────
  vendors: [
    {
      name: "Claroty",
      color: "#2563eb",
      logo: "https://www.google.com/s2/favicons?domain=claroty.com&sz=32",
      docsUrl: "https://claroty.com/resources",
      productUrl: "https://claroty.com/industrial-cybersecurity",
      compliance: "IEC 62443, NERC CIP, NIS2, NIST CSF, ENS",
      complianceDetail: "Mapeo completo a IEC 62443 zonas/conductos. Soporte NERC CIP-002 a CIP-013. Reportes NIS2 Art.21. Compatible ENS Alto con despliegue on-premise.",
      complianceUrl: "https://claroty.com/resources/compliance",
      strength: 4.7,
      fit: 4.5,
      risk: 2,
      gartner: "Leader (CPS Protection 2025)",
      bestFor: "Visibilidad completa IT/OT/IoMT. Grandes despliegues multi-site. Convergencia IT/OT en SOC unificado.",
      caution: "TCO elevado. Requiere hardware dedicado para sensores. Curva de aprendizaje pronunciada."
    },
    {
      name: "Nozomi Networks",
      color: "#0f766e",
      logo: "https://www.google.com/s2/favicons?domain=nozominetworks.com&sz=32",
      docsUrl: "https://www.nozominetworks.com/resources",
      productUrl: "https://www.nozominetworks.com/products",
      compliance: "IEC 62443, NERC CIP, NIS2, NIST CSF, ENS",
      complianceDetail: "Guardian y Vantage mapean a IEC 62443-3-3. Soporte NERC CIP con informes automatizados. Dashboards NIS2. Despliegue soberano posible.",
      complianceUrl: "https://www.nozominetworks.com/solutions/compliance",
      strength: 4.6,
      fit: 4.6,
      risk: 2,
      gartner: "Leader (CPS Protection 2025)",
      bestFor: "Monitorización pasiva de alta fidelidad. Entornos multi-vendor. Escalabilidad cloud con Vantage.",
      caution: "Opciones de protección activa limitadas. Endpoint OT no nativo. Dependencia de integraciones para respuesta."
    },
    {
      name: "Dragos",
      color: "#6d28d9",
      logo: "https://www.google.com/s2/favicons?domain=dragos.com&sz=32",
      docsUrl: "https://www.dragos.com/resources/",
      productUrl: "https://www.dragos.com/platform/",
      compliance: "IEC 62443, NERC CIP, NIS2, NIST CSF, TSA Pipeline",
      complianceDetail: "Plataforma orientada a threat intel ICS. Mapeo NERC CIP-005/007/010. Informes TSA Pipeline Security Directives. Equipo de respuesta a incidentes WorldView.",
      complianceUrl: "https://www.dragos.com/compliance/",
      strength: 4.8,
      fit: 4.3,
      risk: 2,
      gartner: "Leader (CPS Protection 2025)",
      bestFor: "Threat intelligence ICS de clase mundial. Respuesta a incidentes OT. Energía, utilities, petróleo y gas.",
      caution: "Enfoque primario en detección, no protección activa. Precio premium. Menor cobertura de IoT/BMS."
    },
    {
      name: "Fortinet OT",
      color: "#b45309",
      logo: "https://www.google.com/s2/favicons?domain=fortinet.com&sz=32",
      docsUrl: "https://docs.fortinet.com/",
      productUrl: "https://www.fortinet.com/solutions/industries/scada-industrial-control-systems",
      compliance: "IEC 62443, NERC CIP, NIS2, ENS, CCN-STIC",
      complianceDetail: "FortiGate Rugged certified IEC 62443-4-2 SL2. Segmentación Purdue nativa. Amplio catálogo CCN-STIC. ENS Alto certificado para FortiGate.",
      complianceUrl: "https://www.fortinet.com/solutions/industries/scada-industrial-control-systems/compliance",
      strength: 4.2,
      fit: 4.4,
      risk: 4,
      gartner: "Leader (Network Firewalls), Challenger (CPS)",
      bestFor: "Segmentación IT/OT con FortiGate Rugged. Organizaciones con stack Fortinet existente. TCO competitivo.",
      caution: "Historial de CVEs críticos en FortiOS. Visibilidad OT depende de FortiNAC/FortiDeceptor. Vendor lock-in en Security Fabric."
    },
    {
      name: "Cisco Industrial",
      color: "#334155",
      logo: "https://www.google.com/s2/favicons?domain=cisco.com&sz=32",
      docsUrl: "https://www.cisco.com/c/en/us/solutions/internet-of-things/iot-industrial-networking.html",
      productUrl: "https://www.cisco.com/site/us/en/solutions/internet-of-things/industrial-security/index.html",
      compliance: "IEC 62443, NERC CIP, NIS2, ENS, NIST CSF",
      complianceDetail: "Cisco Cyber Vision integrado en switches industriales IE3x00/IE9300. ISA/IEC 62443 zone mapping. Compliance dashboards con Cisco ISE.",
      complianceUrl: "https://www.cisco.com/c/en/us/solutions/internet-of-things/iot-security.html",
      strength: 4.0,
      fit: 4.2,
      risk: 3,
      gartner: "Strong Performer (CPS Protection)",
      bestFor: "Organizaciones con infraestructura Cisco existente. Microsegmentación con TrustSec/ISE. Networking industrial integrado.",
      caution: "Cyber Vision requiere hardware Cisco. Detección de amenazas OT menos madura que pure-play. Complejidad de licenciamiento."
    },
    {
      name: "Microsoft Defender IoT",
      color: "#0078d4",
      logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=32",
      docsUrl: "https://learn.microsoft.com/en-us/azure/defender-for-iot/",
      productUrl: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-iot",
      compliance: "IEC 62443, NERC CIP, NIS2, NIST CSF, ISO 27001",
      complianceDetail: "Integración nativa con Microsoft Sentinel y Defender XDR. Mapeo MITRE ATT&CK for ICS. Soporte compliance Azure Policy. Informes NIS2 via Purview.",
      complianceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-iot/organizations/concept-regulatory-compliance",
      strength: 4.1,
      fit: 4.3,
      risk: 2,
      gartner: "Strong Performer (CPS Protection)",
      bestFor: "Convergencia IT/OT en ecosistema Microsoft. Organizaciones con Sentinel/Defender XDR. Cloud-first con sensores on-premise.",
      caution: "Dependencia de Azure para funcionalidades avanzadas. Profundidad OT menor que pure-play. Soberanía limitada fuera de Azure."
    },
    {
      name: "Armis",
      color: "#e11d48",
      logo: "https://www.google.com/s2/favicons?domain=armis.com&sz=32",
      docsUrl: "https://www.armis.com/resources/",
      productUrl: "https://www.armis.com/platform/",
      compliance: "IEC 62443, NIS2, NIST CSF, HIPAA, ISO 27001",
      complianceDetail: "Armis Centrix con asset intelligence masiva. Mapeo a IEC 62443, NIS2 Art.21. Vulnerability prioritization basada en riesgo. Compliance dashboards configurables.",
      complianceUrl: "https://www.armis.com/solutions/compliance/",
      strength: 4.4,
      fit: 4.5,
      risk: 2,
      gartner: "Leader (CPS Protection 2025)",
      bestFor: "Descubrimiento masivo de activos IT/OT/IoMT. Visibilidad agentless. Priorización de vulnerabilidades por riesgo de negocio.",
      caution: "Plataforma cloud-first, opciones on-premise limitadas. Menor profundidad en protocolos OT legacy. TCO alto en grandes despliegues."
    },
    {
      name: "TXOne Networks",
      color: "#059669",
      logo: "https://www.google.com/s2/favicons?domain=txone.com&sz=32",
      docsUrl: "https://www.txone.com/resources/",
      productUrl: "https://www.txone.com/products/",
      compliance: "IEC 62443, NIS2, SEMI E187/E188, FDA",
      complianceDetail: "Producto certificado IEC 62443-4-1. StellarProtect y StellarEnforce para endpoint OT legacy. EdgeFire/EdgeIPS para segmentación inline. Fuerte en semiconductor (SEMI E187).",
      complianceUrl: "https://www.txone.com/solutions/compliance/",
      strength: 4.3,
      fit: 4.1,
      risk: 2,
      gartner: "Strong Performer (CPS Protection)",
      bestFor: "Protección endpoint OT legacy (Windows XP/7). Segmentación inline sin rediseño de red. Manufactura y semiconductores.",
      caution: "Visibilidad de red limitada comparada con Claroty/Nozomi. Menor presencia en energía/utilities. Threat intel menos profunda."
    },
    {
      name: "Honeywell",
      color: "#dc2626",
      logo: "https://www.google.com/s2/favicons?domain=honeywell.com&sz=32",
      docsUrl: "https://www.honeywell.com/us/en/industries/industrial-cybersecurity",
      productUrl: "https://process.honeywell.com/us/en/solutions/cybersecurity",
      compliance: "IEC 62443, NERC CIP, NIS2, ISA/IEC 62443-4-1",
      complianceDetail: "Honeywell Forge Cybersecurity para entornos Honeywell. Certificación IEC 62443-4-1 en proceso de desarrollo. Secure Connection para acceso remoto. Fuerte en proceso continuo.",
      complianceUrl: "https://process.honeywell.com/us/en/solutions/cybersecurity",
      strength: 3.9,
      fit: 3.8,
      risk: 3,
      gartner: "Niche Player (CPS Protection)",
      bestFor: "Entornos Honeywell DCS/SCADA nativos. Industria de proceso, refinerías, químicas. Servicios gestionados OT.",
      caution: "Mejor en ecosistema propio, limitado en multi-vendor. Innovación más lenta que pure-play. Dependencia de servicios profesionales."
    },
    {
      name: "Siemens",
      color: "#009999",
      logo: "https://www.google.com/s2/favicons?domain=siemens.com&sz=32",
      docsUrl: "https://new.siemens.com/global/en/products/automation/industrial-communication/industrial-network-security.html",
      productUrl: "https://new.siemens.com/global/en/products/automation/industrial-communication/industrial-network-security.html",
      compliance: "IEC 62443, NIS2, NERC CIP, Ley de Seguridad de TI (Alemania)",
      complianceDetail: "SINEC Security Guard para gestión de vulnerabilidades. SCALANCE firewalls industriales certificados IEC 62443-4-2. Defense in depth nativo en ecosistema Siemens.",
      complianceUrl: "https://new.siemens.com/global/en/company/topic-areas/cybersecurity.html",
      strength: 3.8,
      fit: 3.7,
      risk: 3,
      gartner: "Niche Player (CPS Protection)",
      bestFor: "Entornos Siemens SIMATIC/SINEMA. Manufactura alemana/europea. Seguridad integrada en automatización.",
      caution: "Mejor en ecosistema propio. Visibilidad multi-vendor limitada. Complejidad en licenciamiento y versiones."
    },
    {
      name: "Tenable OT",
      color: "#7c3aed",
      logo: "https://www.google.com/s2/favicons?domain=tenable.com&sz=32",
      docsUrl: "https://docs.tenable.com/tenable-ot-security/",
      productUrl: "https://www.tenable.com/products/ot-security",
      compliance: "IEC 62443, NERC CIP, NIS2, NIST CSF, ISO 27001",
      complianceDetail: "Tenable OT Security (ex-Indegy). Vulnerability management especializado OT. Queries activas seguras a PLCs. Integración con Tenable.io/Nessus para visión IT/OT unificada.",
      complianceUrl: "https://www.tenable.com/solutions/ot-security/compliance",
      strength: 4.0,
      fit: 4.2,
      risk: 2,
      gartner: "Strong Performer (CPS Protection)",
      bestFor: "Gestión de vulnerabilidades OT. Queries activas seguras a controladores. Organizaciones con Tenable IT existente.",
      caution: "Monitorización de red menos profunda que Nozomi/Claroty. Respuesta a incidentes OT limitada. Sin endpoint protection."
    },
    {
      name: "Waterfall Security",
      color: "#1e3a5f",
      logo: "https://www.google.com/s2/favicons?domain=waterfall-security.com&sz=32",
      docsUrl: "https://waterfall-security.com/resources/",
      productUrl: "https://waterfall-security.com/products/",
      compliance: "IEC 62443, NERC CIP, NIS2, ANSSI, BSI, Nuclear (NRC 10CFR73.54)",
      complianceDetail: "Diodos de datos unidireccionales certificados por múltiples reguladores nucleares. Máxima seguridad física para air gap. Cumplimiento ANSSI PDIS. Aprobado para infraestructura nuclear.",
      complianceUrl: "https://waterfall-security.com/compliance/",
      strength: 4.5,
      fit: 3.5,
      risk: 1,
      gartner: "Niche Player (CPS Protection)",
      bestFor: "Infraestructura nuclear y crítica máxima. Diodos de datos hardware. Air gap seguro con monitorización.",
      caution: "Solo unidireccional por diseño. No cubre visibilidad activa ni endpoint. Nicho muy específico. Alto coste de hardware."
    },
    {
      name: "OPSWAT",
      color: "#f59e0b",
      logo: "https://www.google.com/s2/favicons?domain=opswat.com&sz=32",
      docsUrl: "https://docs.opswat.com/",
      productUrl: "https://www.opswat.com/solutions/ot-it-security",
      compliance: "IEC 62443, NERC CIP, NIS2, Nuclear (NRC), NIST CSF",
      complianceDetail: "MetaDefender para transferencia segura de archivos a zonas OT. Kiosk para medios removibles (USB). Sanitización CDR (Content Disarm and Reconstruction). Aprobado para entornos nucleares.",
      complianceUrl: "https://www.opswat.com/solutions/compliance",
      strength: 4.1,
      fit: 3.9,
      risk: 2,
      gartner: "Niche Player (CPS Protection)",
      bestFor: "Control de medios removibles y transferencia de archivos. Sanitización de malware en frontera IT/OT. Entornos nucleares y alta seguridad.",
      caution: "No es plataforma de visibilidad OT completa. Complemento, no sustituto de NDR OT. Nicho específico de transferencia segura."
    },
    {
      name: "Schneider Electric",
      color: "#3dcd58",
      logo: "https://www.google.com/s2/favicons?domain=se.com&sz=32",
      docsUrl: "https://www.se.com/ww/en/work/solutions/cybersecurity/",
      productUrl: "https://www.se.com/ww/en/work/solutions/cybersecurity/",
      compliance: "IEC 62443, NIS2, NERC CIP, ANSSI",
      complianceDetail: "EcoStruxure Cybersecurity Admin Expert. Certificación IEC 62443-4-1 en desarrollo de productos. Servicios gestionados de ciberseguridad OT. Fuerte en energía y building management.",
      complianceUrl: "https://www.se.com/ww/en/work/solutions/cybersecurity/standards-and-regulations/",
      strength: 3.7,
      fit: 3.6,
      risk: 3,
      gartner: "Niche Player (CPS Protection)",
      bestFor: "Entornos Schneider Electric nativos. Energía, agua, building management. Servicios gestionados OT en Europa.",
      caution: "Mejor en ecosistema propio. Innovación en ciberseguridad más lenta. Dependencia de partners para multi-vendor."
    },
    {
      name: "Radiflow",
      color: "#8b5cf6",
      logo: "https://www.google.com/s2/favicons?domain=radiflow.com&sz=32",
      docsUrl: "https://www.radiflow.com/resources/",
      productUrl: "https://www.radiflow.com/platform/",
      compliance: "IEC 62443, NIS2, NERC CIP, NIST CSF, ENS",
      complianceDetail: "CIARA para análisis de riesgo basado en simulación. iSID para detección de amenazas industriales. Mapeo IEC 62443 zonas y conductos. Soporte NIS2 compliance.",
      complianceUrl: "https://www.radiflow.com/compliance/",
      strength: 3.9,
      fit: 3.8,
      risk: 2,
      gartner: "Niche Player (CPS Protection)",
      bestFor: "Análisis de riesgo OT basado en simulación. Utilities y agua. Despliegues europeos con requisitos de soberanía.",
      caution: "Menor escala que líderes. Ecosistema de integraciones más pequeño. Recursos de threat intel limitados comparado con Dragos/Claroty."
    },
    {
      name: "Forescout",
      color: "#00897b",
      logo: "https://www.google.com/s2/favicons?domain=forescout.com&sz=32",
      docsUrl: "https://www.forescout.com/resources/",
      productUrl: "https://www.forescout.com/platform/",
      compliance: "IEC 62443, NIS2, NERC CIP, NIST CSF",
      complianceDetail: "Vistaro platform con visibilidad agentless de activos IT/OT/IoT. Clasificación automática de 100% de dispositivos IP. Zero Trust Network Access.",
      strength: 4.2,
      fit: 4.3,
      risk: 2,
      gartner: "Leader (Forrester Wave IoT Security)",
      bestFor: "Visibilidad agentless masiva IT/OT/IoT. Más de 180 integraciones. Segmentación y control de acceso.",
      caution: "Menos profundidad en protocolos industriales que pure-play OT. Adquirido por Advent International."
    },
    {
      name: "Cyolo",
      color: "#1565c0",
      logo: "https://www.google.com/s2/favicons?domain=cyolo.io&sz=32",
      docsUrl: "https://cyolo.io/resources/",
      productUrl: "https://cyolo.io/products/",
      compliance: "IEC 62443, NIS2, NIST CSF",
      complianceDetail: "Cyolo PRO para acceso remoto privilegiado OT con grabación de sesiones. CPS Segmentation para microsegmentación zero trust agentless.",
      strength: 3.8,
      fit: 3.7,
      risk: 2,
      gartner: "Niche Player (acceso remoto OT)",
      bestFor: "Acceso remoto seguro OT con JIT provisioning. Microsegmentación sin agente. Grabación de sesiones y MFA.",
      caution: "Empresa pequeña. Sin visibilidad de activos propia. Requiere integración con plataformas de monitorización."
    },
    {
      name: "Xage Security",
      color: "#ef6c00",
      logo: "https://www.google.com/s2/favicons?domain=xage.com&sz=32",
      docsUrl: "https://xage.com/resources/",
      productUrl: "https://xage.com/platform/",
      compliance: "IEC 62443, NERC CIP, NIS2, NIST CSF, TSA Pipeline",
      complianceDetail: "Plataforma zero trust para OT/IT/cloud. Identidad distribuida blockchain-based. Acceso granular por activo.",
      strength: 3.9,
      fit: 3.8,
      risk: 2,
      gartner: "Cool Vendor (Gartner 2023)",
      bestFor: "Zero trust nativo para OT. Identidad distribuida. Gestión de acceso granular por activo y protocolo.",
      caution: "Empresa en crecimiento. Menor base instalada. Modelo blockchain puede generar complejidad."
    },
    {
      name: "runZero",
      color: "#10b981",
      logo: "https://www.google.com/s2/favicons?domain=runzero.com&sz=32",
      docsUrl: "https://www.runzero.com/docs/",
      productUrl: "https://www.runzero.com/platform/",
      compliance: "NIST CSF, NIS2",
      complianceDetail: "Asset discovery rápido y seguro para OT. Escaneo activo no intrusivo. Inventario completo sin agentes. Adquirido por Accenture 2026.",
      strength: 3.7,
      fit: 3.9,
      risk: 1,
      gartner: "Adquirido por Accenture (2026, parte del deal Dragos $4.175B)",
      bestFor: "Descubrimiento de activos ultrarrápido. Escaneo no intrusivo seguro para OT. Inventario completo.",
      caution: "No es plataforma de seguridad completa. Requiere complementar con monitorización y protección. Futuro bajo paraguas Accenture."
    },
    {
      name: "NetRise",
      color: "#7c3aed",
      logo: "https://www.google.com/s2/favicons?domain=netrise.io&sz=32",
      docsUrl: "https://www.netrise.io/resources/",
      productUrl: "https://www.netrise.io/platform/",
      compliance: "NIST CSF, NIS2, EU CRA",
      complianceDetail: "Análisis de firmware y SBOM para dispositivos OT/IoT. Detección de vulnerabilidades en supply chain. Adquirido por Accenture 2026.",
      strength: 3.6,
      fit: 3.5,
      risk: 1,
      gartner: "Adquirido por Accenture (2026, parte del deal Dragos $4.175B)",
      bestFor: "Análisis de firmware y software de terceros. SBOM automático. Detección de vulnerabilidades en supply chain OT.",
      caution: "Nicho muy específico (firmware/SBOM). No monitoriza red. Requiere complementar con plataforma OT. Futuro Accenture."
    }
  ],

  // ─── SPANISH VENDORS (11) ──────────────────────────────────────────
  spanishVendors: [
    {
      name: "S2 Grupo",
      color: "#c2185b",
      logo: "https://www.google.com/s2/favicons?domain=s2grupo.es&sz=32",
      docsUrl: "https://s2grupo.es/recursos/",
      productUrl: "https://s2grupo.es/soluciones/",
      compliance: "ENS Alto, IEC 62443, NIS2, CCN-STIC, LSSI",
      complianceDetail: "SOC OT propio en Valencia. Laboratorio de ciberseguridad industrial. Experiencia en infraestructuras críticas españolas. Proveedor habitual CNPIC/CCN-CERT.",
      complianceUrl: "https://s2grupo.es/normativa/",
      strength: 4.3,
      fit: 4.5,
      risk: 2,
      gartner: "Regional Leader (España/LATAM)",
      bestFor: "Infraestructura crítica española. SOC OT gestionado. Proyectos CNPIC/CCN-CERT. Defensa e inteligencia.",
      caution: "Escala internacional limitada. Producto propio menos maduro que líderes globales. Dependencia de servicios profesionales.",
      ccnCert: "Proveedor cualificado CCN-CERT. Colaborador habitual en alertas ICS. Participación en ejercicios CyberEurope.",
      ensStatus: "ENS Alto certificado. Múltiples sistemas cualificados en catálogo CCN-STIC.",
      governmentContracts: "CNPIC, Ministerio de Defensa, CNI, múltiples comunidades autónomas. Contratos marco SARA.",
      incibeRelation: "Colaborador INCIBE-CERT para alertas ICS/SCADA. Participación en CERT de referencia para operadores esenciales."
    },
    {
      name: "CounterCraft",
      color: "#ff6f00",
      logo: "https://www.google.com/s2/favicons?domain=countercraftsec.com&sz=32",
      docsUrl: "https://www.countercraftsec.com/resources/",
      productUrl: "https://www.countercraftsec.com/platform/",
      compliance: "ENS, NIS2, NATO, IEC 62443",
      complianceDetail: "Plataforma de cyber deception. Desplegable en entornos OT para detectar movimiento lateral. Honeypots industriales para PLCs/SCADA. Adquirida parcialmente por Telefonica Tech.",
      complianceUrl: "https://www.countercraftsec.com/compliance/",
      strength: 4.0,
      fit: 3.8,
      risk: 2,
      gartner: "Cool Vendor (Deception Technology)",
      bestFor: "Deception en entornos OT. Detección de amenazas avanzadas. Threat intelligence por engaño. NATO/Defensa.",
      caution: "Nicho de deception, no plataforma completa. Requiere expertise en despliegue. Mercado de deception todavía emergente.",
      ccnCert: "Colaborador CCN-CERT. Tecnología evaluada por OTAN. Proyecto DARPA collaboration.",
      ensStatus: "ENS compatible. Producto desplegable en entornos clasificados con configuración adecuada.",
      governmentContracts: "NATO, Ministerio de Defensa España, proyectos europeos H2020/HorizonEurope.",
      incibeRelation: "Colaboración puntual con INCIBE en ejercicios de deception para infraestructura crítica."
    },
    {
      name: "Alias Robotics",
      color: "#00838f",
      logo: "https://www.google.com/s2/favicons?domain=aliasrobotics.com&sz=32",
      docsUrl: "https://aliasrobotics.com/research.php",
      productUrl: "https://aliasrobotics.com/products.php",
      compliance: "IEC 62443, Machinery Regulation 2023/1230, NIS2",
      complianceDetail: "Especialista en ciberseguridad robótica industrial. RIS (Robot Immune System). Investigación en vulnerabilidades ROS/ROS2. Auditoría de seguridad de robots industriales.",
      complianceUrl: "https://aliasrobotics.com/compliance.php",
      strength: 3.8,
      fit: 3.5,
      risk: 2,
      gartner: "Innovator (Robot Security)",
      bestFor: "Seguridad de robots industriales. Auditoría de sistemas ROS/ROS2. Investigación de vulnerabilidades en robótica.",
      caution: "Nicho muy específico (robótica). No cubre SCADA/PLC tradicional. Empresa pequeña, escala limitada.",
      ccnCert: "Colaboración con CCN en evaluación de riesgos de robótica industrial para infraestructura crítica.",
      ensStatus: "No aplica directamente. Producto complementario para entornos con robots industriales.",
      governmentContracts: "Proyectos europeos de investigación. Colaboración con agencias de defensa en seguridad robótica.",
      incibeRelation: "Publicaciones conjuntas con INCIBE sobre seguridad en robótica industrial. Alertas de vulnerabilidades ROS."
    },
    {
      name: "Barbara IoT",
      color: "#4527a0",
      logo: "https://www.google.com/s2/favicons?domain=barbaraiot.com&sz=32",
      docsUrl: "https://www.barbaraiot.com/resources/",
      productUrl: "https://www.barbaraiot.com/platform/",
      compliance: "IEC 62443, NIS2, ENS, ETSI EN 303 645",
      complianceDetail: "Plataforma edge IoT industrial con seguridad integrada. Gestión de dispositivos edge con cifrado y autenticación. OTA seguro. Container orchestration en edge industrial.",
      complianceUrl: "https://www.barbaraiot.com/security/",
      strength: 3.6,
      fit: 3.4,
      risk: 2,
      gartner: "Innovator (Industrial IoT Edge)",
      bestFor: "Gestión segura de edge computing industrial. Despliegue de aplicaciones en dispositivos OT. IoT industrial con seguridad by design.",
      caution: "No es plataforma de monitorización OT. Enfoque edge, no network security. Empresa en crecimiento.",
      ccnCert: "Producto en proceso de evaluación CCN. Colaboración con ecosistema de innovación español.",
      ensStatus: "ENS compatible en despliegue. Certificación en proceso para catálogo CCN-STIC.",
      governmentContracts: "Proyectos con utilities españolas. Colaboración con Red.es y CDTI.",
      incibeRelation: "Participación en programas de emprendimiento INCIBE. Ecosistema de ciberseguridad industrial español."
    },
    {
      name: "Enigmedia/Opscura",
      color: "#2e7d32",
      logo: "https://www.google.com/s2/favicons?domain=opscura.io&sz=32",
      docsUrl: "https://opscura.io/resources/",
      productUrl: "https://opscura.io/products/",
      compliance: "IEC 62443, NIS2, ENS, ANSSI",
      complianceDetail: "Cifrado de red OT a nivel 2 (capa de enlace). Protección de comunicaciones industriales sin modificar topología. Latencia ultra-baja compatible con protocolos tiempo-real. Rebranded a Opscura.",
      complianceUrl: "https://opscura.io/compliance/",
      strength: 3.7,
      fit: 3.3,
      risk: 2,
      gartner: "Innovator (OT Network Encryption)",
      bestFor: "Cifrado de comunicaciones OT sin impacto en latencia. Protección de protocolos legacy. Microsegmentación criptográfica.",
      caution: "Nicho de cifrado OT, no plataforma completa. Requiere despliegue físico. Empresa en expansión internacional.",
      ccnCert: "Tecnología evaluada por CCN. Colaboración con centros de investigación españoles en criptografía.",
      ensStatus: "Compatible ENS. Cifrado validado para comunicaciones clasificadas en entornos industriales.",
      governmentContracts: "Proyectos con operadores de infraestructura crítica españoles. Financiación CDTI/ENISA.",
      incibeRelation: "Ecosistema INCIBE de startups de ciberseguridad. Participación en CyberCamp."
    },
    {
      name: "InprOTech",
      color: "#5d4037",
      logo: "https://www.google.com/s2/favicons?domain=inprotech.es&sz=32",
      docsUrl: "https://inprotech.es/recursos/",
      productUrl: "https://inprotech.es/soluciones/",
      compliance: "IEC 62443, NIS2, ENS, LPIC",
      complianceDetail: "Consultoría y servicios de ciberseguridad industrial especializados. Auditoría IEC 62443. Análisis de riesgos SCADA. Formación especializada en seguridad OT.",
      complianceUrl: "https://inprotech.es/normativa/",
      strength: 3.8,
      fit: 3.7,
      risk: 2,
      gartner: "Regional Specialist (España)",
      bestFor: "Auditoría IEC 62443 en plantas industriales. Consultoría de seguridad OT. Formación especializada. Pymes industriales españolas.",
      caution: "Servicios profesionales, no producto software. Escala limitada a mercado español. Capacidad de delivery acotada.",
      ccnCert: "Colaborador CCN en guías de seguridad industrial. Participación en grupos de trabajo CNPIC.",
      ensStatus: "Servicios compatibles ENS. Auditorías según marco ENS para entornos industriales.",
      governmentContracts: "Proyectos con operadores esenciales españoles. Contratos con administraciones públicas locales.",
      incibeRelation: "Colaborador activo INCIBE en formación y concienciación en seguridad industrial. Ponentes habituales en InCibe CyberOT."
    },
    {
      name: "Telefonica Tech",
      color: "#0066ff",
      logo: "https://www.google.com/s2/favicons?domain=telefonicatech.com&sz=32",
      docsUrl: "https://telefonicatech.com/en/cybersecurity",
      productUrl: "https://telefonicatech.com/en/cybersecurity/ot-security",
      compliance: "ENS Alto, IEC 62443, NIS2, CCN-STIC, ISO 27001, SOC2",
      complianceDetail: "SOC OT gestionado 24/7. Integración de Claroty/Nozomi como technology partners. Servicios de seguridad industrial end-to-end. Capacidad de respuesta a incidentes OT.",
      complianceUrl: "https://telefonicatech.com/en/cybersecurity/compliance",
      strength: 4.1,
      fit: 4.3,
      risk: 2,
      gartner: "Regional Leader (MSSP España/LATAM)",
      bestFor: "SOC OT gestionado para grandes empresas. Integración IT/OT en SOC unificado. Cobertura España + LATAM. Compliance NIS2/ENS end-to-end.",
      caution: "Integrador, no fabricante de producto OT. Dependencia de tecnología de terceros. Contratos grandes, no apto para pymes.",
      ccnCert: "Proveedor cualificado CCN-CERT. Múltiples certificaciones en catálogo STIC. CERT propio acreditado.",
      ensStatus: "ENS Alto certificado. Múltiples servicios cualificados. SOC certificado ENS.",
      governmentContracts: "Contratos marco AGE. CNPIC. Ministerios varios. Comunidades autónomas. Empresas públicas.",
      incibeRelation: "Partner estratégico INCIBE. Colaboración en alertas y gestión de incidentes. Participación en CERT de referencia."
    },
    {
      name: "Deloitte Spain",
      color: "#86bc25",
      logo: "https://www.google.com/s2/favicons?domain=deloitte.es&sz=32",
      docsUrl: "https://www2.deloitte.com/es/es/pages/technology/solutions/ciberseguridad-industrial.html",
      productUrl: "https://www2.deloitte.com/es/es/pages/technology/solutions/ciberseguridad-industrial.html",
      compliance: "ENS Alto, IEC 62443, NIS2, ISO 27001, NIST CSF",
      complianceDetail: "CyberSOC con capacidades OT. Equipo de ciberseguridad industrial dedicado en Madrid. Auditoría IEC 62443 y NIS2. Integración de soluciones best-of-breed.",
      complianceUrl: "https://www2.deloitte.com/es/es/pages/risk/solutions/compliance-ciberseguridad.html",
      strength: 4.0,
      fit: 4.2,
      risk: 2,
      gartner: "Leader (Cybersecurity Consulting, Gartner)",
      bestFor: "Auditoría y consultoría IEC 62443/NIS2. Grandes empresas e IBEX35. Transformación digital segura de OT. GRC industrial.",
      caution: "Consultoría premium, coste muy alto. No producto propio OT. Dependencia de subcontratación para operaciones.",
      ccnCert: "Proveedor habitual en proyectos CCN. Auditor reconocido para ENS Alto en entornos industriales.",
      ensStatus: "ENS Alto certificado para servicios de consultoría. Auditor autorizado ENS.",
      governmentContracts: "Contratos marco AGE. Auditorías para operadores de servicios esenciales. Ministerios de Industria y Defensa.",
      incibeRelation: "Colaborador en estudios e informes INCIBE. Participación en eventos y formación especializada."
    },
    {
      name: "Tarlogic",
      color: "#e65100",
      logo: "https://www.google.com/s2/favicons?domain=tarlogic.com&sz=32",
      docsUrl: "https://www.tarlogic.com/es/recursos/",
      productUrl: "https://www.tarlogic.com/es/servicios/seguridad-iot-ot/",
      compliance: "ENS, IEC 62443, NIS2, OWASP IoT",
      complianceDetail: "Pentesting especializado en IoT/OT/ICS. Investigación de vulnerabilidades en dispositivos industriales. Auditoría de seguridad de protocolos industriales. Equipo de hardware hacking.",
      complianceUrl: "https://www.tarlogic.com/es/normativa/",
      strength: 3.9,
      fit: 3.6,
      risk: 2,
      gartner: "Regional Specialist (Pentesting IoT/OT)",
      bestFor: "Pentesting OT/IoT especializado. Auditoría de dispositivos industriales. Investigación de vulnerabilidades hardware. Red team industrial.",
      caution: "Servicios ofensivos, no producto de monitorización continua. Escala limitada. No SOC gestionado OT.",
      ccnCert: "Colaborador CCN en análisis de vulnerabilidades. Publicación de CVEs en dispositivos industriales.",
      ensStatus: "ENS certificado para servicios de auditoría. Capacidad de evaluación ENS en entornos OT.",
      governmentContracts: "Proyectos puntuales con administración pública. Auditorías para operadores de infraestructura crítica.",
      incibeRelation: "Publicación de vulnerabilidades coordinada con INCIBE-CERT. Ponentes en CyberCamp y eventos INCIBE."
    },
    {
      name: "Cipher (Prosegur)",
      color: "#b71c1c",
      logo: "https://www.google.com/s2/favicons?domain=cipher.com&sz=32",
      docsUrl: "https://cipher.com/resources/",
      productUrl: "https://cipher.com/managed-security-services/",
      compliance: "ENS Alto, IEC 62443, NIS2, ISO 27001, SOC2",
      complianceDetail: "División de ciberseguridad de Prosegur. SOC global con capacidades OT. xMDR con cobertura industrial. Convergencia seguridad física/lógica/OT.",
      complianceUrl: "https://cipher.com/compliance/",
      strength: 3.7,
      fit: 3.5,
      risk: 2,
      gartner: "Regional Player (MSSP España/LATAM)",
      bestFor: "Convergencia seguridad física y ciberseguridad OT. SOC gestionado multi-dominio. Organizaciones con Prosegur como proveedor de seguridad física.",
      caution: "Capacidades OT en desarrollo comparado con pure-play. Producto propio limitado. Menor profundidad técnica ICS.",
      ccnCert: "Proveedor cualificado CCN para servicios de SOC. Catálogo STIC para servicios gestionados.",
      ensStatus: "ENS Alto certificado para SOC y servicios gestionados.",
      governmentContracts: "Contratos de seguridad integral (física+ciber) con administración pública. Prosegur como proveedor establecido.",
      incibeRelation: "Colaboración con INCIBE en concienciación empresarial. Participación en ecosistema de ciberseguridad español."
    },
    {
      name: "Titanium Industrial Security",
      color: "#455a64",
      logo: "https://www.google.com/s2/favicons?domain=titaniumindustrialsecurity.com&sz=32",
      docsUrl: "https://www.titaniumindustrialsecurity.com/",
      productUrl: "https://www.titaniumindustrialsecurity.com/",
      compliance: "IEC 62443, ISO 27001, ENS, NIS2",
      complianceDetail: "Plataforma propietaria Rutile (descubrimiento de activos, monitorización pasiva, gestión de riesgos OT) + servicios integrales: SOC OT 24/7, laboratorio industrial, auditorías IEC 62443/ISO 27001/NIS2, pentesting industrial y respuesta a incidentes.",
      complianceUrl: "https://www.titaniumindustrialsecurity.com/servicios_es.html",
      strength: 4.1,
      fit: 4.0,
      risk: 2,
      gartner: "Especialista OT español con plataforma propia",
      bestFor: "Plataforma Rutile: descubrimiento automático de activos ICS/SCADA, monitorización pasiva sin impacto en producción, gestión de riesgos y cumplimiento normativo. SOC OT 24/7/365, laboratorio industrial, pentesting OT. Sedes en San Sebastián, León, Bilbao y Madrid.",
      caution: "Menor escala internacional que grandes consultoras. Cobertura geográfica centrada en España. Rutile no aparece en cuadrantes de analistas internacionales (Gartner/Forrester).",
      ccnCert: "Alineado con marco de ciberseguridad industrial nacional",
      ensStatus: "Alineado ENS",
      governmentContracts: "Proyectos en generación eléctrica, transporte y manufactura",
      incibeRelation: "Participante activo en ecosistema CCI (Centro de Ciberseguridad Industrial). Fundada 2016. Parte de INZU Group."
    },
    {
      name: "Steryon",
      color: "#00695c",
      logo: "https://www.google.com/s2/favicons?domain=steryon.com&sz=32",
      docsUrl: "https://steryon.com/",
      productUrl: "https://steryon.com/",
      compliance: "NIS2, IEC 62443, ISO 27001",
      complianceDetail: "Plataforma modular de cyber resilience y gestión de riesgos para sistemas ciber-físicos (CPS). Automatización del 70% de validación de controles NIS2/IEC 62443/ISO 27001. Reducción del 80% de ruido de alertas mediante correlación contextual. Remediación guiada por CVE priorizada por impacto de negocio.",
      complianceUrl: "https://steryon.com/",
      strength: 3.6,
      fit: 3.5,
      risk: 1,
      gartner: "Startup OT española (2024)",
      bestFor: "Plataforma unificada de visibilidad de riesgo OT en tiempo real. Single pane of glass para riesgo, compliance y remediación. Automatización de cumplimiento NIS2/IEC 62443. Integración con herramientas existentes sin reemplazo. IA para clasificación documental y análisis de riesgos.",
      caution: "Startup muy joven (fundada 2024, $1.2M funding). Sin base instalada amplia. Producto en fase de maduración. Sin presencia en cuadrantes de analistas.",
      ccnCert: "No documentado",
      ensStatus: "No documentado",
      governmentContracts: "No documentado",
      incibeRelation: "Ecosistema de ciberseguridad industrial español. Fundada 2024. Sedes en Barcelona (HQ) y Bilbao."
    }
  ],

  // ─── CRITERIA (18 OT-specific) ─────────────────────────────────────
  criteria: [
    { id: "asset_discovery", label: "Descubrimiento de activos OT", weight: 5, scores: [5,5,4,3,4,4,5,3,4,3,4,2,3,3,4,5,2,3,5,3] },
    { id: "network_monitoring", label: "Monitorización de red industrial", weight: 5, scores: [5,5,5,4,4,4,4,3,4,3,3,2,2,3,4,4,2,2,3,2] },
    { id: "threat_detection", label: "Detección de amenazas OT", weight: 5, scores: [5,5,5,4,4,4,4,4,4,3,3,3,3,3,4,4,2,3,2,2] },
    { id: "vulnerability_mgmt", label: "Gestión de vulnerabilidades", weight: 4, scores: [5,4,4,3,3,4,5,4,3,4,5,2,3,3,4,4,2,3,3,5] },
    { id: "remote_access", label: "Acceso remoto seguro", weight: 4, scores: [5,4,3,4,4,3,3,3,3,4,2,2,3,3,3,3,5,4,2,2] },
    { id: "endpoint_protection", label: "Protección endpoint OT", weight: 4, scores: [3,4,3,4,3,3,3,5,3,3,2,2,4,2,2,3,2,2,2,2] },
    { id: "segmentation", label: "Segmentación de red industrial", weight: 5, scores: [4,3,3,5,5,3,3,5,3,4,2,5,3,3,3,4,4,4,2,2] },
    { id: "compliance", label: "Cumplimiento normativo (IEC 62443/NIS2)", weight: 4, scores: [5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,3,3] },
    { id: "protocol_coverage", label: "Cobertura de protocolos industriales", weight: 5, scores: [5,5,5,4,4,4,4,4,4,4,4,3,3,4,4,3,2,2,3,2] },
    { id: "threat_intel", label: "Inteligencia de amenazas ICS", weight: 4, scores: [4,4,5,4,3,4,4,3,3,3,3,3,2,2,3,3,2,2,2,2] },
    { id: "incident_response", label: "Respuesta a incidentes OT", weight: 4, scores: [4,4,5,3,3,3,3,3,3,3,3,2,2,3,3,3,2,2,2,2] },
    { id: "it_ot_convergence", label: "Convergencia IT/OT", weight: 4, scores: [5,4,3,4,4,5,5,3,3,3,4,2,3,3,3,5,3,3,3,3] },
    { id: "soc_integration", label: "Integración SOC/SIEM", weight: 4, scores: [5,4,4,4,4,5,5,3,3,3,4,3,3,3,3,4,2,3,3,2] },
    { id: "deployment_ease", label: "Facilidad de despliegue", weight: 3, scores: [4,4,3,4,3,4,5,4,3,3,4,3,3,3,4,4,4,4,5,4] },
    { id: "sovereignty", label: "Soberanía y on-premise", weight: 3, scores: [4,4,4,5,4,2,2,4,4,4,3,5,4,4,4,3,4,4,3,3] },
    { id: "scalability", label: "Escalabilidad", weight: 3, scores: [5,5,4,4,4,5,5,4,3,3,4,3,3,3,4,5,3,3,4,3] },
    { id: "tco", label: "TCO (Coste Total)", weight: 4, scores: [2,3,2,4,3,4,3,4,3,3,3,3,3,3,3,3,3,3,4,4] },
    { id: "ai_innovation", label: "IA e innovación", weight: 3, scores: [5,5,4,4,3,5,5,4,4,4,4,2,3,3,3,4,3,3,3,3] }
  ],

  // ─── USE CASES (15 OT-specific) ────────────────────────────────────
  useCases: [
    {
      id: "asset_visibility",
      label: "Visibilidad de activos OT/IoT",
      description: "Inventario completo y automático de todos los activos OT, IoT e IIoT en la red industrial.",
      fits: [5,5,4,3,4,4,5,3,4,3,4,2,3,3,4,5,2,3,5,3]
    },
    {
      id: "passive_monitoring",
      label: "Monitorización pasiva sin impacto",
      description: "Análisis de tráfico de red industrial sin inyectar paquetes ni afectar a los procesos productivos.",
      fits: [5,5,5,3,4,4,4,3,4,3,3,2,2,3,4,4,2,2,3,2]
    },
    {
      id: "protocol_anomaly",
      label: "Detección de anomalías en protocolos industriales",
      description: "Inspección profunda de protocolos como Modbus, DNP3, S7comm, EtherNet/IP, OPC-UA para detectar comandos anómalos.",
      fits: [5,5,5,4,4,3,4,4,4,4,4,3,2,3,4,3,2,2,2,2]
    },
    {
      id: "purdue_segmentation",
      label: "Segmentación Purdue/ISA 62443",
      description: "Implementación de zonas y conductos según modelo Purdue y norma ISA/IEC 62443-3-2.",
      fits: [4,3,3,5,5,3,3,5,3,4,2,5,3,3,3,4,4,4,2,2]
    },
    {
      id: "secure_remote",
      label: "Acceso remoto seguro a PLCs/SCADA",
      description: "Acceso remoto controlado y auditado a sistemas de control industrial para mantenimiento y soporte.",
      fits: [5,4,3,4,4,3,3,3,3,4,2,2,3,3,3,3,5,4,2,2]
    },
    {
      id: "legacy_endpoint",
      label: "Protección endpoint legacy Windows/HMI",
      description: "Protección de estaciones HMI, servidores SCADA y PCs industriales con Windows XP/7/10 legacy.",
      fits: [3,3,2,4,3,3,3,5,3,3,2,2,4,2,2,3,2,2,2,2]
    },
    {
      id: "virtual_patching",
      label: "Virtual patching para sistemas no parcheables",
      description: "Protección de sistemas OT que no pueden ser parcheados mediante reglas IPS/IDS inline.",
      fits: [4,3,3,5,4,3,3,5,3,3,3,3,3,3,3,3,2,3,2,4]
    },
    {
      id: "nis2_compliance",
      label: "Cumplimiento NIS2/IEC 62443",
      description: "Generación de informes y evidencias de cumplimiento para NIS2, IEC 62443, NERC CIP y ENS.",
      fits: [5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,3,3]
    },
    {
      id: "siem_xdr_integration",
      label: "Integración con SIEM/XDR corporativo",
      description: "Envío de alertas y telemetría OT a plataformas SIEM/SOAR/XDR para SOC unificado.",
      fits: [5,4,4,4,4,5,5,3,3,3,4,3,3,3,3,4,2,3,3,2]
    },
    {
      id: "ot_incident_response",
      label: "Respuesta a incidentes OT",
      description: "Capacidad de investigación forense, contención y recuperación ante incidentes en entornos industriales.",
      fits: [4,4,5,3,3,3,3,3,3,3,3,2,2,3,3,3,2,2,2,2]
    },
    {
      id: "supply_chain_risk",
      label: "Gestión de riesgo de la cadena de suministro",
      description: "Evaluación de riesgos de terceros, firmware de proveedores y componentes de la cadena de suministro OT.",
      fits: [4,4,4,3,3,4,4,4,3,3,4,3,4,3,3,3,2,3,3,5]
    },
    {
      id: "data_diode",
      label: "Diodos de datos / air gap seguro",
      description: "Transferencia unidireccional de datos desde redes OT a IT manteniendo aislamiento físico.",
      fits: [2,2,2,3,2,1,1,2,2,2,1,5,4,2,2,2,2,2,2,2]
    },
    {
      id: "it_ot_soc",
      label: "Convergencia IT/OT en SOC unificado",
      description: "Operación de un SOC que gestione alertas IT y OT con contexto industrial enriquecido.",
      fits: [5,4,3,4,4,5,5,3,3,3,4,2,3,3,3,5,3,3,3,2]
    },
    {
      id: "5g_industrial",
      label: "Protección de redes 5G industriales",
      description: "Seguridad para redes 5G privadas en entornos industriales y campus manufacturing.",
      fits: [4,3,2,4,4,3,4,3,2,3,2,1,2,2,2,3,2,3,2,2]
    },
    {
      id: "sovereign_onprem",
      label: "Soberanía tecnológica / despliegue on-premise",
      description: "Despliegue completamente on-premise sin dependencia de cloud externo. Requisito para ENS Alto e infraestructura crítica.",
      fits: [4,4,4,5,4,2,2,4,4,4,3,5,4,4,4,3,4,4,3,3]
    }
  ],

  // ─── PRODUCT CAPABILITIES (20 vendors) ─────────────────────────────
  productCapabilities: [
    {
      vendor: "Claroty",
      primary: "Claroty xDome / CTD",
      implementationGrade: "Avanzado. Platform completa con xDome (SaaS) y CTD (on-prem). Edge sensors distribuidos.",
      maturity: 4.7,
      core: ["Asset discovery DPI", "Network monitoring pasivo", "Vulnerability management", "Secure remote access (SRA)", "Threat detection ML/rules"],
      adjacent: ["Risk scoring", "Compliance reporting", "Network segmentation planning", "IoMT security"],
      peerOverlap: ["Nozomi Networks", "Armis", "Microsoft Defender IoT", "Tenable OT"],
      implementation: ["Sensor físico/virtual en SPAN port", "Integración con switches gestionados", "Connector a Sentinel/Splunk/QRadar", "API REST para automatización"],
      differentiators: ["Cobertura IT/OT/IoMT más amplia del mercado", "SRA integrado en plataforma", "Base de datos de protocolos industriales más extensa", "xDome SaaS con data residency EU"],
      caution: "TCO elevado para despliegues grandes. Sensor hardware propietario. Licenciamiento por activo descubierto puede escalar rápido.",
      sources: ["https://claroty.com/industrial-cybersecurity", "https://www.gartner.com/reviews/market/cps-protection-platforms/vendor/claroty"]
    },
    {
      vendor: "Nozomi Networks",
      primary: "Nozomi Guardian / Vantage",
      implementationGrade: "Avanzado. Guardian (on-prem) + Vantage (cloud). Arc sensor para endpoint visibility.",
      maturity: 4.6,
      core: ["Network monitoring pasivo/activo", "Asset discovery", "Threat detection AI", "Vulnerability assessment", "Protocol analysis 100+"],
      adjacent: ["Vantage cloud management", "Arc endpoint sensor", "Threat intelligence feed", "Compliance dashboards"],
      peerOverlap: ["Claroty", "Dragos", "Armis", "Tenable OT"],
      implementation: ["Guardian appliance en SPAN", "Remote Collector para sites distribuidos", "Arc agent ligero en endpoints", "Vantage SaaS multi-tenant"],
      differentiators: ["Mayor número de protocolos OT soportados nativamente", "Vantage cloud con data residency flexible", "Arc sensor para visibilidad endpoint sin agente pesado", "Comunidad y marketplace de threat packs"],
      caution: "Respuesta activa limitada (detección, no bloqueo inline). Pricing por Guardian appliance puede ser alto en multi-site.",
      sources: ["https://www.nozominetworks.com/products", "https://www.gartner.com/reviews/market/cps-protection-platforms/vendor/nozomi-networks"]
    },
    {
      vendor: "Dragos",
      primary: "Dragos Platform",
      implementationGrade: "Avanzado. Plataforma on-prem con WorldView threat intel. Servicios de IR dedicados.",
      maturity: 4.8,
      core: ["Threat detection ICS", "Threat intelligence (WorldView)", "Incident response OT", "Vulnerability management", "Network monitoring"],
      adjacent: ["Neighborhood Keeper (community defense)", "Professional services", "Training (SANS partnership)", "Threat hunting OT"],
      peerOverlap: ["Claroty", "Nozomi Networks", "Tenable OT"],
      implementation: ["Sensor pasivo en SPAN/TAP", "Dragos Platform on-prem", "WorldView TI feed integrado", "SiteStore para multi-site"],
      differentiators: ["Threat intelligence ICS más profunda del mercado (WorldView)", "Equipo de respuesta a incidentes OT más experimentado", "Activity Groups tracking (adversarios ICS)", "Neighborhood Keeper para defensa comunitaria"],
      caution: "Solo on-premise, sin opción SaaS nativa. Precio premium. Menor cobertura de IoT/BMS que Claroty/Armis. No ofrece endpoint protection.",
      sources: ["https://www.dragos.com/platform/", "https://www.gartner.com/reviews/market/cps-protection-platforms/vendor/dragos"]
    },
    {
      vendor: "Fortinet OT",
      primary: "FortiGate Rugged / FortiNAC / FortiDeceptor",
      implementationGrade: "Maduro. Extensión del Security Fabric al mundo OT con appliances ruggedized.",
      maturity: 4.2,
      core: ["Firewall/IPS industrial (FortiGate Rugged)", "Segmentación Purdue", "SD-WAN industrial", "NAC para OT (FortiNAC)", "VPN/ZTNA"],
      adjacent: ["FortiDeceptor OT honeypots", "FortiSIEM", "FortiEDR", "FortiManager centralizado"],
      peerOverlap: ["Cisco Industrial", "TXOne Networks", "Waterfall Security"],
      implementation: ["FortiGate Rugged inline en conductos ISA 62443", "FortiSwitch industrial", "FortiNAC para segmentación dinámica", "FortiManager para gestión centralizada"],
      differentiators: ["TCO más competitivo con Security Fabric integrado", "Mayor base instalada de firewalls industriales", "SD-WAN industrial nativo", "Catálogo CCN-STIC extenso"],
      caution: "Historial de CVEs críticos en FortiOS (CVE-2023-27997, CVE-2024-21762). Visibilidad OT nativa limitada sin FortiNAC. Lock-in en Security Fabric.",
      sources: ["https://www.fortinet.com/solutions/industries/scada-industrial-control-systems", "https://www.cvedetails.com/vendor/3080/Fortinet.html"]
    },
    {
      vendor: "Cisco Industrial",
      primary: "Cisco Cyber Vision / ISA 3000",
      implementationGrade: "Maduro. Cyber Vision integrado en switches industriales. ISA 3000 firewall industrial.",
      maturity: 4.0,
      core: ["Cyber Vision (visibilidad OT)", "ISA 3000 firewall industrial", "Segmentación TrustSec/ISE", "Identity Services Engine", "SD-WAN industrial"],
      adjacent: ["SecureX/XDR", "Stealthwatch", "Duo MFA", "Umbrella DNS"],
      peerOverlap: ["Fortinet OT", "Claroty", "Microsoft Defender IoT"],
      implementation: ["Cyber Vision sensor integrado en IE3x00/IE9300", "ISA 3000 inline", "ISE para NAC industrial", "DNAC para automatización"],
      differentiators: ["Sensor embebido en switches industriales (no hardware extra)", "Microsegmentación con TrustSec en OT", "Ecosistema de networking industrial más extenso", "ISE como punto de control de acceso unificado"],
      caution: "Cyber Vision requiere switches Cisco. Detección OT menos profunda que pure-play. Complejidad de licenciamiento Cisco DNA.",
      sources: ["https://www.cisco.com/site/us/en/solutions/internet-of-things/industrial-security/index.html"]
    },
    {
      vendor: "Microsoft Defender IoT",
      primary: "Microsoft Defender for IoT",
      implementationGrade: "Avanzado. Sensor on-prem + Azure cloud analytics. Integración nativa Sentinel/Defender XDR.",
      maturity: 4.1,
      core: ["Asset discovery agentless", "Network monitoring OT", "Threat detection ML", "Vulnerability assessment", "Integration Sentinel/Defender XDR"],
      adjacent: ["Azure IoT Hub security", "Microsoft Sentinel SOAR", "Defender for Endpoint", "Copilot for Security"],
      peerOverlap: ["Claroty", "Armis", "Nozomi Networks"],
      implementation: ["Sensor on-prem en SPAN/TAP", "Azure portal para management", "Conectores nativos a Sentinel", "API para integración con SOAR"],
      differentiators: ["Integración nativa con ecosistema Microsoft (Sentinel, Defender XDR, Copilot)", "Sin coste adicional de licencia para E5 Security", "Convergencia IT/OT en un solo portal", "Copilot for Security con contexto OT"],
      caution: "Dependencia de Azure para funcionalidades avanzadas. Profundidad OT menor que Claroty/Nozomi/Dragos. Soberanía limitada si no se usa Azure EU.",
      sources: ["https://learn.microsoft.com/en-us/azure/defender-for-iot/", "https://www.gartner.com/reviews/market/cps-protection-platforms/vendor/microsoft"]
    },
    {
      vendor: "Armis",
      primary: "Armis Centrix",
      implementationGrade: "Avanzado. Plataforma cloud-native. Asset Intelligence Engine con 3B+ dispositivos catalogados.",
      maturity: 4.4,
      core: ["Asset discovery agentless masivo", "Vulnerability prioritization", "Threat detection behavioral", "Risk scoring contextual", "Policy enforcement"],
      adjacent: ["Medical device security (IoMT)", "Cloud security posture", "IT asset management", "Compliance reporting"],
      peerOverlap: ["Claroty", "Microsoft Defender IoT", "Nozomi Networks", "Tenable OT"],
      implementation: ["Integración via traffic mirroring", "Collectors on-prem ligeros", "Cloud-native SaaS", "API-first para integración"],
      differentiators: ["Base de datos de dispositivos más grande (3B+ device profiles)", "Descubrimiento agentless sin impacto", "Priorización de riesgo basada en contexto de negocio", "Velocidad de despliegue (semanas vs meses)"],
      caution: "Cloud-first, opciones on-prem muy limitadas. Menor profundidad en protocolos OT legacy. Pricing agresivo en grandes despliegues. Soberanía comprometida.",
      sources: ["https://www.armis.com/platform/", "https://www.gartner.com/reviews/market/cps-protection-platforms/vendor/armis"]
    },
    {
      vendor: "TXOne Networks",
      primary: "TXOne StellarProtect / EdgeFire / EdgeIPS",
      implementationGrade: "Avanzado. Suite OT-native con endpoint + network inline. Spin-off de Trend Micro + Moxa.",
      maturity: 4.3,
      core: ["Endpoint protection OT (StellarProtect/Enforce)", "IPS inline industrial (EdgeIPS)", "Firewall industrial (EdgeFire)", "USB security (ElementOne)", "CPSDR approach"],
      adjacent: ["StellarOne management console", "Virtual patching", "OT-native antimalware", "Asset discovery via EdgeIPS"],
      peerOverlap: ["Fortinet OT", "Claroty", "OPSWAT"],
      implementation: ["StellarProtect agent en HMI/SCADA", "StellarEnforce lockdown para legacy", "EdgeIPS inline entre zonas", "EdgeFire como firewall de conducto"],
      differentiators: ["Único vendor con endpoint + network OT-native", "StellarEnforce para Windows XP/7 sin updates", "EdgeIPS inline transparente sin reconfiguración", "Herencia Trend Micro en threat research + Moxa en industrial networking"],
      caution: "Visibilidad pasiva de red limitada comparada con NDR pure-play. Menor threat intel ICS que Dragos. Dependencia de StellarOne para gestión centralizada.",
      sources: ["https://www.txone.com/products/", "https://www.gartner.com/reviews/market/cps-protection-platforms/vendor/txone"]
    },
    {
      vendor: "Honeywell",
      primary: "Honeywell Forge Cybersecurity+ / Secure Connection",
      implementationGrade: "Maduro en ecosistema propio. Forge para monitorización. Secure Connection para acceso remoto.",
      maturity: 3.9,
      core: ["Cybersecurity monitoring (Forge)", "Secure remote access", "Patch management OT", "Risk management", "Asset inventory"],
      adjacent: ["Managed security services", "OT SOC as a service", "Compliance consulting", "Training"],
      peerOverlap: ["Siemens", "Schneider Electric", "Claroty"],
      implementation: ["Forge appliance en red Honeywell", "Secure Connection gateway", "Integration con Honeywell DCS/SCADA", "Managed service portal"],
      differentiators: ["Conocimiento profundo de procesos industriales propios", "Secure Connection para acceso remoto nativo", "Servicios gestionados de OT security", "Experiencia en industria de proceso y refinerías"],
      caution: "Mucho mejor en ecosistema Honeywell, limitado multi-vendor. Innovación más lenta. Dependencia de servicios profesionales para despliegue.",
      sources: ["https://process.honeywell.com/us/en/solutions/cybersecurity"]
    },
    {
      vendor: "Siemens",
      primary: "SINEC Security Guard / SCALANCE Security",
      implementationGrade: "Maduro en ecosistema Siemens. SINEC para vulnerability management. SCALANCE para segmentación.",
      maturity: 3.8,
      core: ["Vulnerability management (SINEC Security Guard)", "Industrial firewalls (SCALANCE S/M)", "Network management (SINEC NMS)", "Secure communication", "Certificate management"],
      adjacent: ["MindSphere security", "Industrial Edge security", "SIMATIC security features", "Consulting services"],
      peerOverlap: ["Honeywell", "Schneider Electric", "Fortinet OT"],
      implementation: ["SCALANCE S/M inline", "SINEC NMS para gestión", "SINEC Security Guard cloud/on-prem", "Defense in depth en SIMATIC"],
      differentiators: ["Seguridad integrada en automatización Siemens", "ProductCERT propio con advisories rápidos", "SINEC Security Guard para priorización de vulnerabilidades", "Mayor base instalada de PLCs del mundo"],
      caution: "Mejor en ecosistema Siemens. Complejidad de portfolio (múltiples productos). Visibilidad multi-vendor limitada sin terceros.",
      sources: ["https://new.siemens.com/global/en/products/automation/industrial-communication/industrial-network-security.html"]
    },
    {
      vendor: "Tenable OT",
      primary: "Tenable OT Security (ex-Indegy)",
      implementationGrade: "Avanzado. Queries activas seguras a PLCs. Integración con Tenable.io para visión unificada.",
      maturity: 4.0,
      core: ["Vulnerability management OT", "Active queries a PLCs/RTUs", "Asset discovery", "Configuration assessment", "Risk-based prioritization"],
      adjacent: ["Tenable.io integration", "Nessus scanning", "Lumin exposure management", "Compliance reporting"],
      peerOverlap: ["Claroty", "Nozomi Networks", "Armis"],
      implementation: ["Sensor on-prem pasivo + queries activas", "Integración nativa con Tenable.io", "Nessus scan integration", "API para SOAR/SIEM"],
      differentiators: ["Queries activas seguras que interrogan PLCs sin impacto", "Mejor vulnerability management OT del mercado", "Visión unificada IT/OT con Tenable.io", "Configuration change detection en controladores"],
      caution: "Monitorización de red menos profunda que NDR pure-play. Sin endpoint protection. Respuesta a incidentes limitada. Threat intel básica.",
      sources: ["https://www.tenable.com/products/ot-security", "https://docs.tenable.com/tenable-ot-security/"]
    },
    {
      vendor: "Waterfall Security",
      primary: "Waterfall Unidirectional Security Gateways",
      implementationGrade: "Especializado. Hardware unidireccional físico. Air gap con flujo de datos controlado.",
      maturity: 4.5,
      core: ["Data diodes unidireccionales", "Unidirectional CloudConnect", "FLIP (bidireccional controlado)", "Replicas de servidores OT", "Hardware-enforced security"],
      adjacent: ["OT-IT data transfer", "Cloud connectivity segura", "SCADA replication", "Historian mirroring"],
      peerOverlap: ["OPSWAT", "Fortinet OT"],
      implementation: ["Hardware inline entre zonas IT/OT", "Réplica de servidores OT en IT", "CloudConnect para envío a cloud", "FLIP para mantenimiento controlado"],
      differentiators: ["Seguridad física garantizada por hardware (imposible hackear software)", "Aprobado para entornos nucleares (NRC)", "Cero attack surface desde IT a OT", "20+ años de historial en infraestructura crítica máxima"],
      caution: "Solo unidireccional (IT no puede acceder a OT). Coste alto de hardware. No cubre visibilidad de red OT. Nicho muy específico.",
      sources: ["https://waterfall-security.com/products/", "https://waterfall-security.com/resources/"]
    },
    {
      vendor: "OPSWAT",
      primary: "OPSWAT MetaDefender / Kiosk / NetWall",
      implementationGrade: "Avanzado. Especializado en transferencia segura de archivos y medios removibles.",
      maturity: 4.1,
      core: ["File transfer security (MetaDefender)", "USB/media security (Kiosk)", "CDR (Content Disarm)", "Cross-domain transfer (NetWall)", "Multi-scanning (30+ engines)"],
      adjacent: ["ICAP integration", "Email security", "Vault secure storage", "OT endpoint hardening"],
      peerOverlap: ["Waterfall Security", "TXOne Networks"],
      implementation: ["MetaDefender server en DMZ", "Kiosk hardware para USB", "NetWall para transferencia cross-domain", "ICAP integration con proxies"],
      differentiators: ["Multi-scanning con 30+ motores antimalware", "CDR que reconstruye archivos eliminando amenazas", "Kiosk hardware dedicado para medios removibles", "Aprobado para entornos nucleares y alta seguridad"],
      caution: "No es plataforma de visibilidad OT. Complemento, no sustituto de NDR/XDR. Licenciamiento por volumen puede escalar.",
      sources: ["https://www.opswat.com/solutions/ot-it-security", "https://docs.opswat.com/"]
    },
    {
      vendor: "Schneider Electric",
      primary: "EcoStruxure Cybersecurity Admin Expert / Managed Services",
      implementationGrade: "Maduro en ecosistema propio. Servicios gestionados fuertes en Europa.",
      maturity: 3.7,
      core: ["Cybersecurity Admin Expert", "Managed security services OT", "Secure deployment services", "Vulnerability management", "Patch management"],
      adjacent: ["EcoStruxure platform security", "Consulting services", "Training", "Compliance assessment"],
      peerOverlap: ["Honeywell", "Siemens", "Claroty"],
      implementation: ["Admin Expert en red Schneider", "Managed services portal", "On-site deployment services", "Integration con SCADA Schneider"],
      differentiators: ["Conocimiento profundo de ecosistema Schneider/Modicon", "Servicios gestionados OT en Europa", "PSIRT propio con advisories", "Presencia global en energía y utilities"],
      caution: "Mejor en ecosistema propio. Producto de ciberseguridad menos maduro que pure-play. Dependencia de partners para multi-vendor.",
      sources: ["https://www.se.com/ww/en/work/solutions/cybersecurity/"]
    },
    {
      vendor: "Radiflow",
      primary: "Radiflow CIARA / iSID",
      implementationGrade: "Avanzado. CIARA para risk analysis. iSID para threat detection. Enfoque utilities.",
      maturity: 3.9,
      core: ["Risk assessment simulation (CIARA)", "Threat detection (iSID)", "Asset discovery", "Network monitoring", "Compliance mapping"],
      adjacent: ["Attack simulation", "What-if analysis", "Compliance reporting IEC 62443", "Vulnerability assessment"],
      peerOverlap: ["Nozomi Networks", "Claroty", "Tenable OT"],
      implementation: ["iSID sensor on-prem", "CIARA cloud/on-prem", "Integración con SIEM", "Management console centralizada"],
      differentiators: ["CIARA: único risk assessment basado en simulación de ataques", "What-if analysis para planificación de mitigación", "Fuerte en utilities y agua europeas", "Precio competitivo para mid-market"],
      caution: "Menor escala que líderes. Ecosistema de integraciones más pequeño. Sin endpoint protection. Threat intel limitada.",
      sources: ["https://www.radiflow.com/platform/", "https://www.radiflow.com/resources/"]
    },
    {
      vendor: "Forescout",
      primary: "Forescout Vistaro Platform",
      implementationGrade: "Avanzado. Plataforma de visibilidad agentless IT/OT/IoT. Adquirido por Advent International.",
      maturity: 4.2,
      core: ["Asset discovery agentless", "Network segmentation", "Zero Trust Network Access", "Compliance assessment", "Risk management"],
      adjacent: ["OT monitoring (eyeInspect)", "Cloud security", "Medical device security", "NAC enforcement"],
      peerOverlap: ["Claroty", "Armis", "Cisco Industrial", "Microsoft Defender IoT"],
      implementation: ["Agentless via traffic mirroring", "Integration con switches (802.1X)", "eyeInspect sensor para OT", "Cloud management console"],
      differentiators: ["180+ integraciones out-of-box", "Clasificación automática del 100% de dispositivos IP", "Cobertura IT/OT/IoT/IoMT en una sola plataforma", "Fuerte en NAC y segmentación"],
      caution: "Menor profundidad en protocolos OT que pure-play. eyeInspect (ex-SilentDefense) requiere sensor dedicado. Cambios de ownership recientes.",
      sources: ["https://www.forescout.com/platform/", "https://www.forescout.com/resources/"]
    },
    {
      vendor: "Cyolo",
      primary: "Cyolo PRO / CPS Segmentation",
      implementationGrade: "Emergente. Acceso remoto privilegiado OT y microsegmentación zero trust.",
      maturity: 3.8,
      core: ["Privileged remote access OT", "Session recording", "MFA for OT", "JIT provisioning", "Microsegmentation"],
      adjacent: ["CPS Segmentation", "Identity-based access", "Audit trail", "Compliance reporting"],
      peerOverlap: ["Claroty SRA", "Xage Security", "Fortinet ZTNA"],
      implementation: ["Gateway on-prem", "Agentless connection", "Identity provider integration", "Cloud management opcional"],
      differentiators: ["JIT provisioning para acceso OT temporal", "Grabación completa de sesiones privilegiadas", "Microsegmentación sin agente en dispositivos OT", "MFA adaptativo para entornos industriales"],
      caution: "Empresa pequeña. Sin capacidad de discovery o monitorización de red. Requiere complementar con NDR/visibility platform.",
      sources: ["https://cyolo.io/products/", "https://cyolo.io/resources/"]
    },
    {
      vendor: "Xage Security",
      primary: "Xage Fabric",
      implementationGrade: "Emergente. Zero trust distribuido para OT con identidad blockchain-based.",
      maturity: 3.9,
      core: ["Zero trust access OT", "Distributed identity", "Granular access control", "Remote access", "MFA"],
      adjacent: ["Data protection", "Blockchain identity", "Policy enforcement", "Compliance reporting"],
      peerOverlap: ["Cyolo", "Claroty SRA", "Fortinet ZTNA"],
      implementation: ["Xage Fabric nodes distribuidos", "Integration con PLCs/SCADA", "Cloud or on-prem management", "API-first architecture"],
      differentiators: ["Identidad distribuida blockchain que no depende de servidor central", "Acceso granular por activo y protocolo", "Zero trust nativo para OT (no adaptado de IT)", "Resiliente a fallos de red (mesh distribuido)"],
      caution: "Modelo blockchain añade complejidad. Empresa en crecimiento con menor base instalada. Concepto innovador pero adopción temprana.",
      sources: ["https://xage.com/platform/", "https://xage.com/resources/"]
    },
    {
      vendor: "runZero",
      primary: "runZero Platform",
      implementationGrade: "Emergente. Asset discovery ultrarrápido y no intrusivo. Adquirido por Accenture 2026.",
      maturity: 3.7,
      core: ["Asset discovery", "Network scanning no intrusivo", "Asset inventory", "Fingerprinting", "Integration APIs"],
      adjacent: ["Vulnerability correlation", "Compliance inventory", "Cloud asset discovery", "CMDB enrichment"],
      peerOverlap: ["Armis", "Forescout", "Tenable OT"],
      implementation: ["Explorer agent ligero", "Scan no intrusivo seguro para OT", "Cloud console", "API REST completa"],
      differentiators: ["Escaneo activo diseñado para ser seguro en OT", "Velocidad de descubrimiento excepcional", "Fundada por creador de Metasploit (HD Moore)", "Fingerprinting avanzado sin agentes"],
      caution: "No es plataforma de seguridad (solo discovery). Sin monitorización continua. Sin protección ni detección de amenazas. Futuro bajo Accenture.",
      sources: ["https://www.runzero.com/platform/", "https://www.runzero.com/docs/"]
    },
    {
      vendor: "NetRise",
      primary: "NetRise Platform",
      implementationGrade: "Emergente. Análisis de firmware y SBOM para dispositivos OT/IoT. Adquirido por Accenture 2026.",
      maturity: 3.6,
      core: ["Firmware analysis", "SBOM generation", "Vulnerability detection", "Supply chain risk", "Component analysis"],
      adjacent: ["EU CRA compliance", "License compliance", "Configuration analysis", "Risk scoring"],
      peerOverlap: ["OPSWAT", "Tenable OT", "Finite State"],
      implementation: ["Upload de firmware images", "Cloud analysis engine", "API REST", "Integration con CI/CD"],
      differentiators: ["Análisis de firmware binario sin acceso al código fuente", "SBOM automático para dispositivos OT/IoT", "Detección de vulnerabilidades en componentes de terceros", "Cumplimiento EU CRA proactivo"],
      caution: "Nicho muy específico (firmware/SBOM). No monitoriza red ni detecta amenazas en tiempo real. Requiere complementar con plataforma OT. Futuro Accenture.",
      sources: ["https://www.netrise.io/platform/", "https://www.netrise.io/resources/"]
    }
  ],

  // ─── RISK ITEMS ─────────────────────────────────────────────────────
  riskItems: [
    { vendor: "Claroty", level: "Bajo", detail: "Sin CVEs críticos conocidos en plataforma. Empresa bien financiada (Series D $400M). Riesgo principal: complejidad de despliegue y TCO.", score: 2 },
    { vendor: "Nozomi Networks", level: "Bajo", detail: "Sin CVEs críticos públicos. Empresa sólida (Series D $100M). Riesgo: dependencia de integraciones para respuesta activa.", score: 2 },
    { vendor: "Dragos", level: "Bajo", detail: "Incidente de seguridad en 2023 (intento de acceso a sistemas internos, contenido). Transparencia ejemplar en disclosure. Empresa bien financiada.", score: 2 },
    { vendor: "Fortinet OT", level: "Alto", detail: "Múltiples CVEs críticos en FortiOS: CVE-2023-27997 (RCE SSL-VPN), CVE-2024-21762 (out-of-band write), CVE-2024-47575 (FortiManager). Explotación activa confirmada por CISA.", score: 4 },
    { vendor: "Cisco Industrial", level: "Medio", detail: "CVEs periódicos en IOS-XE (CVE-2023-20198, CVE-2023-20273). Cyber Vision menos expuesto. Gestión de parches compleja en entornos industriales.", score: 3 },
    { vendor: "Microsoft Defender IoT", level: "Bajo", detail: "Basado en tecnología CyberX adquirida. Sensor on-prem bien aislado. Riesgo principal: dependencia de Azure para management.", score: 2 },
    { vendor: "Armis", level: "Bajo", detail: "Plataforma cloud-native bien aislada. Sin CVEs públicos significativos. Riesgo: concentración de datos en cloud.", score: 2 },
    { vendor: "TXOne Networks", level: "Bajo", detail: "Respaldo de Trend Micro en threat research. Sin CVEs críticos conocidos. Riesgo: empresa relativamente joven.", score: 2 },
    { vendor: "Honeywell", level: "Medio", detail: "CVEs periódicos en productos Honeywell (Experion PKS, Safety Manager). CISA ICS-CERT advisories frecuentes. Gestión de parches OT compleja.", score: 3 },
    { vendor: "Siemens", level: "Medio", detail: "CVEs frecuentes en SIMATIC/SINEMA (CVE-2023-44373, múltiples en S7-1500). ProductCERT activo con advisories. Stuxnet legacy awareness.", score: 3 },
    { vendor: "Tenable OT", level: "Bajo", detail: "Respaldo de Tenable (empresa cotizada). Active queries diseñadas para ser seguras. Sin CVEs críticos en producto OT.", score: 2 },
    { vendor: "Waterfall Security", level: "Muy bajo", detail: "Seguridad hardware-enforced. Imposible comprometer por software. 20+ años sin incidentes. Máxima seguridad del mercado.", score: 1 },
    { vendor: "OPSWAT", level: "Bajo", detail: "Multi-scanning reduce riesgo. Sin CVEs críticos conocidos. Hardware Kiosk aislado. Producto bien auditado.", score: 2 },
    { vendor: "Schneider Electric", level: "Medio", detail: "CVEs periódicos en EcoStruxure y Modicon (CVE-2023-6408, múltiples en M340). PSIRT activo. Triton/TRISIS awareness en Safety.", score: 3 },
    { vendor: "Radiflow", level: "Bajo", detail: "Empresa más pequeña pero sin CVEs críticos. Producto bien aislado. Riesgo: menor escala de soporte.", score: 2 },
    { vendor: "Forescout", level: "Bajo", detail: "Plataforma madura. eyeInspect (ex-SilentDefense) bien establecido. Riesgo: cambios de ownership (Advent International).", score: 2 },
    { vendor: "Cyolo", level: "Bajo", detail: "Empresa pequeña sin CVEs conocidos. Producto enfocado en acceso remoto seguro. Riesgo: tamaño de empresa y madurez.", score: 2 },
    { vendor: "Xage Security", level: "Bajo", detail: "Sin CVEs conocidos. Modelo blockchain innovador. Riesgo: adopción temprana de tecnología distribuida.", score: 2 },
    { vendor: "runZero", level: "Muy bajo", detail: "Herramienta de discovery no intrusiva. Mínima superficie de ataque. Adquirido por Accenture 2026.", score: 1 },
    { vendor: "NetRise", level: "Muy bajo", detail: "Análisis de firmware offline. Sin componentes en red OT. Mínima superficie de ataque. Adquirido por Accenture 2026.", score: 1 }
  ],

  // ─── CVE ITEMS ──────────────────────────────────────────────────────
  cveItems: [
    { vendor: "Claroty", cves: [], summary: "Sin CVEs críticos públicos en la plataforma Claroty. El equipo Team82 de Claroty es referencia en descubrimiento de vulnerabilidades OT en otros productos." },
    { vendor: "Nozomi Networks", cves: [], summary: "Sin CVEs críticos públicos en Guardian/Vantage. Nozomi Labs publica investigación de vulnerabilidades en productos OT de terceros." },
    { vendor: "Dragos", cves: [], summary: "Sin CVEs en producto. Incidente de seguridad en mayo 2023 (acceso a SharePoint corporativo y sistema de contratos) manejado con transparencia ejemplar." },
    {
      vendor: "Fortinet OT",
      cves: [
        { id: "CVE-2024-47575", cvss: 9.8, description: "FortiManager: missing authentication for critical function. Explotación activa.", date: "2024-10" },
        { id: "CVE-2024-21762", cvss: 9.6, description: "FortiOS SSL-VPN: out-of-bound write permite RCE. Explotación activa confirmada.", date: "2024-02" },
        { id: "CVE-2023-27997", cvss: 9.2, description: "FortiOS/FortiProxy SSL-VPN: heap-based buffer overflow. RCE pre-authentication.", date: "2023-06" },
        { id: "CVE-2022-40684", cvss: 9.6, description: "FortiOS/FortiProxy/FortiSwitchManager: authentication bypass.", date: "2022-10" }
      ],
      summary: "Historial preocupante de CVEs críticos con explotación activa. CISA KEV entries múltiples. Fortinet ha mejorado su programa PSIRT pero el riesgo persiste."
    },
    {
      vendor: "Cisco Industrial",
      cves: [
        { id: "CVE-2023-20198", cvss: 10.0, description: "IOS-XE Web UI: privilege escalation permite crear cuenta admin. Explotación masiva.", date: "2023-10" },
        { id: "CVE-2023-20273", cvss: 7.2, description: "IOS-XE Web UI: command injection vinculada a CVE-2023-20198.", date: "2023-10" }
      ],
      summary: "CVEs críticos en IOS-XE afectan a switches industriales IE3x00 si Web UI habilitada. Cisco Cyber Vision menos expuesto."
    },
    { vendor: "Microsoft Defender IoT", cves: [], summary: "Sin CVEs significativos en el sensor Defender for IoT. Riesgo mitigado por actualización continua del sensor on-prem." },
    { vendor: "Armis", cves: [], summary: "Sin CVEs públicos en la plataforma Armis. Armis Research descubre vulnerabilidades en terceros (TLStorm, BLEEDINGBIT)." },
    { vendor: "TXOne Networks", cves: [], summary: "Sin CVEs críticos públicos. Herencia de Trend Micro en gestión de vulnerabilidades. Producto relativamente nuevo en mercado." },
    {
      vendor: "Honeywell",
      cves: [
        { id: "CVE-2023-5389", cvss: 9.8, description: "Experion PKS C300 controller: control logic attack. Permite manipulación de proceso.", date: "2023-12" },
        { id: "CVE-2023-25770", cvss: 7.5, description: "Safety Manager: bypass permite modificar safety logic.", date: "2023-06" }
      ],
      summary: "CVEs en productos de control (Experion, Safety Manager). Advisories ICS-CERT periódicos. Riesgo de manipulación de procesos."
    },
    {
      vendor: "Siemens",
      cves: [
        { id: "CVE-2023-44373", cvss: 9.8, description: "SINEC NMS: command injection permite RCE como root.", date: "2023-11" },
        { id: "CVE-2023-46283", cvss: 7.5, description: "SIMATIC S7-1500: multiple buffer overflow vulnerabilities.", date: "2023-12" },
        { id: "CVE-2019-13945", cvss: 6.8, description: "S7-1200/1500: hardware-based vulnerability permite bypass de protección de acceso.", date: "2019-12" }
      ],
      summary: "CVEs frecuentes en portfolio extenso. ProductCERT de Siemens es uno de los más activos en ICS con advisories mensuales. Gestión de parches OT desafiante."
    },
    { vendor: "Tenable OT", cves: [], summary: "Sin CVEs críticos en Tenable OT Security. Las active queries están diseñadas para ser no disruptivas." },
    { vendor: "Waterfall Security", cves: [], summary: "Diodos de datos hardware: inmunes a vulnerabilidades software por diseño. Máxima seguridad posible." },
    { vendor: "OPSWAT", cves: [], summary: "Sin CVEs críticos públicos. MetaDefender actualizado continuamente con firmas de 30+ motores." },
    {
      vendor: "Schneider Electric",
      cves: [
        { id: "CVE-2023-6408", cvss: 8.1, description: "Modicon M340/M580: authentication bypass en servicios Modbus. Acceso no autorizado a PLC.", date: "2024-02" },
        { id: "CVE-2022-45789", cvss: 8.1, description: "Modicon Unity: authentication bypass permite lectura/escritura de memoria.", date: "2023-01" },
        { id: "CVE-2017-6034", cvss: 9.8, description: "Triton/TRISIS: ataque a Schneider Triconex Safety Controller. Caso emblemático de ataque a SIS.", date: "2017-12" }
      ],
      summary: "CVEs periódicos en Modicon y EcoStruxure. TRISIS/TRITON en 2017 fue un hito en seguridad industrial. PSIRT activo con advisories regulares."
    },
    { vendor: "Radiflow", cves: [], summary: "Sin CVEs públicos en iSID/CIARA. Empresa más pequeña con superficie de ataque reducida." },
    { vendor: "Forescout", cves: [], summary: "Sin CVEs críticos recientes en Vistaro/eyeInspect. Producto maduro con historial limpio." },
    { vendor: "Cyolo", cves: [], summary: "Sin CVEs públicos. Empresa joven con producto enfocado y superficie de ataque reducida." },
    { vendor: "Xage Security", cves: [], summary: "Sin CVEs públicos. Arquitectura distribuida blockchain reduce puntos únicos de fallo." },
    { vendor: "runZero", cves: [], summary: "Sin CVEs públicos. Herramienta de discovery con superficie de ataque mínima." },
    { vendor: "NetRise", cves: [], summary: "Sin CVEs públicos. Análisis offline de firmware sin componentes expuestos en red." }
  ],

  // ─── PATCH RESPONSE ITEMS ──────────────────────────────────────────
  patchResponseItems: [
    { vendor: "Claroty", avgDays: "N/A", process: "Actualizaciones regulares de firmware de sensores y plataforma. Team82 coordina disclosure responsable de vulnerabilidades encontradas en terceros.", rating: 5 },
    { vendor: "Nozomi Networks", avgDays: "N/A", process: "Updates regulares de Guardian/Vantage. Threat packs actualizados semanalmente. Nozomi Labs publica investigación coordinada.", rating: 5 },
    { vendor: "Dragos", avgDays: "N/A", process: "Actualizaciones de plataforma cada 6-8 semanas. WorldView TI actualizado continuamente. Proceso de IR maduro.", rating: 5 },
    { vendor: "Fortinet OT", avgDays: "7-30", process: "PSIRT publica advisories. Parches disponibles rápido pero despliegue en OT puede tardar meses. Workarounds publicados antes del parche.", rating: 3 },
    { vendor: "Cisco Industrial", avgDays: "14-45", process: "Cisco PSIRT con cadencia trimestral. Parches de emergencia para CVEs activos. Complejidad de actualización en switches industriales.", rating: 3 },
    { vendor: "Microsoft Defender IoT", avgDays: "7-14", process: "Patch Tuesday mensual. Sensor on-prem actualizable. Azure components se actualizan automáticamente.", rating: 4 },
    { vendor: "Armis", avgDays: "N/A", process: "Plataforma SaaS actualizada continuamente. Sin ventana de parche para el cliente. Collectors actualizados automáticamente.", rating: 5 },
    { vendor: "TXOne Networks", avgDays: "14-30", process: "Updates de StellarProtect/EdgeIPS regulares. Pattern files de antimalware actualizados diariamente. StellarOne como punto de distribución.", rating: 4 },
    { vendor: "Honeywell", avgDays: "30-90", process: "HCERT publica advisories. Parches OT requieren ventana de mantenimiento. Servicios profesionales frecuentemente necesarios.", rating: 2 },
    { vendor: "Siemens", avgDays: "14-60", process: "ProductCERT publica advisories mensuales (Patch Tuesday de Siemens). Parches disponibles pero despliegue OT complejo. Mitigaciones publicadas.", rating: 3 },
    { vendor: "Tenable OT", avgDays: "7-14", process: "Actualizaciones de producto regulares. Base de datos de vulnerabilidades OT actualizada continuamente.", rating: 4 },
    { vendor: "Waterfall Security", avgDays: "N/A", process: "Hardware-enforced: no requiere parches de seguridad. Firmware updates esporádicos para funcionalidad. Inmune a vulnerabilidades software.", rating: 5 },
    { vendor: "OPSWAT", avgDays: "1-7", process: "Multi-scanning engines actualizados diariamente (30+ motores). MetaDefender Core updates mensuales. CDR rules actualizadas semanalmente.", rating: 5 },
    { vendor: "Schneider Electric", avgDays: "30-90", process: "PSIRT publica advisories. Parches requieren coordinación con operaciones. Mitigaciones publicadas como workaround.", rating: 2 },
    { vendor: "Radiflow", avgDays: "14-30", process: "Updates de iSID/CIARA regulares. Threat signatures actualizadas. Empresa ágil en respuesta.", rating: 4 }
  ],

  // ─── MEDIA INCIDENT ITEMS ──────────────────────────────────────────
  mediaIncidentItems: [
    { vendor: "Dragos", date: "2023-05", title: "Intento de intrusión en sistemas corporativos Dragos", summary: "Adversario accedió a SharePoint corporativo y sistema de contratos. Dragos publicó un informe transparente detallando el incidente y la respuesta. No se comprometieron datos de clientes ni la plataforma.", severity: "Medio", url: "https://www.dragos.com/blog/deconstructing-a-cybersecurity-event/" },
    { vendor: "Fortinet OT", date: "2024-10", title: "CVE-2024-47575 FortiManager explotado masivamente", summary: "Vulnerabilidad crítica en FortiManager permitió ejecución remota de código. Explotación activa confirmada por CISA. Afecta a gestión centralizada de FortiGate incluidos Rugged.", severity: "Crítico", url: "https://www.fortiguard.com/psirt/FG-IR-24-423" },
    { vendor: "Fortinet OT", date: "2024-02", title: "CVE-2024-21762 FortiOS SSL-VPN zero-day", summary: "Vulnerabilidad de escritura fuera de límites en SSL-VPN. Explotación activa confirmada. Afecta a FortiGate incluyendo modelos Rugged industriales.", severity: "Crítico", url: "https://www.fortiguard.com/psirt/FG-IR-24-015" },
    { vendor: "Cisco Industrial", date: "2023-10", title: "CVE-2023-20198 IOS-XE explotación masiva", summary: "Vulnerabilidad CVSS 10.0 en Web UI de IOS-XE. Miles de dispositivos comprometidos globalmente. Afecta a switches industriales IE3x00 si Web UI habilitada.", severity: "Crítico", url: "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-iosxe-webui-privesc-j22SaA4z" },
    { vendor: "Schneider Electric", date: "2017-12", title: "TRITON/TRISIS: ataque a Triconex Safety Controller", summary: "Primer ataque dirigido a un Sistema Instrumentado de Seguridad (SIS) industrial. Malware TRITON diseñado para manipular Schneider Triconex. Caso emblemático en seguridad OT.", severity: "Crítico", url: "https://www.fireeye.com/blog/threat-research/2017/12/attackers-deploy-new-ics-attack-framework-triton.html" },
    { vendor: "Honeywell", date: "2023-12", title: "Vulnerabilidades críticas en Experion PKS C300", summary: "CISA publicó advisory sobre vulnerabilidades en controladores Experion PKS C300 que permiten manipulación de lógica de control.", severity: "Alto", url: "https://www.cisa.gov/news-events/ics-advisories/icsa-23-348-02" },
    { vendor: "Siemens", date: "2010-06", title: "Stuxnet: el primer arma cibernética industrial", summary: "Stuxnet atacó PLCs Siemens S7-300 en instalaciones nucleares iraníes. Primer malware diseñado para destruir equipamiento industrial. Cambió la historia de la seguridad OT.", severity: "Histórico", url: "https://en.wikipedia.org/wiki/Stuxnet" }
  ],

  // ─── ADVANCED METRICS ───────────────────────────────────────────────
  advancedMetrics: {
    marketShare2025: [
      { vendor: "Claroty", share: 18 },
      { vendor: "Nozomi Networks", share: 15 },
      { vendor: "Dragos", share: 12 },
      { vendor: "Fortinet OT", share: 10 },
      { vendor: "Microsoft Defender IoT", share: 9 },
      { vendor: "Armis", share: 8 },
      { vendor: "TXOne Networks", share: 7 },
      { vendor: "Cisco Industrial", share: 5 },
      { vendor: "Tenable OT", share: 4 },
      { vendor: "Otros", share: 12 }
    ],
    growthRate: [
      { vendor: "Armis", yoy: 65 },
      { vendor: "TXOne Networks", yoy: 55 },
      { vendor: "Claroty", yoy: 40 },
      { vendor: "Nozomi Networks", yoy: 38 },
      { vendor: "Dragos", yoy: 35 },
      { vendor: "Microsoft Defender IoT", yoy: 30 },
      { vendor: "Tenable OT", yoy: 25 },
      { vendor: "Radiflow", yoy: 20 },
      { vendor: "OPSWAT", yoy: 18 },
      { vendor: "Fortinet OT", yoy: 15 }
    ],
    fundingTotal: [
      { vendor: "Claroty", amount: "$735M" },
      { vendor: "Armis", amount: "$600M" },
      { vendor: "Dragos", amount: "$440M" },
      { vendor: "Nozomi Networks", amount: "$250M" },
      { vendor: "TXOne Networks", amount: "$170M" },
      { vendor: "Radiflow", amount: "$30M" },
      { vendor: "Waterfall Security", amount: "$25M" },
      { vendor: "OPSWAT", amount: "Private" }
    ]
  },

  // ─── THREAT HEATMAP ─────────────────────────────────────────────────
  threatHeatmap: [
    {
      threat: "Ransomware industrial",
      description: "Ransomware dirigido a redes OT que causa parada de producción. Ejemplos: Colonial Pipeline, JBS, Norsk Hydro.",
      vendorCoverage: [
        { vendor: "Claroty", coverage: 4, detail: "Detección de lateral movement IT->OT. Alertas de ransomware indicators." },
        { vendor: "Nozomi Networks", coverage: 4, detail: "Detección de anomalías de red indicativas de ransomware. Threat packs actualizados." },
        { vendor: "Dragos", coverage: 5, detail: "WorldView threat intel con cobertura ransomware ICS. Threat groups tracking." },
        { vendor: "Fortinet OT", coverage: 4, detail: "IPS/AV en FortiGate Rugged. Segmentación previene propagación." },
        { vendor: "TXOne Networks", coverage: 4, detail: "StellarProtect endpoint bloquea ransomware en HMI/SCADA. Application whitelisting." },
        { vendor: "Waterfall Security", coverage: 5, detail: "Diodo hardware hace imposible la propagación de ransomware de IT a OT." }
      ]
    },
    {
      threat: "Manipulación de procesos",
      description: "Modificación de setpoints, lógica de control o parámetros de proceso para causar daño físico. Ejemplos: Stuxnet, TRITON.",
      vendorCoverage: [
        { vendor: "Claroty", coverage: 5, detail: "Detección de cambios en lógica de PLC. Monitorización de setpoints." },
        { vendor: "Nozomi Networks", coverage: 5, detail: "DPI de protocolos industriales detecta comandos de escritura anómalos." },
        { vendor: "Dragos", coverage: 5, detail: "Análisis de proceso con contexto de threat intel. Detección de técnicas de TRITON/Stuxnet." },
        { vendor: "Tenable OT", coverage: 4, detail: "Active queries detectan cambios en configuración de PLCs." },
        { vendor: "Siemens", coverage: 4, detail: "Know-how protection y access control en SIMATIC S7." }
      ]
    },
    {
      threat: "Acceso no autorizado remoto",
      description: "Acceso remoto no autorizado a sistemas de control a través de VPN comprometidas, RDP expuesto o jump hosts.",
      vendorCoverage: [
        { vendor: "Claroty", coverage: 5, detail: "Secure Remote Access (SRA) integrado con grabación de sesiones." },
        { vendor: "Fortinet OT", coverage: 4, detail: "FortiGate VPN/ZTNA con MFA. SD-WAN industrial seguro." },
        { vendor: "Cisco Industrial", coverage: 4, detail: "ISE + Duo MFA para acceso controlado. AnyConnect industrial." },
        { vendor: "Siemens", coverage: 4, detail: "SINEMA Remote Connect para acceso remoto seguro a PLCs." },
        { vendor: "Waterfall Security", coverage: 5, detail: "Acceso remoto a OT físicamente imposible con diodo. Máxima protección." }
      ]
    },
    {
      threat: "Malware en PLCs/RTUs",
      description: "Malware diseñado específicamente para controladores industriales. Modifica firmware o lógica ladder.",
      vendorCoverage: [
        { vendor: "Dragos", coverage: 5, detail: "Threat intel especializada en malware ICS: PIPEDREAM, CRASHOVERRIDE, TRITON." },
        { vendor: "Claroty", coverage: 4, detail: "Baseline de firmware y detección de cambios en controladores." },
        { vendor: "Nozomi Networks", coverage: 4, detail: "Detección de cambios en firmware y programación de PLCs via red." },
        { vendor: "TXOne Networks", coverage: 4, detail: "ElementOne para escaneo de USBs antes de conectar a PLCs." },
        { vendor: "OPSWAT", coverage: 4, detail: "MetaDefender Kiosk para sanitizar medios antes de transferir a PLCs." }
      ]
    },
    {
      threat: "Amenazas internas",
      description: "Empleados, contratistas o integradores con acceso legítimo que realizan acciones maliciosas o negligentes.",
      vendorCoverage: [
        { vendor: "Claroty", coverage: 4, detail: "SRA con grabación de sesiones. Detección de actividad anómala de usuarios." },
        { vendor: "Armis", coverage: 4, detail: "Behavioral analytics detectan actividad anómala de dispositivos/usuarios." },
        { vendor: "Nozomi Networks", coverage: 4, detail: "Baseline de comportamiento detecta desviaciones de usuarios legítimos." },
        { vendor: "Fortinet OT", coverage: 3, detail: "FortiNAC + FortiDeceptor para detectar movimiento lateral interno." }
      ]
    },
    {
      threat: "Ataques cadena de suministro",
      description: "Compromiso de software, firmware o hardware de proveedores OT antes de la entrega al operador.",
      vendorCoverage: [
        { vendor: "OPSWAT", coverage: 5, detail: "Multi-scanning de firmware y software antes de despliegue. CDR para archivos." },
        { vendor: "Dragos", coverage: 4, detail: "WorldView monitoriza compromisos en supply chain de vendedores OT." },
        { vendor: "Claroty", coverage: 4, detail: "SBOM analysis y vulnerability tracking de componentes de terceros." },
        { vendor: "TXOne Networks", coverage: 4, detail: "ElementOne escanea USBs/medios de proveedores. StellarProtect application whitelisting." }
      ]
    }
  ],

  // ─── INTEGRATION PROTOCOL ITEMS ────────────────────────────────────
  integrationProtocolItems: [
    {
      protocol: "Modbus TCP/RTU",
      description: "Protocolo industrial más extendido. Sin autenticación ni cifrado nativo. Lectura/escritura de registros.",
      support: [
        { vendor: "Claroty", level: "Full DPI", detail: "Inspección profunda de function codes. Detección de escrituras anómalas." },
        { vendor: "Nozomi Networks", level: "Full DPI", detail: "Parsing completo de Modbus TCP/RTU. Baseline de registros." },
        { vendor: "Dragos", level: "Full DPI", detail: "Análisis de función codes con contexto de proceso." },
        { vendor: "Fortinet OT", level: "IPS signatures", detail: "Firmas IPS para Modbus en FortiGate. Application control." },
        { vendor: "Radiflow", level: "Full DPI", detail: "iSID con parsing Modbus completo. Detección de anomalías." },
        { vendor: "Titanium (Rutile)", level: "Passive DPI", detail: "Monitorización pasiva de Modbus TCP/RTU. Detección de escrituras anómalas sin impacto en proceso." }
      ]
    },
    {
      protocol: "OPC-UA/DA",
      description: "Estándar de interoperabilidad industrial. OPC-UA con seguridad integrada (certificados, cifrado).",
      support: [
        { vendor: "Claroty", level: "Full", detail: "OPC-UA y DA completo. Detección de nodos y métodos anómalos." },
        { vendor: "Nozomi Networks", level: "Full", detail: "OPC-UA certificate monitoring. DA tag analysis." },
        { vendor: "Siemens", level: "Native", detail: "OPC-UA nativo en SIMATIC. Seguridad integrada en stack." },
        { vendor: "Microsoft Defender IoT", level: "Full", detail: "OPC-UA parsing con Azure IoT integration." },
        { vendor: "Titanium (Rutile)", level: "Passive", detail: "Monitorización pasiva OPC-UA. Identificación de nodos y sesiones anómalas." }
      ]
    },
    {
      protocol: "S7comm/S7comm+",
      description: "Protocolo propietario Siemens para comunicación con PLCs S7-300/400/1200/1500.",
      support: [
        { vendor: "Claroty", level: "Full DPI", detail: "Reverse-engineered S7comm+. Detección de cambios en programa." },
        { vendor: "Nozomi Networks", level: "Full DPI", detail: "S7comm y S7comm+ parsing. Detección de PLC stop/start." },
        { vendor: "Dragos", level: "Full DPI", detail: "Análisis S7comm con contexto de threat intel (Stuxnet legacy)." },
        { vendor: "Siemens", level: "Native", detail: "Protocolo propietario. SCALANCE firewalls con reglas S7." }
      ]
    },
    {
      protocol: "EtherNet/IP (CIP)",
      description: "Protocolo Rockwell/Allen-Bradley. Common Industrial Protocol sobre Ethernet.",
      support: [
        { vendor: "Claroty", level: "Full DPI", detail: "CIP object parsing. Detección de cambios en ControlLogix/CompactLogix." },
        { vendor: "Nozomi Networks", level: "Full DPI", detail: "EtherNet/IP completo con CIP class analysis." },
        { vendor: "Dragos", level: "Full DPI", detail: "CIP analysis con contexto de Rockwell advisories." },
        { vendor: "Cisco Industrial", level: "Native", detail: "Switches IE con awareness de EtherNet/IP. CIP inspection." }
      ]
    },
    {
      protocol: "DNP3",
      description: "Distributed Network Protocol. Usado en utilities (electricidad, agua). Soporte autenticación secure authentication v5.",
      support: [
        { vendor: "Claroty", level: "Full DPI", detail: "DNP3 completo con detección de unsolicited responses anómalas." },
        { vendor: "Nozomi Networks", level: "Full DPI", detail: "DNP3 parsing con baseline de data points." },
        { vendor: "Dragos", level: "Full DPI", detail: "DNP3 con contexto de amenazas a utilities (CRASHOVERRIDE)." },
        { vendor: "Radiflow", level: "Full DPI", detail: "DNP3 completo. Fuerte en utilities y agua." }
      ]
    },
    {
      protocol: "IEC 61850 (GOOSE/MMS)",
      description: "Estándar para subestaciones eléctricas. GOOSE para comunicaciones tiempo-real. MMS para SCADA.",
      support: [
        { vendor: "Claroty", level: "Full", detail: "IEC 61850 GOOSE y MMS. Detección de mensajes anómalos." },
        { vendor: "Nozomi Networks", level: "Full", detail: "GOOSE y MMS parsing. Monitorización de subestaciones." },
        { vendor: "Dragos", level: "Full", detail: "IEC 61850 con contexto de amenazas a red eléctrica." },
        { vendor: "Radiflow", level: "Full", detail: "Especialización en utilities con IEC 61850 completo." }
      ]
    },
    {
      protocol: "BACnet/KNX",
      description: "Protocolos de Building Management Systems (BMS). BACnet para HVAC, KNX para automatización de edificios.",
      support: [
        { vendor: "Claroty", level: "Full", detail: "BACnet/IP completo. Xdome for Healthcare incluye BMS." },
        { vendor: "Nozomi Networks", level: "Full", detail: "BACnet y KNX parsing. Monitorización de BMS." },
        { vendor: "Armis", level: "Full", detail: "BACnet con asset discovery de dispositivos BMS." },
        { vendor: "Microsoft Defender IoT", level: "Parcial", detail: "BACnet básico. Integración con Azure Digital Twins." }
      ]
    },
    {
      protocol: "PROFINET/PROFIBUS",
      description: "Protocolos Siemens/PI para comunicación industrial. PROFINET sobre Ethernet, PROFIBUS sobre RS-485.",
      support: [
        { vendor: "Claroty", level: "Full DPI", detail: "PROFINET DCP y IO parsing completo." },
        { vendor: "Nozomi Networks", level: "Full DPI", detail: "PROFINET con detección de cambios de configuración." },
        { vendor: "Siemens", level: "Native", detail: "Protocolo propietario con SCALANCE y SINEC." },
        { vendor: "Dragos", level: "Full DPI", detail: "PROFINET analysis con contexto industrial." }
      ]
    },
    {
      protocol: "MQTT/AMQP",
      description: "Protocolos IoT/IIoT. MQTT para telemetría ligera. AMQP para mensajería industrial.",
      support: [
        { vendor: "Armis", level: "Full", detail: "MQTT discovery y monitoring. IoT/IIoT specialization." },
        { vendor: "Microsoft Defender IoT", level: "Full", detail: "MQTT nativo con Azure IoT Hub. AMQP para Event Hubs." },
        { vendor: "Nozomi Networks", level: "Full", detail: "MQTT parsing con detección de topics anómalos." },
        { vendor: "Claroty", level: "Full", detail: "MQTT y AMQP para entornos IIoT convergentes." }
      ]
    },
    {
      protocol: "Syslog/CEF/LEEF",
      description: "Formatos de log para integración con SIEM. Syslog estándar, CEF (ArcSight), LEEF (QRadar).",
      support: [
        { vendor: "Claroty", level: "Full", detail: "Syslog, CEF, LEEF. Conectores nativos Sentinel/Splunk/QRadar." },
        { vendor: "Nozomi Networks", level: "Full", detail: "Syslog, CEF. API REST para SOAR. Sentinel connector." },
        { vendor: "Dragos", level: "Full", detail: "Syslog, CEF. Integración con principales SIEMs." },
        { vendor: "Armis", level: "Full", detail: "Syslog, CEF, REST API. Conectores nativos múltiples SIEMs." },
        { vendor: "Microsoft Defender IoT", level: "Native", detail: "Integración nativa con Microsoft Sentinel. CEF para terceros." }
      ]
    }
  ],

  // ─── TECH ITEMS ─────────────────────────────────────────────────────
  techItems: [
    {
      vendor: "Claroty",
      architecture: "Sensor distribuido + Management (xDome SaaS o CTD on-prem). Edge sensors en SPAN/TAP. SRA gateway para acceso remoto.",
      sensorTypes: ["Physical appliance (Edge)", "Virtual sensor (VMware/Hyper-V)", "Cloud connector"],
      protocolsSupported: 450,
      deploymentModel: "On-premise (CTD) o SaaS (xDome). Sensores siempre on-prem.",
      apiCapabilities: "REST API completa. Webhooks. SIEM connectors nativos. Terraform provider.",
      scalability: "Multi-site con xDome. Hasta 10.000+ activos por sensor. Arquitectura jerárquica.",
      minHardware: "Edge sensor: 8 cores, 32GB RAM, 500GB SSD. Virtual: VMware ESXi 6.7+."
    },
    {
      vendor: "Nozomi Networks",
      architecture: "Guardian (sensor on-prem) + Vantage (cloud management). Remote Collectors para sites distribuidos. Arc agent para endpoints.",
      sensorTypes: ["Guardian appliance (physical/virtual)", "Remote Collector", "Arc endpoint sensor"],
      protocolsSupported: 400,
      deploymentModel: "On-premise (Guardian) o SaaS (Vantage). Hybrid posible.",
      apiCapabilities: "REST API v2. Open API spec. Vantage API. SIEM connectors. Threat intelligence API.",
      scalability: "Multi-site con Vantage. CMC para gestión on-prem de múltiples Guardians. Federación de datos.",
      minHardware: "Guardian: 8 cores, 32GB RAM, 500GB SSD. Remote Collector: 4 cores, 16GB RAM."
    },
    {
      vendor: "Dragos",
      architecture: "Dragos Platform on-prem. Sensores pasivos distribuidos. SiteStore para multi-site. WorldView TI integrado.",
      sensorTypes: ["Physical sensor appliance", "Virtual sensor", "SiteStore aggregator"],
      protocolsSupported: 350,
      deploymentModel: "Solo on-premise. Sin SaaS. Opción air-gapped disponible.",
      apiCapabilities: "REST API. Integración SIEM via syslog/CEF. Splunk TA oficial. WorldView API.",
      scalability: "Multi-site con SiteStore. Neighborhood Keeper para community defense entre organizaciones.",
      minHardware: "Sensor: 16 cores, 64GB RAM, 1TB SSD. SiteStore: similar. Requisitos más altos que competencia."
    },
    {
      vendor: "Fortinet OT",
      architecture: "FortiGate Rugged inline + FortiSwitch Industrial + FortiNAC + FortiDeceptor. Gestión centralizada FortiManager.",
      sensorTypes: ["FortiGate Rugged (FGR-60F/70F/90D)", "FortiSwitch Industrial", "FortiAP Industrial"],
      protocolsSupported: 200,
      deploymentModel: "On-premise. FortiCloud opcional para gestión. Security Fabric integrado.",
      apiCapabilities: "REST API FortiOS. FortiManager API. SNMP. Syslog. FortiAnalyzer para reporting.",
      scalability: "FortiManager centralizado para miles de FortiGates. SD-WAN industrial para sites distribuidos.",
      minHardware: "FortiGate Rugged: appliance dedicado. Rango de temperatura -40C a +70C. DIN rail mounting."
    },
    {
      vendor: "Cisco Industrial",
      architecture: "Cyber Vision integrado en switches IE3x00/IE9300. ISA 3000 firewall. ISE para NAC. DNAC para gestión.",
      sensorTypes: ["Embebido en IE3300/IE3400/IE9300", "Cyber Vision Center (virtual)", "ISA 3000 appliance"],
      protocolsSupported: 180,
      deploymentModel: "On-premise. Cyber Vision sensor embebido en switches (no hardware extra). Cisco DNA Center.",
      apiCapabilities: "REST API Cyber Vision. ISE pxGrid. DNAC API. Syslog/SNMP. Sentinel connector.",
      scalability: "Escalable con switches industriales Cisco. DNAC para gestión centralizada de miles de dispositivos.",
      minHardware: "Cyber Vision embebido: incluido en IE3x00 (no requiere hardware extra). Center VM: 8 cores, 32GB RAM."
    },
    {
      vendor: "Microsoft Defender IoT",
      architecture: "Sensor on-prem (Linux appliance/VM) + Azure portal. Integración nativa Sentinel y Defender XDR.",
      sensorTypes: ["Physical appliance", "Virtual sensor (Hyper-V/VMware)", "Azure-connected management"],
      protocolsSupported: 250,
      deploymentModel: "Sensor on-prem + management en Azure. Opción air-gapped para sensor local sin Azure.",
      apiCapabilities: "REST API. Azure Resource Manager. Sentinel connectors nativos. Logic Apps SOAR. Copilot integration.",
      scalability: "Multi-site via Azure portal. Sensors escalables. Integración con Azure IoT Hub para IIoT.",
      minHardware: "Sensor: 8 cores, 32GB RAM, 500GB SSD. Certificado para Dell/HPE appliances."
    },
    {
      vendor: "Armis",
      architecture: "Cloud-native SaaS. Collectors on-prem ligeros. Asset Intelligence Engine (3B+ device profiles). Integración via APIs.",
      sensorTypes: ["Cloud collector (virtual)", "Integration via traffic mirroring", "API integrations (no sensor propio)"],
      protocolsSupported: 200,
      deploymentModel: "SaaS cloud-native. Collectors on-prem para ingestión de tráfico. Sin opción full on-premise.",
      apiCapabilities: "REST API completa. Webhooks. SIEM connectors nativos. SOAR playbooks. Marketplace de integraciones.",
      scalability: "Cloud-native: escalabilidad ilimitada. Multi-tenant. Global deployment.",
      minHardware: "Collector VM: 4 cores, 16GB RAM, 200GB. Requisitos mínimos del mercado."
    },
    {
      vendor: "TXOne Networks",
      architecture: "StellarProtect/Enforce (endpoint) + EdgeIPS (inline IPS) + EdgeFire (firewall) + StellarOne (management).",
      sensorTypes: ["StellarProtect agent", "StellarEnforce lockdown agent", "EdgeIPS appliance", "EdgeFire appliance"],
      protocolsSupported: 150,
      deploymentModel: "On-premise completo. StellarOne management on-prem. Air-gap friendly.",
      apiCapabilities: "REST API StellarOne. Syslog. SNMP. Integration con SIEM via syslog/CEF.",
      scalability: "StellarOne gestiona miles de endpoints y appliances. Consola web centralizada.",
      minHardware: "StellarProtect: agent ligero (Windows XP SP3+). EdgeIPS Pro: appliance DIN rail. EdgeFire: appliance rack/DIN."
    },
    {
      vendor: "Honeywell",
      architecture: "Forge Cybersecurity+ para monitorización. Secure Connection para acceso remoto. Integrado con Experion PKS/C300.",
      sensorTypes: ["Forge appliance", "Secure Connection gateway", "Integration con Honeywell DCS"],
      protocolsSupported: 120,
      deploymentModel: "On-premise en entorno Honeywell. Managed services opcionales.",
      apiCapabilities: "API propietaria Honeywell. Syslog para SIEM. Integración limitada con terceros.",
      scalability: "Multi-site con Forge cloud. Gestión centralizada de sites Honeywell.",
      minHardware: "Forge server: 16 cores, 64GB RAM. Requisitos altos. Hardware Honeywell recomendado."
    },
    {
      vendor: "Siemens",
      architecture: "SINEC Security Guard (vuln mgmt) + SCALANCE S/M (firewalls) + SINEC NMS (network mgmt). Defense in depth en SIMATIC.",
      sensorTypes: ["SCALANCE S615/S623 firewall", "SCALANCE M industrial router", "SINEC NMS virtual"],
      protocolsSupported: 130,
      deploymentModel: "On-premise. SINEC Security Guard con opción cloud. SCALANCE inline.",
      apiCapabilities: "SINEC NMS REST API. SNMP. Syslog. OPC-UA nativo. TIA Portal integration.",
      scalability: "SINEC NMS para gestión de red industrial Siemens. SINEMA Server para multi-site.",
      minHardware: "SCALANCE S: appliance DIN rail compacto. SINEC NMS VM: 8 cores, 16GB RAM."
    },
    {
      vendor: "Tenable OT",
      architecture: "Sensor on-prem con passive monitoring + active queries seguras a PLCs. Integración con Tenable.io/Nessus.",
      sensorTypes: ["OT Security sensor (physical/virtual)", "Active query engine", "Nessus integration"],
      protocolsSupported: 200,
      deploymentModel: "On-premise. Integración cloud con Tenable.io para visión unificada IT/OT.",
      apiCapabilities: "REST API. Tenable.io API. Nessus integration. Syslog/CEF para SIEM.",
      scalability: "Multi-site con consola centralizada. Tenable.io para vista global IT/OT.",
      minHardware: "Sensor: 8 cores, 32GB RAM, 500GB SSD. Virtual: VMware ESXi 6.5+."
    },
    {
      vendor: "Waterfall Security",
      architecture: "Hardware unidireccional (TX+RX). Réplicas de servidores OT en zona IT. FLIP para mantenimiento bidireccional controlado.",
      sensorTypes: ["Unidirectional Gateway (hardware)", "FLIP (bidireccional controlado)", "CloudConnect gateway"],
      protocolsSupported: 80,
      deploymentModel: "On-premise exclusivo. Hardware inline entre zonas. Air-gap por diseño.",
      apiCapabilities: "Réplica de datos via protocolos estándar (OPC, Modbus, syslog). Sin API de management web.",
      scalability: "Escalable con múltiples gateways. Cada gateway es independiente y autónomo.",
      minHardware: "Appliance hardware propietario 1U/2U rack mount. TX y RX como unidades separadas."
    },
    {
      vendor: "OPSWAT",
      architecture: "MetaDefender Core (multi-scanning) + Kiosk (USB) + NetWall (cross-domain) + Vault (secure storage).",
      sensorTypes: ["MetaDefender Core server", "MetaDefender Kiosk (hardware)", "NetWall cross-domain appliance"],
      protocolsSupported: 50,
      deploymentModel: "On-premise. Kiosk como punto de entrada físico. NetWall inline.",
      apiCapabilities: "REST API MetaDefender. ICAP server. YARA rules. CEF/Syslog. SDK disponible.",
      scalability: "MetaDefender Central Management para multi-site. Kiosks distribuidos.",
      minHardware: "MetaDefender Core: 8 cores, 16GB RAM. Kiosk: hardware dedicado con pantalla táctil."
    },
    {
      vendor: "Schneider Electric",
      architecture: "EcoStruxure Cybersecurity Admin Expert + Managed Security Services. Integrado con Modicon/Triconex.",
      sensorTypes: ["Admin Expert appliance", "Managed service agents", "Integration con PLCs Modicon"],
      protocolsSupported: 100,
      deploymentModel: "On-premise en entorno Schneider. Managed services para gestión remota.",
      apiCapabilities: "API propietaria. Syslog. Integración limitada con SIEM de terceros.",
      scalability: "Multi-site con managed services. Gestión centralizada de sites Schneider.",
      minHardware: "Admin Expert server: 8 cores, 32GB RAM. Hardware Schneider recomendado."
    },
    {
      vendor: "Radiflow",
      architecture: "iSID (sensor detección) + CIARA (risk assessment) + gestión centralizada. On-prem o cloud.",
      sensorTypes: ["iSID sensor (physical/virtual)", "CIARA risk engine", "Central management"],
      protocolsSupported: 150,
      deploymentModel: "On-premise o cloud. iSID sensor siempre on-prem. CIARA cloud-capable.",
      apiCapabilities: "REST API. Syslog/CEF. SIEM connectors. Integration con SOAR.",
      scalability: "Multi-site con consola central. Federación de iSID sensors.",
      minHardware: "iSID: 4 cores, 16GB RAM, 256GB SSD. Requisitos competitivos."
    },
    {
      vendor: "Forescout",
      architecture: "Vistaro platform cloud + eyeInspect sensor on-prem para OT. Enterprise Manager para gestión. NAC via 802.1X integration.",
      sensorTypes: ["eyeInspect sensor (physical/virtual)", "CounterACT appliance", "Cloud connector"],
      protocolsSupported: 200,
      deploymentModel: "Hybrid: management cloud (Vistaro) + sensors on-prem. eyeInspect para OT dedicado.",
      apiCapabilities: "REST API completa. 180+ integraciones. SIEM connectors. SOAR playbooks. eyeExtend modules.",
      scalability: "Multi-site con Enterprise Manager. Cloud-scale con Vistaro. Miles de dispositivos por appliance.",
      minHardware: "eyeInspect sensor: 8 cores, 32GB RAM, 500GB SSD. CounterACT: appliance dedicado."
    },
    {
      vendor: "Cyolo",
      architecture: "Gateway on-prem para acceso OT + cloud management opcional. Identity-based zero trust access.",
      sensorTypes: ["Cyolo Gateway (on-prem)", "Cloud management console"],
      protocolsSupported: 30,
      deploymentModel: "On-premise gateway. Cloud management opcional. Agentless en dispositivos OT.",
      apiCapabilities: "REST API. Integration con IdPs (SAML/OIDC). Syslog para SIEM. Webhooks.",
      scalability: "Multi-site con gateways distribuidos. Gestión centralizada.",
      minHardware: "Gateway: 4 cores, 8GB RAM, 100GB SSD. Requisitos ligeros."
    },
    {
      vendor: "Xage Security",
      architecture: "Xage Fabric nodes distribuidos. Identidad blockchain. Policy enforcement distribuido. Zero trust mesh.",
      sensorTypes: ["Xage Node (physical/virtual)", "Policy enforcement point"],
      protocolsSupported: 40,
      deploymentModel: "On-premise o hybrid. Nodes distribuidos. Cloud management disponible.",
      apiCapabilities: "REST API. Integration con SIEM/SOAR. SAML/OIDC. Syslog. Terraform provider.",
      scalability: "Arquitectura mesh distribuida. Escala con nodes adicionales. Sin punto único de fallo.",
      minHardware: "Xage Node: 4 cores, 16GB RAM, 200GB SSD. Puede correr en edge devices."
    },
    {
      vendor: "runZero",
      architecture: "Explorer agent ligero + cloud console. Escaneo activo no intrusivo. Fingerprinting avanzado.",
      sensorTypes: ["Explorer agent (ligero)", "Cloud console"],
      protocolsSupported: 150,
      deploymentModel: "SaaS con Explorer on-prem. Self-hosted disponible.",
      apiCapabilities: "REST API completa. Webhooks. Integration con CMDB/SIEM. Export formats múltiples.",
      scalability: "Cloud-native. Multi-site con Explorers distribuidos. Escaneo rápido de redes grandes.",
      minHardware: "Explorer: 2 cores, 4GB RAM, 50GB. Requisitos mínimos del mercado."
    },
    {
      vendor: "NetRise",
      architecture: "Cloud analysis engine. Upload de firmware images. SBOM generation. Vulnerability correlation.",
      sensorTypes: ["Cloud platform (sin sensor on-prem)"],
      protocolsSupported: 0,
      deploymentModel: "SaaS cloud. Análisis offline de firmware. Sin componentes en red OT.",
      apiCapabilities: "REST API. CI/CD integration. SBOM export (SPDX/CycloneDX). Webhook notifications.",
      scalability: "Cloud-native. Sin límite de firmware images analizables.",
      minHardware: "N/A. Cloud-only. Sin requisitos de hardware on-prem."
    },
    {
      vendor: "Titanium (Rutile)",
      architecture: "Plataforma Rutile on-prem. Sensor pasivo propietario para monitorización de tráfico industrial. Consola de gestión centralizada. SOC OT 24/7 integrado.",
      sensorTypes: ["Sensor pasivo propietario", "Consola de gestión on-prem"],
      protocolsSupported: 80,
      deploymentModel: "On-premise exclusivo. Tecnología pasiva sin impacto en producción. Ideal para entornos air-gapped.",
      apiCapabilities: "API de gestión de activos. Integración con SIEM via syslog. Reporting de cumplimiento IEC 62443.",
      scalability: "Multi-site con consola centralizada. Orientado a infraestructuras críticas españolas y europeas.",
      minHardware: "Sensor pasivo: appliance dedicado. Consola: servidor estándar. Requisitos bajo demanda."
    }
  ],

  // ─── DEPLOYMENT ITEMS ───────────────────────────────────────────────
  deploymentItems: [
    {
      vendor: "Claroty",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "4-8 semanas",
      sensorDeployment: "SPAN/TAP port mirroring. Sin inline por defecto. Edge sensors distribuidos.",
      cloudRegions: "xDome: US, EU (Frankfurt, Dublin), APAC. Data residency configurable.",
      detail: "CTD full on-prem para máxima soberanía. xDome SaaS para gestión simplificada. Sensores siempre on-prem."
    },
    {
      vendor: "Nozomi Networks",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "3-6 semanas",
      sensorDeployment: "Guardian en SPAN port. Remote Collectors para sites remotos. Arc agent opcional en endpoints.",
      cloudRegions: "Vantage: US, EU (Frankfurt), APAC. Multi-tenant cloud.",
      detail: "Guardian full on-prem. Vantage SaaS para multi-site. CMC para gestión on-prem de múltiples Guardians."
    },
    {
      vendor: "Dragos",
      onPremise: true,
      cloud: false,
      hybrid: false,
      airGapped: true,
      typicalDeployTime: "6-10 semanas",
      sensorDeployment: "Sensor pasivo en SPAN/TAP. SiteStore para agregación multi-site. Air-gap native.",
      cloudRegions: "N/A. Solo on-premise.",
      detail: "Exclusivamente on-premise. Opción air-gapped completa. WorldView TI puede recibirse offline."
    },
    {
      vendor: "Fortinet OT",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "2-4 semanas",
      sensorDeployment: "FortiGate Rugged inline. FortiSwitch en acceso. Integración con Security Fabric existente.",
      cloudRegions: "FortiCloud: global. FortiManager on-prem o cloud.",
      detail: "Despliegue rápido si ya existe Security Fabric. FortiGate Rugged DIN rail para campo."
    },
    {
      vendor: "Cisco Industrial",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: false,
      typicalDeployTime: "4-8 semanas",
      sensorDeployment: "Cyber Vision embebido en switches IE3x00/IE9300. ISA 3000 inline. No requiere hardware sensor extra.",
      cloudRegions: "Cisco DNA Center on-prem o cloud. SecureX cloud.",
      detail: "Ventaja: sensor embebido en switches (no hardware adicional). Requiere switches Cisco industriales."
    },
    {
      vendor: "Microsoft Defender IoT",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "2-4 semanas",
      sensorDeployment: "Sensor on-prem en SPAN/TAP. Management via Azure portal. Opción locally-managed sin Azure.",
      cloudRegions: "Azure: todas las regiones. EU data residency disponible (West Europe, North Europe).",
      detail: "Despliegue rápido. Sin coste de licencia adicional con E5 Security. Sensor locally-managed para air-gap."
    },
    {
      vendor: "Armis",
      onPremise: false,
      cloud: true,
      hybrid: true,
      airGapped: false,
      typicalDeployTime: "1-3 semanas",
      sensorDeployment: "Collectors virtuales on-prem. Tráfico enviado a cloud para análisis. Integración via APIs de infraestructura.",
      cloudRegions: "AWS: US, EU (Frankfurt, Ireland), APAC.",
      detail: "Despliegue más rápido del mercado. Cloud-first: datos procesados en cloud. Sin opción full on-prem."
    },
    {
      vendor: "TXOne Networks",
      onPremise: true,
      cloud: false,
      hybrid: false,
      airGapped: true,
      typicalDeployTime: "2-4 semanas",
      sensorDeployment: "StellarProtect agent en endpoints. EdgeIPS/EdgeFire inline. StellarOne management on-prem.",
      cloudRegions: "N/A. Solo on-premise.",
      detail: "Full on-premise. Air-gap friendly. StellarEnforce no requiere updates para funcionar (lockdown mode)."
    },
    {
      vendor: "Honeywell",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "8-12 semanas",
      sensorDeployment: "Forge appliance en red Honeywell. Integración directa con Experion PKS. Servicios profesionales.",
      cloudRegions: "Honeywell Forge: US, EU. Managed services globales.",
      detail: "Despliegue complejo, requiere servicios profesionales. Mejor en ecosistema Honeywell."
    },
    {
      vendor: "Siemens",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "4-8 semanas",
      sensorDeployment: "SCALANCE S/M inline. SINEC NMS para gestión. SINEC Security Guard cloud o on-prem.",
      cloudRegions: "SINEC Security Guard: EU (Germany). MindSphere: global.",
      detail: "Integración nativa con ecosistema Siemens. SCALANCE firewalls DIN rail para campo."
    },
    {
      vendor: "Tenable OT",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "3-6 semanas",
      sensorDeployment: "Sensor on-prem SPAN + active queries. Integración con Tenable.io para vista IT/OT.",
      cloudRegions: "Tenable.io: US, EU (Frankfurt), APAC.",
      detail: "Sensor siempre on-prem. Active queries configurables por protocolo. Air-gap mode disponible."
    },
    {
      vendor: "Waterfall Security",
      onPremise: true,
      cloud: false,
      hybrid: false,
      airGapped: true,
      typicalDeployTime: "4-6 semanas",
      sensorDeployment: "Hardware inline entre zonas IT/OT. TX en zona OT, RX en zona IT. Instalación física.",
      cloudRegions: "N/A. Hardware on-premise exclusivo.",
      detail: "Instalación física obligatoria. Air-gap por diseño. CloudConnect para envío unidireccional a cloud."
    },
    {
      vendor: "OPSWAT",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "1-3 semanas",
      sensorDeployment: "MetaDefender Core en DMZ. Kiosk en punto de entrada físico. NetWall inline.",
      cloudRegions: "MetaDefender Cloud: US, EU.",
      detail: "Kiosk desplegable rápidamente. MetaDefender Core en DMZ entre IT y OT."
    },
    {
      vendor: "Schneider Electric",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "8-12 semanas",
      sensorDeployment: "Admin Expert en red Schneider. Managed services para gestión. Servicios profesionales on-site.",
      cloudRegions: "EcoStruxure: EU, US, APAC.",
      detail: "Despliegue complejo en entorno Schneider. Managed services simplifican operación."
    },
    {
      vendor: "Radiflow",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "2-4 semanas",
      sensorDeployment: "iSID sensor en SPAN port. CIARA cloud o on-prem. Despliegue ligero.",
      cloudRegions: "CIARA: EU (Israel HQ, EU data processing).",
      detail: "Despliegue rápido y ligero. iSID requisitos mínimos. Buena opción mid-market."
    },
    {
      vendor: "Forescout",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: false,
      typicalDeployTime: "3-6 semanas",
      sensorDeployment: "eyeInspect sensor en SPAN para OT. CounterACT para NAC IT. Agentless discovery.",
      detail: "Hybrid: sensors on-prem + Vistaro cloud management. eyeInspect dedicado para visibilidad OT."
    },
    {
      vendor: "Cyolo",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "1-3 semanas",
      sensorDeployment: "Gateway on-prem ligero. Sin agente en dispositivos OT. Identity-based access.",
      detail: "Despliegue rápido. Gateway on-prem con cloud management opcional. Air-gap mode disponible."
    },
    {
      vendor: "Xage Security",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: true,
      typicalDeployTime: "2-4 semanas",
      sensorDeployment: "Xage Nodes distribuidos. Zero trust mesh. Policy enforcement en cada punto de acceso.",
      detail: "Nodes distribuidos. Funciona sin conectividad central (mesh). Cloud management opcional."
    },
    {
      vendor: "runZero",
      onPremise: true,
      cloud: true,
      hybrid: true,
      airGapped: false,
      typicalDeployTime: "1-2 semanas",
      sensorDeployment: "Explorer agent ligero. Escaneo no intrusivo. Sin hardware dedicado.",
      detail: "Despliegue ultrarrápido. Explorer en cualquier Linux/macOS/Windows. Self-hosted disponible."
    },
    {
      vendor: "NetRise",
      onPremise: false,
      cloud: true,
      hybrid: false,
      airGapped: false,
      typicalDeployTime: "1 semana",
      sensorDeployment: "Sin despliegue on-prem. Upload de firmware images a cloud para análisis.",
      detail: "Cloud-only. Sin impacto en red OT. Upload de firmware para análisis offline."
    },
    {
      vendor: "Titanium (Rutile)",
      onPremise: true,
      cloud: false,
      hybrid: false,
      airGapped: true,
      typicalDeployTime: "2-4 semanas",
      sensorDeployment: "Sensor pasivo propietario en SPAN/TAP. Monitorización no intrusiva. Sin impacto en procesos industriales.",
      cloudRegions: "N/A. Solo on-premise. Datos en cliente.",
      detail: "100% on-premise y soberano. Ideal para infraestructuras críticas con requisitos ENS/NIS2. SOC OT 24/7 opcional desde España."
    }
  ],

  // ─── INNOVATION ITEMS (replacing quantumAiItems) ────────────────────
  innovationItems: [
    {
      vendor: "Claroty",
      aiCapabilities: "Machine learning para detección de anomalías. AI-powered asset classification. Predictive risk scoring.",
      digitalTwin: "Integración con gemelos digitales de proceso para validación de cambios antes de despliegue en OT real.",
      predictiveSecurity: "Risk scoring predictivo basado en vulnerabilidades, conectividad y criticidad de activos.",
      innovation: "xDome platform evoluciona hacia CPS protection unificada (OT+IoMT+XIoT). AI para priorización de vulnerabilidades.",
      maturity: 5
    },
    {
      vendor: "Nozomi Networks",
      aiCapabilities: "AI/ML avanzado para behavioral analysis. Threat intelligence AI-curated. Automated asset profiling.",
      digitalTwin: "Soporte para integración con digital twins industriales para simulación de escenarios de seguridad.",
      predictiveSecurity: "Vantage IQ con AI para análisis predictivo de riesgos y priorización de alertas.",
      innovation: "Vantage IQ como copilot de seguridad OT. AI para reducción de falsos positivos. Marketplace de threat packs.",
      maturity: 5
    },
    {
      vendor: "Dragos",
      aiCapabilities: "ML para detección de amenazas. AI asistida en threat hunting. Automated playbooks basados en WorldView intel.",
      digitalTwin: "Integración limitada con digital twins. Enfoque en threat intel real sobre simulación.",
      predictiveSecurity: "WorldView predictive advisories basados en actividad de threat groups ICS.",
      innovation: "Neighborhood Keeper: defensa comunitaria compartida. AI para correlación de actividad de threat groups.",
      maturity: 4
    },
    {
      vendor: "Fortinet OT",
      aiCapabilities: "FortiAI para análisis de malware. FortiGuard AI-powered threat intelligence. ML en IPS.",
      digitalTwin: "Integración básica via SD-WAN con plataformas de digital twin de terceros.",
      predictiveSecurity: "FortiGuard Labs threat predictions. AI-powered IOC correlation.",
      innovation: "Security Fabric AI-driven. FortiAI para análisis automatizado. Convergencia networking+security.",
      maturity: 4
    },
    {
      vendor: "Cisco Industrial",
      aiCapabilities: "AI/ML en Cyber Vision para clasificación de activos. ThousandEyes AI para network intelligence.",
      digitalTwin: "Integración con Cisco DNA Spaces y digital twin de infraestructura de red.",
      predictiveSecurity: "Cisco Talos threat intelligence. AI para priorización de alertas en SecureX.",
      innovation: "Splunk AI integration post-adquisición. Networking + Security convergence en campus industrial.",
      maturity: 3
    },
    {
      vendor: "Microsoft Defender IoT",
      aiCapabilities: "Copilot for Security con contexto OT. ML avanzado para detección de anomalías. Azure AI integration.",
      digitalTwin: "Azure Digital Twins nativo. Integración con modelos DTDL para simulación de seguridad industrial.",
      predictiveSecurity: "Microsoft Threat Intelligence con contexto OT. Copilot para análisis predictivo de riesgos.",
      innovation: "Copilot for Security es el AI assistant más avanzado del mercado con contexto OT. Azure Digital Twins para seguridad.",
      maturity: 5
    },
    {
      vendor: "Armis",
      aiCapabilities: "Asset Intelligence Engine con 3B+ device profiles. AI para risk scoring contextual. ML para behavioral analysis.",
      digitalTwin: "Digital twin de la superficie de ataque con asset intelligence masiva.",
      predictiveSecurity: "Predictive vulnerability prioritization basada en exploitability real y contexto de negocio.",
      innovation: "AI-driven asset intelligence líder del mercado. Early warning system. Centrix AI platform evolution.",
      maturity: 5
    },
    {
      vendor: "TXOne Networks",
      aiCapabilities: "ML en StellarProtect para detección de malware OT. AI para application whitelisting adaptativa.",
      digitalTwin: "Integración básica con plataformas de digital twin de manufactura.",
      predictiveSecurity: "CPSDR (Cyber-Physical Systems Detection and Response) approach predictivo.",
      innovation: "CPSDR como nuevo paradigma. OT-native AI que entiende contexto de proceso industrial.",
      maturity: 4
    },
    {
      vendor: "Honeywell",
      aiCapabilities: "Forge AI para optimización de operaciones con componente de seguridad. ML para detección de anomalías de proceso.",
      digitalTwin: "Honeywell Forge con digital twin de proceso integrado. Simulación de escenarios.",
      predictiveSecurity: "Predictive maintenance con componente de seguridad. Análisis de desviaciones de proceso.",
      innovation: "Convergencia operaciones + seguridad en Forge. Knowledge de proceso industrial profundo.",
      maturity: 4
    },
    {
      vendor: "Siemens",
      aiCapabilities: "Industrial AI en MindSphere/Industrial Edge. SINEC Security Guard con AI para priorización de vulnerabilidades.",
      digitalTwin: "Digital twin con Siemens Xcelerator. Simulación de seguridad en gemelo digital antes de despliegue.",
      predictiveSecurity: "Predictive security analytics en MindSphere. Integration con Siemens Digital Industries.",
      innovation: "Xcelerator digital twin platform. Industrial Edge computing con seguridad integrada. AI en automatización.",
      maturity: 4
    },
    {
      vendor: "Tenable OT",
      aiCapabilities: "AI para priorización de vulnerabilidades (VPR). ML para clasificación de activos. Tenable AI assistant.",
      digitalTwin: "Exposure management como digital twin de la superficie de ataque OT.",
      predictiveSecurity: "Predictive vulnerability prioritization con VPR score. Exploit prediction.",
      innovation: "Tenable One exposure management platform. AI para unificación IT/OT vulnerability view.",
      maturity: 4
    },
    {
      vendor: "Waterfall Security",
      aiCapabilities: "Limitado. Enfoque en seguridad hardware, no AI. Réplicas de datos permiten AI en lado IT.",
      digitalTwin: "Réplica de servidores OT en IT permite crear digital twin sin riesgo para zona OT.",
      predictiveSecurity: "Seguridad determinística (hardware), no predictiva. No requiere AI para garantizar aislamiento.",
      innovation: "CloudConnect para envío seguro a cloud (análisis AI en cloud sin riesgo OT). FLIP para mantenimiento.",
      maturity: 2
    },
    {
      vendor: "OPSWAT",
      aiCapabilities: "Multi-scanning con 30+ engines incluye motores ML. CDR con AI para reconstrucción inteligente.",
      digitalTwin: "No aplica directamente. Enfoque en transferencia segura de archivos.",
      predictiveSecurity: "Proactive DLP con ML. Zero-day detection via multi-scanning consensus.",
      innovation: "Deep CDR con AI para neutralización de amenazas en archivos. MetaDefender Cloud sandbox.",
      maturity: 3
    },
    {
      vendor: "Schneider Electric",
      aiCapabilities: "EcoStruxure AI para eficiencia energética con componente de seguridad. ML básico en monitorización.",
      digitalTwin: "EcoStruxure digital twin para operaciones de energía. Componente de seguridad en evolución.",
      predictiveSecurity: "Predictive maintenance con awareness de seguridad. Evolución hacia security analytics.",
      innovation: "Convergencia eficiencia energética + seguridad en EcoStruxure. Sustainability + Security.",
      maturity: 3
    },
    {
      vendor: "Radiflow",
      aiCapabilities: "CIARA con AI para simulación de ataques. ML en iSID para detección de anomalías.",
      digitalTwin: "CIARA como digital twin de riesgo: simula impacto de ataques en modelo de la red OT.",
      predictiveSecurity: "What-if analysis: predice impacto de vulnerabilidades y propone mitigaciones priorizadas.",
      innovation: "CIARA risk simulation es único en el mercado. Digital twin de riesgo para planificación de seguridad.",
      maturity: 3
    },
    {
      vendor: "Forescout",
      aiCapabilities: "AI para clasificación automática de dispositivos. ML en detección de anomalías. Risk scoring automatizado.",
      digitalTwin: "Asset intelligence como digital twin de la superficie de ataque IT/OT/IoT.",
      predictiveSecurity: "Risk scoring predictivo basado en postura de seguridad y vulnerabilidades.",
      innovation: "Vistaro platform con AI-powered classification. 180+ integraciones como ecosistema abierto.",
      maturity: 4
    },
    {
      vendor: "Cyolo",
      aiCapabilities: "ML para detección de comportamiento anómalo en sesiones de acceso remoto.",
      digitalTwin: "No aplica directamente. Enfoque en acceso, no en modelado.",
      predictiveSecurity: "Risk-based access decisions. Análisis de patrones de acceso para detección de anomalías.",
      innovation: "JIT provisioning y microsegmentación zero trust agentless para OT.",
      maturity: 3
    },
    {
      vendor: "Xage Security",
      aiCapabilities: "ML para análisis de políticas de acceso. AI-assisted policy creation.",
      digitalTwin: "Modelo distribuido de identidades como digital twin de la superficie de acceso.",
      predictiveSecurity: "Blockchain-based identity elimina puntos únicos de fallo. Resilencia distribuida.",
      innovation: "Identidad distribuida blockchain para OT. Zero trust nativo sin servidor central.",
      maturity: 3
    },
    {
      vendor: "runZero",
      aiCapabilities: "ML avanzado para fingerprinting de dispositivos. AI para clasificación de activos.",
      digitalTwin: "Inventario completo como digital twin del entorno de red.",
      predictiveSecurity: "Detección de activos desconocidos y shadow IT/OT.",
      innovation: "Fingerprinting no intrusivo líder. Fundada por HD Moore (creador Metasploit).",
      maturity: 3
    },
    {
      vendor: "NetRise",
      aiCapabilities: "AI para análisis de firmware binario. ML para detección de componentes vulnerables en SBOM.",
      digitalTwin: "SBOM como digital twin del software embebido en dispositivos OT.",
      predictiveSecurity: "Detección proactiva de vulnerabilidades en supply chain antes del despliegue.",
      innovation: "Análisis de firmware sin código fuente. SBOM automático para EU CRA compliance.",
      maturity: 3
    },
    {
      vendor: "Titanium (Rutile)",
      aiCapabilities: "Análisis de anomalías basado en baseline de tráfico industrial. Detección de comportamientos anómalos en protocolos OT.",
      digitalTwin: "Inventario completo de activos como modelo digital del entorno industrial.",
      predictiveSecurity: "Gestión de riesgos basada en vulnerabilidades descubiertas y criticidad de activos industriales.",
      innovation: "Plataforma propietaria española. Laboratorio industrial propio para pruebas. Enfoque en soberanía y normativa europea (ENS, NIS2, IEC 62443).",
      maturity: 3
    }
  ],

  // ─── SCENARIOS ──────────────────────────────────────────────────────
  scenarios: {
    balanced: {},
    visibility: {
      asset_discovery: 5,
      network_monitoring: 5,
      protocol_coverage: 5,
      scalability: 5
    },
    protection: {
      segmentation: 5,
      endpoint_protection: 5,
      threat_detection: 5
    },
    compliance: {
      compliance: 5,
      sovereignty: 5,
      soc_integration: 5
    },
    convergence: {
      it_ot_convergence: 5,
      soc_integration: 5,
      ai_innovation: 5
    }
  },

  // ─── EVIDENCE ITEMS ─────────────────────────────────────────────────
  evidenceItems: [
    { vendor: "Claroty", confidence: 0.92, sources: ["Gartner CPS Protection 2025", "Forrester Wave OT Security 2024", "ICS-CERT advisories", "Team82 research publications"], lastUpdated: "2025-Q4" },
    { vendor: "Nozomi Networks", confidence: 0.91, sources: ["Gartner CPS Protection 2025", "Forrester Wave OT Security 2024", "Nozomi Labs publications", "SANS ICS survey 2024"], lastUpdated: "2025-Q4" },
    { vendor: "Dragos", confidence: 0.95, sources: ["Gartner CPS Protection 2025", "Dragos Year in Review 2024", "WorldView threat reports", "SANS ICS survey 2024", "CISA partnerships"], lastUpdated: "2025-Q4" },
    { vendor: "Fortinet OT", confidence: 0.88, sources: ["Gartner MQ Firewalls", "CCN-STIC catalog", "FortiGuard Labs", "CVE databases", "CISA KEV catalog"], lastUpdated: "2025-Q4" },
    { vendor: "Cisco Industrial", confidence: 0.85, sources: ["Gartner MQ Network Firewalls", "Cisco annual security report", "Cisco Talos intel", "CVE databases"], lastUpdated: "2025-Q4" },
    { vendor: "Microsoft Defender IoT", confidence: 0.87, sources: ["Gartner CPS Protection 2025", "Microsoft Digital Defense Report", "Azure documentation", "MITRE ATT&CK evaluations"], lastUpdated: "2025-Q4" },
    { vendor: "Armis", confidence: 0.90, sources: ["Gartner CPS Protection 2025", "Armis Research publications", "Forrester Wave", "Customer case studies"], lastUpdated: "2025-Q4" },
    { vendor: "TXOne Networks", confidence: 0.86, sources: ["Gartner CPS Protection 2025", "SEMI compliance certifications", "IEC 62443-4-1 certification", "Trend Micro research"], lastUpdated: "2025-Q4" },
    { vendor: "Honeywell", confidence: 0.80, sources: ["CISA ICS-CERT advisories", "Honeywell HCERT", "Industry analyst reports", "CVE databases"], lastUpdated: "2025-Q3" },
    { vendor: "Siemens", confidence: 0.83, sources: ["Siemens ProductCERT advisories", "CISA ICS-CERT", "Gartner reports", "IEC 62443 certifications"], lastUpdated: "2025-Q4" },
    { vendor: "Tenable OT", confidence: 0.86, sources: ["Gartner CPS Protection 2025", "Tenable research publications", "CVE databases", "Forrester reports"], lastUpdated: "2025-Q4" },
    { vendor: "Waterfall Security", confidence: 0.88, sources: ["NRC certifications", "ANSSI approvals", "NERC CIP compliance documentation", "Academic publications on data diodes"], lastUpdated: "2025-Q3" },
    { vendor: "OPSWAT", confidence: 0.84, sources: ["NRC approvals", "CISA cross-domain guidelines", "OPSWAT Academy certifications", "Industry case studies"], lastUpdated: "2025-Q3" },
    { vendor: "Schneider Electric", confidence: 0.78, sources: ["Schneider PSIRT advisories", "CISA ICS-CERT", "IEC 62443 certifications", "CVE databases"], lastUpdated: "2025-Q3" },
    { vendor: "Radiflow", confidence: 0.82, sources: ["Gartner CPS Protection mentions", "IEC 62443 compliance reports", "Customer case studies", "Industry publications"], lastUpdated: "2025-Q3" },
    { vendor: "Forescout", confidence: 0.86, sources: ["Forrester Wave IoT Security", "Gartner NAC reports", "Forescout research publications", "Customer case studies"], lastUpdated: "2025-Q4" },
    { vendor: "Cyolo", confidence: 0.75, sources: ["Analyst reports on OT remote access", "Vendor documentation", "Customer testimonials", "Industry publications"], lastUpdated: "2025-Q3" },
    { vendor: "Xage Security", confidence: 0.76, sources: ["Gartner Cool Vendor 2023", "Vendor documentation", "Customer case studies", "TSA Pipeline compliance reports"], lastUpdated: "2025-Q3" },
    { vendor: "runZero", confidence: 0.78, sources: ["Analyst reports on asset discovery", "Vendor documentation", "HD Moore publications", "Accenture acquisition announcement 2026"], lastUpdated: "2026-Q2" },
    { vendor: "NetRise", confidence: 0.74, sources: ["EU CRA compliance publications", "Vendor documentation", "SBOM industry reports", "Accenture acquisition announcement 2026"], lastUpdated: "2026-Q2" }
  ],

  // ─── PROFILE PRESETS ────────────────────────────────────────────────
  profilePresets: {
    balanced: {
      label: "Balanceado",
      description: "Pesos por defecto, equilibrio entre todos los criterios.",
      weights: {}
    },
    criticalInfra: {
      label: "Infraestructura critica",
      description: "Prioriza soberanía, cumplimiento normativo, segmentación y detección de amenazas para operadores esenciales.",
      weights: {
        sovereignty: 5,
        compliance: 5,
        segmentation: 5,
        threat_detection: 5,
        threat_intel: 5,
        incident_response: 5
      }
    },
    manufacturing: {
      label: "Manufactura / Industria 4.0",
      description: "Prioriza protección de endpoints legacy, convergencia IT/OT y escalabilidad para entornos de manufactura.",
      weights: {
        endpoint_protection: 5,
        it_ot_convergence: 5,
        scalability: 5,
        deployment_ease: 5,
        tco: 5
      }
    },
    energy: {
      label: "Energia / Utilities",
      description: "Prioriza segmentación, cumplimiento normativo, soberanía e inteligencia de amenazas para sector energético.",
      weights: {
        segmentation: 5,
        compliance: 5,
        sovereignty: 5,
        threat_intel: 5,
        protocol_coverage: 5,
        incident_response: 5
      }
    },
    publicSector: {
      label: "Sector publico / ENS",
      description: "Prioriza soberanía, cumplimiento ENS, coste total y despliegue on-premise para administración pública española.",
      weights: {
        sovereignty: 5,
        compliance: 5,
        tco: 5,
        deployment_ease: 4
      }
    }
  },

  // ─── METRIC GUIDANCE ────────────────────────────────────────────────
  metricGuidance: {
    asset_discovery: {
      basis: "Capacidad de descubrir y clasificar automáticamente activos OT (PLCs, RTUs, HMIs, switches industriales) sin impacto en operaciones.",
      evidence: "Evaluado mediante: número de protocolos industriales parseados, precisión de clasificación de activos, profundidad de información extraída (firmware, modelo, configuración).",
      validation: "Laboratorios ICS independientes, SANS ICS surveys, Gartner CPS Protection MQ.",
      links: ["https://www.gartner.com/reviews/market/cps-protection-platforms"]
    },
    network_monitoring: {
      basis: "Capacidad de monitorizar tráfico de red industrial de forma pasiva (SPAN/TAP) detectando anomalías sin afectar a procesos.",
      evidence: "Evaluado mediante: cobertura de protocolos, profundidad de DPI, tasa de falsos positivos, latencia de detección.",
      validation: "Idaho National Laboratory evaluations, MITRE ATT&CK for ICS evaluations, customer deployments.",
      links: ["https://attack.mitre.org/matrices/ics/"]
    },
    threat_detection: {
      basis: "Capacidad de detectar amenazas específicas de OT incluyendo malware ICS, movimiento lateral IT->OT, y manipulación de procesos.",
      evidence: "Evaluado mediante: cobertura MITRE ATT&CK for ICS, detección de malware ICS conocido (PIPEDREAM, TRITON), velocidad de detección.",
      validation: "MITRE ATT&CK for ICS evaluations, Dragos Year in Review, CISA advisories coverage.",
      links: ["https://attack.mitre.org/matrices/ics/"]
    },
    vulnerability_mgmt: {
      basis: "Capacidad de identificar, priorizar y gestionar vulnerabilidades en activos OT considerando la dificultad de parcheo en entornos industriales.",
      evidence: "Evaluado mediante: cobertura de CVEs ICS, precisión de detección, capacidad de virtual patching, priorización por riesgo de proceso.",
      validation: "CISA ICS-CERT advisory coverage, NVD correlation, vendor PSIRT tracking.",
      links: ["https://www.cisa.gov/news-events/ics-advisories"]
    },
    remote_access: {
      basis: "Capacidad de proporcionar acceso remoto seguro a sistemas OT con grabación de sesiones, MFA y control granular.",
      evidence: "Evaluado mediante: métodos de autenticación, grabación de sesiones, granularidad de permisos, auditabilidad.",
      validation: "IEC 62443-3-3 SR 1.1-1.4, NERC CIP-005-7 requirements.",
      links: ["https://www.iec.ch/62443"]
    },
    endpoint_protection: {
      basis: "Capacidad de proteger endpoints OT legacy (Windows XP/7, HMIs, servidores SCADA) con agentes ligeros y application whitelisting.",
      evidence: "Evaluado mediante: compatibilidad con OS legacy, impacto en rendimiento, capacidad de whitelisting, protección offline.",
      validation: "Customer deployments, TXOne/Trend Micro lab testing, IEC 62443-4-2.",
      links: []
    },
    segmentation: {
      basis: "Capacidad de segmentar redes industriales según modelo Purdue/ISA 62443 con zonas y conductos.",
      evidence: "Evaluado mediante: granularidad de políticas, soporte de protocolos industriales en reglas, facilidad de configuración, inline performance.",
      validation: "IEC 62443-3-2 zone/conduit model, NERC CIP-005, NSA/CISA guidelines.",
      links: ["https://www.iec.ch/62443"]
    },
    compliance: {
      basis: "Capacidad de generar informes y evidencias de cumplimiento para IEC 62443, NIS2, NERC CIP, ENS y otros marcos regulatorios OT.",
      evidence: "Evaluado mediante: marcos soportados, automatización de reportes, mapeo de controles, audit trail.",
      validation: "Certificaciones IEC 62443-4-1, auditorías de terceros, regulador approval.",
      links: ["https://www.enisa.europa.eu/topics/nis-directive"]
    },
    protocol_coverage: {
      basis: "Número y profundidad de protocolos industriales soportados para DPI (Modbus, S7comm, EtherNet/IP, DNP3, IEC 61850, etc.).",
      evidence: "Evaluado mediante: número de protocolos, profundidad de parsing (read/write commands), actualizaciones periódicas.",
      validation: "Vendor documentation, independent testing, customer validation en entornos multi-vendor.",
      links: []
    },
    threat_intel: {
      basis: "Calidad y relevancia de inteligencia de amenazas específica de ICS/OT. Tracking de grupos adversarios industriales.",
      evidence: "Evaluado mediante: número de activity groups tracked, frecuencia de actualizaciones, cobertura geográfica, profundidad de análisis.",
      validation: "Dragos WorldView benchmark, SANS ICS surveys, MITRE ATT&CK for ICS coverage.",
      links: ["https://www.dragos.com/threat/activity-groups/"]
    },
    incident_response: {
      basis: "Capacidad de respuesta a incidentes específica de OT: investigación forense, contención sin impacto en proceso, recuperación.",
      evidence: "Evaluado mediante: experiencia del equipo IR, playbooks OT, herramientas forenses, capacidad on-site.",
      validation: "Track record público, CISA partnerships, customer testimonials.",
      links: []
    },
    it_ot_convergence: {
      basis: "Capacidad de integrar visibilidad y operaciones de seguridad IT y OT en una plataforma o workflow unificado.",
      evidence: "Evaluado mediante: integración con SIEM/XDR IT, contexto OT enriquecido en alertas, workflow unificado, RBAC cross-domain.",
      validation: "Gartner CPS Protection criteria, customer SOC implementations, analyst reports.",
      links: []
    },
    soc_integration: {
      basis: "Facilidad de integración con SIEM, SOAR y XDR corporativos para operación desde SOC unificado.",
      evidence: "Evaluado mediante: conectores nativos disponibles, formatos de log (CEF/LEEF/syslog), APIs, playbooks pre-built.",
      validation: "Integration testing, vendor partnerships (Splunk, Sentinel, QRadar), customer deployments.",
      links: []
    },
    deployment_ease: {
      basis: "Facilidad y velocidad de despliegue inicial. Tiempo hasta primera visibilidad. Complejidad de configuración.",
      evidence: "Evaluado mediante: tiempo medio de despliegue, requisitos de hardware, complejidad de configuración, soporte disponible.",
      validation: "Customer deployment timelines, PoC experiences, professional services requirements.",
      links: []
    },
    sovereignty: {
      basis: "Capacidad de despliegue completamente on-premise sin dependencia de cloud externo. Requisito para ENS Alto e infraestructura crítica.",
      evidence: "Evaluado mediante: opción full on-prem, air-gap support, data residency, independencia de vendor cloud.",
      validation: "ENS certification, ANSSI/BSI approval, customer deployments en infraestructura crítica.",
      links: []
    },
    scalability: {
      basis: "Capacidad de escalar a miles de activos y decenas de sites distribuidos sin degradación de rendimiento.",
      evidence: "Evaluado mediante: máximo de activos por sensor, arquitectura multi-site, cloud scalability, performance benchmarks.",
      validation: "Customer deployments large-scale, vendor architecture documentation, stress testing.",
      links: []
    },
    tco: {
      basis: "Coste total de propiedad incluyendo licencias, hardware, implementación, operación y renovaciones a 3 años.",
      evidence: "Evaluado mediante: modelo de pricing (por activo, por sensor, por site), costes de hardware, servicios profesionales, operación.",
      validation: "Customer TCO analysis, analyst TCO comparisons, vendor pricing publicly available.",
      links: []
    },
    ai_innovation: {
      basis: "Capacidad de innovación en IA, machine learning, digital twins de seguridad y análisis predictivo para OT.",
      evidence: "Evaluado mediante: capacidades AI/ML en producto, roadmap de innovación, patentes, publicaciones de investigación.",
      validation: "Product releases, analyst assessments, customer feedback on AI features.",
      links: []
    }
  }

};
