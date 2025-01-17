import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

class NoPermission extends Component {
    render() {
        return (
            <Result
                status="403"
                title="403"
                subTitle={"抱歉，你没有当前页面的访问权限。"}
                extra={
                    <Link to="/admin">
                        <Button type="primary">返回主界面</Button>
                    </Link>
                }
            />
        );
    }
}

export default NoPermission;
