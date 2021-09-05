const City = require("../model/City");

module.exports = {
    async listenCity(req, res) {
        try {
            const city = await City.findAll();

            return res.status(200).json({ City: city });
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async createCity(req, res) {
        try {
            const { name, state } = req.body;

            const city = await City.create({ name, state });

            return res.status(200).json({ City: city });
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async filterCityName(req, res) {
        try {
            const { name_city } = req.query;

            const city = await City.findAll({
                where: {
                    name: name_city

                }
            });

            return res.status(200).json({ City: city });

        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    },
    async filterStateName(req, res) {
        try {
            const { state } = req.query;

            const name_state = await City.findAll({
                where: {
                    state: state
                }
            });

            return res.status(200).json({ State: name_state })
        } catch (error) {
            return res.status(400).json({ Erro: error });
        }
    }
}