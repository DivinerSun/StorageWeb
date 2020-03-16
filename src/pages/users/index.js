import React from "react";
import { connect } from "react-redux";
import { Form, Button, Input } from "antd";
import { effectActionTypes } from "../../models/allEffectActionTypes";

const FormItem = Form.Item;

const Users = ({ form, dispatch }) => {
    const handleCreate = () => {
        form.validateFields((errors, values) => {
            if (!errors) {
                dispatch({
                    type: effectActionTypes.USER_CREATE_REQUESTED,
                    payload: values
                });
            }
        });
    };

    return (
        <Form>
            <FormItem label={"用户名"}>
                {form.getFieldDecorator("name", {
                    rules: [{ required: true, message: "请输入正确的用户名" }]
                })(<Input placeholder={"用户名"} />)}
            </FormItem>
            <FormItem label={"年龄"}>
                {form.getFieldDecorator("age", {
                    rules: [{ required: true, message: "请输入正确的年龄" }]
                })(<Input placeholder={"年龄"} />)}
            </FormItem>
            <FormItem label={"住址"}>
                {form.getFieldDecorator("addr")(<Input placeholder={"住址"} />)}
            </FormItem>
            <Button type={"primary"} onClick={handleCreate}>
                创建用户
            </Button>
        </Form>
    );
};

export default connect()(Form.create()(Users));
