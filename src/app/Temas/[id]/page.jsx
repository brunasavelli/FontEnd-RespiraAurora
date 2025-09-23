"use client";

import { use, useEffect, useState } from "react";
import styles from "./[id].module.css";
import Link from "next/link";

export default function TemaPage({ params }) {
    const [id, setId] = useState(null);
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
            <div className={styles.card}>
                {theme && (
                    <div>
                        <div className={styles.level}>
                            {theme.level && (
                                <span className={`${styles.temaNivel} ${theme.level?.toLowerCase() === 'iniciante' ? styles.nivelIniciante :
                                        (theme.level?.toLowerCase() === 'intermediario' || theme.level?.toLowerCase() === 'intermediário') ? styles.nivelIntermediario :
                                            (theme.level?.toLowerCase() === 'avancado') ? styles.nivelAvancado : ''
                                    }`}>
                                    {theme.level}
                                </span>
                            )}
                        </div>
                        <div className={styles.headerCard}>
                            <img
                                src={`/images/${theme.photo}`}
                                alt="icone do tema selecionado"
                                className={styles.themeImage}
                            />
                            <h1 className={styles.themeName}>{theme.name}</h1>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.smallInfo}>
                            <p className={styles.category}>{theme.category}</p>
                            <p className={styles.duration}>{theme.duration}</p>
                        </div>

                        <div className={styles.main}>
                            <p className={styles.description}>{theme.description}</p>
                            <button 
                                className={styles.startButton}
                                onClick={() => window.location.href = `/Temas/${theme.id}/Aulas`}
                            >
                                Começar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}