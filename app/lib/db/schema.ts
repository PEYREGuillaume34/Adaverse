
import { pgTable, serial, text, timestamp, integer, pgEnum } from 'drizzle-orm/pg-core';


export const adaTable = pgTable("ada_projects", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
});

export const promotionsTable = pgTable("promotions", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    start_date: timestamp("start_date").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
});

export const studentsTable = pgTable("students_projects", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    github_url: text("github_url").notNull(),
    demo_url: text("demo_url"),
    promotion_id: integer("promotion_id").references(() => promotionsTable.id),
    ada_project_id: integer("ada_project_id").references(() => adaTable.id),
    published_at: timestamp("published_at"),
    created_at: timestamp("created_at").notNull().defaultNow(),
});
