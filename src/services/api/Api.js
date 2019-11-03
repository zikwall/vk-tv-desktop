import {
    UnauthorizedException,
    ForbiddenHttpException,
    InternalServerErrorException,
    NotFoundHttpException,
    Exception
} from "../../exceptions";

const API_URL = 'https://tv.zikwall.ru';

export const apiFetch = (url, options, useAuth = true) => {

    let headers = {
        'Accept': "application/json",
        "Content-Type": "application/json",
    };

    return fetch(apiUrl(url), {
        headers: headers,
        ...options
    })
        .then(handleResponse)
        .then(response => response.json());
};

export const handleResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    if (response.status === 401) {
        throw (new UnauthorizedException(response));
    }

    if (response.status === 403) {
        throw (new ForbiddenHttpException(response));
    }

    if (response.status === 404) {
        throw (new NotFoundHttpException(response));
    }

    if (response.status === 500) {
        throw (new InternalServerErrorException(response));
    }

    throw (new Exception('Server request execution error.'));
};


export const apiUrl = (url) => {
    return API_URL + url;
};