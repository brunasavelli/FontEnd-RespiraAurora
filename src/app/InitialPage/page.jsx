"use client";

import React from "react";
import styles from "./InitialPage.module.css";
import Link from "next/link";
import WipeButton from "./WipeButton";
import { FaCloudMoon } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";
import { MdLocalActivity } from "react-icons/md";

export default function InitialPage() {
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <div className={styles.leftBox}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Seja Bem Vindo(a)!
                    </h1>
                    <p className={styles.text}>Respira Aurora é um espaço dedicado à meditação guiada, inspirado pela beleza da natureza e pela serenidade das auroras. Cada prática convida você a desacelerar, respirar fundo e se reconectar com o presente. Ao final de cada meditação, uma frase motivadora reforça a importância da sustentabilidade, lembrando que o cuidado com a mente e com o planeta caminham juntos.</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <Link href="/AuroraPessoal">
                        <WipeButton>Comece a Meditar!</WipeButton>
                    </Link>
                </div>
            </div>
            <div className={styles.rightBox}>
                <img src="/images/auroraBoreal01.png" alt="Aurora Boreal animada" className={styles.auroraBoreal} />
            </div>
            </div>
            <div className={styles.bottomBox}>
                <h2 className={styles.subtitle}>
                    Para todos os momentos!
                </h2>
                <p className={styles.textBottom}>Seja para iniciar bem o dia, enfrentar momentos de tensão ou finalizar a noite com tranquilidade. Explore diversos conteúdos e todas as experiências que o app oferece:</p>

                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <FaCloudMoon size={70} />
                        <h3>Dormir melhor</h3>
                    </div>
                    <div className={styles.box}>
                        <GiMeditation size={70} />
                        <h3>Diminuir o estresse</h3>
                    </div>
                    <div className={styles.box}>
                        <FaHeadSideVirus size={70} />
                        <h3>Melhora a saúde mental</h3>
                    </div>
                    <div className={styles.box}>
                        <MdLocalActivity size={70} />
                        <h3>Enfrentar desafios</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}