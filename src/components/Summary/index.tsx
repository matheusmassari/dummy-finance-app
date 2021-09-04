import { Container } from './styles'
import entradas from '../../assets/entradas.svg'
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";

export function Summary() {
    return (
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradas} alt="" />
          </header>
          <strong> R$ 6000,00 </strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={saidas} alt="" />
          </header>
          <strong> R$ 1100,00 </strong>
        </div>
        <div className='total-summary'>
          <header>
            <p>Total</p>
            <img src={total} alt="" />
          </header>
          <strong> R$ 4900,00 </strong>
        </div>
      </Container>
    );
}