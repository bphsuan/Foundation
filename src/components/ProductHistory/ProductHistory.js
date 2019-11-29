import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './ProductHistory.scss';
import { Link } from 'gatsby';
import { connect } from "react-redux";
import { navigate } from 'gatsby';
// import { Chart, Geom, Axis, Tooltip, Legend, Coord, Guide, Label } from 'bizcharts';
// import DataSet from "@antv/data-set";
const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      buyFrequency: [],
      buyBrand: [],
      brandTotal: 0
    }
  }
  componentDidMount() {
    this.getProductHistory();
    // this.GET_buyFrequencyChart();
    // this.GET_buyBrandChart();
  }
  getProductHistory = () => {
    this.props.dispatch({
      type: "member/GET_BuyHistories",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          console.log(response);
          this.setState({
            products: response
          })
        }
      }
    })
  }
  GET_buyFrequencyChart = () => {
    this.props.dispatch({
      type: "chart/Get_buyFrequency",
      callback: response => {
        this.setState({
          buyFrequency: response
        }, () => {
          console.log(this.state.buyFrequency);
        })
      }
    })
  }
  GET_buyBrandChart = () => {
    this.props.dispatch({
      type: "chart/Get_buyBrand",
      callback: response => {
        console.log(response);
        response.forEach(data => {
          this.state.buyBrand.push({ "item": data.label, "count": data.value })
          this.setState({
            brandTotal: this.state.brandTotal += JSON.parse(data.value)
          })
        })
        console.log(this.state.buyBrand);

      }
    })
  }
  render() {
    // const cols = {
    //   sold: { alias: '次數' },
    //   genre: { alias: '月份' }
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
    // const dv = new DataView();
    // dv.source(this.state.buyBrand).transform({
    //   type: "percent",
    //   field: "count",
    //   dimension: "item",
    //   as: "percent"
    // });
    // const html1 = "<div style={color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;}>次數<br><span style={color:#262626;font-size:2.5em;}>"
    // const html2 = "</span>次</div>"
    return (
      <div className="product-content">
        {/* <div id="mountNode">
          <Chart width={600} height={400} data={this.state.buyFrequency} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
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
                html={html1 + this.state.brandTotal + html2}
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
          </Chart>
        </div> */}

        {this.state.products.map((product, i) => {
          let buyTime = product.BuyTime.split("T", 1)[0]
          return (
            <div
              key={i}
              id={product.BuyHistory_Id}
              className="product"
            >
              <div className="product-text">
                <p className="product-brand">{product.Brand}</p>
                <p className="product-name">{product.Name}</p>
                <p className="buy-price">{product.Price} X {product.Quantity}</p>
                <p className="time">{buyTime}</p>
              </div>
            </div>
          )
        })}
      </div>

    )
  }
}

export default connect()(ProductHistory);