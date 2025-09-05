"use client";

import React from "react";
import styles from "./InitialPage.module.css";
import Link from "next/link";
import Script from "next/script";
import WipeButton from "./WipeButton";

export default function InitialPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="/images/Logo.png" alt="Logo Respira Aurora" className={styles.logo} />
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/Temas" className={styles.navLink}>Temas</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Detalhes" className={styles.navLink}>Detalhes</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/AuroraPessoal" className={styles.navLink}>Aurora Pessoal</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/SobreMim" className={styles.navLink}>Sobre Mim</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.leftBox}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Seja Bem Vindo(a)!
                    </h1>
                    <p className={styles.text}>Respira Aurora é um espaço dedicado à meditação guiada, inspirado pela beleza da natureza e pela serenidade das auroras. Cada prática convida você a desacelerar, respirar fundo e se reconectar com o presente. Ao final de cada meditação, uma frase motivadora reforça a importância da sustentabilidade, lembrando que o cuidado com a mente e com o planeta caminham juntos.</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <WipeButton  href="/AuroraPessoal">Comece a Meditar!</WipeButton>
                </div>
            </div>
            <div className={styles.rightBox}>
                <h1>EXPERIMENTE JÁ</h1>
            </div>
        </div>
    );
}