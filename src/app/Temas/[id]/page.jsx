"use client";

import { use, useEffect, useState } from "react";
import styles from "./[id].module.css";

export default function TemaPage({ params }) {
    const [id , setId] = useState(null);
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setId(resolvedParams.id);
        };
        getParams();
    }, [params]);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/themes/${id}`
            );
            const data = await response.json();
            setTheme(data);
        };
        fetchData();
    }, [id]);

    return (
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h1 className={styles.title}>Detalhes do Tema</h1>
                {theme && (
                    <div>
                        <h2>{theme.name}</h2>
                        <p>{theme.description}</p>
                        <p><strong>Categoria:</strong> {theme.category}</p>
                        <p><strong>Duração:</strong> {theme.duration}</p>
                        <p><strong>Nível:</strong> {theme.level}</p>
                    </div>
                )}
            </div>
        </div>
    )
}