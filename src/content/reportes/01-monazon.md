---
title: "Monazon"
slug: "monazon"
icon: "shopping-cart"
team:
  - name: "Tory Dom"
members: 1
area: "Payments/Consumer"
phase: 30
status: "in-progress"
techStack:
  - "Next.js"
  - "Tailwind CSS"
  - "Drizzle ORM"
  - "wagmi/viem"
  - "TypeScript"
contracts: []
repo: "https://github.com/ToryDom/Monazon"
deployUrl: "https://monazon.vercel.app/"
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
# 🛒 Monazon — Global Payments for LATAM

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto (DevNads)

> Plataforma para que cualquier vendedor en Latinoamérica pueda vender globalmente y cobrar en dólares digitales, sin banco y sin fricción, usando la velocidad de Monad.

**Problemas que resuelve:**
- Comisiones altas
- Bloqueos bancarios
- Sin acceso a USD
- Pagos tardan días
- Confianza

**Road Map:**
1. Función de pago - Vendedor genera link para pago
2. Smart contract/Escrow - Pago sale hasta confirmación del cliente
3. Creación de Reputación - Guarda reputación on-chain
4. Fondos a Bancos Tradicionales
5. Microcréditos en base a reputación

## 👥 Equipo (DevNads Oficial)
- **Tory Dom** — Desarrollador principal

## 🔧 Stack Técnico
- **Frontend:** Next.js + Tailwind CSS
- **Database:** Drizzle ORM
- **Web3:** wagmi/viem
- **Pagos:** USDC/stablecoins
- **Blockchain:** Monad Testnet (Chain ID 10143)

## 📜 Contratos
No deployó contratos propios - usa transferencias USDC directas.

## 🔗 Links Oficiales
- **Demo:** https://monazon.vercel.app/
- **GitHub:** https://github.com/ToryDom/Monazon

## 🚨 Errores Documentados

### 1. Case-sensitive paths (MEDIUM)
- **Problema:** Imágenes no cargaban en Vercel
- **Causa:** `Laptop.png` vs `laptop.png`
- **Solución:** Corregir nombres de archivos
- **Estado:** ✅ Resuelto

### 2. Assets no optimizados (LOW)
- **Problema:** Imágenes de 13MB
- **Solución:** Comprimir assets
- **Estado:** ✅ Resuelto

## 📊 Métricas
- **Mensajes en Discord:** 323
- **Errores resueltos:** 2/2

## ✅ Estado Final
🟡 **En progreso** — Marketplace funcional con pagos USDC. Sin smart contracts propios pero producto viable.
