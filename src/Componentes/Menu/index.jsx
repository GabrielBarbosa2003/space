import React from 'react'
import home from '../../Assets/icones/home-ativo.png'
import mCurtidas from '../../Assets/icones/mais-curtidas-inativo.png'
import mVistas from '../../Assets/icones/mais-vistas-inativo.png'
import novas from '../../Assets/icones/novas-inativo.png'
import surpreenda from '../../Assets/icones/surpreenda-me-inativo.png'

import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt=''/>
                <a href='/'>Início</a>
            </li>

            <li className={styles.menu__item}>
                <img src={mCurtidas} alt=''/>
                <a href='/'>Mais Curtidas</a>
            </li>

            <li className={styles.menu__item}>
                <img src={mVistas} alt=''/>
                <a href='/'>Mais vistas</a>
            </li>

            <li className={styles.menu__item}>
                <img src={novas} alt=''/>
                <a href='/'>Novas</a>
            </li>

            <li className={styles.menu__item}>
                <img src={surpreenda} alt=''/>
                <a href='/'>Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
