import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const PaymentTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="payment-table">
        <TableHead style={{ background: "rgba(0,0,0,.05)" }}>
          <TableRow>
            <TableCell size="medium">Nome</TableCell>
            <TableCell size="medium">Valor</TableCell>
            <TableCell size="medium">Descrição</TableCell>
            <TableCell size="medium">Forma de pagamento</TableCell>
            <TableCell size="medium">Data de vencimento</TableCell>
            <TableCell size="medium">Telefone</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody style={{ background: "#f5f5f5" }}>
          <TableRow>
            <TableCell component="th" scope="row">
              11312321
            </TableCell>
            <TableCell align="left">teste</TableCell>
            <TableCell align="left">quantidade</TableCell>
            <TableCell align="left">sei la</TableCell>
            <TableCell align="left">sei la</TableCell>
            <TableCell align="left">sei la</TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
        <TableBody style={{ background: "#f5f5f5" }}>
          <TableRow>
            <TableCell component="th" scope="row">
              11312321
            </TableCell>
            <TableCell align="left">teste</TableCell>
            <TableCell align="left">quantidade</TableCell>
            <TableCell align="left">sei la</TableCell>
            <TableCell align="left">sei la</TableCell>
            <TableCell align="left">sei la</TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentTable;
