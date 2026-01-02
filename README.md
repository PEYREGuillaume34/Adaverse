# 🌌 Adaverse

> **Plateforme collaborative de valorisation des projets étudiants d'Ada Tech School**

Une application web fullstack permettant aux apprenants de **proposer**, **partager** et **découvrir** les projets réalisés durant leur formation à Ada Tech School.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)

---

## 📸 Aperçu

**Page d'accueil avec filtrage par promotion :**
![Screenshot](docs/screenshot.png)

**Système de modération (admin) :**
- Validation des projets proposés
- Publication/refus des soumissions
- Gestion centralisée

---

## ✨ Fonctionnalités

### 🎓 Pour les apprenants
- ➕ **Proposer un projet** via un formulaire intuitif
- 🔗 Lier un projet à une **promotion** et un **projet Ada officiel**
- 📸 Affichage automatique des **thumbnails GitHub**
- 🔍 Filtrage par promotion (Frida, Grace, Lovelace...)

### 👨‍💼 Pour les administrateurs
- ✅ **Publier** ou refuser les projets soumis
- 🗑️ **Supprimer** les projets invalides
- 👀 Aperçu des projets en attente de validation

### 🎨 Expérience utilisateur
- 📱 **Design responsive** (mobile-first)
- ⚡ **Performances optimales** (Server Components)
- 🎭 **Animations fluides** (Tailwind transitions)
- 🔗 **URLs SEO-friendly** avec slugs générés automatiquement

---

## 🛠️ Stack technique

### Frontend
- **Next.js 16** (App Router) - Framework React avec rendu hybride
- **TypeScript** - Typage statique pour la robustesse
- **Tailwind CSS 4** - Styling utilitaire moderne
- **React 19** - Librairie UI avec Server Components

### Backend
- **Next.js Server Actions** - Mutations côté serveur sans API routes
- **Drizzle ORM** - ORM TypeScript type-safe
- **Neon PostgreSQL** - Base de données serverless
- **Drizzle Kit** - Migrations automatiques

### Architecture
- **Monorepo** avec Turborepo - Gestion efficace des packages
- **Vercel** - Déploiement et hébergement optimisés
- **GitHub** - Gestion du code source et intégration continue

