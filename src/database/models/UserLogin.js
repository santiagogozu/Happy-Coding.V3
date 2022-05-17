module.exports = (sequelize, dataTypes) => {
  let alias = "UserLogin";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: dataTypes.STRING(100),
    },
    email: {
      type: dataTypes.STRING(100),
    },
    pass1: {
      type: dataTypes.STRING(100),
    },
    pass2: {
      type: dataTypes.STRING(100),
    },
    token: {
      type: dataTypes.STRING(400),
    },
    admin: {
      type: dataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "userlogins",
    underscored: true,
    timestamps: false,
    paranoid: false,
  };

  const Category = sequelize.define(alias, cols, config);

  // Category.associate = (models) => {
  //   Category.hasMany(models.Product, {
  //     as: "products",
  //     foreignKey: "id_categorie",
  //   });
  // };
  return Category;
};
