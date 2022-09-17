import DataTable from "../../components/dataTable/DataTAble";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

function List() {
  return (
    <div className="container-fluid">
      <div className=" row ">
        <Sidebar />
        <div className=" col">
          <Navbar />

          <div className="list">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
