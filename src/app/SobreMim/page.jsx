"use client";

import { useState, useEffect } from "react";
import styles from "./SobreMim.module.css";
import Link from "next/link";

export default function SobreMim() {
    return (
        <div className={styles.container}>
            <div className={styles.mainCard}>
                <section className={styles.headerSection}>
                    <div className={styles.profileWrapper}>
                        <img src="/images/bruna.webp" alt="Foto de Bruna Savelli" className={styles.photo} />
                    </div>
                    <div className={styles.headerInfo}>
                        <h1 className={styles.name}>Bruna Savelli</h1>
                        <p className={styles.role}>Desenvolvedora Full Stack | Criadora de RespiraAurora</p>
                        <p className={styles.education}>Análise e Desenvolvimento de Sistemas - SENAI</p>
                    </div>
                </section>

                <div className={styles.divider}></div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Sobre Mim</h2>
                    <div className={styles.sectionContent}>
                        <p className={styles.text}>
                            Sou estudante de <strong>Análise e Desenvolvimento de Sistemas no SENAI</strong>, 
                            apaixonada por criar experiências digitais que unem funcionalidade, design e bem-estar.
                        </p>
                        <p className={styles.text}>
                            O projeto <strong>RespiraAurora</strong> nasceu da minha vontade de desenvolver uma 
                            plataforma de meditação acessível, intuitiva e visualmente inspiradora, ajudando pessoas 
                            a encontrarem momentos de calma e equilíbrio no dia a dia.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Stack Tecnológico</h2>
                    <div className={styles.techGrid}>
                        <div className={styles.techCategory}>
                            <h3 className={styles.categoryTitle}>Frontend</h3>
                            <div className={styles.techList}>
                                <span className={styles.techItem}>HTML5</span>
                                <span className={styles.techItem}>CSS3</span>
                                <span className={styles.techItem}>JavaScript</span>
                                <span className={styles.techItem}>React</span>
                                <span className={styles.techItem}>Next.js</span>
                            </div>
                        </div>
                        <div className={styles.techCategory}>
                            <h3 className={styles.categoryTitle}>Backend</h3>
                            <div className={styles.techList}>
                                <span className={styles.techItem}>Node.js</span>
                                <span className={styles.techItem}>Express</span>
                                <span className={styles.techItem}>REST API</span>
                            </div>
                        </div>
                        <div className={styles.techCategory}>
                            <h3 className={styles.categoryTitle}>Ferramentas</h3>
                            <div className={styles.techList}>
                                <span className={styles.techItem}>Git</span>
                                <span className={styles.techItem}>GitHub</span>
                                <span className={styles.techItem}>VS Code</span>
                                <span className={styles.techItem}>Figma</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
