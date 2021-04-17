import http from '../services/httpService';
import { apiEndpoint } from '../configurations/config.json';

export function register(user) {
    return http.post(apiEndpoint, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
    });
}