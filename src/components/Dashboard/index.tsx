import { Summary } from "../Summary";
import { Tabela } from "../Tabela";
import { Container } from "./styles";

export function Dashboard() {
  return (
  <Container>
      <Summary/>
      <Tabela/>
  </Container>
  );
}
