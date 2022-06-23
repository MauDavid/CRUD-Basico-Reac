import React from "react";
import CrudTableRow from "./CrudTableRow";
import { Table } from "react-bootstrap";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Angel</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.lenght === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;
