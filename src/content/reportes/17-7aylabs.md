---
title: "7AYLABS / azist.me"
slug: "7aylabs"
icon: "building-2"
team:
  - name: "WOM Devs MX"
members: 6
area: "DeFi/Fintech"
phase: 75
status: "in-progress"
techStack:
  - "Solidity"
  - "Next.js"
  - "OpenZeppelin"
  - "ERC20"
  - "ERC721"
contracts:
  - name: "Azist"
    deployed: false
    description: "ERC721 - NFT de asistencia"
  - name: "AzistPoints"
    deployed: false
    description: "ERC20 - Puntos de recompensa"
  - name: "AzistMarket"
    deployed: false
    description: "Marketplace de canjes"
  - name: "CampaignFactory"
    deployed: false
  - name: "BadgeFactory"
    deployed: false
  - name: "RewardDistributor"
    deployed: false
  - name: "AccessControl"
    deployed: false
repo: "https://github.com/7ayLabs/7ay-presence"
messages: 0
errors: []
---
# 🏢 7AYLABS / azist.me — Proof of Presence

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**azist.me** — Plataforma de Proof of Presence con gamificación. Los usuarios registran asistencia a eventos/lugares y reciben recompensas tokenizadas. Sistema completo de NFTs, puntos, y marketplace de canjes.

## 👥 Miembros del Equipo
- **WOM Devs MX** — Equipo de 6 desarrolladores

## 🔧 Stack Técnico
- **Smart Contracts:** Solidity + OpenZeppelin
- **Frontend:** Next.js
- **Tokens:** ERC20 (points) + ERC721 (badges)
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Desarrollados (10+)

### Core Contracts

#### 1. Azist.sol (ERC721)
```solidity
// NFT de asistencia - Proof of Presence
contract Azist is ERC721 {
    struct Attendance {
        uint256 eventId;
        uint256 timestamp;
        bytes32 locationHash;
    }
    
    function mintAttendance(address user, uint256 eventId) external;
    function verifyPresence(uint256 tokenId) external view returns (bool);
}
```

#### 2. AzistPoints.sol (ERC20)
```solidity
// Token de recompensa
contract AzistPoints is ERC20 {
    function reward(address user, uint256 amount) external;
    function spend(address user, uint256 amount) external;
}
```

#### 3. AzistMarket.sol
```solidity
// Marketplace para canjear puntos
contract AzistMarket {
    struct Reward {
        string name;
        uint256 cost;
        uint256 supply;
    }
    
    function listReward(string name, uint256 cost) external;
    function redeem(uint256 rewardId) external;
}
```

### Module Contracts

#### 4. CampaignFactory.sol
```solidity
// Crear campañas de asistencia
- createCampaign(name, duration, rewards)
- addCheckpoint(campaignId, location)
- endCampaign(campaignId)
```

#### 5. BadgeFactory.sol
```solidity
// Badges especiales por logros
- createBadge(name, criteria)
- awardBadge(user, badgeId)
- getBadges(user)
```

#### 6. RewardDistributor.sol
```solidity
// Distribución automática de recompensas
- setRewardRate(eventType, amount)
- distribute(eventId, participants[])
```

#### 7. AccessControl.sol
```solidity
// Roles y permisos
- ADMIN_ROLE
- ORGANIZER_ROLE
- VERIFIER_ROLE
```

## 📂 Estructura del Repo
```
azist.me/
├── contracts/
│   ├── core/
│   │   ├── Azist.sol
│   │   ├── AzistPoints.sol
│   │   └── AzistMarket.sol
│   └── modules/
│       ├── CampaignFactory.sol
│       ├── BadgeFactory.sol
│       ├── RewardDistributor.sol
│       └── AccessControl.sol
├── frontend/
│   └── next.js app
├── test/
└── hardhat.config.js
```

## ⏰ Timeline de Actividad
- Desarrollo principalmente offline
- No se encontró thread dedicado en Discord

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Avanzado — equipo con experiencia
- **Principal desafío:** Arquitectura modular compleja
- **Progreso:** ⭐⭐⭐⭐ MUY BUENO — Sistema completo diseñado
- **Lección clave:** Proof of Presence tiene muchas aplicaciones (eventos, trabajo, educación)

## 📊 Métricas
- **Total mensajes en thread:** N/A (trabajo offline)
- **Contratos escritos:** 10+
- **Contratos deployados:** ❌ Pendiente
- **Arquitectura:** ✅ Completa y modular

## 💡 Insights para DevRel

**Por qué importa:**
- Proof of Presence = verificación de mundo real on-chain
- Gamificación = engagement y retención
- Aplicaciones: eventos, oficinas, escuelas, gimnasios

**Potencial post-Blitz:**
- White-label para organizadores de eventos
- Integración con sistemas de HR
- Partnerships con venues en CDMX

## ✅ Estado Final
🟡 **En progreso** — Sistema más complejo del Blitz. 10+ contratos diseñados con arquitectura modular. Trabajo principalmente offline. Pendiente deploy y testing.
