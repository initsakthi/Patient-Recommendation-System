import React from "react";
import Table from 'react-bootstrap/Table';

export const TableCom = ({ data, handler }) => {
  return (
    <div>
      <h1 className="Details text-center my-4">Patient Registration Details</h1>
      <Table striped bordered hover responsive variant="light">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.Address}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => handler(item._id, "edit")}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handler(item._id, "delete")}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
