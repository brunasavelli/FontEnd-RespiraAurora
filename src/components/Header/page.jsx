"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.header}>
            <Link href="/InitialPage">
                <img src="/images/logo.png" alt="Logo Respira Aurora" className={styles.logo} />
            </Link>

            <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/InitialPage" className={styles.navLink} onClick={closeMenu}>Initial</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/Temas" className={styles.navLink} onClick={closeMenu}>Temas</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/AuroraPessoal" className={styles.navLink} onClick={closeMenu}>Aurora Pessoal</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/SobreMim" className={styles.navLink} onClick={closeMenu}>Sobre Mim</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}