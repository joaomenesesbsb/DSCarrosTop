import './styles.css';

import HeaderCT from '../../components/HeaderCT';
import CardCatalog from '../../components/CardCatalog';
import CardDescriprion from '../../components/CardDescription';
import FooterCT from '../../components/FooterCT';

export default function CatalogCT(){
    return(
        <>
        <HeaderCT />
        <main>
            <section id='section-catalog-content' className='container'>
                <h2>Venha nos visitar</h2>
                <CardCatalog />
                <CardCatalog />
            </section>
            <section id='section-description-content' className='contanier-secundary'>
                <h2>O que estão dizendo</h2>
                <CardDescriprion />
                <CardDescriprion />
                <CardDescriprion />
                <CardDescriprion />
                <CardDescriprion />
            </section>
        </main>
        <FooterCT />
        </>
    )
}