---
title: "Eco Eeelien"
slug: "eco-eeelien"
icon: "leaf"
team:
  - name: "39eliens"
    discord: "39eliens"
  - name: "Carlos Navarrete"
members: 2
area: "IoT/Hardware"
phase: 25
status: "completed"
techStack:
  - "Next.js"
  - "Foundry"
  - "Tailwind CSS"
  - "ESP32-CAM"
  - "Solidity"
contracts:
  - name: "EcoToken"
    deployed: true
    address: "0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9"
  - name: "RecyclingRegistry"
    deployed: true
  - name: "VoucherNFT"
    deployed: true
  - name: "ChallengeManager"
    deployed: true
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
# 🌱 Eco Eeelien — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
Plataforma de reciclaje tokenizado que combina IoT (ESP32-CAM) + IA para clasificar residuos y recompensar con tokens en Monad. Los usuarios escanean sus residuos con una cámara, la IA clasifica el tipo de material, y reciben EcoTokens como recompensa.

## 👥 Miembros del Equipo
- **39eliens** — Desarrollo principal
- **Carlos Navarrete** — Co-desarrollo

## 🔧 Stack Técnico
- **Hardware:** ESP32-CAM (cámara IoT)
- **IA:** Clasificación de imágenes para tipos de residuos
- **Smart Contracts:** Solidity — EcoToken (ERC-20) deployado en Monad Testnet
- **Frontend:** React/Next.js + WalletConnect
- **Deploy:** Vercel
- **Blockchain:** Monad Testnet (Chain ID 10143)

## ⏰ Timeline de Actividad
- **~15:30 UTC** — Inicio del proyecto, definición de arquitectura
- **16:00–19:00 UTC** — Desarrollo del smart contract EcoToken
- **19:00–21:00 UTC** — Deploy exitoso del contrato en Monad Testnet
- **21:00–00:00 UTC** — Frontend development, integración WalletConnect, deploy Vercel

## 🚨 Errores y Blockers (Detallado)

### 1. WalletConnect Integration
- **Problema:** WalletConnect no conectaba correctamente con Monad Testnet
- **Error:** La configuración del provider no incluía la chain custom de Monad
- **Solución:** aibus-dumbleclaw ayudó a configurar la chain custom en el WalletConnect provider
- **Tiempo perdido:** ~1 hora

### 2. Frontend Build Errors
- **Problema:** Build del frontend fallaba al intentar deployar en Vercel
- **Solución:** Ambos agentes ayudaron con la configuración del build

### 3. Integración ESP32-CAM
- **Problema:** Conectar el hardware IoT con el frontend web
- **Nota:** Este fue más un desafío de diseño que un bug — definieron la arquitectura pero la integración completa queda para después del hackathon

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Intermedio-avanzado — experiencia en IoT y programación pero nuevos en Solidity/Monad
- **Principal desafío:** Pasar de IoT/hardware a smart contracts en un solo día
- **Progreso:** EXCELENTE — lograron deployar contrato + frontend funcional
- **Lección clave:** La combinación IoT + blockchain es viable pero requiere abstraer bien las capas

## 🤖 Soporte de Agentes
- **devrel-banana:** Deploy de contratos EcoToken, frontend, Vercel
- **aibus-dumbleclaw:** Fix WalletConnect, build del frontend

## 📊 Métricas
- **Total mensajes en thread:** 317
- **Contrato deployado:** ✅ EcoToken en `0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9`
- **Frontend deployado:** ✅ En Vercel

## ✅ Estado Final
🟢 **COMPLETADO** — Proyecto más activo del Blitz. Deploy exitoso de contrato + frontend. Uno de los 2 únicos equipos que lograron deployar contratos en Monad Testnet.
