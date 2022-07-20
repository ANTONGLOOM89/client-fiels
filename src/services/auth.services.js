import { request } from "./generic.sevices"

const apiRegistration = (data) => request({url: `auth/register`, method: "post", data})
const apiLogin = (data) => request({url: `auth/login`, method: "post", data})

export { apiRegistration, apiLogin }