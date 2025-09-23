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
            </div>
        </div>
    );
}
