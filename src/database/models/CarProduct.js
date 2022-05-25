module.exports = (sequelize, dataTypes) => {
  let alias = "CarProduct";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_products: {
      type: dataTypes.INTEGER(11),
    },
    cantidad: {
      type: dataTypes.INTEGER(11),
    },
  };

  const config = {
    tableName: "carproducts",
    underscored: true,
    timestamps: false,
    paranoid: false,
  };

  const CarProduct = sequelize.define(alias, cols, config);

  CarProduct.associate = (models) => {
    CarProduct.belongsToMany(models.Category, {
      as: "users",
      through: "userscars",
      foreignKey: "id_product",
      otherKey: "id_users",
    });

    CarProduct.belongsToMany(models.Product, {
      as: "products",
      through: "pedidoproductos",
      foreignKey: "carproducts_id",
      otherKey: "products_id",
    });
  };

  return CarProduct;
};
