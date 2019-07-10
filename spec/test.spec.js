var request = require("request");

var base_url = "http://localhost:3000/pokemons/"

describe("Servidor", () => {
    var servidor;
    beforeAll(() =>{
        servidor = require("../src/app");
    });

    describe("GET /Pokemons", () =>{
        var data = {};
        beforeAll((done) => {
            request.get(base_url, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });

        it("Status 200", () => {
            expect(data.status).toBe(200);
        });

    });
});