import React from "react";
import "./featureinfo.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default function Featureinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,2321</span>
          <span className="featuredMoneyRate">
            -232.2 <ArrowDownwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$300</span>
          <span className="featuredMoneyRate">
            +212.23 <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,221</span>
          <span className="featuredMoneyRate">
            -232.2 <ArrowDownwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  );
}
