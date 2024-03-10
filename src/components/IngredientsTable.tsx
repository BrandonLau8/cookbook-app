import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  name: string,
  quantity: number,
  status: boolean,
  description: string,
  notes: string
) {
  return {
    name,
    quantity,
    status,
    description,
    notes,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{}}>
          {row.name}
        </TableCell>
        <TableCell align="left">{row.quantity}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
        <TableCell align="left">{row.description}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Notes
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                {row.notes}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//Rows
const rows = [
  createData("yogurht", 159, true, "black", "hello"),
  createData("Ice cream sandwich", 237, false, "el", "hello"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} sx={{}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{}}>
            <TableCell sx={{ width: "10%" }} />
            <TableCell sx={{ width: "20%", backgroundColor: "lightblue" }}>
              Name
            </TableCell>
            <TableCell align="left" sx={{ width: "10%" }}>
              Quantity
            </TableCell>
            <TableCell align="left" sx={{ width: "10%" }}>
              Status
            </TableCell>
            <TableCell align="left" sx={{ width: "50%" }}>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
