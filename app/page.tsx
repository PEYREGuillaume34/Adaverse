import {db} from "@/app/lib/db/drizzle";
import {adaTable} from "@/app/lib/db/schema";
import ProjectForm from "./components/ProjectForm"


export default async function Home() {
    const ada = await db.select().from(adaTable);
    return (
        <div>
          <header>
            <h1 className="text-2xl">Adaverse</h1>
            <ProjectForm />
          </header>
        <div>
            {ada.map((projet) => {
                return <div key={projet.id}>{projet.name}</div>;
            })}
        </div>
        </div>
    );
}