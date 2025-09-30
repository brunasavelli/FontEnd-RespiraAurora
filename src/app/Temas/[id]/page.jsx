"use client";

import { use, useEffect, useState } from "react";
import styles from "./[id].module.css";
import Link from "next/link";
import Timer from "../../../components/Timer/page";

export default function TemaPage({ params }) {
    const [id, setId] = useState(null);
    const [theme, setTheme] = useState(null);
    const [isStarted, setIsStarted] = useState(false);

    const handleTimerComplete = () => {
        alert("Parabéns! Você completou a sessão de meditação! 🧘‍♀️✨");
    };

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
            <div className={styles.cardsContainer}>
                <Link href="/Temas">
                    <img src="/images/arrow.png" alt="ícone de voltar" className={styles.backButton} />
                </Link>
                <div className={`${styles.card} ${isStarted ? styles.cardSlideLeft : ''}`}>
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
                                    onClick={() => setIsStarted(true)}
                                >
                                    Começar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className={`${styles.card} ${styles.newCard} ${isStarted ? styles.cardSlideIn : ''}`}>
                    <div className={styles.timerContent}>
                        <div className={styles.timerMain}>
                            {theme && (
                                <Timer 
                                    duration={theme.duration}
                                    onComplete={handleTimerComplete}
                                    styles={styles}
                                />
                            )}
                            
                            <div className={styles.timerActions}>
                                <p className={styles.instruction}>
                                    Respire fundo e relaxe. Use este tempo para se concentrar na sua respiração e encontrar a paz interior.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}