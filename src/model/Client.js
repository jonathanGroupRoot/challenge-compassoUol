const { Model, DataTypes } = require("sequelize");

class Client extends Model {
    static init(sequelize) {
        super.init({
            full_name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Full name is a required field"
                    }
                }
            },
            sexo: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Sexo is a required field"
                    }
                }
            },
            birth_date: {
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        msg: "Birty Date is a required field"
                    }
                }
            },
            age: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "Age is a required field"
                    }
                }
            },
            createdAt: {
                type: DataTypes.DATE,

            },
            updatedAt: {
                type: DataTypes.DATE,
            }
        }, {
            sequelize,
            tableName: "client"
        })
    }
    static associate(models) {
        this.belongsTo(models.City, { foreignKey: "city_id", as: "City" });
    }
}

module.exports = Client;