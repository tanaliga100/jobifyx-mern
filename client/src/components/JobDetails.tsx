/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  company: string;
  createdAt: string;
  createdBy: string;
  jobLocation: string;
  jobStatus: string;
  jobType: string;
  position: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "COMPANY", width: 130 },
  { field: "lastName", headerName: "JOB LOCATION ", width: 130 },
  { field: "lastName", headerName: "JOB POSITION ", width: 130 },

  {
    field: "age",
    headerName: "CREATED BY",
    type: "number",
    width: 90,
  },
];

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function JobDetails(jobs: IProps | any) {
  console.log("details", jobs);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}

import { DataGrid, GridColDef } from "@mui/x-data-grid";
