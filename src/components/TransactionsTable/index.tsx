import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dev</td>
            <td className="deposit">R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>25/05/2021</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> R$ -1000</td>
            <td>casa</td>
            <td>04/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
