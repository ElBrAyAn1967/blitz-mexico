---
title: "Q-Operacha"
slug: "q-operacha"
icon: "coins"
team:
  - name: "Chris"
  - name: "LexBP11"
members: 3
area: "DeFi/Fintech"
phase: 45
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
    description: "Cooperative savings with AI risk"
repo: "https://github.com/LexBP11/qoperacha_hack"
deployUrl: "https://qoperacha.vercel.app"
messages: 73
errors:
  - description: "deployedContracts.ts vacio"
    cause: "No corrieron yarn deploy antes del frontend"
    severity: "critical"
    resolved: true
  - description: "Python data 0x missing selector"
    cause: "web3.py enviaba tx sin function selector"
    severity: "critical"
    resolved: true
---
# 🎰 Q-Operacha — Cooperative Savings + AI Risk

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**Q-Operacha** — Motor de riesgo con IA para ahorros cooperativos (tandas). Combina el modelo tradicional de cooperacha mexicana con análisis de riesgo automatizado para proteger a los participantes.

## 👥 Miembros del Equipo
- **Chris** — Desarrollador principal
- **LexBP11** — Co-desarrollo
- +1 colaborador

## 🔧 Stack Técnico
- **Frontend:** Scaffold-ETH 2 (Next.js)
- **Smart Contracts:** Hardhat + Solidity
- **Backend AI:** Python + FastAPI
- **Web3:** web3.py para interacción backend
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Deployados

### CoperachaInteligente.sol ✅ DEPLOYED
```solidity
contract CoperachaInteligente {
    struct Cooperacha {
        address[] participants;
        uint256 contribution;
        uint256 currentRound;
        uint256 totalRounds;
        mapping(address => uint256) riskScore;
    }
    
    function createCooperacha(uint256 contribution, uint256 rounds) external;
    function join(uint256 cooperachaId) external;
    function contribute(uint256 cooperachaId) external payable;
    function distribute(uint256 cooperachaId) external;
    function updateRiskScore(address participant, uint256 score) external;
}
```

## 📂 Estructura del Repo
```
qoperacha_hack/
├── packages/
│   ├── hardhat/
│   │   └── contracts/
│   │       └── CoperachaInteligente.sol
│   └── nextjs/
│       └── Scaffold-ETH 2 frontend
├── backend/
│   ├── risk_engine.py
│   └── api.py (FastAPI)
└── README.md
```

## ⏰ Timeline de Actividad
- **~16:00 UTC** — Inicio con Scaffold-ETH 2
- **16:00–20:00 UTC** — Desarrollo del contrato
- **20:00–23:00 UTC** — Backend de riesgo en Python
- **23:00+ UTC** — Debugging de errores críticos

## 🚨 Errores y Blockers (DETALLADO)

### 1. deployedContracts.ts vacío (CRÍTICO)
- **Problema:** Frontend no encontraba el contrato
- **Causa:** No corrieron `yarn deploy` antes de iniciar frontend
- **Error:** `Contract address undefined`
- **Solución:** Ejecutar deploy y regenerar artifacts
- **Tiempo perdido:** ~45 min

### 2. Python 0x missing selector (CRÍTICO)
- **Problema:** Transacciones desde Python fallaban
- **Causa:** web3.py enviaba tx sin function selector
- **Error:** `Invalid transaction data`
- **Solución:** Usar `contract.functions.method().build_transaction()`
- **Tiempo perdido:** ~1 hora

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Avanzado en DeFi, intermedio en Python-Web3
- **Principal desafío:** Conectar Python backend con smart contracts
- **Progreso:** ⭐⭐⭐ BUENO — Deploy exitoso + backend funcional
- **Lección clave:** web3.py tiene gotchas vs ethers.js

## 🤖 Soporte de Agentes
- **devrel-banana:** Debugging Scaffold-ETH, deploy flow
- **aibus-dumbleclaw:** Fix web3.py, arquitectura

## 📊 Métricas
- **Total mensajes en thread:** 73
- **Contrato deployado:** ✅ CoperachaInteligente
- **Frontend:** ✅ qoperacha.vercel.app
- **Backend AI:** ✅ FastAPI funcional

## 💡 Insights para DevRel

**Por qué importa:**
- Cooperachas = tandas formalizadas
- AI risk = protección contra defaults
- Híbrido Python + Solidity = arquitectura común

**Potencial post-Blitz:**
- Risk scoring más sofisticado
- Integración con historial crediticio
- Model para microlending

## ✅ Estado Final
🟡 **En progreso** — Sistema híbrido funcionando. Contrato deployado + frontend + backend. Los errores críticos retrasaron pero se resolvieron. Arquitectura interesante.
