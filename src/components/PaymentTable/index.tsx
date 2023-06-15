import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  ShowMessageWithCondition,
  redirectToExternalURL,
} from "../../utils/generic";

const PaymentTable = ({ tableData }: any) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="payment-table">
        <TableHead style={{ background: "rgba(0,0,0,.1)" }}>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Valor</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Forma de pagamento
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Data de vencimento
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
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
              <TableCell>
                {row.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>
                {ShowMessageWithCondition(
                  row.billingType === "UNDEFINED",
                  "A definir"
                )}
              </TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>
                {row.status === "PENDING"
                  ? "Pendente"
                  : row.status === "RECEIVED" && "Pago"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentTable;
