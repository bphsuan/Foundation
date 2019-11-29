import React from 'react';
import './Chart.scss';
// import { Chart, Geom, Axis, Tooltip, Legend, Coord, Guide, Label } from 'bizcharts';
// import DataSet from "@antv/data-set";
import { connect } from "react-redux";
import { navigate } from 'gatsby';
// import CanvasJSReact from '../../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// 長條圖的欄位
// const cols = {
//   sold: { alias: '次數' },
//   genre: { alias: '品牌' }
// };
// const cols1 = {
//   sold: { alias: '人數' },
//   genre: { alias: '年紀' }
// };


// //餅圖
// const { DataView } = DataSet;
// const { Html } = Guide;

// const cols2 = {
//   percent: {
//     formatter: val => {
//       val = (val * 100).toFixed(2) + "%";
//       return val;
//     }
//   }
// };

// const html1 = "<div style={color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;}>會員<br><span style={color:#262626;font-size:2.5em;}>"
// const html2 = "</span>位</div>"

class Chartpie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandHistoryData: [],
      memberGenderData: [],
      memberAge: [],
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
        // this.setState({
        //   brandHistoryData: response
        // }, () => {
        //   console.log(this.state.brandHistoryData);
        // })
        console.log(response);

        response.forEach(data => {
          this.state.brandHistoryData.push({ "label": data.genre, "y": data.sold })
        })
        console.log(this.state.brandHistoryData);

      }
    })
  }
  Get_memberAge = () => {
    this.props.dispatch({
      type: "chart/Get_memberAge",
      callback: response => {
        this.setState({
          memberAge: response
        }, () => {
          console.log(this.state.memberAge);
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
    // const dv = new DataView();
    // dv.source(this.state.memberGenderData).transform({
    //   type: "percent",
    //   field: "count",
    //   dimension: "item",
    //   as: "percent"
    // });
    const options = {
      title: {
        text: "Basic Column Chart"
      },
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: this.state.brandHistoryData
          // [
          //   { label: "Apple", y: 10 },
          //   { label: "Orange", y: 15 },
          //   { label: "Banana", y: 25 },
          //   { label: "Mango", y: 30 },
          //   { label: "Grape", y: 28 }
          // ]
        }
      ]
    }
    return (
      <div className="hot-content" >
        <div id="mountNode">
          {/* <CanvasJSChart options={options}          /> */}
          {/* <Chart width={600} height={400} data={this.state.brandHistoryData} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
          <Chart width={600} height={400} data={this.state.memberAge} scale={cols1}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart> */}
          {/*餅圖*/}
          {/* <Chart
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
                html={html1 + this.state.memberTotal + html2}
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
                  percent = (percent * 100).toFixed(2) + "%";
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
          </Chart> */}
        </div>
      </div >
    )
  }
}

export default connect()(Chartpie)