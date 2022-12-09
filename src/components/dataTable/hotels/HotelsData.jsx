import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
function UserTable() {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hotel");
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "name", headerName: "name", width: 100 },
    { field: "city", headerName: "city", width: 100 },
    { field: "type", headerName: "type", width: 100 },
    { field: "address", headerName: "address", width: 100 },
    { field: "title", headerName: "title", width: 100 },
    { field: "desc", headerName: "desc", width: 300 },
    { field: "rating", headerName: "rating", width: 100 },
    { field: "rooms", headerName: "rooms", width: 100 },
    { field: "cheapestPrice", headerName: "cheapestPrice", width: 70 },
    { field: "featured", headerName: "featured", width: 70 },
    {
        field: "acction",
        headerName: "Action",
        description: "for delete and so on",
        sortable: false,
        width: 200,
        renderCell: () => (
          <div className="cellAction d-flex gap-1">
            <div className="btn btn-success opacity-2 w-50">view</div>
            <div className="btn btn-danger w-50">delete</div>
          </div>
        ),
      },

]

  return (
    <div className="dataTAble p-2" style={{ width: "100%" }}>
      {loading ? (
        "loading "
      ) : (
        <DataGrid
          rows={data.map((item)=>{
            const {_id,rooms} = item
            return {...item , id :_id ,rooms:rooms.length}
          })}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          autoHeight={true}
        />
      )}
    </div>
  );
}

export default UserTable;
