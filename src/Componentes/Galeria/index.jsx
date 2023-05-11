import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'


export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set (fotos.map((valor) => valor.tag))] // pega o valor de cada valor.tag, com new Set nao deixa repetir, e com o ... coloca cada valor dentro de uma posicao do array

  function filtraFotos(tag){
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });
    setItens(novasFotos)
  }
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
      <Cards fotos={itens} styles={styles}/>
    </section>
  )
}
