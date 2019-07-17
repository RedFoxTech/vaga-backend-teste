module.exports.errorFormatter = (param, msg, value) => {
    return {
        title: msg.title,
        message: msg.message,
        value: value
    }
}
