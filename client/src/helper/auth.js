import { setCookie, getCookie, deleteCookie } from './cookies';
import {
    setLocalStorage,
    getLocalStorage,
    deleteLocalStorage,
} from './localStorage';

export const setAuthentication = (token, user) => {
    setCookie('token', token);
    setLocalStorage('user', user);
};
