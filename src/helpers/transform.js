module.exports.queryPaginate = (query) => {
    return { page: parseInt(query.page) || 1, limit: parseInt(query.limit) || 10 }
}
