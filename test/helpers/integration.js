var request = require('supertest')
module.exports = ({
    defaultPost: (app, url, send, status, token, be, done) => {
        request(app)
            .post(url)
            .send(send)
            .end(function (err, res) {
                res.status.should.be.eql(status)
                res.body.should.be.an(be)
                done()
            })
    },
    defaultGet: (app, url, status, token, be , done) => {
        request(app)
            .get(url)
            .end((_, res) => {
                res.status.should.be.eql(status)
                if(res.body !== null) res.body.should.be.an(be)
                done()
            })
    },
    defaultPut: (app, url, send, status, token, be , done) => {
        request(app)
            .put(url)
            .send(send)
            .end((err, res) => {
                res.status.should.be.eql(status)
                res.body.should.be.an(be)
                done()
            })
    },
    defaultDelete: (app, url, send, status, token, be , done) => {
        request(app)
            .delete(url)
            .send(send)
            .end((err, res) => {
                res.status.should.be.eql(status)
                res.body.should.be.an(be)
                done()
            })
    }
})