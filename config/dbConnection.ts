const { Sequelize } = require("sequelize");

const connectDb = async () => {
  //sequelize initialization via mysql
  const sequelize = new Sequelize({
    dialect: "mysql",
    host: "127.0.0.1:3306", // Update with your MySQL host
    // username: "root", // Update with your MySQL username
    // password: "password", // Update with your MySQL password
    // database: "bookstore", // Update with your desired database name
  });

  //authenticate whether the connection is established or not
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  await sequelize.sync();
};

export default connectDb;
