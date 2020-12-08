
const { Sequelize,DataTypes } = require("sequelize");

//connect to db .
// postgres://user:pass@example.com:5432/dbname

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);

sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log("Unable to connect to database", err));

  // ORM table

  const UserModel = sequelize.define("recruiter", // tablonun adi, burda bu isim db de tekil olsa bile sequelize bunu 
  // cogul gibi kullanir, bu yuzden hata olusur.tabloda cogul yapmak gerekir, yada altta options blolumune freezeTableName:true olacak
  {
    //attributes tabloda yer alanlar
    firstName:{
      type: DataTypes.STRING,
    },
    lastName:{
      type:DataTypes.STRING,
    },

  },
  {
    //options
  })

  module.exports = UserModel;