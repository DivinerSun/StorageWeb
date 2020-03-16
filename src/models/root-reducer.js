import { combineReducers } from "redux";

import depts from "./organizations/depts/reducers";
import groups from "./organizations/groups/reducers";
import users from "./users/reducers";

const rootReducers = combineReducers({
    depts,
    groups,
    users
});

export default rootReducers;
