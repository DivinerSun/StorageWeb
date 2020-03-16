import _ from "lodash";
// import { message } from "antd";
// import download from "downloadjs";
import { jsonToQuery } from "./url_helper";
import { HOST } from "../configs/constants";

function parseJSON(response) {
    return response.json();
}

async function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = await parseJSON(response).then(data => data);
    // 提示请求错误
    // errorMessage(response.status);
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({ data }))
        .catch(err => ({ err }));
}

function getRequestHeaders() {
    const storageState = JSON.parse(localStorage.getItem("reduxState"));
    const region = _.get(storageState, "region", "macau");
    const token = _.get(storageState, "currentUser.token");

    return { token, region };
}

function requestUrl({ host, url, params }) {
    const reqHost = host || HOST;
    const queryString = _.isEmpty(params) ? "" : jsonToQuery(params);
    return `${reqHost}${url}${queryString}`;
}

export function requestSimple({ url, method, headers, params, body, host }) {
    const reqURL = requestUrl({ host, url, params });
    const requestHeaders = getRequestHeaders();
    return request(reqURL, {
        method,
        headers: _.pickBy({
            "Content-Type": "application/json",
            region: requestHeaders.region,
            ...headers,
            Authorization: `jwt ${requestHeaders.token}`
        }),
        body: JSON.stringify(body)
    });
}

// export function downLoadRequest({ url, params, host, localFilename }) {
//     const reqURL = requestUrl({ url, params, host });
//     const requestHeaders = getRequestHeaders();

//     let filename = null;
//     return fetch(reqURL, {
//         method: "GET",
//         headers: _.pickBy({
//             Token: requestHeaders.token,
//             region: requestHeaders.region,
//             Authorization: `jwt ${requestHeaders.token}`
//         })
//     })
//         .then(resp => {
//             const remoteFilename = resp.headers
//                 .get("Content-Disposition")
//                 .split(";")[1]
//                 .split("=")[1]
//                 .replace(/"/g, "");
//             filename = localFilename || decodeURIComponent(remoteFilename);
//             const hide = message.loading("下载中，请稍后...", 0);
//             return {
//                 blob: resp.blob(),
//                 hide
//             };
//         })
//         .then(({ blob, hide }) => {
//             blob.then(data => {
//                 hide();
//                 download(data, filename);
//                 message.success("文件下載成功");
//             });
//         });
// }
