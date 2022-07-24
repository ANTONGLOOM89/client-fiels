import { request } from "./generic.sevices"

const apiOnePerson = (id) => request({url: `person/${id}`, method: "get"})

export { apiOnePerson }