import { requestSimple } from "../../utils/request";

export async function login(body) {
    return requestSimple({
        url: "/user/login",
        method: "POST",
        body
    });
}

export async function create(body) {
    return requestSimple({
        url: "/user/create",
        method: "POST",
        body: body
    });
}

export async function read(id) {
    return requestSimple({
        url: `/user/${id}`,
        method: "GET"
    });
}

export async function readList(params) {
    return requestSimple({
        url: `/user/list`,
        method: "GET",
        params
    });
}
