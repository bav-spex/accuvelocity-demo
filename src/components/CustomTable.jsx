import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

const CustomTable = (props) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "56px", // override the row height
        borderBottom: `1px solid`,
        borderColor: `#C9C9C9`,
      },
    },
    headCells: {
      style: {
        display: "flex",
        justifyContent: "flex-start",
        // background: "#F5F5F5",
        borderBottom: `2px solid`,
        borderColor: `#212121`,
        paddingLeft: "10px",
        zIndex: "100",
      },
    },
    cells: {
      style: {
        paddingLeft: "10px", // override the cell padding for data cells
        paddingRight: "10px",
        fontSize: "16px",
        fontWeight: 500,
        textAlign: "left",
        color: `#212121`,
        display: "flex",
        justifyContent: "flex-start",
      },
    },
  };
  if (createTheme) {
    createTheme(
      "localTheme",
      {
        text: {
          primary: `#212121`,
        },
        background: {
          default: `#ffffff`,
        },
        context: {
          background: `red`,
          text: `#ffffff`,
        },
        divider: {
          default: `#eeeeee`,
        },
        action: {
          button: "rgba(0,0,0,.54)",

          disabled: "rgba(0,0,0,.12)",
        },
      },
      "dark"
    );
  }
  return (
    <DataTable
      className="table"
      theme="localTheme"
      customStyles={customStyles}
      {...props}
    />
  );
};

export default CustomTable;
