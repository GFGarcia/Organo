import React from 'react'
import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='midias-sociais'>
                <a href="https://www.facebook.com/"><img src="imagens/fb.png" alt="Link Facebook" /></a>
                <a href="https://twitter.com
"><img src="imagens/tw.png" alt="Link Twitter" /></a>
                <a href="https://www.instagram.com
"><img src="imagens/ig.png" alt="Link Instagram" /></a>
            </div>
            <a href="#"><img src="imagens/logo.png" alt="" /></a>
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape;