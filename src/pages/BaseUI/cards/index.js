import React, { useState } from "react";
import { Card, Avatar, Switch } from "antd";

import avatarImg from "../../../assets/avatar.png";

const Cards = () => {
    const [loading, updateLoading] = useState(false);

    const handleChange = () => {
        updateLoading(!loading);
    };

    return (
        <div>
            <div className={"cardContainer"}>
                <Card title={"基础卡片"}>
                    <p>卡片内容</p>
                    <p>卡片内容</p>
                    <p>卡片内容</p>
                </Card>
            </div>
            <div className={"cardContainer"}>
                <Card>
                    <p>这是无标题卡片内容</p>
                    <p>这是无标题卡片内容</p>
                    <p>这是无标题卡片内容</p>
                </Card>
            </div>
            <div
                className={"cardContainer"}
                style={{ background: "#ececec", padding: "30px" }}
            >
                <Card title={"无边框卡片"} bordered={false}>
                    <p>卡片内容</p>
                    <p>卡片内容</p>
                    <p>卡片内容</p>
                </Card>
            </div>
            <div className={"cardContainer"}>
                <Card
                    title={"自定义卡片右上角内容"}
                    extra={<a href={"/admin"}>去首页</a>}
                >
                    <p>卡片内容</p>
                    <p>卡片内容</p>
                    <p>卡片内容</p>
                </Card>
            </div>
            <div className={"cardContainer"}>
                <Card
                    title={"封面式卡片"}
                    cover={
                        <img
                            height={300}
                            alt={"封面图片"}
                            src={
                                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2858624356,1431118860&fm=26&gp=0.jpg"
                            }
                        />
                    }
                >
                    <Card.Meta
                        avatar={<Avatar size={100} src={avatarImg} />}
                        title={"这是一个美妙的故事"}
                        description={
                            "这是一个令人难忘的美好故事，它发生在一个月光柔和的夜晚。他和她相恋了！"
                        }
                    />
                </Card>
            </div>
            <div className={"cardContainer"}>
                <Card title={"数据加载切换"} loading={loading}>
                    <Card.Meta
                        avatar={<Avatar size={100} src={avatarImg} />}
                        title={"这是一个美妙的故事"}
                        description={
                            "这是一个令人难忘的美好故事，它发生在一个月光柔和的夜晚。他和她相恋了！"
                        }
                    />
                </Card>
                <Switch checked={!loading} onChange={handleChange} />
            </div>
            <div className={"cardContainer"}>
                <Card title={"卡片式栅格"} loading={loading}>
                    <Card.Grid>Grid 1</Card.Grid>
                    <Card.Grid>Grid 2</Card.Grid>
                    <Card.Grid hoverable={false}>Grid 3</Card.Grid>
                    <Card.Grid>Grid 4</Card.Grid>
                    <Card.Grid>Grid 5</Card.Grid>
                </Card>
            </div>
        </div>
    );
};

export default Cards;
