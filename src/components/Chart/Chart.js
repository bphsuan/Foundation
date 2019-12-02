import React from 'react';
import './Chart.scss';
import Title from '../Title/Title';
import { Bar, Radar, Doughnut } from 'react-chartjs-2';
import { connect } from "react-redux";
import { navigate } from 'gatsby';

class Chartpie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleHotBrand: "熱銷品牌",
      titleMemberAge: "使用者年齡分佈",
      titleMemberGender: "使用者性別分布",
      brandHistoryKey: [],
      brandHistoryValue: [],
      memberGenderKey: [],
      memberGenderValue: [],
      memberAgeKey: [],
      memberAgeValue: [],
      memberTotal: 0
    }

  }
  componentDidMount = async () => {
    await this.props.dispatch({
      type: "chart/Get_brandHistory",
      callback: response => {
        console.log(response);
        this.setState({
          brandHistoryKey: response.labels,
          brandHistoryValue: response.data
        })
      }
    })
    await this.props.dispatch({
      type: "chart/Get_memberAge",
      callback: response => {
        this.setState({
          memberAgeKey: response.labels,
          memberAgeValue: response.data
        })
      }
    })
    await this.props.dispatch({
      type: "chart/Get_memberGender",
      callback: response => {
        this.setState({
          memberGenderKey: response.labels,
          memberGenderValue: response.data
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
          backgroundColor: 'rgba(198, 198, 226)',
          // borderColor: 'rgba(255,99,132,1)',
          borderWidth: 0,
          hoverBackgroundColor: 'rgba(167, 167, 211)',
          // hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.memberAgeValue
        }
      ]
    };
    const memberGender = {
      labels: this.state.memberGenderKey,
      datasets: [{
        data: this.state.memberGenderValue,
        backgroundColor: [
          '#FFE6D9',
          '#D1E9E9',
        ],
        hoverBackgroundColor: [
          '#FFCBB3',
          '#B3D9D9',
        ]
      }]
    };
    console.log("3");
    return (
      <div className="chart-content" >
        <div className="chart-block-b">
          <Title name={this.state.titleHotBrand} />
          <Bar data={hotBrand} />
        </div>
        <div className="chart-block-s">
          <Title name={this.state.titleMemberAge} />
          <Radar data={memberAge} />
        </div>
        <div className="chart-block-s">
          <Title name={this.state.titleMemberGender} />
          <Doughnut data={memberGender} />
        </div>
      </div>
    )
  }
}

export default connect()(Chartpie)