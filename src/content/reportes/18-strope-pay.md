---
title: "Strope Pay"
slug: "strope-pay"
icon: "credit-card"
team:
  - name: "Ricardo Fuentes"
members: 1
area: "Payments/Stablecoins"
phase: 55
status: "in-progress"
techStack:
  - "Next.js"
  - "Hardhat"
  - "Solidity"
  - "Reown AppKit"
  - "wagmi/viem"
  - "TypeScript"
contracts:
  - name: "SubscriptionManager"
    deployed: false
repo: "https://github.com/usainbluntmx/strope-pay"
deployUrl: "https://strope-pay.vercel.app/"
messages: 0
errors: []
---
# 💳 Strope Pay — On-chain Subscriptions

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto (DevNads)

> Strope Pay es una dApp enfocada en permitirle al usuario pagar servicios y suscripciones mediante stablecoins y de forma completamente onchain. Una versión mucho más atractiva que Stripe, pero con la diferencia de que:
> 1. El usuario no necesita una tarjeta bancaria para realizar sus pagos
> 2. No necesita una tarjeta cripto donde, de igual manera, se le pide KYC
> 3. El usuario controla al 100% lo que paga y cuando lo paga

**Ventajas vs Stripe:**
- Sin tarjeta bancaria
- Sin KYC
- Control total del usuario
- Pagos on-chain

## 👥 Equipo (DevNads Oficial)
- **Ricardo Fuentes** — Desarrollador principal

## 🔧 Stack Técnico
- **Frontend:** Next.js + TypeScript
- **Smart Contracts:** Hardhat + Solidity
- **Auth:** Reown AppKit
- **Web3:** wagmi/viem
- **Blockchain:** Monad Testnet

## 📜 Contratos Desarrollados

### SubscriptionManager.sol
```solidity
struct Subscription {
    address subscriber;
    address merchant;
    address token;
    uint256 amount;
    uint256 interval;
    uint256 nextPayment;
    bool active;
}

function createSubscription(...) external;
function executePayment(subscriptionId) external;  // Anyone can call
function cancelSubscription(subscriptionId) external;
```

**Features:**
- Cualquiera puede ejecutar el pago (keeper-friendly)
- Soporte multi-token (cualquier ERC20)
- Intervalos flexibles
- Cancel anytime

## 🔗 Links Oficiales
- **Demo:** https://strope-pay.vercel.app/
- **GitHub:** https://github.com/usainbluntmx/strope-pay

## 💡 Innovación
**Suscripciones on-chain.** Primitivo faltante en el ecosistema.

## ✅ Estado Final
🟡 **En progreso** — Contrato limpio y reutilizable, pendiente deploy.
