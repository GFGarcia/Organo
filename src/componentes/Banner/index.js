import React from 'react';
import './Banner.css';

export const Banner = () => {
    // JSX -> Como o React trabalha com a parte visual
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo" />
        </header>
    )
}