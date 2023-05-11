import React from 'react'

import open from '../../../Assets/open.png'
import fav from '../../../Assets/favorito.png'

export default function Cards({ fotos, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {fotos.map((foto) => {
                return (
                    <li key={foto.id} className={styles.galeria__card}>
                        <img
                            className={styles.galeria__imagem}
                            src={foto.imagem}
                            alt={foto.titulo}
                        />
                        <p className={styles.galeria__descricao}>{foto.titulo}</p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={fav} alt="ícone coração partido" />
                                <img src={open} alt="ícone de abrir modal" />
                            </span>
                        </div>

                    </li>
                )
            })}

        </ul>

    )
}
