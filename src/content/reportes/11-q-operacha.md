---
title: "Qoperacha"
slug: "qoperacha"
icon: "coins"
team:
  - name: "Christopher"
  - name: "Luca"
  - name: "Daniel"
members: 3
area: "DeFi"
phase: 55
status: "in-progress"
techStack:
  - "Scaffold-ETH 2"
  - "Hardhat"
  - "Next.js"
  - "Python"
  - "FastAPI"
  - "web3.py"
contracts:
  - name: "CoperachaInteligente"
    deployed: true
    address: "0xa1Fa467A046Cd3DD9eE2De2b2043cDa4175E3b9C"
repo: "https://github.com/LexBP11/qoperacha_hack"
deployUrl: "https://qoperachahack.vercel.app/"
messages: 73
errors:
  - description: "deployedContracts.ts vacío"
    cause: "No corrieron yarn deploy antes del frontend"
    severity: "critical"
    resolved: true
  - description: "Python data 0x missing selector"
    cause: "web3.py enviaba tx sin function selector"
    severity: "critical"
    resolved: true
---
# 🎰 Qoperacha — AI Risk Shield for DeFi

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto (DevNads)

> En el mercado DeFi, un segundo de volatilidad puede borrar el patrimonio de años, y la reacción humana siempre llega demasiado tarde. Qoperacha es el escudo predictivo que elimina este riesgo: un gestor autónomo que utiliza agentes de IA para detectar crisis y proteger tu capital en la red Monad en menos de un segundo, antes de que el mercado colapse.

**Features:**
- Detección de crisis con IA
- Protección de capital automática
- Reacción en menos de 1 segundo
- Gestor autónomo

## 👥 Equipo (DevNads Oficial)
- **Christopher** — Desarrollo
- **Luca** — Desarrollo
- **Daniel** — Desarrollo

## 🔧 Stack Técnico
- **Frontend:** Scaffold-ETH 2 (Next.js)
- **Smart Contracts:** Hardhat + Solidity
- **Backend AI:** Python + FastAPI
- **Web3:** web3.py
- **Blockchain:** Monad Testnet

## 📜 Contratos Deployados ✅ VERIFICADO ON-CHAIN

| Contrato | Address |
|----------|---------|
| CoperachaInteligente | `0xa1Fa467A046Cd3DD9eE2De2b2043cDa4175E3b9C` |

## 🔗 Links Oficiales
- **Demo:** https://qoperachahack.vercel.app/
- **GitHub:** https://github.com/LexBP11/qoperacha_hack

## 🚨 Errores Documentados

### 1. deployedContracts.ts vacío (CRITICAL)
- **Problema:** Frontend no encontraba el contrato
- **Causa:** No ejecutaron `yarn deploy`
- **Estado:** ✅ Resuelto

### 2. web3.py missing selector (CRITICAL)
- **Problema:** Transacciones Python fallaban
- **Causa:** web3.py enviaba tx sin function selector
- **Solución:** Usar `contract.functions.method().build_transaction()`
- **Estado:** ✅ Resuelto

## 📊 Métricas
- **Mensajes en Discord:** 73
- **Contratos deployados:** 1
- **Errores resueltos:** 2/2

## ✅ Estado Final
🟡 **En progreso** — Contrato deployado, backend AI funcional. Sistema híbrido Python + Solidity.
