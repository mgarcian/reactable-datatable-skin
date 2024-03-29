//Dependencies
import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TablePrueba extends React.Component {
  render() {
    const data = [
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "Jason Maurer",
        age: 23
      },
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "Tanner Linsley",
        age: 26
      },
      {
        name: "Tanner Linsley",
        age: 18
      }
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name",
        filterable: false
      },
      {
        Header: "Age",
        accessor: "age",
        filterable: false
      }
    ];
    return (
      <ReactTable
        filtrable
        manual
        defaultSorted={[
          {
            id: "age",
            asc: true
          }
        ]}
        defaultPageSize={10}
        className=" -highlight"
        showPaginationTop={true}
        data={data}
        columns={columns}
      />
    );
  }
}
export default TablePrueba