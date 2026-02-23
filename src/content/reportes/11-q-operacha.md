---
title: "🎰 Q-Operacha — Reporte de Equipo"
---

# 🎰 Q-Operacha — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Datos Verificados (Recolección Manual — Brian Lopez)
- **Miembros del equipo:** 3
- **Fase al cierre:** 20%
- **Descripción oficial:** Motor de riesgo con IA para DeFi (99% / Q-Operacha)

## 📋 Descripción del Proyecto
Motor de riesgo con IA para DeFi. Analiza protocolos DeFi y calcula scores de riesgo para usuarios antes de que inviertan.

## 👥 Miembros del Equipo
- **chris** — Desarrollador principal

## 🔧 Stack Técnico
- **IA:** Risk scoring engine
- **DeFi:** Análisis de protocolos
- **Blockchain:** Monad Testnet

## ⏰ Timeline de Actividad
- Thread creado durante el evento con actividad moderada

## 🚨 Errores y Blockers
- La complejidad del análisis de riesgo DeFi requiere datos históricos que no estaban disponibles en testnet

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Avanzado en DeFi
- **Principal desafío:** Crear un motor de riesgo meaningful con datos limitados
- **Progreso:** Conceptual

## 📊 Métricas
- **Total mensajes en thread:** ~50 (compartido con Clob.mad/99% Fe)

## 🔗 Repositorio y Contratos (Verificado desde GitHub)

- **Repo:** [github.com/LexBP11/qoperacha_hack](https://github.com/LexBP11/qoperacha_hack)
- **Stack verificado:** Scaffold-ETH 2 + Hardhat + Next.js, Python FastAPI backend
- **Contrato principal:** `CoperachaInteligente.sol` (Solidity >=0.8.0)
  - Crowdfunding con protección IA: `aportar()` (depósito), `ejecutarProteccionIA()` (modifier `soloIA` — agente Python llama cuando volatilidad >80%), `desactivarProteccion()`, `retirar()` (solo admin)
  - Events: `AportacionRecibida`, `ProteccionActivada`
  - Backend Python usa web3.py para llamar la función de protección
- **Deploy:** Frontend en Vercel
- **Patrón notable:** Híbrido on-chain/off-chain — un agente Python monitorea volatilidad y ejecuta funciones protegidas del contrato via modifier `soloIA`

## ✅ Estado Final
🟡 **Concepto** — Proyecto técnicamente ambicioso, quedó en fase conceptual.
