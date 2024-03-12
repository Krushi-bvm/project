import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { TablePagination } from '@mui/material';
function createData(name, cost, value) {
  return {
    name, cost, value
  };
}
// const data = JSON.parse(localStorage.getItem("costData"));
// console.log("data...",data);
function Row(props) {
  const { row, index  } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{background: index % 2 === 0 ? '#FFFFFF' : '#F8F9FB'  }}>
        <TableCell sx={styles.rowText}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowDropUpIcon sx={{ color: "#2B969E" }}/> : <ArrowDropDownTwoToneIcon sx={{ color: "#2B969E" }}/>}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={styles.rowText}>
          {row.name}
        </TableCell>
        <TableCell align="center" sx={styles.columnText}>{row.value}</TableCell>
        <TableCell align="center" sx={styles.columnText}>{row.cost}</TableCell>
        <TableCell align="center" sx={styles.columnText}>{row.value}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
const rows = [
  createData('Pricing', "Fair Value", "£1,141,728.12"),
  createData('Source', "Land Agent", "Obi"),
  createData('Development Profile', "Project Name/Address", "Upper Norwood"),
  createData('Estimation', "GDV Manual Input", "$4,400,000.00"),
  createData('Deal', "Purchase Price", "£1,000,000.00"),
  createData('Constuction', "NIA", "7900"),
  createData('Council', "Council", "Merton"),
  createData('Professionals', "Quantity Surveyor", "0"),
];
const Homess2 = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Box sx={styles.imageBox} role="cost table">
        <img src='/image1.png' width="100%" height="100%" alt='image' />
        <Box role="costtable" style={styles.contant}>
          <div style={styles.head}>The Most Suitable </div>
          <div style={styles.head}>Property For You </div>
          <div style={styles.subhead}>We are a real estate agency that will help </div>
        </Box>
      </Box>
      <div style={{ padding: "40px", background: "#F7F7F7" }}>
        <Typography sx={styles.head}>Cashflow</Typography>
        <Box sx={{ mt: 2, background: "#fff", borderRadius: "30px",height:"500px", display:"flex", flexDirection:"column",justifyContent:"space-between" }}>
          <Table aria-label="collapsible table" >
            <TableHead role="columnheader" sx={{ background: "#2B969E", }}>
              <TableRow>
                <TableCell sx={{ borderTopLeftRadius: "30px" }} />
                <TableCell sx={styles.tableTitle}>Cost Name</TableCell>
                <TableCell sx={styles.tableTitle} align="center">Total</TableCell>
                <TableCell sx={styles.tableTitle} align="center">Cost</TableCell>
                <TableCell sx={{ ...styles.tableTitle, borderTopRightRadius: "30px" }} align="center">Cost Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody role ="row">
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <Row key={row.name} row={row} index={index + page * rowsPerPage} />
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5,10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </div>
    </>
  );
}
export default Homess2;
const styles = {
    div2: {
        display: "flex",
        flexDirection: "row",
        gap: "20px"
    },
    head: {
        // fontFamily: "Montserrat",
        fontSize: "35px",
        fontWeight: 500,
    },
    subhead:{
        fontFamily: "Montserrat", fontWeight: 400, fontSize:"23px", marginTop:"10px",color:"#33333B", opacity:0.8
    },
    rowText: {
      fontWeight: 400,
        borderBottom :"unset",
        fontSize: "18px",
    },columnText:{
      fontWeight: 500,
      borderBottom :"unset",
      fontSize: "15px",
    },
    inputDiv: {
        display: "flex", flexDirection: "column",
    },
    inputStyle: {
        backgroundColor: "#DFF4F7", borderRadius: "10px", height: "47px", padding: "5px", paddingLeft: "15px", underline: "none", minWidth: "310px",
    },
    tableTitle: {
        // fontFamily: "Montserrat",
        fontWeight: 500,
        fontSize: "22px",
        color: "#fff",
        lineHeight:"24.38px",
        height: "60px",
    },
    tableBody: {
        display: "flex", flexDirection: "row", minWidth: "70%", gap: "10px", paddingLeft: "35px", paddingBottom: "30px", flexWrap: "wrap", overflowX: "auto"
    },
    '@media (max-width: 768px)': {
        tableBody: {
            flexDirection: "column",
            alignItems: "center",
            overflowX: "auto"
        },
        inputDiv: {
            marginBottom: "10px",
            width: "100%"
        },
    },
    button: {
        '&:hover': {
            borderColor: '#2B969E',
        },
        borderColor: '#2B969E',
        color: "#2B969E",
        borderRadius: "10px",
        mr: 2
    },
    dataBox: {
        display: "flex", float: "left", minWidth: "14% !important",
    },
    detailBox: {
        borderRadius: "40px", background: "#F7F7F7", width: "100%"
    },
    imageBox:{
        position:"relative",
        height:"50vh",
    },
    contant:{
        position:"absolute",
        top:"70px",
        left:"70px"
    }
}