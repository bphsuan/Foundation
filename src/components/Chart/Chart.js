import React from 'react';
import './Chart.scss';
import Title from '../Title/Title';
import { Bar } from 'react-chartjs-2';
import { connect } from "react-redux";
import { navigate } from 'gatsby';

class Chartpie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleHotBrand: "熱銷品牌",
      titleMemberAge: "年齡分佈",
      brandHistoryKey: [],
      brandHistoryValue: [],
      memberGenderKey: [],
      memberGenderValue: [],
      memberAgeKey: [],
      memberAgeValue: [],
      memberTotal: 0
    }

  }
  componentDidMount() {
    this.GET_brandhistory();
    this.GET_memberGender();
    this.Get_memberAge();
  }

  GET_brandhistory = () => {
    this.props.dispatch({
      type: "chart/Get_brandHistory",
      callback: response => {
        response.forEach(data => {
          this.state.brandHistoryKey.push(data.genre)
          this.state.brandHistoryValue.push(data.sold)
        })
      }
    })
  }
  Get_memberAge = () => {
    this.props.dispatch({
      type: "chart/Get_memberAge",
      callback: response => {
        response.forEach(data => {
          this.state.memberAgeKey.push(data.genre)
          this.state.memberAgeValue.push(data.sold)
        })
      }
    })
  }

  GET_memberGender = () => {
    this.props.dispatch({
      type: "chart/Get_memberGender",
      callback: response => {
        response.forEach(data => {
          this.state.memberGenderData.push({ "item": data.label, "count": data.value })
          console.log(this.state.memberGenderData);
          this.setState({
            memberTotal: this.state.memberTotal += JSON.parse(data.value)
          })
          console.log(this.state.memberTotal);
        })
      }
    })
  }

  render() {
    const hotBrand = {
      labels: this.state.brandHistoryKey,
      datasets: [
        {
          label: '被購買次數',
          backgroundColor: 'rgba(255, 209, 209)',
          // borderColor: 'rgba(255,99,132,1)',
          borderWidth: 0,
          hoverBackgroundColor: 'rgba(255, 179, 179)',
          // hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.brandHistoryValue
        }
      ]
    };
    const memberAge = {
      labels: this.state.memberAgeKey,
      datasets: [
        {
          label: '人數',
          backgroundColor: 'rgba(255, 209, 209)',
          // borderColor: 'rgba(255,99,132,1)',
          borderWidth: 0,
          hoverBackgroundColor: 'rgba(255, 179, 179)',
          // hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.memberAgeValue
        }
      ]
    };
    return (
      <div className="chart-content" >
        <Title name={this.state.titleHotBrand} />
        <Bar
          data={hotBrand}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
        <Title name={this.state.titleMemberAge} />
        <Bar
          data={memberAge}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default connect()(Chartpie)