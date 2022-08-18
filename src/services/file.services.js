import { request } from "./generic.sevices"

const apiAllFolders = (id) => request({url: `files/${id}`, method: "get"})

export { apiAllFolders }