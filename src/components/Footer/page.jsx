"use client";

import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.socialMedia}>
                        <Link href="https://www.instagram.com/brunasavellii/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <img src="https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=8a8a8a" alt="Instagram" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/brunasavelli/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=8a8a8a" alt="LinkedIn" />
                        </Link>
                        <Link href="https://github.com/brunasavelli" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=8a8a8a" alt="GitHub" />
                        </Link>
                    </div>
                    <div>
                        <h2>Entre em contato:</h2>
                        <p>Email: respira.aurora@gmail.com</p>
                        <p>Telefone: +55 11 9 9999-9999</p>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2 className={styles.title}>Links Rápidos</h2>
                    <ul>
                        <li className={styles.link}><Link href="/InitialPage">Início</Link></li>
                        <li className={styles.link}><Link href="/SobreMim">Sobre a Criadora</Link></li>
                        <li className={styles.link}><Link href="/Temas">Temas</Link></li>
                    </ul>
                </div>
                <div className={styles.sendMessage}>
                    <h2 className={styles.title}>Avalie nosso site:</h2>
                    <form className={styles.form}>
                        <input type="text" placeholder="Seu Comentário" className={styles.input} />
                        <button type="submit" className={styles.button}>Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}