---
title: "Strope Pay"
slug: "strope-pay"
icon: "credit-card"
team:
  - name: "0xChijioke"
members: 1
area: "DeFi/Fintech"
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
    description: "Pagos recurrentes on-chain"
repo: "https://github.com/usainbluntmx/strope-pay"
messages: 0
errors: []
---
# 💳 Strope Pay — Subscription Manager

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**Strope Pay** — Sistema de suscripciones on-chain tipo Stripe. Permite a merchants crear planes de pago recurrentes y a usuarios suscribirse con tokens ERC20. Pagos ejecutables por cualquiera cuando el intervalo se cumple.

## 👥 Miembros del Equipo
- **0xChijioke** — Desarrollador full-stack

## 🔧 Stack Técnico
- **Frontend:** Next.js + Reown AppKit
- **Smart Contracts:** Solidity + Hardhat
- **Web3:** wagmi/viem
- **Deploy:** Multi-chain (Arbitrum, Base, Monad)
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Desarrollados

### SubscriptionManager.sol ⭐ DESTACADO
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SubscriptionManager {
    uint256 public subscriptionCount;

    struct Subscription {
        address subscriber;
        address merchant;
        address token;
        uint256 amount;
        uint256 interval;
        uint256 nextPayment;
        bool active;
    }

    mapping(uint256 => Subscription) public subscriptions;

    event SubscriptionCreated(uint256 indexed subscriptionId, ...);
    event PaymentExecuted(uint256 indexed subscriptionId, uint256 nextPayment);
    event SubscriptionCancelled(uint256 indexed subscriptionId);

    function createSubscription(
        address _merchant,
        address _token,
        uint256 _amount,
        uint256 _interval
    ) external {
        // Validates and creates subscription
        subscriptionCount++;
        subscriptions[subscriptionCount] = Subscription({...});
    }

    function executePayment(uint256 _subscriptionId) external {
        // Anyone can call when interval elapsed
        // Transfers from subscriber to merchant
        sub.nextPayment += sub.interval;
    }

    function cancelSubscription(uint256 _subscriptionId) external {
        // Only subscriber can cancel
    }
}
```

**Características clave:**
- ✅ Cualquiera puede ejecutar el pago (keeper-friendly)
- ✅ Soporte multi-token (cualquier ERC20)
- ✅ Intervalos flexibles (diario, semanal, mensual)
- ✅ Cancel anytime por el suscriptor

## 📂 Estructura del Repo
```
strope-pay/
├── backend/
│   ├── contracts/
│   │   ├── SubscriptionManager.sol
│   │   └── mocks/
│   │       └── ERC20Mock.sol
│   ├── scripts/
│   └── hardhat.config.js
├── frontend/
│   └── Next.js app
└── README.md (16KB - muy completo)
```

## ⏰ Timeline de Actividad
- Desarrollo principalmente offline
- Template EVM pre-configurado usado como base

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Avanzado — desarrollador experimentado
- **Principal desafío:** Diseño de keeper system para pagos
- **Progreso:** ⭐⭐⭐⭐ MUY BUENO — Contrato limpio y reutilizable
- **Lección clave:** Suscripciones on-chain son primitivo faltante

## 📊 Métricas
- **Total mensajes en thread:** N/A (trabajo offline)
- **Contrato escrito:** ✅ SubscriptionManager.sol
- **Contrato deployado:** ❌ Pendiente
- **README:** ✅ 16KB - documentación excelente

## 💡 Insights para DevRel

**Por qué importa:**
- Suscripciones = modelo de negocio dominante (SaaS)
- On-chain = sin intermediarios, sin chargebacks
- Keeper-friendly = automatizable con Chainlink/Gelato

**Potencial post-Blitz:**
- Template para cualquier dApp con suscripciones
- Integración con stablecoins para pricing estable
- Keeper network para ejecución automática

**Componente reutilizable:**
Este contrato es un building block que cualquier proyecto puede usar.

## ✅ Estado Final
🟡 **Contrato completo** — Código limpio, bien documentado, listo para deploy. Uno de los contratos más reutilizables del Blitz. Falta deploy y testing.
