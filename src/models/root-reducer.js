import { combineReducers } from "redux";

import depts from "./organizations/depts/reducers";
import groups from "./organizations/groups/reducers";

const rootReducers = combineReducers({
    depts,
    groups
});

export default rootReducers;
