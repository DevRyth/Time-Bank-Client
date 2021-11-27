import { createBrowserHistory } from "history";
// export const BASE_URL = "http://localhost:4000";
export const BASE_URL = "https://time-bank-server.herokuapp.com";
export const LS_AUTH_TOKEN = "auth_token";
export const RG_TOKEN = "register_token";
export const token = localStorage.getItem(LS_AUTH_TOKEN);

export const history = createBrowserHistory();
