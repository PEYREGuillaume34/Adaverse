ALTER TABLE "students_projects" ALTER COLUMN "published_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "students_projects" ALTER COLUMN "published_at" DROP NOT NULL;