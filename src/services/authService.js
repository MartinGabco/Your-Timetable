import http from '../services/httpService';
import { apiEndpoint } from '../config.json';

export function login(firstName, lastName, password) {
    return http.post(apiEndpoint, {
        firstName, lastName, password
    })
}