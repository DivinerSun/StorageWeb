import React from "react";
import { connect } from "react-redux";

const Depts = ({ deptState }) => {
    console.warn("Dept State: ", deptState);

    return <div>组织架构 —— 部门</div>;
};

const mapStateToProps = state => {
    return {
        deptState: state.depts
    };
};

export default connect(mapStateToProps)(Depts);
