ALTER TABLE "students_projects" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "students_projects" ADD CONSTRAINT "students_projects_slug_unique" UNIQUE("slug");