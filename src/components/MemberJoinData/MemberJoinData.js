import React from 'react';
import './MemberJoinData.scss';

class MemberJoinData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="Member">
        <table className="MemberData">
          <tr>
            <th>序號</th>
            <th>帳號</th>
            <th>姓名</th>
            <th>性別</th>
            <th>生日</th>
            <th>email</th>
            <th>電話</th>
            <th>地址</th>
            <th>加入時間</th>
            <th>停權</th>
          </tr>
          <tr>
            <td>1</td>
            <td>amychen861110</td>
            <td>陳璟誼</td>
            <td>女</td>
            <td>1997/11/10</td>
            <td>amychen861110@gmail.com</td>
            <td>09123456789</td>
            <td>台中市北區三民路三段111號</td>
            <td>2019/09/03</td>
            <td><a className="block">停權</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>tiffany116</td>
            <td>林庭蓁</td>
            <td>女</td>
            <td>1990/10/10</td>
            <td>lin12345@yahoo.com.tw</td>
            <td>09123456789</td>
            <td>彰化市民生路23號</td>
            <td>2019/09/11</td>
            <td><a className="block">停權</a></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default MemberJoinData