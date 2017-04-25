import React from "react";
import { TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import { BASE_URL, FORMAT } from "../constants/endpoints";

export const generateColumns = (columns, data = null) => {
  if (columns) {
    return columns.filter(c => c.visible).map(c => {
      {
        if (data) {
          return (
            <TableRowColumn key={c.key}>
              {data[c.key]}
            </TableRowColumn>
          );
        } else {
          return (
            <TableHeaderColumn key={c.key}>
              {c.label}
            </TableHeaderColumn>
          );
        }
      }
    });
  }
};

export const generateRows = (columns, data) => {
  if (columns && data) {
    return data.map((d, i) => {
      return (
        <TableRow key={`row_${i}`}>
          {generateColumns(columns, d)}
        </TableRow>
      );
    });
  }
};

export const getRequestUrl = type => `${BASE_URL}/${type}/${FORMAT}`;

export const getColumns = type => {
  switch (type) {
    case "project":
      return [
        { label: "#", key: "id", visible: true },
        { label: "Name", key: "name", visible: true },
        { label: "Agency", key: "agency", visible: true },
        { label: "Type", key: "type", visible: true },
        { label: "Start Date", key: "start_date", visible: true },
        { label: "End Date", key: "end_date", visible: true },
        { label: "Description", key: "description", visible: true }
      ];
    default:
      return "";
  }
};
