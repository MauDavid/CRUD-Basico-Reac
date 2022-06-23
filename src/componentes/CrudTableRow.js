import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, angel, id } = el;
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.angel}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
