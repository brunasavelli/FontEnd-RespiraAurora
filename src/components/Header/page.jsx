"use client";

import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/InitialPage">
                <img src="/images/Logo.png" alt="Logo Respira Aurora" className={styles.logo} />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/InitialPage" className={styles.navLink}>Initial</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/Temas" className={styles.navLink}>Temas</Link>
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
    )
}