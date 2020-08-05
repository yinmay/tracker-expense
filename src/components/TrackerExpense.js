import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { Modal, Button } from "antd";
import ExpenseForm from "./ExpenseForm";
import styles from "./ExpenseForm.css";

import TrackerTable from "./TrackerTable";

const TrackerExpense = (props) => {
  const { total, totalPlusTaxes } = props;
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("add");
  const [record, setRecord] = useState({});
  const [index, setIndex] = useState(undefined);
  const changeType = (type, record, index) => {
    setType(type);
    setVisible(true);
    setRecord(record);
    setIndex(index);
    props.dispatch({
      type: "global/getRecord",
      payload: {
        item: {
          ...record,
        },
      },
    });
  };
  useEffect(() => {
    props.dispatch({ type: "global/getInitial" });
  }, []);
  return (
    <div>
      <div className={styles.topWrapper}>
        <div>
          <h1>Tracker Expense</h1>
          <p>the sub-total of the expense is {total}$</p>
          <p>the total with taxes is {totalPlusTaxes}$</p>
        </div>

        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            changeType("add");
          }}
        >
          add new expense
        </Button>
      </div>
      <Modal
        title="Basic Modal"
        visible={visible}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        destroyOnClose
      >
        <ExpenseForm
          type={type}
          handleOk={() => setVisible(false)}
          record={record}
          index={index}
          visible={visible}
        />
      </Modal>
      <TrackerTable changeType={changeType} />
    </div>
  );
};

export default connect((state) => {
  return {
    total: state.global.total,
    totalPlusTaxes: state.global.totalPlusTaxes,
  };
})(TrackerExpense);
