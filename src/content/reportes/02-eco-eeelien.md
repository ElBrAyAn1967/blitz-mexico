---
title: "Eco Eeelien"
slug: "eco-eeelien"
icon: "leaf"
team:
  - name: "39eliens"
    discord: "39eliens"
  - name: "Carlos Navarrete"
  - name: "SergioGutierrezVillwornet"
members: 3
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
    address: "0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9"
    description: "ERC20 reward token"
  - name: "RecyclingRegistry"
    deployed: true
    description: "Registry of recycling events"
  - name: "VoucherNFT"
    deployed: true
    description: "NFT vouchers for rewards"
  - name: "ChallengeManager"
    deployed: true
    description: "Gamification challenges"
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
- **SergioGutierrezVillwornet** — Smart contracts

## 🔧 Stack Técnico
- **Hardware:** ESP32-CAM (cámara IoT)
- **IA:** Clasificación de imágenes para tipos de residuos
- **Smart Contracts:** Solidity + Foundry (4 contratos)
- **Frontend:** Next.js + Tailwind + WalletConnect
- **Deploy:** Vercel
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Deployados (4)

### 1. EcoToken.sol ✅ DEPLOYED
```solidity
// ERC20 reward token
contract EcoToken is ERC20 {
    address: 0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9
    
    function mint(address to, uint256 amount) external onlyMinter;
    function burn(uint256 amount) external;
}
```

### 2. RecyclingRegistry.sol ✅ DEPLOYED
```solidity
// Registro de eventos de reciclaje
struct RecycleEvent {
    address user;
    string materialType;
    uint256 weight;
    uint256 timestamp;
    bytes32 imageHash;
}

function registerRecycle(string materialType, uint256 weight, bytes32 imageHash) external;
function getHistory(address user) external view returns (RecycleEvent[] memory);
```

### 3. VoucherNFT.sol ✅ DEPLOYED
```solidity
// NFT vouchers canjeables
function mintVoucher(address to, string rewardType) external;
function redeemVoucher(uint256 tokenId) external;
```

### 4. ChallengeManager.sol ✅ DEPLOYED
```solidity
// Sistema de gamificación
struct Challenge {
    string name;
    uint256 targetWeight;
    uint256 rewardAmount;
    uint256 deadline;
}

function createChallenge(...) external;
function completeChallenge(uint256 challengeId) external;
```

## 📂 Estructura del Repo
```
eco-eeelien-monad/
├── contracts/
│   ├── EcoToken.sol
│   ├── RecyclingRegistry.sol
│   ├── VoucherNFT.sol
│   └── ChallengeManager.sol
├── frontend/
│   └── Next.js + WalletConnect
├── hardware/
│   └── ESP32-CAM code
├── ai/
│   └── image classification
└── foundry.toml
```

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

### 2. WalletConnect Integration
- **Problema:** WalletConnect no conectaba con Monad
- **Solución:** aibus-dumbleclaw configuró chain custom
- **Tiempo perdido:** ~1 hora

### 3. Token de GitHub expuesto (CRÍTICO)
- **Problema:** 39eliens pegó token en Discord público
- **Impacto:** Seguridad comprometida
- **Solución:** Token revocado inmediatamente
- **Lección:** NUNCA compartir tokens en chats

### 4. ESP32-CAM Integration
- **Problema:** Conectar hardware IoT con frontend web
- **Solución:** Arquitectura definida, integración completa post-hackathon

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
- **Errores resueltos:** 4

## 💡 Insights para DevRel

**Por qué importa:**
- Reciclaje = problema global con incentivos rotos
- Tokenización = alinea incentivos económicos
- IoT + blockchain = verificación física

**Potencial post-Blitz:**
- Piloto en colonias de CDMX
- Partnership con empresas de reciclaje
- Integración con sistemas municipales

**Diferenciador único:**
Único proyecto del Blitz con hardware físico.

## ✅ Estado Final
🟢 **COMPLETADO** — Proyecto más activo y completo del Blitz. 4 contratos deployados, frontend funcional, hardware definido. Combinación única de IoT + IA + blockchain. Ejemplo de lo que es posible en un hackathon de 1 día.
