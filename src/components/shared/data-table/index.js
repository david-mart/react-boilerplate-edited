import React, { Component, PropTypes } from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableRow
} from "material-ui/Table";
import {
  generateColumns,
  generateRows
} from "../../../utilities/datatable-utilities";
import { dataTableStyles } from "../../../constants/mui-theme";

import {
  fetchDatatableData,
  fetchDatatableColumns
} from "../../../actions/datatable-actions";
import { connect } from "react-redux";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { dataType } = this.props;
    this.props.fetchDatatableData(dataType);
    this.props.fetchDatatableColumns(dataType);
  }

  render() {
    const rows = this.props.rows[this.props.dataType];
    const cols = this.props.columns[this.props.dataType];
    return (
      <Table {...this.props.tableStyles}>
        <TableHeader>
          <TableRow>
            {generateColumns(cols)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {generateRows(cols, rows)}
        </TableBody>
        <TableFooter />

      </Table>
    );
  }
}

DataTable.propTypes = {
  dataType: PropTypes.string,
  tableStyles: PropTypes.object,
  rows: PropTypes.object,
  columns: PropTypes.object,
  fetchDatatableData: PropTypes.func,
  fetchDatatableColumns: PropTypes.func
};

DataTable.defaultProps = {
  tableStyles: dataTableStyles
};

const mapStateToProps = state => {
  const { dataTables } = state;
  return dataTables;
};

export default connect(mapStateToProps, {
  fetchDatatableData,
  fetchDatatableColumns
})(DataTable);


export { DataTable as PureDataTable}; 