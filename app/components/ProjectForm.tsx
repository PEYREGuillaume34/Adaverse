"use client"

import { addProject, getPromotions, getAdaProjects } from "../actions/project";
import { useState, useEffect } from "react";
import Formulaire from "./Fomulaire";



export default function ProjectForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [promos, setPromos] = useState([])
    const [adaProjects, setAdaProjects] = useState([])

    useEffect(() => {
        if (isOpen) {
            // Appeler vos fonctions depuis actions/project.ts
            getPromotions().then(setPromos)
            getAdaProjects().then(setAdaProjects)
        }
    }, [isOpen])


    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Proposez un projet</button>
            {isOpen && (
            <Formulaire promos={promos} adaProjects={adaProjects} setIsOpen={setIsOpen} />
            )}
        </div>

    );
}

