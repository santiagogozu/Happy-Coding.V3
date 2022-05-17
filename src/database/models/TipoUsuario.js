module.exports = (sequelize, dataTypes) => {
  let alias = "TipoUsuario";
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
    tableName: "tipousuarios",
    underscored: true,
    timestamps: false,
    paranoid: false,
  };

  const TipoUsuario = sequelize.define(alias, cols, config);

  // TipoUsuario.associate = (models) => {
  //   TipoUsuario.hasMany(models.Product, {
  //     as: "users",
  //     foreignKey: "id_tipoUsuario",
  //   });
  // };
  return TipoUsuario;
};
