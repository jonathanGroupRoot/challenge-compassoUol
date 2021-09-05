const { Model, DataTypes } = require("sequelize");

class City extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Name is a required field"
                    }
                }
            },
            state: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "State is a required field"
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
            tableName: "city"
        })
    }
    static associate(models) {
        this.hasMany(models.Client, { foreignKey: "city_id", as: "City" });
    }
}

module.exports = City;