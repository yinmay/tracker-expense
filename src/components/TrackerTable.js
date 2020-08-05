import React from "react";
import moment from "moment";

import { connect } from "dva";

import { Table, Popconfirm, Divider } from "antd";

const TrackerTable = (props) => {
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Taxes(15%)",
      dataIndex: "taxes",
      key: "taxes",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</a>,
    },

    {
      title: "",
      key: "action",
      render: (text, record, key) => {
        console.log(6666, "key", key, "record", record, "text", text);
        return (
          <span>
            <a onClick={() => props.changeType("edit", record, key)}>Edit </a>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure delete this expense?"
              onConfirm={() =>
                props.dispatch({
                  type: "global/delData",
                  payload: {
                    item: record,
                  },
                })
              }
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <a href="#">Delete</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={props.data} />
    </div>
  );
};

export default connect((state) => {
  return {
    data: state.global.data,
  };
})(TrackerTable);
