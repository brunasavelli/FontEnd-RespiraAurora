'use client';
import styles from './TemaCard.module.css';
import Link from 'next/link';

const TemaCard = ({ tema }) => {
    return (
        <Link key={tema.id} href={`/Temas/${tema.id}`} className={styles.temaLink}>
            <div className={styles.temaCard} data-category={tema.categoria?.toLowerCase()}>
                <div className={styles.cardHeader}>
                    <img
                        src={tema.icone || '/images/default-icon.png'}
                        alt={tema.titulo}
                        className={styles.temaIcon}
                        width={40}
                        height={40}
                        onError={(e) => {
                            e.target.src = '/images/default-icon.png';
                        }}
                    />
                    {tema.nivel && (
                        <span className={`${styles.temaNivel} ${
                            tema.nivel?.toLowerCase() === 'iniciante' ? styles.nivelIniciante :
                            (tema.nivel?.toLowerCase() === 'intermediario' || tema.nivel?.toLowerCase() === 'intermediario') ? styles.nivelIntermediario :
                            (tema.nivel?.toLowerCase() === 'avancado') ? styles.nivelAvancado : ''
                        }`}>
                            {tema.nivel}
                        </span>
                    )}
                </div>

                <h3 className={styles.temaTitle}>{tema.titulo}</h3>
                <span className={styles.temaCategoria}>{tema.categoria}</span>
                <p className={styles.temaDescricao}>{tema.descricao}</p>

                <div className={styles.line}>
                    <div className={styles.temaDuration}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z" />
                        </svg>
                        {tema.duracao}
                    </div>
                    <button className={styles.temaButton}>
                        Iniciar
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default TemaCard;