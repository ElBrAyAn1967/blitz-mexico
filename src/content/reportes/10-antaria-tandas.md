---
title: "Antaria Tandas"
slug: "antaria-tandas"
icon: "repeat"
team:
  - name: "Enrique"
  - name: "Juan Fuente"
members: 2
area: "DeFi/Fintech"
phase: 85
status: "completed"
techStack:
  - "WhatsApp API"
  - "Hardhat"
  - "ethers.js"
  - "Solidity"
  - "Node.js"
contracts:
  - name: "AnchorRegistry"
    deployed: true
    address: "0xB284Dd77dcdc080d7c5548592768A6E6188e5381"
repo: ""
messages: 15
errors: []
---
# 🔄 Antaria / Tandas — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**Antaria** — Sistema de tandas (savings circles) on-chain con interfaz en WhatsApp. Digitaliza el modelo tradicional mexicano de ahorro colectivo usando smart contracts para transparencia y automatización.

## 👥 Miembros del Equipo
- **Enrique** — Concepto y diseño
- **Juan Fuente** — Desarrollo principal

## 🔧 Stack Técnico
- **Smart Contracts:** Solidity + Hardhat
- **Backend:** Node.js + ethers.js
- **Interfaz:** WhatsApp API integration
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos Deployados

### AnchorRegistry.sol ✅ DEPLOYED
```
Address: 0xB284Dd77dcdc080d7c5548592768A6E6188e5381
Chain: Monad Testnet (10143)
```

**Funcionalidad:**
- Registro de usuarios/anclas para el sistema de tandas
- Vinculación WhatsApp ↔ wallet address
- Base para lógica de turnos y pagos

## 📂 Estructura del Repo
```
Antaria/
├── contracts/
│   └── AnchorRegistry.sol
├── scripts/
│   └── deploy.js
├── hardhat.config.js
└── package.json (Hardhat + ethers)
```

## ⏰ Timeline de Actividad
- **~17:30 UTC** — Creación del thread
- **17:30–21:00 UTC** — Desarrollo del concepto y smart contract
- **21:00+ UTC** — Deploy exitoso en Monad Testnet

## 🚨 Errores y Blockers Resueltos

### 1. Complejidad del modelo de tandas
- **Problema:** Las tandas tienen reglas complejas (turnos, montos, garantías)
- **Solución:** Simplificaron a un registro de anclas como MVP

### 2. Integración WhatsApp
- **Problema:** Conectar bot de WhatsApp con smart contracts
- **Solución:** Backend intermediario con ethers.js

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Intermedio — entiende tandas pero nuevo en smart contracts
- **Principal desafío:** Traducir lógica financiera cultural a código inmutable
- **Progreso:** ⭐⭐⭐⭐⭐ EXCELENTE — Contrato deployado + WhatsApp working
- **Lección clave:** Las tandas son caso de uso perfecto para LATAM. WhatsApp-first UX es clave.

## 🤖 Soporte de Agentes
- Interacción moderada con agentes

## 📊 Métricas
- **Total mensajes en thread:** 15
- **Contrato deployado:** ✅ AnchorRegistry @ `0xB284...5381`
- **WhatsApp bot:** ✅ Funcional

## 💡 Insights para DevRel

**Por qué importa:**
- Tandas = $40B+ mercado informal en LATAM
- WhatsApp-first = adopción masiva potencial
- Smart contracts = transparencia y confianza

**Potencial post-Blitz:**
- Template reutilizable para ROSCAs on-chain
- Integración con stablecoins (USDC/USDT)
- Modelo para Frutero products

## ✅ Estado Final
🟢 **COMPLETADO** — Uno de los proyectos más completos del Blitz. Contrato deployado, WhatsApp funcional, concepto validado. Idea culturalmente relevante con potencial real de adopción en LATAM.
