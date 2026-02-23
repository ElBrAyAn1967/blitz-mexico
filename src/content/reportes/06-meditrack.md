---
title: "MediTrack"
slug: "meditrack"
icon: "heart-pulse"
team:
  - name: "ailwdhy"
members: 4
area: "Health/MedTech"
phase: 50
status: "in-progress"
techStack:
  - "Next.js"
  - "TypeScript"
  - "Tailwind CSS"
  - "Privy"
  - "wagmi/viem"
  - "Foundry"
  - "Solidity"
contracts:
  - name: "MediPay"
    deployed: false
    description: "Pagos médicos on-chain"
repo: "https://github.com/Scarfdrilo/meditrack"
deployUrl: "https://meditrack-ruby.vercel.app"
messages: 30
errors: []
---
# 🏥 MediTrack — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
Plataforma para conectar médicos y pacientes on-chain. Permite almacenar registros médicos de forma segura en blockchain, facilitar pagos entre pacientes y doctores, y trackear historial de tratamientos.

## 👥 Miembros del Equipo
- **ailwdhy** — Desarrollador principal
- 3 colaboradores adicionales

## 🔧 Stack Técnico
- **Frontend:** Next.js + TypeScript + Tailwind
- **Auth:** Privy
- **Web3:** wagmi/viem
- **Smart Contracts:** Solidity + Foundry
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Desarrollados

### MediPay.sol
```solidity
contract MediPay {
    struct Payment {
        address patient;
        address doctor;
        uint256 amount;
        uint256 timestamp;
        string serviceType;
    }
    
    mapping(address => Payment[]) public patientHistory;
    mapping(address => Payment[]) public doctorHistory;
    
    function payDoctor(address doctor, uint256 amount, string serviceType) external;
    function payPharmacy(address pharmacy, uint256 amount) external;
    function getPaymentHistory(address patient) external view returns (Payment[] memory);
}
```

## 📂 Estructura del Repo
```
meditrack/
├── contracts/
│   └── MediPay.sol
├── frontend/
│   ├── app/
│   │   ├── doctor/     # Vista Doctor
│   │   └── patient/    # Vista Paciente
│   └── components/
├── foundry.toml
└── package.json
```

## ⏰ Timeline de Actividad
- **~00:00 UTC (6pm CDMX)** — Inicio tardío del proyecto
- **00:00–02:00 UTC** — Scaffolding Next.js + Privy
- **02:00+ UTC** — Desarrollo del MVP de UI + contrato

## 🚨 Errores y Blockers

### 1. Inicio tardío
- **Problema:** Comenzaron ~6pm hora CDMX
- **Impacto:** Menos tiempo disponible para desarrollo

### 2. Dual UI complexity
- **Problema:** Diseñar UX para doctor Y paciente
- **Solución:** aibus-dumbleclaw construyó ambas vistas

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Intermedio — experiencia en web dev
- **Principal desafío:** Dos tipos de usuario en pocas horas
- **Progreso:** ⭐⭐⭐ BUENO — MVP funcional
- **Lección clave:** Health-tech requiere mucha UX para diferentes roles

## 🤖 Soporte de Agentes
- **devrel-banana:** Scaffolding Next.js + Privy
- **aibus-dumbleclaw:** MVP completo de UI (Doctor + Paciente)

## 📊 Métricas
- **Total mensajes en thread:** 30
- **Contrato escrito:** ✅ MediPay.sol
- **Contrato deployado:** ❌ No
- **Frontend:** ✅ MVP con vistas Doctor/Paciente

## 💡 Insights para DevRel

**Por qué importa:**
- Pagos médicos en México = mucho efectivo
- Blockchain = trazabilidad de pagos
- Privacidad = crítica en health data

**Potencial post-Blitz:**
- Integración con sistemas de citas
- Partnership con clínicas
- Compliance con datos médicos

## ✅ Estado Final
🟡 **En progreso** — MVP de frontend funcional con contrato escrito. Llegaron tarde pero lograron armar algo. aibus-dumbleclaw fue clave para la UI.
