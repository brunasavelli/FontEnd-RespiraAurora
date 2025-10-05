"use client"


import React, { useState } from "react";
import styles from "./AuroraPessoal.module.css";


export default function AuroraPessoal() {
    const [activeTab, setActiveTab] = useState('perfil');


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.profileSection}>
                        <div className={styles.avatarContainer}>
                            <img
                                src="/images/bruna.webp"
                                alt="Foto do perfil"
                                className={styles.avatar}
                            />
                            <div className={styles.statusIndicator}></div>
                        </div>
                        <div className={styles.userInfo}>
                            <h1 className={styles.userName}>Aurora Pessoal</h1>
                            <p className={styles.userBio}>Sua jornada de bem-estar e meditação</p>
                        </div>
                    </div>
                </div>

                <div className={styles.tabNavigation}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'perfil' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('perfil')}
                    >
                        <img src="/icons/userIcon.png" alt="Ícone de usuário" className={styles.icon} />
                        Perfil
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'progresso' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('progresso')}
                    >
                        <img src="/icons/analyticIcon.png" alt="Ícone de gáfico" className={styles.icon} />
                        Progresso
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'conquistas' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('conquistas')}
                    >
                        <img src="/icons/trophyIcon.png" alt="" className={styles.icon}/>
                        Conquistas
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'perfil' && (
                        <div className={styles.perfilTab}>
                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Informações Pessoais</h2>
                                <div className={styles.infoGrid}>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>Nome</span>
                                        <span className={styles.infoValue}>Usuário</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>Membro desde</span>
                                        <span className={styles.infoValue}>Setembro 2025</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>Sessões realizadas</span>
                                        <span className={styles.infoValue}>0</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>Tempo total</span>
                                        <span className={styles.infoValue}>0 min</span>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Preferências</h2>
                                <div className={styles.preferencesList}>
                                    <div className={styles.preferenceItem}>
                                        <span className={styles.iconText}>
                                            <img src="/icons/songIcon.png" alt="Ícone de nota musical" className={styles.icon}/>
                                            Sons ambiente
                                        </span>
                                        <label className={styles.switch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                    <div className={styles.preferenceItem}>
                                        <span className={styles.iconText}>
                                            <img src="/icons/bellIcon.png" alt="Ícone de sino" className={styles.icon}/>
                                            Notificações
                                        </span>
                                        <label className={styles.switch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === 'progresso' && (
                        <div className={styles.progressoTab}>
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                        <img src="/icons/relaxIcon.png" alt="Ícone de relaxamento" className={styles.icon2} />
                                    </div>
                                    <h3 className={styles.statNumber}>0</h3>
                                    <p className={styles.statLabel}>Sessões Concluídas</p>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                        <img src="/icons/timerIcon.png" alt="Ícone de cronômetro" className={styles.icon2} />
                                    </div>
                                    <h3 className={styles.statNumber}>0</h3>
                                    <p className={styles.statLabel}>Minutos Meditados</p>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                        <img src="/icons/fireIcon.png" alt="Ícone de fogo" className={styles.icon2} />
                                    </div>
                                    <h3 className={styles.statNumber}>0</h3>
                                    <p className={styles.statLabel}>Dias Consecutivos</p>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                        <img src="/icons/targetIcon.png" alt="Ícone de alvo" className={styles.icon2} />
                                    </div>
                                    <h3 className={styles.statNumber}>0</h3>
                                    <p className={styles.statLabel}>Metas Atingidas</p>
                                </div>
                            </div>


                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Atividade Recente</h2>
                                <div className={styles.emptyState}>
                                    <div className={styles.emptyIcon}>
                                        <img src="/icons/graphicIcon.png" alt="Ícone de gráfico" />
                                    </div>
                                    <p>Comece sua primeira sessão para ver seu progresso aqui!</p>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === 'conquistas' && (
                        <div className={styles.conquistasTab}>
                            <div className={styles.achievementsGrid}>
                                <div className={styles.achievementCard}>
                                    <div className={styles.achievementIcon}>
                                        <img src="/icons/starIcon.png" alt="Ícone de estrela" />
                                    </div>
                                    <h3 className={styles.achievementTitle}>Primeira Sessão</h3>
                                    <p className={styles.achievementDesc}>Complete sua primeira meditação</p>
                                    <div className={styles.achievementStatus}>
                                        <img src="/icons/padlockIcon.png" alt="Ícone de cadeado" className={styles.icon3} />
                                        Bloqueado
                                    </div>
                                </div>
                                <div className={styles.achievementCard}>
                                    <div className={styles.achievementIcon}>
                                        <img src="/icons/exerciseIcon.png" alt="Ícone de halter" />
                                    </div>
                                    <h3 className={styles.achievementTitle}>Constância</h3>
                                    <p className={styles.achievementDesc}>Medite por 7 dias consecutivos</p>
                                    <div className={styles.achievementStatus}>
                                        <img src="/icons/padlockIcon.png" alt="Ícone de cadeado" className={styles.icon3} />
                                        Bloqueado
                                    </div>
                                </div>
                                <div className={styles.achievementCard}>
                                    <div className={styles.achievementIcon}>
                                        <img src="/icons/timerIcon.png" alt="Ícone de relógio" />
                                    </div>
                                    <h3 className={styles.achievementTitle}>Maratonista</h3>
                                    <p className={styles.achievementDesc}>Acumule 60 minutos de meditação</p>
                                    <div className={styles.achievementStatus}>
                                        <img src="/icons/padlockIcon.png" alt="Ícone de cadeado" className={styles.icon3} />
                                        Bloqueado
                                    </div>
                                </div>
                                <div className={styles.achievementCard}>
                                    <div className={styles.achievementIcon}>
                                        <img src="/icons/targetIcon.png" alt="Ícone de alvo" />
                                    </div>
                                    <h3 className={styles.achievementTitle}>Explorador</h3>
                                    <p className={styles.achievementDesc}>Experimente 5 temas diferentes</p>
                                    <div className={styles.achievementStatus}>
                                        <img src="/icons/padlockIcon.png" alt="Ícone de cadeado" className={styles.icon3} />
                                        Bloqueado
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
