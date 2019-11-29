import React from "react";

class ManageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.Id}</td>
        <td>{this.props.Brand}</td>
        <td>{this.props.Name}</td>
        <td>{this.props.Color}</td>
        <td>{this.props.Ticket}</td>
        <td>{this.props.Info}</td>
        <td>2019/10/10</td>
        <td><a className="p-button b-size" onClick={this.setEdditButton}>下架</a></td>
        <td><a className="p-button b-size" onClick={this.setDeleteButton}>刪除</a></td>
      </tr>
    )
  }
} export default ManageList;