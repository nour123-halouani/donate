import { Button, Input, InputAdornment, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TablePaginationActions from "../TablePagination";
import InfoIcon from "@mui/icons-material/Info";
import ClearIcon from "@mui/icons-material/Clear";

const columns = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "adress", label: "Address" },
  { id: "createAt", label: "Date of Creation" },
  { id: "edit", label: "Edit" },
  { id: "delete", label: "Delete" },
];

export default function UserAdmin(props) {
  const [openPopup, setOpenPopup] = useState(false);

  /******************PAGINATION****************/
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [open, setOpen] = useState(true);
  const [openDetailsPopup, setOpenDetailsPopup] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [openEditPopup, setOpenEditPopup] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  /******************GET-DATA*****************/
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(Data);

//   useEffect(() => {
//     const getData = () => {
//       axios
//         .get("http://localhost:5700/api/sousPartner/get-all-sousPartners")
//         .then((response) => {
//           const sousPartnersData = response.data.data;
//           setData(sousPartnersData);
//           setSearchData(sousPartnersData);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getData();
//   }, []);

  /******************SEARCH*******************/
//   useEffect(() => {
//     if (search === "") {
//       setSearchData(Data);
//     } else {
//       setSearchData(
//         Data.filter((val) => {
//           return val.name.toLowerCase().includes(search);
//         })
//       );
//     }
//   }, [search, Data]);

//   const cancelSearch = () => {
//     setSearch("");
//     document.getElementById("search").value = "";
//   };

  return (
    <>
      <Stack
        direction="row"
        spacing={5}
        justifyContent="space-between"
        sx={{ marginBottom: 5 }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <Input
            placeholder="Chercher.."
            variant="standard"
            autoComplete="off"
            id="search"
            onChange={(e) => {
              const timerId = setTimeout(() => {
                setSearch(e.target.value);
              }, 500);
              return () => {
                clearTimeout(timerId);
              };
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => cancelSearch()}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Box>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddCircleIcon />}
            style={{ textTransform: "none" }}
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            Ajouter un admin
          </Button>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ fontWeight: "bold" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? searchData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : searchData
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ width: 170 }}>{row.name}</TableCell>
                <TableCell style={{ width: 170 }}>{row.email}</TableCell>
                <TableCell style={{ width: 170 }}>{row.address}</TableCell>
                <TableCell style={{ width: 170 }}>{row.phone}</TableCell>
                <TableCell style={{ width: 170 }}>{row.createdAt}</TableCell>
                <TableCell style={{ width: 100 }}>
                  <IconButton>
                    <EditIcon
                      color="primary"
                      onClick={() => {
                        setOpenEditPopup(true);
                      }}
                    />
                  </IconButton>
                </TableCell>

                <TableCell style={{ width: 100 }}>
                  <IconButton>
                    <DeleteIcon
                      color="primary"
                      onClick={() => {
                        setOpenDeletePopup(true);
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 25, 50, { label: "All", value: -1 }]}
                count={searchData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* <AddPartner openPopup={openPopup} setOpenPopup={setOpenPopup} />
      <PartnersDetails
        openDetailsPopup={openDetailsPopup}
        setOpenDetailsPopup={setOpenDetailsPopup}
      />
      <DeletePartner
        openDeletePopup={openDeletePopup}
        setOpenDeletePopup={setOpenDeletePopup}
      />
      <EditPartner
        openEditPopup={openEditPopup}
        setOpenEditPopup={setOpenEditPopup}
      /> */}
    </>
  );
}