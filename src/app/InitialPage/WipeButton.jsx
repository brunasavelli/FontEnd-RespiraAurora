import React, { useRef, useState } from "react";
import styles from "./InitialPage.module.css";

export default function WipeButton({ children }) {
    const btnRef = useRef(null);
    const [active, setActive] = useState(false);
    const [wipePos, setWipePos] = useState({ x: '50%', y: '50%' });

    function setWipePosition(e) {
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setWipePos({ x: `${x}px`, y: `${y}px` });
    }

    function handleMouseEnter(e) {
        setWipePosition(e);
        setActive(true);
    }

    function handleMouseMove(e) {
        setWipePosition(e);
    }

    function handleMouseLeave(e) {
        setWipePosition(e);
        setActive(false);
    }

    return (
        <button
            ref={btnRef}
            className={styles.wipeButton}
            style={{
                '--wipe-x': wipePos.x,
                '--wipe-y': wipePos.y,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <span className={styles.wipeButtonText}>{children}</span>
            <span className={styles.wipeEffect + (active ? ' ' + styles.wipeActive : '')}></span>
        </button>
    );
}
