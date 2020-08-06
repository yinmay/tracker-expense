import React, { useState, useEffect, useRef } from "react";
import { connect } from "dva";
import moment from "moment";
import { Form, Input, Button, InputNumber, Modal } from "antd";
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ExpenseForm = (props) => {
  const { handleOk = () => {}, visible } = props;
  const { type, record, index, data = [] } = props;

  const [form] = Form.useForm();
  form.setFieldsValue({
    description: (record && record.description) || "",
    amount: (record && record.amount) || undefined,
  });
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const handleSubmit = async (values) => {
    const lens = data.length;

    if (type === "add") {
      props.dispatch({
        type: "global/addData",
        payload: {
          item: {
            ...values,
            id: lens,
            date: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        },
      });
    } else {
      props.dispatch({
        type: "global/editData",
        payload: {
          item: {
            ...record,
            ...values,
            date: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
          index,
        },
      });
    }
    handleOk();
  };

  return (
    <Modal
      visible={visible}
      okText="Save"
      //   cancelText="Cancel"
      onCancel={handleOk}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            handleSubmit(values);
            // onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <div>
        <Form form={form} layout="vertical" name="userForm">
          <Form.Item
            name="description"
            label="description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={(record && record.description) || ""} />
          </Form.Item>
          <Form.Item
            name="amount"
            label="amount"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber value={(record && record.amount) || undefined} />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default connect((state) => {
  return {
    data: state.global.data,
  };
})(ExpenseForm);
