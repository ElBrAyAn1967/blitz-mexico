---
title: "Eco Eeelien"
slug: "eco-eeelien"
icon: "leaf"
team:
  - name: "Nadia Elizabeth Escalante Solano"
  - name: "Carlos Navarrete Tapia"
members: 2
area: "Regen/IoT"
phase: 85
status: "completed"
techStack:
  - "Next.js"
  - "Foundry"
  - "Tailwind CSS"
  - "ESP32-CAM"
  - "Solidity"
  - "USDC"
contracts:
  - name: "EcoToken (v1)"
    deployed: true
    address: "0x03b5e6f27e1b1a1ae5aa990074209fcfae473222"
  - name: "RecyclingRegistry (v1)"
    deployed: true
    address: "0x18590db5176e85785fb859b4b96e99b0a4d2f817"
  - name: "ChallengeManager"
    deployed: true
    address: "0x1507efa34a2f9e33ed491526132bfaf6a5c50c97"
  - name: "VoucherNFT"
    deployed: true
    address: "0x188496b92fb6580dfd9159c40fd5bf4fb438d729"
  - name: "EcoToken (v2)"
    deployed: true
    address: "0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9"
  - name: "RecyclingRegistry (v2)"
    deployed: true
    address: "0x7fFCcdD4b9Ae0a3cfCdA86c954AE8a1816Ec74C3"
repo: "https://github.com/eeelien/eco-eeelien-monad"
deployUrl: "https://eco-eeelien-monad-git-main-eeeliens-projects.vercel.app/"
messages: 342
errors:
  - description: "Chain ID incorrecto en frontend"
    cause: "Docs decían 41454, correcto es 10143"
    severity: "critical"
    resolved: true
  - description: "Token de GitHub expuesto en chat"
    cause: "Compartieron token en Discord público"
    severity: "critical"
    resolved: true
---
# 🌱 Eco Eeelien — IoT Recycling Rewards

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto (DevNads)

> Es una plataforma de reciclaje con recompensa con USDC. Monad es la blockchain donde se registran las transacciones de reciclaje y se distribuyen los tokens ECO como recompensa a los usuarios. Con ESP32.

**Flujo:**
1. Usuario escanea residuos con ESP32-CAM
2. IA clasifica tipo de material
3. Sistema registra en RecyclingRegistry
4. Usuario recibe EcoTokens como recompensa
5. Tokens canjeables por vouchers NFT

## 👥 Equipo (DevNads Oficial)
- **Nadia Elizabeth Escalante Solano** — Desarrollo principal
- **Carlos Navarrete Tapia** — Co-desarrollo

## 🔧 Stack Técnico
- **Hardware:** ESP32-CAM (cámara IoT)
- **IA:** Clasificación de imágenes
- **Smart Contracts:** Solidity + Foundry
- **Frontend:** Next.js + Tailwind
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Deployados ✅ VERIFICADOS ON-CHAIN

**Versión 1:**
| Contrato | Address | Función |
|----------|---------|---------|
| EcoToken | `0x03b5e6f27e1b1a1ae5aa990074209fcfae473222` | ERC20 rewards |
| RecyclingRegistry | `0x18590db5176e85785fb859b4b96e99b0a4d2f817` | Registro de reciclaje |
| ChallengeManager | `0x1507efa34a2f9e33ed491526132bfaf6a5c50c97` | Gamificación |
| VoucherNFT | `0x188496b92fb6580dfd9159c40fd5bf4fb438d729` | NFT vouchers |

**Versión 2 (actualizada):**
| Contrato | Address | Función |
|----------|---------|---------|
| EcoToken (ECO) | `0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9` | ERC20 rewards v2 |
| RecyclingRegistry | `0x7fFCcdD4b9Ae0a3cfCdA86c954AE8a1816Ec74C3` | Registro v2 |

**Total:** 6 contratos on-chain (~96 KB de bytecode)

## 🔗 Links Oficiales
- **Demo:** https://eco-eeelien-monad-git-main-eeeliens-projects.vercel.app/
- **GitHub:** https://github.com/eeelien/eco-eeelien-monad

## 🚨 Errores Documentados

### 1. Chain ID incorrecto (CRITICAL)
- **Problema:** Frontend usaba chain ID de docs viejos (41454)
- **Correcto:** 10143
- **Estado:** ✅ Resuelto

### 2. Token de GitHub expuesto (CRITICAL)
- **Problema:** Token compartido en Discord público
- **Acción:** Token revocado inmediatamente
- **Estado:** ✅ Resuelto

## 📊 Métricas
- **Mensajes en Discord:** 342 (más activo)
- **Contratos deployados:** 6 (v1: 4, v2: 2)
- **Errores resueltos:** 2/2

## 💡 Innovación
**Único proyecto con hardware IoT.** ESP32-CAM + IA + Blockchain = verificación física de reciclaje.

## ✅ Estado Final
🟢 **COMPLETADO** — Proyecto más completo del Blitz. 6 contratos on-chain (2 versiones), frontend funcional, hardware IoT integrado.
