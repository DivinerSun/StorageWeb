import qs from "qs";
import { pickBy } from "lodash";
import { Seq } from "immutable";

function filterParams(params) {
    return Seq(params)
        .filter(item => item !== null)
        .toObject();
}

export function jsonToQuery(params) {
    return (
        "?" +
        qs.stringify(filterParams(pickBy(params, item => item !== null)), {
            arrayFormat: "brackets"
        })
    );
}
