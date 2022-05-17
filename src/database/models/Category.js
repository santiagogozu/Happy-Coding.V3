module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "categories",
    underscored: true,
    timestamps: false,
    paranoid: false,
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      as: "products",
      foreignKey: "id_categorie",
    });
  };
  return Category;
};
