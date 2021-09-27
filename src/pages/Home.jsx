import React from "react";
import Featureinfo from "../components/featureinfo/Featureinfo";
import "./home.css";
import Chart from "../components/chartTable/Chart";
import { userData } from "../asserts/Data";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <Featureinfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="widget_bar">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
