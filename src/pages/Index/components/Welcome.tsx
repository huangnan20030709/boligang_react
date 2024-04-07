import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Card, Statistic, Avatar, Grid } from "@arco-design/web-react";
import { IconArrowFall, IconArrowRise } from "@arco-design/web-react/icon";

import { VChart, VChartProps } from "@visactor/react-vchart";
import BorkenLine from "./BorkenLine";
const Row = Grid.Row;
const Col = Grid.Col;

export default memo(function Index() {
  const { t } = useTranslation();

  const [dataList] = useState([
    {
      value: 2560,
      danwei: "个",
      title: "page.index.totalContent",
      url: "https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image",
    },
    {
      value: 4560,
      danwei: "个",
      title: "page.index.curContent",
      url: "https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image",
    },
    {
      value: 89,
      title: "page.index.rate",
      danwei: "",
      prefix: "icon",
      url: "https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image",
    },
    {
      value: -2.87,
      precision: 2,
      danwei: " %",
      title: "page.index.newRate",
      prefix: "icon",
      url: "https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image",
    },
  ]);

  return (
    <Card className={"card"} bordered={false}>
      <div className="main">
        <p className="title">
          {t("page.index.welcome")} ! {"代云虹"}
        </p>

        <div className="showData">
          <Row className="grid-demo" style={{ marginBottom: 16, margin: "0 20px" }}>
            {dataList.map((item) => {
              return (
                <Col span={12} key={item.url}>
                  <div className="dataItem">
                    <Avatar size={54}>
                      <img src={item.url} alt="" />
                    </Avatar>

                    <div className="col">
                      <p>
                        {t(item.title)} <span></span>
                      </p>
                      <p className="value">
                        <Statistic
                          value={item.value}
                          precision={item.precision ?? 0}
                          prefix={
                            item.prefix === "icon" ? (
                              item.value >= 0 ? (
                                <IconArrowRise style={{ color: "#0fbf60", fontSize: "20px" }}></IconArrowRise>
                              ) : (
                                <IconArrowFall style={{ color: "#ee4d38", fontSize: "20px" }} />
                              )
                            ) : (
                              ""
                            )
                          }
                          suffix={item.danwei}
                          countUp></Statistic>
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="showChart">{/* <BorkenLine></BorkenLine> */}</div>
      </div>
    </Card>
  );
});
