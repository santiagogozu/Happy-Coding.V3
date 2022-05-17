module.exports = (sequelize, dataTypes) => {
    let alias = "CarProduct";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cantidad: {
        type: dataTypes.INTEGER(11 ),
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
    };
  
    return Product;
  };
  