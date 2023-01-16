import './styles.css';
import CarImg from '../../assets/car.png';

export default function CardCatalog(){
    return (
        <>
        <div className='card-catalog-ct'>
            <img src={CarImg} alt="Car" />
            <h3>Lorem ipsum dolor</h3>
        </div>
        </>
    )
}