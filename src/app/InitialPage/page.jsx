"use client";

import React from "react";
import styles from "./InitialPage.module.css";
import Link from "next/link";

export default function InitialPage() {
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <h1>
                    <sapn className={styles.title}>Seja Bem Vindo(a) ao Respira Aurora!</sapn>
                </h1>
            </div>
            <div className={styles.rightBox}>
                <h1>EXPERIMENTE JÁ</h1>
            </div>
        </div>
    );
}