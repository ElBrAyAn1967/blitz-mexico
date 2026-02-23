---
title: "Persea Protocol"
slug: "persea-protocol"
icon: "sprout"
team:
  - name: "Brian Lopez"
    discord: "lpbrayan0"
  - name: "Ane"
members: 2
area: "Social Impact"
phase: 60
status: "in-progress"
techStack:
  - "Solidity"
  - "Hardhat"
  - "Next.js"
  - "Supply Chain"
contracts:
  - name: "AvocadoBatch"
    deployed: false
  - name: "CertificationNFT"
    deployed: false
  - name: "SupplyChain"
    deployed: false
  - name: "Marketplace"
    deployed: false
  - name: "Escrow"
    deployed: false
repo: "https://github.com/aguacate-protocol/persea-protocol"
messages: 17
errors: []
---
# 🥑 Persea Protocol — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
Protocolo de trazabilidad de aguacates desde huerta hasta consumidor. Usa blockchain para trackear el ciclo de vida del aguacate mexicano, certificar origen orgánico/fair trade, e incentivar el reciclaje de residuos.

## 👥 Miembros del Equipo
- **Brian Lopez** (lpbrayan0) — Co-fundador, DevRel de Frutero
- **Ane** — Co-desarrollo

## 🔧 Stack Técnico
- **Smart Contracts:** Solidity (5 contratos)
- **Framework:** Hardhat
- **Frontend:** Next.js (planned)
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Desarrollados (5)

### 1. AvocadoBatch.sol
```solidity
// Tracking de lotes de aguacate
struct Batch {
    bytes32 id;
    address origin;      // Huerta de origen
    uint256 timestamp;
    string metadata;     // Variedad, peso, etc.
}
```

### 2. CertificationNFT.sol
```solidity
// NFTs de certificación
- Organic certification
- Fair Trade certification
- Origin verification
```

### 3. SupplyChain.sol
```solidity
// Trazabilidad completa
- registerHarvest()
- registerTransport()
- registerDistribution()
- registerRetail()
```

### 4. Marketplace.sol
```solidity
// Trading P2P de lotes
- listBatch()
- buyBatch()
- verifyOrigin()
```

### 5. Escrow.sol
```solidity
// Pagos seguros
- createEscrow()
- release()
- dispute()
```

## 📂 Estructura del Repo
```
persea-protocol/
├── contracts/
│   ├── AvocadoBatch.sol
│   ├── CertificationNFT.sol
│   ├── SupplyChain.sol
│   ├── Marketplace.sol
│   └── Escrow.sol
├── scripts/
├── test/
└── hardhat.config.js
```

## ⏰ Timeline de Actividad
- **~16:30 UTC** — Creación del thread
- **16:30–19:00 UTC** — Arquitectura de 5 contratos
- **19:00+ UTC** — Desarrollo de contratos

## 🚨 Errores y Blockers
- Sin errores técnicos reportados
- Brian dividió tiempo entre este proyecto y coordinación del evento

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Avanzado — Brian es DevRel técnico
- **Principal desafío:** Modelo de datos de trazabilidad completo
- **Progreso:** ⭐⭐⭐⭐ MUY BUENO — Arquitectura completa, 5 contratos escritos
- **Lección clave:** Supply chain on-chain necesita interoperabilidad con sistemas físicos (QR, IoT)

## 🤖 Soporte de Agentes
- Interacción mínima — Brian trabajó independiente

## 📊 Métricas
- **Total mensajes en thread:** 17
- **Contratos escritos:** 5
- **Contratos deployados:** ❌ No (falta de tiempo)
- **Arquitectura:** ✅ Completa

## 💡 Insights para DevRel

**Por qué importa:**
- México = #1 productor mundial de aguacate
- Trazabilidad = premium pricing para exportación
- Blockchain = confianza en certificaciones

**Potencial post-Blitz:**
- Integración con cooperativas de aguacate en Michoacán
- Partnership con certificadoras orgánicas
- Template para supply chain de otros productos

## ✅ Estado Final
🟡 **Arquitectura completa** — 5 contratos bien diseñados pero sin deploy. Brian estaba también coordinando el evento. Proyecto con potencial real para agro-tech mexicano.
