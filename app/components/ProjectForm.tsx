import { addProject } from "../actions/project";

export const Form = () => {
    return (
        <form action={addProject}>
            <input name="name" placeholder="Nom" required />
            <input name="github_url" placeholder="GitHub URL" required />
            <input name="demo_url" placeholder="Demo URL" required />
            <select name="promoId" required>
                <option>Frida</option>
                <option>Grace</option>
                <option>Fatoumata</option>
                <option>Frances</option>
            </select>
            <select name="adaProjectId" required>
                <option>AdaQuiz</option>
                <option>Adaopte/Adaence</option>
                <option>Dataviz</option>
                <option>Adacheck Event</option>
                <option>Adaction</option>
            </select>
            <button type="submit">Envoyer</button>
        </form>
    );
}
