"use client";

import { useState, useEffect } from "react";
import styles from "./SobreMim.module.css";
import Link from "next/link";

export default function SobreMim() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.headerCard}>
                    <img src="/images/bruna.webp" alt="Foto de Bruna Savelli" className={styles.photo} />
                    <div className={styles.headerText}>
                        <h1 className={styles.name}>Bruna Savelli</h1>
                        <p>Desenvolvedora e criadora de RespiraAurora</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.content}>
                    <div className={styles.paragraph}>
                        <h2 className={styles.title}>Sobre</h2>
                        <p>Sou Bruna Savelli, estudante de Análise e Desenvolvimento de Sistemas no SENAI. Gosto de criar experiências digitais que transmitam calma e simplicidade.</p>
                    </div>
                    <div className={styles.paragraph}>
                        <h2 className={styles.title}>Tecnologias</h2>
                        <div className={styles.list}>
                            <p className={styles.item}>HTML</p>
                            <p className={styles.item}>CSS</p>
                            <p className={styles.item}>JavaScript</p>
                            <p className={styles.item}>React</p>
                            <p className={styles.item}>Next.js</p>
                            <p className={styles.item}>Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
