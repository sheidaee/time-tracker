import React, { Component } from "react";
import ReactTable, { ReactTableDefaults } from "react-table";
import { connect } from "react-redux";

import "react-table/react-table.css";

import Styles from "./BookTimeList.module.scss";
import { timeOperations } from "../../../state/ducks/time";

import BookTimeDetails from "../BookTimeDetails";
import DeleteBookTime from "../DeleteBookTime";
import EditBookTime from "../EditBookTime";

const columns = [
  {
    Header: "Start date",
    accessor: "clock_in", // String-based value accessors!
  },
  {
    Header: "Finished Date",
    accessor: "clock_out",
    Cell: props => <span className="number">{props.value}</span>, // Custom cell components!    
  },
  {
    Header: "Description",
    accessor: "description",
    sortable: false, 
  },
  {
    Header: "Duration",
    accessor: "duration"
  },
  {
    Header: "Operation",
    accessor: "operation",
    sortable: false
  }
];

export class BookTimeList extends Component {
  static defaultProps = {
    bookTimeRecords: null,
    loading: false
  };

  componentDidMount() {
    /* Fetching data from the server */
    this.props.onFetchList();
  }

  tdPropsHandler = (state, rowInfo, column, instance) => {
    return {
      style: {
        textAlign: column['id'] !== 'description' ? 'center' : null
      }      
    };
  };

  render() {
    // { date: "2018-05-21 00:00:02.000000", timezone_type: 3, timezone: "Europe/Berlin" }
    const data = [];
    const bookTimeRecords = (this.props.bookTimeRecords != null && !this.props.didSearch) 
      ? this.props.bookTimeRecords
      : this.props.searchedBookTimeRecords;    
    
    if (bookTimeRecords) {
      bookTimeRecords.forEach(bookTimeRecord => {
        data.push({ 
          ...bookTimeRecord, 
          operation: <React.Fragment>
              <BookTimeDetails data={bookTimeRecord} />
              <EditBookTime data={bookTimeRecord} />
              <DeleteBookTime data={bookTimeRecord} />
            </React.Fragment> });
      });
    }

    Object.assign(ReactTableDefaults, {
      data,
      columns,
      showPageSizeOptions: false,
      loading            : this.props.loading,
      className          : "-striped -highlight",
      getTdProps         : this.tdPropsHandler,
      pageSize           : 10,
    });

    return (
      <div className={Styles.BookTimeList}>
        <ReactTable {...ReactTableDefaults} />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  bookTimeRecords        : state.app.time.bookTimeRecords,
  searchedBookTimeRecords: state.app.time.searchedBookTimeRecords,
  loading                : state.app.time.loading,
  didSearch              : state.app.time.didSearch,
});

const mapDispatchToProps = {
  onFetchList: timeOperations.fetchList
};

export default connect(mapStateToProps, mapDispatchToProps)(BookTimeList);
