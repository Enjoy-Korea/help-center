// src/components/Button.js
import React from 'react';
import styles from './styles.module.css';

const Button = ({ children, href, onClick, style }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={styles.button}
            style={style}
        >
            {children}
        </a>
    );
};

export default Button;
