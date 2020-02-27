import React from 'react'
import { connect } from 'react-redux'



const Groups = ({ groupState }) => {

    console.warn('Group State: ', groupState)
    return (
        <div>
            组织架构 —— 组别
        </div>
    )
}


const mapStateToProps = state => {
    return {
        groupState: state.groups
    }
}

export default connect(mapStateToProps)(Groups)