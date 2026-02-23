---
title: "🛒 Monazon — Reporte de Equipo"
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

## 🔗 Repositorio y Contratos (Verificado desde GitHub)

- **Repo:** [github.com/ToryDom/Monazon](https://github.com/ToryDom/Monazon)
- **Stack verificado:** Next.js + Tailwind + Drizzle ORM + wagmi/viem + ethers.js
- **Sin smart contract custom** — usa transferencias USDC en Monad
  - USDC_ADDRESS: `0x754704Bc059F8C67012fEd69BC8A327a5aafb603`
  - Chain config: Monad Testnet (10143) + Monad Mainnet (143) definidos
  - Flujo `wallet_switchEthereumChain` / `wallet_addEthereumChain`
- **Bug encontrado en repo:** Paths de imágenes case-sensitive (`Laptop.png` vs `laptop.png`) — rompe en Linux/Vercel
- **Deploy:** [monazon.vercel.app](https://monazon.vercel.app)
- **Patrón notable:** Marketplace tradicional web2 con pagos USDC on-chain — enfoque pragmático sin contratos custom

## ✅ Estado Final
🟡 **En progreso** — Avanzaron bastante pero el bug de chain ID les costó tiempo valioso
