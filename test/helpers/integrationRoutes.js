
const integration = require('./integration')

const describeGet = (value) => (app) => {
    describe(value.describe, () => {
        it(value.description, (done) => {
            integration.defaultGet(app, value.url, value.status, value.token, value.be, done)
        })
    })
}

const describePost = value => app =>
    describe(value.describe, () => {
        it(value.description, (done) => {
            integration.defaultPost(app, value.url, value.body, value.status, value.token, value.be, done)
        })
    })

const describePut = value => app =>
    describe(value.describe, () => {
        it(value.description, (done) => {
            integration.defaultPut(app, value.url, value.body, value.status, value.token, value.be, done)
        })
    })


const describeDelete = (value) => (app) => {
    describe(value.describe, () => {
        it(value.description, (done) => {
            integration.defaultGet(app, value.url, value.status, value.token, value.be, done)
        })
    })
}

module.exports.IntegrationRoutes = (app) => (json) => {

    describe(json.describe, () => {

        // get
        if (json.object.get.length > 0) json.object.get.map(value => describeGet(value.it)(app))

        // post
        if (json.object.post.length > 0) json.object.post.map(value => describePost(value.it)(app))

        // put
        if (json.object.put.length > 0) json.object.put.map(value => describePut(value.it)(app))
        
        // delete
        if (json.object.delete.length > 0) json.object.put.map(value => describeDelete(value.it)(app))

    })
}