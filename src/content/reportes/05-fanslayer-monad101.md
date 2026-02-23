---
title: "FanSlayer / Monad101"
slug: "fanslayer-monad101"
icon: "gamepad-2"
team:
  - name: "Onii"
    discord: "oni6213"
members: 3
area: "Gaming/NFT"
phase: 38
status: "in-progress"
techStack:
  - "Web Frontend"
  - "Vercel"
contracts: []
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
# ⚔️ FanSlayer / Monad101 Blitz — Reporte de Equipo

## Monad Blitz CDMX — Sábado 22 de Febrero 2026

---

## 📋 Descripción del Proyecto
**FanSlayer** — Proyecto de Onii (oni6213). Thread compartido con el onboarding masivo de Monad101 que sirvió como guía de setup paso a paso para todos los participantes del Blitz (Foundry, npm, Git, wallets).

## 👥 Miembros del Equipo
- **Onii** (oni6213) — Desarrollador principal de FanSlayer
- **Participantes varios** — Usaron el thread como guía de onboarding

## 🔧 Stack Técnico
- **Frontend:** Vite + React
- **Auth:** Privy integration
- **Deploy:** Vercel
- **Blockchain:** Monad Testnet (Chain ID 10143)

## ⏰ Timeline de Actividad
- **~15:30 UTC** — Inicio del thread como canal de onboarding Monad101
- **15:30–18:00 UTC** — Guías de setup: Foundry, npm, Git, wallets
- **18:00–23:00 UTC** — Desarrollo del proyecto FanSlayer
- **23:28–00:37 UTC** — Sesión INTENSIVA de debugging del deploy en Vercel

## 🚨 Errores y Blockers (MUY DETALLADO)

### 1. Branch equivocada en Git (master vs main)
- **Problema:** Vercel no encontraba el código porque apuntaba a `main` pero el repo usaba `master`
- **Error:** `Build failed: No such branch 'main'`
- **Solución:** Cambiar la configuración de Vercel para apuntar a `master`
- **Tiempo perdido:** ~20 min

### 2. Root directory mal configurado
- **Problema:** Vercel buscaba el proyecto en la raíz pero estaba en un subdirectorio
- **Solución:** Configurar el root directory correcto en Vercel settings

### 3. Build command incorrecto
- **Problema:** Usaban `npm run dev` como build command en Vercel
- **Error:** `npm run dev` es para desarrollo local, no para builds de producción
- **Solución:** Cambiar a `npm run build`
- **Tiempo perdido:** ~15 min

### 4. index.html faltante
- **Problema:** El build de Vite no generaba `index.html` en el directorio de output
- **Solución:** Verificar la configuración de Vite para el output directory

### 5. Variables de entorno incorrectas (REACT_APP_ → VITE_)
- **Problema:** Usaban el prefijo `REACT_APP_` de Create React App pero el proyecto usa Vite
- **Error:** Las variables de entorno no se inyectaban al build
- **Solución:** Cambiar a prefijo `VITE_` y actualizar las referencias en el código
- **Tiempo perdido:** ~30 min (el más confuso de debuggear)

### 6. Privy Integration
- **Problema:** Configurar Privy para auth en Monad Testnet
- **Solución:** Configurar el Privy App ID y chain settings correctos

### 7. Vercel Password Protection
- **Problema:** El deploy estaba detrás de password protection de Vercel
- **Solución:** Remover la protección para hacer el sitio público

## 📈 Curva de Aprendizaje
- **Nivel inicial:** Principiante-intermedio — sabía React pero nuevo en deploy y web3
- **Principal desafío:** El deploy en Vercel fue una ODISEA — cada error resuelto revelaba el siguiente
- **Progreso:** EXCELENTE resiliencia — no se rindió a pesar de 7+ errores consecutivos
- **Lección clave:** El deploy pipeline (Vite → Vercel) tiene muchas trampas para principiantes. La diferencia entre `REACT_APP_` y `VITE_` es un gotcha clásico.

## 🤖 Soporte de Agentes
- **devrel-banana:** Guía de setup paso a paso, soporte Vercel/Vite
- **aibus-dumbleclaw:** Soporte técnico deploy Vercel, config Git, troubleshooting paralelo

## 📊 Métricas
- **Total mensajes en thread:** 400 (el más activo de todo el Blitz)
- **Errores encontrados y resueltos:** 7+
- **Sesión de debugging más larga:** 23:28–00:37 UTC (~1h 10min continua)
- **Deploy exitoso:** ✅ Eventualmente logró deployar en Vercel

## ✅ Estado Final
🟢 **COMPLETADO** — A pesar de ser el equipo con más errores, Onii no se rindió. La sesión nocturna de debugging con ambos agentes fue la más intensa del hackathon. Deploy final exitoso en Vercel.

## 💡 Insight para futuros eventos
Este caso es el mejor ejemplo de **curva de aprendizaje real**: un desarrollador pasó de no saber deployar a resolver 7 problemas distintos en cadena. Cada error era una lección. El soporte 1:1 de los agentes fue crucial para que no abandonara.
