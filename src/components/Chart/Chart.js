import React from 'react';
import './Chart.scss';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Guide, Label } from 'bizcharts';
import DataSet from "@antv/data-set";
import { connect } from "react-redux";
import { navigate } from 'gatsby';

// 長條圖的欄位
const cols = {
  sold: { alias: '次數' },
  genre: { alias: '品牌' }
};

//餅圖
const { DataView } = DataSet;
const { Html } = Guide;
// const data2 = [
//   {
//     item: "品牌一",
//     count: 40
//   },
//   {
//     item: "品牌二",
//     count: 21
//   }
// ];

const cols2 = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};

// dv.source(this.state.memberGenderData).transform({


class Chartpie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandHistoryData: [],
      memberGenderData: []
    }

  }
  componentDidMount() {
    this.GET_brandhistory();
    this.GET_memberGender();
    // this.gender();
  }
  // gender = () => {


  // }
  GET_brandhistory = () => {
    this.props.dispatch({
      type: "chart/Get_brandHistory",
      callback: response => {
        this.setState({
          brandHistoryData: response
        }, () => {
          console.log(this.state.brandHistoryData);
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
        })
      }
    })


  }

  render() {
    const dv = new DataView();
    dv.source(this.state.memberGenderData).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    return (
      <div className="hot-content">
        <div id="mountNode">
          <Chart width={600} height={400} data={this.state.brandHistoryData} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>

          {/*餅圖*/}
          <Chart
            height={window.innerHeight}
            data={dv}
            scale={cols2}
            padding={[80, 100, 80, 80]}
            forceFit
          >
            <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
            <Axis name="percent" />
            <Legend
              position="right"
              offsetY={-window.innerHeight / 2 + 120}
              offsetX={-100}
            />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Guide>
              <Html
                position={["50%", "50%"]}
                html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>會員<br><span style=&quot;color:#262626;font-size:2.5em&quot;>200</span>位</div>"
                alignX="middle"
                alignY="middle"
              />
            </Guide>
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = percent * 100 + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + "：" + val;
                }}
              />
            </Geom>
          </Chart>
        </div>
      </div>
    )
  }
}

export default connect()(Chartpie)