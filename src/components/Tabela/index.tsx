import { Container } from "./styles";

export function Tabela() {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$ 6.000</td>
              <td>Desenvolvimento</td>
              <td>03/09/2021</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw">- R$ 1.100</td>
              <td>Moradia</td>
              <td>03/09/2021</td>
            </tr>
          </tbody>
        </table>
      </Container>
    );
}