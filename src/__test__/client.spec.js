const request = require("supertest");
const app = require("../app");
const connection = require("../database");


describe("Client", () => {
    afterAll(() => {
        connection.close()
    });

    it("RegisterCustomer", async () => {
        const response = await request(app).post("/createClient/1")
            .send({
                full_name: "Jonathan Vinicius Braz Silva",
                sexo: "Masculino",
                birth_date: "2003-01-08",
                age: 18
            });

        expect(response.statusCode).toBe(200);
    });

    it("FilterClientName", async () => {
        const response = await request(app).get("/filterClientName").query("full_name=Jonathan Vinicius Braz Silva");

        expect(response.statusCode).toBe(200);
    });

    it("ConsultCustomerById", async () => {
        const response = await request(app).get("/consultCustomerById/8");

        expect(response.statusCode).toBe(200);
    });
    it("UpdateClient", async () => {
        const response = await request(app).put("/updateClient/5")
        .send({
            full_name: "John John Vinicius"
        });

        expect(response.statusCode).toBe(200);
    });

    it("Delete Customer", async () => {
        const response = await request(app).delete("/deleteClient/21");

        expect(response.statusCode).toBe(200);
    });

});