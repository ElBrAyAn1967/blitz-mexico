---
title: "Eco Eeelien"
slug: "eco-eeelien"
icon: "leaf"
team:
  - name: "39eliens"
    discord: "39eliens"
  - name: "Carlos Navarrete"
members: 2
area: "IoT/Hardware"
phase: 70
status: "completed"
techStack:
  - "Next.js"
  - "Foundry"
  - "Tailwind CSS"
  - "ESP32-CAM"
  - "Solidity"
  - "AI Image Classification"
contracts:
  - name: "EcoToken"
    deployed: true
    address: "0x03b5e6f27e1b1a1ae5aa990074209fcfae473222"
    description: "ERC20 reward token"
  - name: "RecyclingRegistry"
    deployed: true
    address: "0x18590db5176e85785fb859b4b96e99b0a4d2f817"
    description: "Registry of recycling events"
  - name: "ChallengeManager"
    deployed: true
    address: "0x1507efa34a2f9e33ed491526132bfaf6a5c50c97"
    description: "Gamification challenges"
  - name: "VoucherNFT"
    deployed: true
    address: "0x188496b92fb6580dfd9159c40fd5bf4fb438d729"
    description: "NFT vouchers for rewards"
repo: "https://github.com/eeelien/eco-eeelien-monad"
messages: 342
errors:
  - description: "Chain ID incorrecto en frontend"
    cause: "Docs decian 41454, correcto es 10143"
    severity: "critical"
    resolved: true
  - description: "Token de GitHub expuesto en chat"
    cause: "39eliens compartio token en Discord"
    severity: "critical"
    resolved: true
---
# 🌱 Eco Eeelien — IoT Recycling Rewards

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**Eco Eeelien** — Plataforma de reciclaje tokenizado que combina IoT (ESP32-CAM) + IA para clasificar residuos y recompensar con tokens en Monad. Los usuarios escanean sus residuos con una cámara, la IA clasifica el tipo de material, y reciben EcoTokens como recompensa.

## 👥 Miembros del Equipo
- **39eliens** — Desarrollo principal, IoT
- **Carlos Navarrete** — Co-desarrollo

## 🔧 Stack Técnico
- **Hardware:** ESP32-CAM (cámara IoT)
- **IA:** Clasificación de imágenes para tipos de residuos
- **Smart Contracts:** Solidity + Foundry (4 contratos)
- **Frontend:** Next.js + Tailwind + WalletConnect
- **Deploy:** Vercel
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Deployados (4) ✅ VERIFICADOS ON-CHAIN

| Contrato | Address |
|----------|---------|
| EcoToken | `0x03b5e6f27e1b1a1ae5aa990074209fcfae473222` |
| RecyclingRegistry | `0x18590db5176e85785fb859b4b96e99b0a4d2f817` |
| ChallengeManager | `0x1507efa34a2f9e33ed491526132bfaf6a5c50c97` |
| VoucherNFT | `0x188496b92fb6580dfd9159c40fd5bf4fb438d729` |

## ⏰ Timeline de Actividad
- **~15:30 UTC** — Inicio, arquitectura IoT + blockchain
- **16:00–19:00 UTC** — Desarrollo de 4 smart contracts
- **19:00–21:00 UTC** — Deploy exitoso en Monad Testnet
- **21:00–00:00 UTC** — Frontend + WalletConnect + Vercel deploy

## 🚨 Errores y Blockers (DETALLADO)

### 1. Chain ID incorrecto (CRÍTICO)
- **Problema:** Frontend usaba chain ID de docs viejos
- **Error:** `Wrong network` en todas las transacciones
- **Causa:** Docs decían 41454, correcto es 10143
- **Solución:** Actualizar chain config
- **Tiempo perdido:** ~1 hora

### 2. Token de GitHub expuesto (CRÍTICO)
- **Problema:** 39eliens pegó token en Discord público
- **Impacto:** Seguridad comprometida
- **Solución:** Token revocado inmediatamente

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Intermedio-avanzado — experiencia en IoT, nuevos en Solidity
- **Principal desafío:** Pasar de IoT/hardware a smart contracts en 1 día
- **Progreso:** ⭐⭐⭐⭐⭐ EXCELENTE — 4 contratos deployados + frontend funcional
- **Lección clave:** IoT + blockchain es viable pero requiere abstracción de capas

## 🤖 Soporte de Agentes
- **devrel-banana:** Deploy de contratos, arquitectura, Vercel
- **aibus-dumbleclaw:** Fix WalletConnect, chain config, frontend

## 📊 Métricas
- **Total mensajes en thread:** 342 (más activo del Blitz)
- **Contratos deployados:** ✅ 4 contratos en Monad Testnet
- **Frontend deployado:** ✅ En Vercel
- **Hardware:** ✅ ESP32-CAM integrado (parcial)

## ✅ Estado Final
🟢 **COMPLETADO** — Proyecto más activo y completo del Blitz. 4 contratos deployados con addresses verificadas. Combinación única de IoT + IA + blockchain.
