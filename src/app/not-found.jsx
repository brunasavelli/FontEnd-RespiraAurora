"use client";

import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.numberTitle}>404</h1>
                <p className={styles.message}>
                    Página não encontrada :(
                </p>
                <div className={styles.buttonContainer}>
                    <Link href="/InitialPage" className={styles.button}>
                        Voltar ao Início
                    </Link>
                    <Link href="/Temas" className={styles.button}>
                        Ver Temas
                    </Link>
                </div>
            </div>
        </div>
    );
}
