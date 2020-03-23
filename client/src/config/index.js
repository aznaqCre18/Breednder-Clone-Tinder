exports.baseUrlApi = 'http://localhost:3200';
exports.baseUrlApiVersion = 'http://localhost:3200/api/v1'

const token = window.localStorage.getItem('token')
exports.headerAuthorization = { Authorization: `Bearer ${token}` }