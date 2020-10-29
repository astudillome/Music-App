'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.favorite.belongsTo(models.user);
      models.favorite.hasMany(models.comment, {
        foreignKey: 'masterId'
      });
      models.comment.belongsTo(models.favorite)
    }
  };
  favorite.init({
    artist: DataTypes.STRING,
    album_title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    masterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};