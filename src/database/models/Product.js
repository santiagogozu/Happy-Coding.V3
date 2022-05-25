module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
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
    price: {
      type: dataTypes.INTEGER,
    },
    description: {
      type: dataTypes.STRING(400),
    },
    image: {
      type: dataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "products",
    underscored: true,
    timestamps: false,
    paranoid: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "categories",
      foreignKey: "id_categorie",
    });

    Product.belongsToMany(models.CarProduct, {
      as: "carproducts",
      through: "pedidoproductos",
      foreignKey: "products_id",
      otherKey: "carproducts_id",
    });
  };

  return Product;
};
