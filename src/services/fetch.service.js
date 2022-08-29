import axios from "axios";

import { API_URL } from "../constants/api.constants";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

const fetch = ({
    url = API_URL,
    endPoint = "/",
    body = {},
    method = "GET",
    headers = {},
}) => {
    let config = {
        method,
        url: `${url}${endPoint}?ts=1&apikey=ef724d0f54a9eeef2047adb4305cff9e&hash=881fcb0b6baeeb11229051616644d10e`,
        data: body,
    };

    config.headers = {
        ...headers,
    };

    if (method === "GET") {
        config.params = body;
    }

    return axiosInstance(config);
};

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
        return config;
    },
    (error) => {
        void Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async(error) => {
        if (error.response) {
            error.data =
                error.response.status === 500 ?
                { message: "Something went wrong, please try again." } :
                error.response.data;
        } else {
            error.data = {
                message: "Something went wrong, please try again.",
            };
        }
        return Promise.reject(error.response);
    }
);

export const services = { fetch, axiosInstance };