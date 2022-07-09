import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import './TableList.css'

class TableList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async getData() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      console.log('getData', res.data);
      this.setState({
        // here only display first 20 items, because the datalist is huge
        data: res.data.splice(0, 20)
      })
    } catch (error) {
      console.log('get data is error: ', error);
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  handleDelete = async (id) => {
    console.log('handleDelete', id);
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
      console.log('handleDelete', res.data);
      this.setState({
        data: this.state.data.filter(row => row.id !== id)
      });
    } catch (error) {
      console.log('handle delete is error: ', error);
    }
  }

  render() {
    return (
      <div className="table-wrap">
        <h1>List of albums</h1>
        <table className="table-list">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnail</th>
              <th>Dalete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data && this.state.data.map(row => (
              <TableRow key={row.id} row={row} handleDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableList;