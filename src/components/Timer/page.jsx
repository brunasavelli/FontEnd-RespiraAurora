import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onComplete, styles }) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    const parseDurationToSeconds = (duration) => {
        if (!duration) return 300; 
        
        console.log('Parsing duration:', duration);
        
        const durationStr = duration.toString().toLowerCase();
        
        const numbers = durationStr.match(/\d+/);
        if (!numbers) return 300;
        
        const value = parseInt(numbers[0]);
        
        if (durationStr.includes('min')) {
            console.log('Parsed as minutes:', value, '→', value * 60, 'seconds');
            return value * 60;
        } else if (durationStr.includes('hora') || durationStr.includes('hour')) {
            console.log('Parsed as hours:', value, '→', value * 3600, 'seconds');
            return value * 60 * 60;
        } else if (durationStr.includes('seg') || durationStr.includes('sec')) {
            console.log('Parsed as seconds:', value);
            return value;
        }
        
        console.log('Fallback to minutes:', value, '→', value * 60, 'seconds');
        return value * 60;
    };

    useEffect(() => {
        if (duration && !isInitialized) {
            const seconds = parseDurationToSeconds(duration);
            setTimeLeft(seconds);
            setIsInitialized(true);
            console.log('Timer inicializado com:', duration, '→', seconds, 'segundos');
        }
    }, [duration, isInitialized]);

    useEffect(() => {
        let interval = null;
        
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        setIsActive(false);
                        if (onComplete) onComplete();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (timeLeft === 0 || !isActive) {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);
    }, [isActive, timeLeft, onComplete]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        const seconds = parseDurationToSeconds(duration);
        setTimeLeft(seconds);
        console.log('Timer resetado para:', seconds, 'segundos');
    };

    console.log('Timer state:', { timeLeft, isActive, duration });

    return (
        <div className={styles.timerContainer}>
            <div className={styles.timerDisplay}>
                <span className={styles.timeText}>{formatTime(timeLeft)}</span>
            </div>
            <div className={styles.timerControls}>
                {!isActive ? (
                    <button onClick={handleStart} className={styles.timerStartButton}>
                        {timeLeft === parseDurationToSeconds(duration) ? 'Iniciar' : 'Retomar'}
                    </button>
                ) : (
                    <button onClick={handlePause} className={styles.timerPauseButton}>
                        Pausar
                    </button>
                )}
                <button onClick={handleReset} className={styles.timerResetButton}>
                    Reiniciar
                </button>
            </div>
            {timeLeft === 0 && (
                <div className={styles.timerComplete}>
                    <p>Tempo finalizado! ✨</p>
                </div>
            )}
        </div>
    );
};

export default Timer;