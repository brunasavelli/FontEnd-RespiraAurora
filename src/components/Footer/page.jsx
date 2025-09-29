"use client";

import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <span className={styles.name}>Respira Aurora</span>
                </div>
                
                <div className={styles.copy}>
                    © 2025 Bruna Savelli
                </div>
            </div>
        </footer>
    );
}