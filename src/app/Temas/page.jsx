"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TemaCard from '../../components/TemaCard/TemaCard';
import styles from './Temas.module.css';

export default function Temas() {
    const [temas, setTemas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);

    const fetchTemas = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/themes`
            );
            const data = response.data;
            setTemas(Array.isArray(data) ? data : []);
            toast.success("Temas carregados com sucesso!", {
                toastId: 'success-load'
            });
        } catch (error) {
            console.error("Erro ao carregar temas:", error);
            setError(error.message);
            setTemas([]);
            toast.error("Erro ao carregar temas.", {
                toastId: 'error-load'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTemas();
    }, []);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentTemas = temas.slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h1 className={styles.title}>Temas</h1>

                {loading ? (
                    <div className={styles.loadingContainer}>
                        <Spin size="large" />
                        <p>Carregando temas...</p>
                    </div>
                ) : error ? (
                    <div className={styles.errorContainer}>
                        <p>❌ Erro: {error}</p>
                        <button
                            onClick={fetchTemas}
                            className={styles.retryButton}
                        >
                            🔄 Tentar Novamente
                        </button>
                    </div>
                ) : (
                    <div className={styles.temasGrid}>
                        {currentTemas.map((tema, index) => {
                            const temaFormatado = {
                                id: tema.id,
                                titulo: tema.name || tema.title || "Tema sem nome",
                                categoria: tema.category || "Bem-estar",
                                descricao: tema.description || "Descrição não disponível",
                                duracao: tema.duration || 10,
                                nivel: tema.level || "Iniciante",
                                icone: tema.photo ? `/images/${tema.photo}` : '/images/default-icon.png'
                            };

                            return (
                                <TemaCard 
                                    key={`tema-${tema.id || index}`} 
                                    tema={temaFormatado} 
                                />
                            );
                        })}
                        {currentTemas.length === 0 && !loading && !error && (
                            <div className={styles.emptyState}>
                                <p>📭 Nenhum tema encontrado</p>
                                <button
                                    onClick={fetchTemas}
                                    className={styles.retryButton}
                                >
                                    🔄 Recarregar Temas
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}