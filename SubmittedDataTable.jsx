/*import React from "react";

const SubmittedDataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubmittedDataTable;*/


import React from "react";

const SubmittedDataTable = ({ data, onDelete, onEdit }) => {
  const handleEdit = (index) => {
    const updatedEntry = prompt("Edit entry (JSON format)", JSON.stringify(data[index]));
    if (updatedEntry) {
      try {
        const parsedEntry = JSON.parse(updatedEntry);
        onEdit(index, parsedEntry);
      } catch (error) {
        alert("Invalid JSON format!");
      }
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubmittedDataTable;
