import React from "react";

function TableRow({ row, handleDelete }) {
  return (
    <>
      <tr>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td><img width="150" height="150" alt={row.title} src={row.thumbnailUrl} /></td>
        <td><button onClick={()=>handleDelete(row.id)}>Delete</button></td>
      </tr>
    </>
  );
}

export default TableRow;