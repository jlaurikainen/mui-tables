import { Box } from "@mui/material";
import {
  DataGridPro,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from "@mui/x-data-grid-pro";
import { parseISO } from "date-fns";
import { Link } from "react-router-dom";
import data from "./MOCK_DATA.json";

export function App2() {
  return (
    <Box
      sx={{
        marginInline: "auto",
        height: 920,
        maxWidth: 1900,
        width: "100%",
      }}
    >
      <DataGridPro
        checkboxSelection
        columns={[
          {
            field: "last_name",
            renderHeader: () => "Last Name",
            renderCell: (cell) => <Link to="">{cell.value}</Link>,
            width: 200,
          },
          {
            field: "first_name",
            renderHeader: () => "First Name",
            renderCell: (cell) => <Link to="">{cell.value}</Link>,
            width: 200,
          },
          {
            field: "email",
            renderHeader: () => "Email",
            renderCell: (cell) => <Link to="">{cell.value}</Link>,
            width: 275,
          },
          {
            field: "address.street_address",
            renderHeader: () => "Street Address",
            renderCell: (cell) => (
              <Link to="">{cell.row.address.street_address}</Link>
            ),
            width: 225,
          },
          {
            field: "address.postal_code",
            renderHeader: () => "Postal Code",
            renderCell: (cell) => (
              <Link to="">{cell.row.address.postal_code}</Link>
            ),
            width: 150,
          },
          {
            field: "address.city",
            renderHeader: () => "City",
            renderCell: (cell) => <Link to="">{cell.row.address.city}</Link>,
            width: 200,
          },
          {
            field: "salary_group",
            renderHeader: () => "Salary Group",
            renderCell: (cell) => <Link to="">{cell.value}</Link>,
            width: 200,
          },
          {
            field: "personal_identity_code",
            renderHeader: () => "Personal Identity Code",
            renderCell: (cell) => <Link to="">{cell.value}</Link>,
            width: 200,
          },
          {
            align: "right",
            headerAlign: "right",
            field: "start_date",
            renderHeader: () => "Employment Start",
            renderCell: (cell) => (
              <Link to="">
                {parseISO(cell.row.start_date).toLocaleDateString("fi")}
              </Link>
            ),
            width: 200,
          },
          {
            align: "right",
            headerAlign: "right",
            field: "end_date",
            renderHeader: () => "Employment End",
            renderCell: (cell) =>
              cell.row.end_date ? (
                <Link to="">
                  {parseISO(cell.row.end_date).toLocaleDateString("fi")}
                </Link>
              ) : null,
            width: 200,
          },
          {
            align: "right",
            headerAlign: "right",
            field: "tax_card_validity_start_date",
            renderHeader: () => "Tax Card Validity Start",
            renderCell: (cell) => (
              <Link to="">
                {parseISO(
                  cell.row.tax_card_validity_start_date
                ).toLocaleDateString("fi")}
              </Link>
            ),
            width: 200,
          },
          {
            align: "right",
            headerAlign: "right",
            field: "monthly_salary",
            renderHeader: () => "Monthly Salary",
            renderCell: (cell) => (
              <Link to="">{cell.row.monthly_salary.toLocaleString("fi")}</Link>
            ),
            width: 200,
          },
        ]}
        disableColumnSorting
        getRowId={(row) => row.id}
        initialState={{
          pinnedColumns: { left: [GRID_CHECKBOX_SELECTION_COL_DEF.field] },
          sorting: { sortModel: [{ field: "last_name", sort: "asc" }] },
        }}
        rows={data}
      />
    </Box>
  );
}
