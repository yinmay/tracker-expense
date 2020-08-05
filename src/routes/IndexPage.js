import React from "react";
import { connect } from "dva";
import { Button } from "antd";
import styles from "./IndexPage.css";
import TrackerExpense from "../components/TrackerExpense";

const IndexPage = (props) => {
  return (
    <div className={styles.normal}>
      <TrackerExpense />
    </div>
  );
};

IndexPage.propTypes = {};

export default connect((state) => {
  return {
    total: state.global.total,
  };
})(IndexPage);
