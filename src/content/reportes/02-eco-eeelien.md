---
title: "🌱 Eco Eeelien — Reporte de Equipo"
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

## 🔗 Repositorio y Contratos (Verificado desde GitHub)

- **Repo:** [github.com/eeelien/eco-eeelien-monad](https://github.com/eeelien/eco-eeelien-monad)
- **Stack verificado:** Next.js + Tailwind, Foundry para contratos, ESP32-CAM (hardware)
- **4 contratos (todos Solidity ^0.8.28, OpenZeppelin):**
  1. **`EcoToken.sol`** — ERC-20 "ECO" con patrón de minters autorizados
  2. **`RecyclingRegistry.sol`** — Operadores ESP32 registran botellas. Recompensas: 5 ECO/plástico, 10 ECO/aluminio
  3. **`VoucherNFT.sol`** — ERC-721 cupones. Usuarios queman ECO para obtener vouchers de partners (ej: "Starbucks CDMX 30%"). Códigos verificables únicos.
  4. **`ChallengeManager.sol`** — Gamificación: challenges semanales/totales/por tipo con bonos ECO
- **Arquitectura:** ESP32-CAM (operador) → RecyclingRegistry → EcoToken mint → VoucherNFT burn/redeem
- **Deploy:** Vercel, contratos en Monad testnet (EcoToken: `0xC365564E5AbA75dC747DF82027ED0C9AeA39B6a9`)
- **Patrón notable:** Sistema completo de 4 contratos interconectados con hardware IoT — el más arquitectónicamente ambicioso del Blitz

## ✅ Estado Final
🟢 **COMPLETADO** — Proyecto más activo del Blitz. Deploy exitoso de contrato + frontend. Uno de los 2 únicos equipos que lograron deployar contratos en Monad Testnet.
