import logo from '../../Assets/logo.png'
import search from '../../Assets/search.png'
import styles from './cabecalho.module.scss'
export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="alura space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text"
                placeholder="O que você procura ?"/>
                <img src={search} alt="ícone lupa"/>
            </div>
        </header>
    )
}
