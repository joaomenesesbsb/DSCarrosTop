import './styles.css';

import HeaderCT from '../../components/HeaderCT';
import CardCatalog from '../../components/CardCatalog';

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
            <section>
                
            </section>
        </main>
        </>
    )
}