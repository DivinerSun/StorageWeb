import React from "react";
import { Card, Affix, Button } from "antd";

import "./index.less";

const Affixs = () => {
    return (
        <div className={"affixs"}>
            <div style={{ height: "600px" }}></div>
            <div className={"cardContainer"}>
                <Card title={"简单示例"}>
                    <Affix
                        offsetTop={20}
                        onChange={affixed => console.warn("Top 20: ", affixed)}
                    >
                        <Button>距离顶部20px固定</Button>
                    </Affix>
                    <Affix
                        offsetTop={120}
                        onChange={affixed => console.warn("Top 120: ", affixed)}
                    >
                        <Button>距离顶部120px固定</Button>
                    </Affix>
                    <Affix
                        offsetBottom={20}
                        onChange={affixed =>
                            console.warn("Bottom 20: ", affixed)
                        }
                    >
                        <Button>距离底部20px固定</Button>
                    </Affix>
                    <Affix
                        offsetBottom={120}
                        onChange={affixed =>
                            console.warn("Bottom 120: ", affixed)
                        }
                    >
                        <Button>距离底部120px固定</Button>
                    </Affix>
                </Card>
            </div>
            <div style={{ height: "500px" }}></div>
        </div>
    );
};

export default Affixs;
