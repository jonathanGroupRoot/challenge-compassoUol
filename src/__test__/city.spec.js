const request = require("supertest");
const app = require("../app");
const connection = require("../database");


describe("City", () => {
    afterAll(() => {
        connection.close()
    });

    it("CreateCity", async () => {
        const response = await request(app).post("/createCity")
            .send({
                name: "Anápolis",
                state: "GO"
            });
        expect(response.statusCode).toBe(200);
    });

    it("ListenCity", async () => {
        const response = await request(app).get("/listenCity")
        expect(response.statusCode).toBe(200);
    });

    it("ConsultCityByName", async () => {
        const response = await request(app).get("/filterCityName").query("name_city=Anápolis");
        expect(response.statusCode).toBe(200);
    });

    it("ConsultCityByState", async () => {
        const response = await request(app).get("/filterStateName").query("state=GO")
        expect(response.statusCode).toBe(200);
    });


})