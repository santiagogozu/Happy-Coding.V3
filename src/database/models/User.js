module.exports = (sequelize, dataTypes) => {
  let alias = "User";
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
    admin: {
      type: dataTypes.STRING(100),
    },
  };

  const config = {
    tableName: "users",
    underscored: true,
    timestamps: false,
    paranoid: false,
  };

  const User = sequelize.define(alias, cols, config);

  // User.associate = (models) => {
  //   User.belongsTo(models.Product, {
  //     as: "tipousuarios",
  //     foreignKey: "id_tipoUsuario",
  //   });
  // };
  return User;
};
