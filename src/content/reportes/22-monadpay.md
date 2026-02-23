---
title: "MonadPay"
slug: "monadpay"
icon: "credit-card"
team:
  - name: "Cindy Jimenez"
members: 1
area: "DeFi/Payments"
phase: 45
status: "in-progress"
techStack:
  - "Next.js 14"
  - "TypeScript"
  - "Tailwind CSS"
  - "wagmi"
  - "viem"
  - "RainbowKit"
  - "Solidity"
contracts:
  - name: "PaymentLink"
    deployed: false
repo: "https://github.com/Scarfdrilo/monadpay"
deployUrl: "https://monadpay-mu.vercel.app/"
messages: 0
errors: []
---
# 💳 MonadPay — Payment Links on Monad

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto (DevNads)

> MonadPay es una solución de pagos que convierte una simple URL en una transacción on-chain en la blockchain de Monad.
> 
> El proyecto está diseñado para hacer que los pagos con crypto sean tan fáciles como compartir un link. En lugar de copiar direcciones, seleccionar tokens o interactuar con dApps complejas, el usuario solo escanea un QR o abre un link, confirma el pago en su wallet y listo.

**Features:**
- URL → transacción on-chain
- QR codes para pagos presenciales
- Mobile-first (optimizado para iPhone)
- Soporte MON nativo y ERC20
- Recibos on-chain inmutables

**Desafío técnico superado:**
Codificar parámetros de pago (destinatario, monto, token, descripción) en una URL compartible usando Base64.

**Características de Monad usadas:**
- ⚡ Alto throughput — pagos simultáneos sin congestión
- 💰 Costos bajos — micropagos viables
- 🚀 Finalidad rápida — confirmación casi instantánea

## 👥 Equipo (DevNads Oficial)
- **Cindy Jimenez** — Desarrollador full-stack

## 🔧 Stack Técnico
- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Web3:** wagmi, viem, RainbowKit
- **Smart Contract:** Solidity (pagos nativos + ERC20)
- **Blockchain:** Monad Testnet

## 📜 Contratos
- `PaymentLink.sol` — Pagos via URL con recibos on-chain

## 🔗 Links Oficiales
- **Demo:** https://monadpay-mu.vercel.app/
- **GitHub:** https://github.com/Scarfdrilo/monadpay

## 💡 Innovación
**Pagos tan fáciles como compartir un link.** QR → Pago → Confirmado.

## ✅ Estado Final
🟡 **En progreso** — Payment links funcionales, smart contract en desarrollo.
