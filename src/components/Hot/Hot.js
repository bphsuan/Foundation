import React from 'react';
import Title from '../Title/Title';
import './Hot.scss';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Guide, Label } from 'bizcharts';
import DataSet from "@antv/data-set";
// 数据源
const data = [
  { genre: '15歲以下', sold: 5 },
  { genre: '16~20歲', sold: 115 },
  { genre: '21~25歲', sold: 205 },
  { genre: '26~30歲', sold: 22 },

];

// 定义度量
const cols = {
  sold: { alias: '數量' },
  genre: { alias: '年齡' }
};

const { DataView } = DataSet;
const { Html } = Guide;
const data2 = [
  {
    item: "品牌一",
    count: 40
  },
  {
    item: "品牌二",
    count: 21
  },
  {
    item: "品牌三",
    count: 17
  },
  {
    item: "品牌四",
    count: 13
  },
];
const dv = new DataView();
dv.source(data2).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const cols2 = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};
class Hot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "熱銷排行 Top 3"
    }
  }
  render() {
    return (
      <div className="hot-content">
        <Title name={this.state.name} />
        <div id="mountNode">
          <Chart width={600} height={400} data={data} scale={cols}>
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
                html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>主机<br><span style=&quot;color:#262626;font-size:2.5em&quot;>200</span>台</div>"
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
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart>
        </div>
      </div>
    )
  }
}

export default Hot