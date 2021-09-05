const Client = require("../model/Client");

module.exports = {
    async createClient(req, res) {
        try {
            const { city_id } = req.params;
            const { full_name, sexo, birth_date, age } = req.body;

            const client = await Client.create({ full_name, sexo, birth_date, age, city_id });

            return res.status(200).json({ Client: client });
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async filterClientName(req, res) {
        try {
            const { full_name } = req.query;

            const client = await Client.findAll({
                where: {
                    full_name: full_name
                }
            });

            return res.status(200).json({ Client: client });

        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async consultCustomerById(req, res) {
        try {
            const { client_id } = req.params;

            const client = await Client.findByPk(client_id)

            if (!client) {
                return res.status(400).json({ Erro: "Customer not registered" });
            } else {
                return res.status(200).json({ Client: client });
            }
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async updateClient(req, res) {
        try {
            const { client_id } = req.params;
            const { full_name } = req.body;

            const client = await Client.findByPk(client_id);

            if (!client) {
                return res.status(400).json({ Erro: "Customer not registered" });
            } else {
                client.update({ full_name });
                return res.status(200).json({ Client: "Name updated successfully" });
            }
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async deleteClient(req, res) {
        try {
            const { client_id } = req.params;

            const client = await Client.findByPk(client_id);
            if (!client) {
                return res.status(400).json({ Erro: "Customer not registered" });
            } else {
                client.destroy();
                return res.status(200).json({ Client: "Client successfully deleted" });
            }

        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    }
}