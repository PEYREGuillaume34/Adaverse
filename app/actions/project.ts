"use server"

import { revalidatePath } from "next/cache";
import { db } from "../lib/db/drizzle";
import { studentsTable, adaTable, promotionsTable } from "../lib/db/schema";
import { isNotNull } from "drizzle-orm";
import { eq } from 'drizzle-orm';

export const addProject = async (formData: FormData) => {
    const name = formData.get("name")
    const githubLink = formData.get("github_url") as string;
    const demoLink = formData.get("demo_url") as string;
    const promoId = formData.get("promoId") as string;
    const adaProjectId = formData.get("adaProjectId") as string;

    // Validation
    if (!name || !githubLink || !demoLink || !promoId || !adaProjectId) {
        throw new Error("Tous les champs sont obligatoires");
    }

     const slug = generateSlug(name)

    // Insertion dans la BDD
    await db.insert(studentsTable).values({
        name: name as string,
        slug: slug,
        github_url: githubLink,
        demo_url: demoLink,
        promotion_id: Number(promoId),
        ada_project_id: Number(adaProjectId),
        published_at: undefined, // Non publié par défaut
    })
    revalidatePath("/");
}


export async function getStudProjectsGroupedByAda() {
    const projects = await db.select()
        .from(studentsTable)
        .leftJoin(promotionsTable, eq(promotionsTable.id, studentsTable.promotion_id))
        .leftJoin(adaTable, eq(adaTable.id, studentsTable.ada_project_id))
        .where(isNotNull(studentsTable.published_at))

    return projects;
}

export async function getPromotions() {
    return await db.select().from(promotionsTable);
}

export async function getAdaProjects() {
    return await db.select().from(adaTable);
}

export async function getProjectBySlug(slug: string) {
    const result = await db.select()
        .from(studentsTable)
        .leftJoin(promotionsTable, eq(promotionsTable.id, studentsTable.promotion_id))
        .leftJoin(adaTable, eq(adaTable.id, studentsTable.ada_project_id))
        .where(eq(studentsTable.slug, slug))
    
    return result[0] || null
}

// Fonction pour générer un slug depuis un texte
function generateSlug(text: string): string {
    return text
        .toLowerCase()                    // minuscules
        .normalize('NFD')                 // décompose les accents
        .replace(/[\u0300-\u036f]/g, '')  // enlève les accents
        .replace(/[^a-z0-9]+/g, '-')      // remplace caractères spéciaux par -
        .replace(/^-+|-+$/g, '')          // enlève les - au début/fin
}

