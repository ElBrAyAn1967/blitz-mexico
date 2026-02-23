---
title: "💚 ClearHope / Solidario México — Reporte de Equipo"
---

# 💚 ClearHope / Solidario México — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Datos Verificados (Recolección Manual — Brian Lopez)
- **Miembros del equipo:** 4
- **Fase al cierre:** 20%
- **Descripción oficial:** Donativos para damnificados

> **Nota:** Este reporte unifica los threads "Davnificados" (thread 14) y "Solidario México" (thread 4, eliminado). El thread `1474837045494153378` ("Axel & equipo") corresponde a este mismo proyecto.

## 📋 Descripción del Proyecto
Plataforma de donaciones para desastres naturales en México. Los donantes depositan en un pool que genera yield vía Kintsu staking en Monad, y el yield se distribuye a los damnificados mientras el principal se mantiene intacto.

## 👥 Miembros del Equipo
- **al5136 (Axel)** — Desarrollo
- **misteroby17** — Desarrollo
- **jose.ewe** — Desarrollo
- 1 miembro adicional (4 total según datos verificados)

## 🔧 Stack Técnico
- **Smart Contracts:** Solidity + Foundry — Contrato: ImpactFundKintsu
- **Frontend:** Next.js + wagmi/viem + Privy
- **Staking:** Integración con Kintsu (liquid staking en Monad)
- **Deploy:** solidario-mexico.vercel.app
- **Blockchain:** Monad Testnet (Chain ID 10143)

## ⏰ Timeline de Actividad
- **~18:35 UTC** — Mel presenta al equipo de Axel en el canal general
- **18:35–20:00 UTC** — Onboarding técnico completo (Foundry, Git, Node.js)
- **20:00–23:00 UTC** — Desarrollo del concepto y smart contracts
- **23:00+ UTC** — Frontend development

## 🚨 Errores y Blockers

### 1. Onboarding técnico desde cero
- **Problema:** El equipo necesitaba setup completo de tooling (Foundry, Node.js, Git)
- **Solución:** devrel-banana guió paso a paso la instalación y configuración

### 2. Llegada tardía
- **Problema:** El equipo se unió tarde (~18:35 UTC vs inicio ~15:30 UTC)
- **Impacto:** ~3 horas menos de desarrollo que otros equipos

## 🤖 Soporte de Agentes
- **devrel-banana:** Onboarding técnico completo para Axel & equipo

## 📊 Métricas
- **Total mensajes en thread:** 194 (Axel & equipo) + 4 (Davnificados)
- **Contrato:** ImpactFundKintsu (Foundry)
- **Deploy:** solidario-mexico.vercel.app

## 🔗 Repositorio y Contratos (Verificado desde GitHub)

- **Repo:** [github.com/AlanRLG/solidario-mexico](https://github.com/AlanRLG/solidario-mexico)
- **Stack verificado:** Vite + React + Tailwind + shadcn/ui, Foundry para contratos
- **Contrato principal:** `ImpactFundKintsu.sol` (Solidity ^0.8.28)
  - Integra con Kintsu vault (liquid staking en Monad)
  - `donate()` — deposita y stakea via Kintsu, recibe kAsset (sMON)
  - `unlockFundsToAdmin()` — retira fondos + cobra 0.05% platform fee sobre el yield
  - `claimRefund()` — reembolso si no se alcanza la meta
  - Wallets hardcodeadas: staking=`0xe1d2...9c5`, funds=`0x050C...b7`
  - OpenZeppelin: Ownable, IERC20
- **Deploy:** [solidario-mexico.vercel.app](https://solidario-mexico.vercel.app)
- **Equipo GitHub:** al5136 (Axel/Alan), misteroby17, jose.ewe
- **Patrón notable:** Liquid staking como mecanismo de fundraising — los donantes no pierden su principal, solo el yield va a la causa

## ✅ Estado Final
🟡 **En progreso (20%)** — Concepto sólido, equipo de 4 personas. Llegaron tarde y necesitaron onboarding pero avanzaron en el diseño de la plataforma de donativos.
