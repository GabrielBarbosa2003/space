import Cabecalho from "Componentes/Cabecalho";
import Menu from "Componentes/Menu";
import Galeria from "Componentes/Galeria";
import Populares from "Componentes/populares";

import '../../Assets/fontes/GandhiSans-Bold.otf'
import '../../Assets/fontes/GandhiSans-Regular.otf'

import banner from "../../Assets/banner.png"
import styles from "../PaginaInicial/Paginainicial.module.scss"


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />

            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="banner" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
        </>

    )
}