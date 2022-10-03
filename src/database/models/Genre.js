module.exports = (sequelize, dataTypes) => {

    const alias = "Genre";

    const cols ={
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        active : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        }
    }

    const config = {
        tableName : 'genres',
        timestamps : true,
        underscored : true
    }

    const Genre = sequelize.define(alias, cols, config)

    return Genre
}