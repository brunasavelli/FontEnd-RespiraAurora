"use client"

import React from 'react';
import { useState } from 'react';
import { Card, Spin } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './Temas.module.css';

export default function Temas() {
    const [temas, setTemas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchTemas = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/themes`
            );
            const data = response.data;
            setTemas(data);
            setIsLoaded(true);
            toast.success("Temas carregados com sucesso!", {
                toastId: 'success-load'
            });
        } catch (error) {
            console.error("Erro ao carregar temas:", error);
            toast.error("Erro ao carregar temas.", {
                toastId: 'error-load'
            });
        } finally {
            setLoading(false);
        }
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentTemas = temas.slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <h1 className={styles.title}>Temas</h1>

                {!isLoaded && (
                    <div>
                        <button
                            onClick={fetchTemas}
                            disabled={loading}
                            className={styles.button}
                        >
                            {loading ? <Spin /> : "Carregar Temas"}
                        </button>
                    </div>
                )}

                {loading ? (
                    <div className="flex flex-col justify-center items-center">
                        <Spin size="large" />
                        <p>Carregando temas...</p>
                    </div>
                ) : (
                    isLoaded && (
                        <>
                            <div className={styles.temasList}>
                                {currentTemas.map((temas) => (
                                    <div className={styles.temasInfo}>
                                        <h3 className={styles.temaTitle}>{temas.name}</h3>
                                        <p>{temas.description}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
}