import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
            <TableCell />
          </TableRow>
        </TableHead>
        {tableData?.map((row: any) => {
          return (
            <TableBody key={row.id}>
              <TableRow>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.billingType}</TableCell>
                <TableCell>{row.dueDate}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </TableContainer>
  );
};

export default PaymentTable;
