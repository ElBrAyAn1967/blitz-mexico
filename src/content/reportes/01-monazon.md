---
title: "Monazon"
slug: "monazon"
icon: "shopping-cart"
team:
  - name: "Tory Dom"
    discord: "torydom_53239"
members: 1
area: "Marketplace"
phase: 30
status: "in-progress"
techStack:
  - "Next.js"
  - "Tailwind CSS"
  - "Drizzle ORM"
  - "wagmi/viem"
  - "TypeScript"
contracts:
  - name: "N/A (USDC transfers)"
    deployed: false
repo: "https://github.com/ToryDom/Monazon"
deployUrl: "https://monazon.vercel.app"
messages: 323
errors:
  - description: "Imagenes no cargan en Vercel"
    cause: "Case-sensitive paths: Laptop.png vs laptop.png"
    severity: "medium"
    resolved: true
  - description: "Imagenes de 13MB"
    cause: "Assets no optimizados"
    severity: "low"
    resolved: true
---
# 🛒 Monazon — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
Marketplace de pagos globales con stablecoins en Monad. Permite comprar productos usando criptomonedas con un flujo similar a Amazon.

## 👥 Miembros del Equipo
- **Tory Dom** (torydom) — Líder del equipo

## 🔧 Stack Técnico
- **Frontend:** Next.js + wagmi/viem
- **Smart Contracts:** Solidity + Foundry
- **Blockchain:** Monad Testnet (Chain ID 10143)
- **Pagos:** Arquitectura de stablecoins

## ⏰ Timeline de Actividad
- **~16:00 UTC** — Creación del thread, inicio del proyecto
- **16:00–22:00 UTC** — Desarrollo intenso con mucha interacción con agentes
- **22:00+ UTC** — Debugging de chain IDs y problemas de configuración

## 🚨 Errores y Blockers (Detallado)

### 1. Chain ID incorrecto (CRÍTICO)
- **Problema:** El frontend apuntaba al chain ID de **Monad mainnet** en vez de testnet
- **Error:** Transacciones fallaban porque la wallet estaba en testnet pero la app pedía mainnet
- **Solución:** aibus-dumbleclaw identificó el error y corrigió los chain IDs a `10143`
- **Tiempo perdido:** ~1-2 horas debugging

### 2. Arquitectura de stablecoins
- **Problema:** No sabían cómo estructurar los pagos con stablecoins en Monad
- **Solución:** devrel-banana explicó la arquitectura y opciones disponibles

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Intermedio — tenían experiencia en web dev pero poca en web3
- **Principal desafío:** Entender la diferencia entre testnet/mainnet y configurar chain IDs correctamente
- **Progreso:** Lograron avanzar significativamente con ayuda de los agentes
- **Lección clave:** Siempre verificar que el chain ID apunte a la red correcta

## 🤖 Soporte de Agentes
- **devrel-banana:** Ayudó con arquitectura de stablecoins y bugs de chain ID
- **aibus-dumbleclaw:** Fix de chain IDs incorrectos (apuntaban a mainnet)

## 📊 Métricas
- **Total mensajes en thread:** 323
- **Estado final:** En progreso — marketplace funcional pero sin deploy confirmado en testnet

## ✅ Estado Final
🟡 **En progreso** — Avanzaron bastante pero el bug de chain ID les costó tiempo valioso
