import dayjs from "dayjs";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  redirectToExternalURL,
  validateConditionsForRow,
} from "../../utils/generic";
import { ICondition } from "../../utils/types";
import { StyledTableCell } from "./styles";

const PaymentTable = ({ tableData }: any) => {
  const conditions: Record<string, ICondition[]> = {
    billingType: [
      {
        condition: (row) => row.billingType === "UNDEFINED",
        message: "Definir no Pagamento",
      },
      {
        condition: (row) => row.billingType === "BOLETO",
        message: "Boleto Bancário",
      },
      {
        condition: (row) => row.billingType === "CREDIT_CARD",
        message: "Cartão de Crédito",
      },
      {
        condition: (row) => row.billingType === "DEBIT_CARD",
        message: "Cartão de Débito",
      },
      {
        condition: (row) => row.billingType === "TRANSFER",
        message: "Transferência Bancária",
      },
      {
        condition: (row) => row.billingType === "PIX",
        message: "Pix",
      },
      {
        condition: (row) => row.billingType === "DEPOSIT",
        message: "Depósito Bancário",
      },
    ],
    status: [
      {
        condition: (row) => row.status === "PENDING",
        message: "Aguardando Pagamento",
      },
      {
        condition: (row) => row.status === "RECEIVED",
        message: "Pagamento Efetuado",
      },
      {
        condition: (row) => row.status === "CONFIRMED",
        message: "Pagamento Efetuado",
      },
      {
        condition: (row) => row.status === "OVERDUE",
        message: "Em Atraso",
      },
      {
        condition: (row) => row.status === "REFUND_REQUESTED",
        message: "Estorno Solicitado",
      },
      {
        condition: (row) => row.status === "REFUNDED",
        message: "Cobrança Estornada",
      },
    ],
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="payment-table">
        <TableHead style={{ background: "rgba(0,0,0,.1)" }}>
          <TableRow>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Valor
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Forma de pagamento
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Data de vencimento
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row: any) => (
            <TableRow
              key={row.id}
              style={{ cursor: "pointer" }}
              hover
              onClick={() => {
                redirectToExternalURL(row.invoiceUrl);
              }}
            >
              <StyledTableCell
                isDone={row.status === "CONFIRMED" || row.status === "RECEIVED"}
                align="center"
              >
                {row.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </StyledTableCell>
              <StyledTableCell
                isDone={row.status === "CONFIRMED" || row.status === "RECEIVED"}
                align="center"
              >
                {validateConditionsForRow(row, conditions).billingType}
              </StyledTableCell>
              <StyledTableCell
                isDone={row.status === "CONFIRMED" || row.status === "RECEIVED"}
                align="center"
              >
                {dayjs(row.dueDate).format("DD/MM/YYYY")}
              </StyledTableCell>
              <StyledTableCell
                isDone={row.status === "CONFIRMED" || row.status === "RECEIVED"}
                align="center"
              >
                {validateConditionsForRow(row, conditions).status}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentTable;
