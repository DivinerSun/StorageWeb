import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

class NoMatch extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle={"抱歉，你访问的页面不存在。"}
                extra={
                    <Link to="/admin">
                        <Button type="primary">返回主界面</Button>
                    </Link>
                }
            />
        );
    }
}

export default NoMatch;
