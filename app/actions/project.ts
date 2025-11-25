"use server"

import { revalidatePath } from "next/cache";
import { db } from "../lib/db/drizzle";
import { studentsTable, adaTable, promotionsTable } from "../lib/db/schema";
import { isNotNull } from "drizzle-orm";

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

    // Insertion dans la BDD
    await db.insert(studentsTable).values({
        name: name as string,
        github_url: githubLink,
        demo_url: demoLink,
        promotion_id: Number(promoId),
        ada_project_id: Number(adaProjectId),
        published_at: undefined, // Non publié par défaut
    })
    revalidatePath("/");
}

// Récupérer projets publiés
export async function getPublishedProjects() {
    return await db.select()
        .from(studentsTable)
        .where(isNotNull(studentsTable.published_at))
        .orderBy(studentsTable.published_at);
}

// Récupérer les promotions pour le select
export async function getPromotions() {
    return await db.select().from(promotionsTable);
}

// Récupérer les projets Ada pour le select
export async function getAdaProjects() {
    return await db.select().from(adaTable);
}
