---
title: "FanSlayer"
slug: "fanslayer"
icon: "gamepad-2"
team:
  - name: "Edgar López Baeza (-ALFA-)"
  - name: "Diego Sevilla Diaz (Onii)"
  - name: "Jonathan Salvador Fosado (Jony)"
members: 3
area: "Gaming/NFT"
phase: 38
status: "in-progress"
techStack:
  - "Solidity"
  - "Vite"
  - "React"
  - "Privy"
  - "Vercel"
contracts: []
repo: "https://github.com/Oni7u7/FanSlayer"
deployUrl: "https://youtu.be/y3fUO2ydGrA"
messages: 400
errors:
  - description: "Build falla en Vercel"
    cause: "Branch incorrecto + config de build mal"
    severity: "medium"
    resolved: true
  - description: "7+ errores en cadena durante deploy"
    cause: "Primera vez con Vercel — curva de aprendizaje"
    severity: "medium"
    resolved: true
---
# ⚔️ FanSlayer — Web3 Zombie Game

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto (DevNads)

> FanSlayer — Videojuego Web3 donde peleas contra hordas de fans zombies, ganas NFTs de artistas famosos con cada kill y los compras, vendes o intercambias en un marketplace integrado corriendo en Monad.

**Gameplay:**
- Pelea contra hordas de fans zombies
- Gana NFTs de artistas famosos por cada kill
- Marketplace integrado para comprar/vender/intercambiar
- Corriendo en Monad

## 👥 Equipo (DevNads Oficial)
- **Edgar López Baeza** (-ALFA-) — Desarrollo
- **Diego Sevilla Diaz** (Onii) — Desarrollo
- **Jonathan Salvador Fosado** (Jony) — Desarrollo

## 🔧 Stack Técnico
- **Game:** Unity/Web
- **Frontend:** Vite + React
- **Auth:** Privy
- **Deploy:** Vercel
- **Blockchain:** Monad Testnet

## 📜 Contratos
No deployó contratos en el hackathon.

## 🔗 Links Oficiales
- **Demo Video:** https://youtu.be/y3fUO2ydGrA
- **GitHub:** https://github.com/Oni7u7/FanSlayer

## 🚨 Errores Documentados

### 1. Branch equivocada (master vs main)
- **Problema:** Vercel no encontraba código
- **Estado:** ✅ Resuelto

### 2. Build command incorrecto
- **Problema:** Usaban `npm run dev` como build
- **Correcto:** `npm run build`
- **Estado:** ✅ Resuelto

### 3. VITE_ prefix
- **Problema:** Variables de entorno no se inyectaban
- **Causa:** Usaban `REACT_APP_` en vez de `VITE_`
- **Estado:** ✅ Resuelto

### 4-7. Errores adicionales de deploy
- Múltiples problemas de configuración resueltos en cadena
- **Estado:** ✅ Todos resueltos

## 📊 Métricas
- **Mensajes en Discord:** 400 (más mensajes de todos)
- **Errores resueltos:** 7+

## 💡 Aprendizaje
**Mejor ejemplo de resiliencia.** 7+ errores resueltos en cadena sin rendirse.

## ✅ Estado Final
🟡 **En progreso** — Deploy en Vercel logrado después de 7+ errores. Sin smart contracts pero gameplay definido.
