import { request } from "./generic.sevices"

const apiAddFolder = (data) => request({url: `files`, method: "post", data})
const apiAllFolders = (id) => request({url: `files/${id}`, method: "get"})



export { apiAddFolder, apiAllFolders }