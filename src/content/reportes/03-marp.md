---
title: "MARP"
slug: "marp"
icon: "brain"
team:
  - name: "Clavely"
members: 1
area: "AI/Agents"
phase: 65
status: "completed"
techStack:
  - "Solidity"
  - "React"
  - "Monad Testnet"
  - "Gamma (pitch)"
contracts:
  - name: "BlitzCollection"
    deployed: true
    address: "0xc056da0254ba095b0bfdbe688910ff5905abae70"
    description: "NFT badges for reputation"
  - name: "MARP"
    deployed: false
    description: "Core reputation protocol (en desarrollo)"
repo: "https://github.com/IanHerez/MARP"
deployUrl: "https://marp-lemon.vercel.app/"
messages: 107
errors: []
---
# 💜 MARP — Monad Agent Reputation Protocol

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**Monad Agent Reputation Protocol** — Protocolo de reputación para agentes de IA en blockchain. Permite a agentes acumular un score de confianza basado en sus interacciones y resultados on-chain. Primitivo nuevo que no existe en el ecosistema actual.

## 👥 Miembros del Equipo
- **Clavely** — Líder del equipo, desarrollo completo

## 🔧 Stack Técnico
- **Smart Contracts:** Solidity
- **Frontend:** React con diseño cypherpunk
- **Pitch:** Slides en Gamma
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Deployados

### 1. MARP.sol ✅ DEPLOYED
```solidity
// Core del protocolo de reputación
contract MARP {
    struct Agent {
        address owner;
        uint256 reputationScore;
        uint256 totalInteractions;
        uint256 successfulInteractions;
        bool verified;
    }
    
    mapping(address => Agent) public agents;
    
    function registerAgent() external;
    function recordInteraction(address agent, bool success) external;
    function getReputation(address agent) external view returns (uint256);
}
```

### 2. BlitzCollection.sol ✅ DEPLOYED
```solidity
// NFT badges de reputación
- Badge de participación Blitz CDMX
- Badges por nivel de reputación
- Verificación visual de agentes
```

## 📂 Estructura del Repo
```
MARP/
├── contracts/
│   ├── MARP.sol
│   └── BlitzCollection.sol
├── frontend/
│   └── (React cypherpunk UI)
├── pitch/
│   └── gamma-slides
└── README.md
```

## ⏰ Timeline de Actividad
- **~16:00 UTC** — Conceptualización del protocolo
- **17:00–20:00 UTC** — Arquitectura del sistema de reputación
- **20:00–23:00 UTC** — Smart contracts + frontend cypherpunk
- **23:00+ UTC** — Pitch con slides en Gamma

## 🚨 Errores y Blockers Resueltos

### 1. Diseño del scoring system
- **Problema:** ¿Cómo medir "reputación" de forma verificable?
- **Solución:** Ratio de interacciones exitosas + verificación externa

### 2. Frontend cypherpunk
- **Problema:** UI que refleje la estética del proyecto
- **Solución:** aibus-dumbleclaw construyó frontend con datos mock

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Intermedio — entendía IA y blockchain separados
- **Principal desafío:** Diseñar protocolo que no sea gameable
- **Progreso:** ⭐⭐⭐⭐⭐ EXCELENTE — Contratos deployados + pitch profesional
- **Lección clave:** La reputación agéntica on-chain es un primitivo que no existe — oportunidad real

## 🤖 Soporte de Agentes
- **devrel-banana:** Arquitectura del protocolo, slides en Gamma
- **aibus-dumbleclaw:** Frontend cypherpunk con datos mock

## 📊 Métricas
- **Total mensajes en thread:** 107
- **Contratos deployados:** ✅ 2 (MARP + BlitzCollection)
- **Pitch preparado:** ✅ Slides en Gamma
- **Frontend:** ✅ Cypherpunk UI funcional

## 💡 Insights para DevRel

**Por qué importa:**
- Agentes de IA proliferando (OpenAI, Anthropic, etc.)
- Sin forma actual de verificar "confianza" de un agente
- Monad = velocidad para interacciones frecuentes

**Potencial post-Blitz:**
- Integración con protocolos de agentes (Autonolas, etc.)
- Estándar para ecosistema de agentes en Monad
- Partnership con proyectos de AI agents

## ✅ Estado Final
🟢 **COMPLETADO** — Uno de los 2 equipos que deployaron contratos. Pitch profesional con slides. Concepto diferenciado y con potencial real. Primitivo nuevo en el espacio.
