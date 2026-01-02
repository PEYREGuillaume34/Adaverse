
# 🌌 Adaverse

> **Plateforme collaborative de valorisation des projets étudiants d'Ada Tech School**

Une application web fullstack permettant aux apprenants de **proposer**, **partager** et **découvrir** les projets réalisés durant leur formation à Ada Tech School.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-C5F74F)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?logo=postgresql)](https://neon.tech/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

---

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Schéma de base de données](#-schéma-de-base-de-données)
- [Captures d'écran](#-captures-décran)

---

## ✨ Fonctionnalités

### 🎓 Pour les apprenants
- ➕ **Proposer un projet** via un formulaire modal
- 🔗 Associer le projet à une **promotion** (Frida, Grace, Lovelace...)
- 🏷️ Lier à un **projet Ada officiel** (Ada Quiz, Adaopte, Ada Check Events...)
- 📸 Affichage automatique des **thumbnails GitHub**
- 🔍 **Filtrage par promotion** sur la page d'accueil

### 👨‍💼 Pour les administrateurs
- ✅ **Publier** les projets soumis (modération)
- ❌ **Refuser/Supprimer** les projets non conformes
- 👀 Visualiser les projets **en attente de validation**
- 🎯 Badge visuel "En attente" avec animation

### 🎨 Expérience utilisateur
- 📱 **Design responsive** (mobile-first)
- ⚡ **Performances optimales** (React Server Components)
- 🎭 **Animations fluides** (hover effects, transitions)
- 🔗 **URLs SEO-friendly** avec slugs générés automatiquement
- 🖼️ **Fallback élégant** si image non disponible

---

## 🛠️ Stack technique

### Frontend
- **[Next.js 16](https://nextjs.org/)** - Framework React avec App Router
- **[React 19](https://react.dev/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### Backend
- **[Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)** - Mutations côté serveur
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript type-safe
- **[PostgreSQL](https://www.postgresql.org/)** (via [Neon](https://neon.tech/)) - Base de données relationnelle

### DevOps
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations de base de données
- **ESLint** - Linter JavaScript/TypeScript

---

## 🏗️ Architecture

### Structure du projet
```
app/
├── actions/
│   └── project.ts          # Server Actions (CRUD)
├── components/
│   ├── FilterData.tsx      # Filtre + Header (Client)
│   ├── ProjectCards.tsx    # Carte de projet
│   ├── ProjectCardAdmin.tsx # Boutons admin
│   ├── ProjectImage.tsx    # Image avec fallback
│   ├── ProjectList.tsx     # Grille de projets
│   └── Formulaire/
│       ├── FormModal.tsx   # Modal de proposition
│       └── Formulaire.tsx  # Formulaire de soumission
├── lib/db/
│   ├── drizzle.ts         # Configuration DB
│   └── schema.ts          # Schéma des tables
├── project/[slug]/
│   └── page.tsx           # Page détail projet (dynamique)
├── layout.tsx             # Layout racine
├── page.tsx               # Page d'accueil (Server Component)
└── types.ts               # Types TypeScript partagés
```

### Principes architecturaux
- **Server Components par défaut** : Récupération des données côté serveur
- **Client Components ciblés** : `"use client"` uniquement pour l'interactivité
- **Server Actions** : Mutations sans API routes traditionnelles
- **Type-safety** : Types partagés entre DB et composants React

---

## 📦 Installation

### Prérequis
- Node.js 20+ 
- npm ou yarn
- Compte [Neon](https://neon.tech/) (base de données PostgreSQL gratuite)

### 1. Cloner le repository
```bash
git clone https://github.com/adatechschool/frida-adaverse-PEYREGuillaume34.git
cd frida-adaverse-PEYREGuillaume34
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration de l'environnement
Créez un fichier `.env.local` à la racine :
```env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

> Récupérez votre URL de connexion depuis votre dashboard [Neon](https://console.neon.tech/)

### 4. Exécuter les migrations
```bash
npm run db:push
# ou avec drizzle-kit
npx drizzle-kit push
```

### 5. (Optionnel) Peupler la base de données
Insérez manuellement des promotions et projets Ada :
```sql
INSERT INTO promotions (name, start_date) VALUES 
  ('Frida', '2024-09-01'),
  ('Grace', '2024-03-01'),
  ('Lovelace', '2023-09-01');

INSERT INTO ada_projects (name) VALUES 
  ('Ada Quiz'),
  ('Adaopte'),
  ('Ada Check Events'),
  ('Panam''Events');
```

### 6. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 🚀 Utilisation

### Proposer un projet
1. Cliquez sur **"➕ Proposer un projet"** dans le header
2. Remplissez le formulaire :
   - Nom du projet
   - Lien GitHub (dépôt public)
   - Lien démo (optionnel)
   - Promotion
   - Projet Ada associé
3. Soumettez → Le projet passe en **attente de validation**

### Publier un projet (admin)
1. Les projets non publiés apparaissent avec un badge **"⏳ En attente"**
2. Cliquez sur **"✓ PUBLIER"** pour le rendre visible publiquement
3. Ou **"✗ REFUSER"** pour le supprimer

### Filtrer les projets
- Utilisez le menu déroulant dans le header pour filtrer par promotion
- Sélectionnez **"TOUTES LES PROMOS ⭐"** pour tout afficher

---

## 🗄️ Schéma de base de données

### Relations entre tables
```
promotions (1) ────< (N) students_projects
ada_projects (1) ──< (N) students_projects
```

### Tables

#### `promotions`
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | serial | Clé primaire |
| `name` | text | Nom de la promo (ex: "Frida") |
| `start_date` | timestamp | Date de début |
| `created_at` | timestamp | Date de création |

#### `ada_projects`
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | serial | Clé primaire |
| `name` | text | Nom du projet Ada officiel |
| `created_at` | timestamp | Date de création |

#### `students_projects`
| Colonne | Type | Description |
|---------|------|-------------|
| `id` | serial | Clé primaire |
| `name` | text | Nom du projet étudiant |
| `slug` | text | Slug unique pour l'URL |
| `github_url` | text | Lien vers le dépôt GitHub |
| `demo_url` | text | Lien vers la démo (optionnel) |
| `promotion_id` | integer | Foreign key → `promotions.id` |
| `ada_project_id` | integer | Foreign key → `ada_projects.id` |
| `published_at` | timestamp | Date de publication (null = non publié) |
| `created_at` | timestamp | Date de création |

---

## 📸 Captures d'écran

### Page d'accueil
!Accueil
*Grille de projets avec filtrage par promotion*

### Formulaire de proposition
!Formulaire
*Modal de soumission de projet*

### Page détail d'un projet
!Détail
*Vue complète avec liens GitHub et démo*

### Modération (admin)
!Admin
*Projets en attente avec boutons de validation*

---

## 🔧 Scripts disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Build de production
npm run start    # Lance le serveur de production
npm run lint     # Linter ESLint
```

---

## 🎓 Points techniques avancés

### Server Actions
Remplacement des API routes traditionnelles :
```typescript
"use server"

export async function addProject(formData: FormData) {
  await db.insert(studentsTable).values({...})
  revalidatePath("/") // Rafraîchit le cache Next.js
}
```

### Génération automatique de slugs
Gestion des caractères spéciaux et accents :
```typescript
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
}
```

### Routing dynamique avec params asynchrones
Next.js 15+ :
```typescript
export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
}
```

---

## 🤝 Contribution

Ce projet a été réalisé dans le cadre de la formation [Ada Tech School](https://adatechschool.fr/).

**Auteur :** Guillaume PEYRE  
**Promotion :** Frida  
**Date :** Décembre 2025

---
